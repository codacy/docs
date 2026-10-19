#!/usr/bin/env node
/**
 * Derive and validate codacy-analysis patternIds against the pattern catalogue the
 * installed @codacy/analysis-cli tool adapters actually define.
 *
 * WHY THIS EXISTS
 * ---------------
 * A wrong patternId fails SILENTLY. Each adapter builds `enabledPatterns` from the
 * config and then either skips work entirely or filters every result away:
 *
 *   runVulnScan = enabledPatterns.size === 0 || vulnPatternIds.some(id => enabledPatterns.has(id))
 *
 * So a tool with an unrecognised pattern list reports "ready", routes files, and
 * returns 0 issues — indistinguishable from clean code. Worse, `size === 0` means
 * "run ALL defaults", so an empty list works while a wrong list silently disables
 * the tool. Verity shipped `trivy_vuln`, bare `no-eval`, and bare `F401` for months;
 * ESLint, Semgrep, Trivy and Ruff were all dead and nothing surfaced it.
 *
 * The ID format is `<toolId>_<ruleId>`, with `/` replaced by `_` in namespaced
 * rules (`@typescript-eslint/no-explicit-any` → `ESLint9_@typescript-eslint_no-explicit-any`).
 *
 * MODES
 *   validate [config]              Check every patternId in the config resolves.
 *                                  Exit 1 if any does not. Default: .codacy/codacy.config.json
 *   --list <toolId> [regex]        Print the adapter's real pattern IDs, one per line.
 *   --emit <toolId> [regex]        Print a ready-to-paste JSON "patterns" array.
 *
 * Use --emit to GENERATE config blocks so IDs are never hand-authored, e.g. Trivy:
 *   node validate-patterns.mjs --emit Trivy '^Trivy_(secret|malicious_packages|vulnerability_(critical|high))$'
 */

import { readFileSync, readdirSync, existsSync, realpathSync, statSync, writeSync } from 'node:fs'
import { join, dirname, delimiter } from 'node:path'

/**
 * Locate the @codacy adapter packages shipped with the installed analysis CLI.
 * Resolved without shelling out, so this works on Windows as well as POSIX.
 */
function findToolsDir() {
  if (process.env.CODACY_TOOLS_DIR) return process.env.CODACY_TOOLS_DIR

  // Walk PATH ourselves rather than calling `which`/`where`, which differ per platform.
  const exts = process.platform === 'win32'
    ? (process.env.PATHEXT ?? '.EXE;.CMD;.BAT').split(';')
    : ['']
  const candidates = []
  for (const dir of (process.env.PATH ?? '').split(delimiter)) {
    if (!dir) continue
    for (const ext of exts) {
      candidates.push(join(dir, 'codacy-analysis' + ext.toLowerCase()))
      if (ext) candidates.push(join(dir, 'codacy-analysis' + ext))
    }
  }

  for (const candidate of candidates) {
    let resolved
    try {
      if (!statSync(candidate).isFile()) continue
      resolved = realpathSync(candidate)
    } catch {
      continue
    }
    // resolved is <pkg>/dist/index.js (POSIX symlink) or a shim dir (Windows).
    // Walk up looking for node_modules/@codacy.
    let dir = dirname(resolved)
    for (let i = 0; i < 6; i++) {
      const tools = join(dir, 'node_modules', '@codacy')
      if (existsSync(tools)) return tools
      const parent = dirname(dir)
      if (parent === dir) break
      dir = parent
    }
  }
  return null
}

/**
 * Harvest the pattern IDs an adapter defines. Adapters ship as bundled JS with the
 * pattern catalogue inlined, so we scan for `<toolId>_<rule>` literals. This is a
 * heuristic over a build artifact, not a public API — it can only ever produce false
 * ALARMS (an ID we fail to find), never false confidence, which is the safe direction.
 */
/** The characters a pattern id may contain after its `<toolId>_` prefix. */
const ID_CHAR = /[A-Za-z0-9_@./-]/

/**
 * Scan for `<toolId>_<rule>` literals WITHOUT building a regex from `toolId`.
 *
 * The previous form compiled `new RegExp(`${escaped}_[...]+`)` per call. Escaping
 * made it correct, but a RegExp built from a runtime value is a ReDoS surface by
 * construction and reads as one to any reviewer or scanner. An indexOf scan has
 * neither problem, needs no escaping to be right, and is what the code was always
 * expressing: find the prefix, then take the id characters that follow it.
 */
function harvestIds(toolsDir, toolId) {
  const ids = new Set()
  const prefix = toolId + '_'
  const scan = (text) => {
    let i = text.indexOf(prefix)
    while (i !== -1) {
      let end = i + prefix.length
      while (end < text.length && ID_CHAR.test(text[end])) end++
      // A bare prefix with nothing after it is not an id.
      if (end > i + prefix.length) ids.add(text.slice(i, end))
      i = text.indexOf(prefix, end > i ? end : i + 1)
    }
  }
  for (const pkg of readdirSync(toolsDir)) {
    if (!pkg.startsWith('tools-')) continue
    const distDir = join(toolsDir, pkg, 'dist')
    if (!existsSync(distDir)) continue
    for (const file of readdirSync(distDir)) {
      if (!file.endsWith('.js')) continue
      scan(readFileSync(join(distDir, file), 'utf-8'))
    }
  }
  return ids
}

const toolsDir = findToolsDir()
if (!toolsDir) {
  console.error('SKIP: could not locate @codacy tool adapters.')
  console.error('      Install the CLI (npm i -g @codacy/analysis-cli) or set CODACY_TOOLS_DIR.')
  process.exit(1)
}

/**
 * Write to fd 1 synchronously, looping until every byte is gone.
 *
 * `console.log` / `process.stdout.write` are ASYNCHRONOUS when stdout is a pipe,
 * and this script exits in the same tick — so the output was cut at whatever the
 * pipe accepted. A write callback does not help either: this is a top-level
 * block, so execution falls through to the validate path and exits 1 before the
 * callback can run (observed: 65536 bytes, status 1).
 *
 * The loop matters. A single writeSync to a pipe may report a SHORT write, and
 * dropping the remainder would reintroduce the same bug in a quieter form.
 */
function writeStdoutSync(text) {
  const buf = Buffer.from(text, 'utf8')
  let off = 0
  while (off < buf.length) {
    try {
      off += writeSync(1, buf, off, buf.length - off)
    } catch (err) {
      if (err.code === 'EAGAIN') continue // non-blocking pipe not ready; retry
      if (err.code === 'EPIPE') return // consumer went away (e.g. `| head`)
      throw err
    }
  }
}

const argv = process.argv.slice(2)
const mode = argv[0] === '--list' || argv[0] === '--emit' ? argv[0] : 'validate'

// ---------------------------------------------------------------------------
// --list / --emit : derive IDs straight from adapter metadata
// ---------------------------------------------------------------------------
if (mode !== 'validate') {
  const toolId = argv[1]
  if (!toolId) {
    console.error(`Usage: validate-patterns.mjs ${mode} <toolId> [regex]`)
    process.exit(1)
  }
  // An invalid pattern here is a typo in a hand-typed argument, not an error worth a
  // stack trace — report it with the offending input so it can be fixed at a glance.
  let filter = null
  if (argv[2]) {
    try {
      // The filter IS a regex — that is the documented interface
      // (`--list Trivy '^Trivy_secret$'`) and two tests pin the behaviour, so it
      // cannot become a substring match. Unlike the harvest above, there is no
      // way to express this without compiling a runtime value.
      //
      // It is also not a security boundary: this is a local developer CLI, the
      // pattern comes from the operator's own shell, and the only thing a
      // catastrophic regex can stall is the operator's own terminal. Nothing
      // untrusted reaches this line — `argv[2]` is typed by the person running it.
      // Suppressions for both engines Codacy may raise this under. The ESLint
      // form alone did not clear it, so the finding comes from the Semgrep side;
      // `nosemgrep` is rule-agnostic, which is deliberate here — pinning a rule id
      // guessed from a message string is how the first attempt failed.
      // eslint-disable-next-line security/detect-non-literal-regexp -- operator-supplied filter, local CLI, self-inflicted at worst
      // nosemgrep: operator-supplied filter on a local CLI; see the reasoning above
      filter = new RegExp(argv[2])
    } catch (err) {
      console.error(`Invalid regex: ${argv[2]}`)
      console.error(`  ${err.message}`)
      console.error(`  Note: quote the argument so the shell does not expand it, e.g. '^Trivy_secret$'`)
      process.exit(1)
    }
  }
  const ids = [...harvestIds(toolsDir, toolId)].sort().filter((id) => !filter || filter.test(id))
  if (ids.length === 0) {
    console.error(`No pattern IDs found for toolId "${toolId}"${filter ? ' matching ' + argv[2] : ''}.`)
    console.error('Check the toolId spelling (case-sensitive: ESLint9, Semgrep, Trivy, Ruff, shellcheck).')
    process.exit(1)
  }
  // ⚠ NEVER `process.exit()` IN THE SAME TICK AS A WRITE TO STDOUT.
  //
  // When stdout is a PIPE, Node's writes are asynchronous. `process.exit()`
  // terminates before the buffer drains, truncating output at whatever the pipe
  // accepted — about 64 KB. Redirecting to a FILE hides it completely, because
  // file writes are synchronous. So it looks fine every time you check by hand,
  // and is broken for every caller that reads the output programmatically.
  //
  // Measured on the ESLint9 catalogue (2936 ids), five runs each:
  //   node ... > file   ->  2936, 2936, 2936, 2936, 2936   (whole)
  //   node ... | cat    ->  1812, 1812, 1812, 1812, 1812   (cut at the buffer)
  //
  // The harvest is deterministic. Only the DELIVERY was not, and it cost a real
  // misdiagnosis: `ESLint9_use-isnan` sorts at line 2608, past the cut, so every
  // consumer reading through a pipe — including the review that flagged it —
  // concluded a perfectly valid pattern id did not exist.
  //
  // `process.exitCode = 0` alone is NOT enough here: this is a top-level block,
  // so execution would fall through into the validate path below and exit there,
  // truncating exactly as before. The write callback fires once the data has been
  // handed to the OS, which is the point at which exiting is safe.
  const out =
    mode === '--list'
      ? ids.join('\n')
      : JSON.stringify(ids.map((patternId) => ({ patternId })), null, 2)
  writeStdoutSync(out + '\n')
  process.exit(0)
}

// ---------------------------------------------------------------------------
// validate : every patternId in the config must resolve
// ---------------------------------------------------------------------------
const configPath = argv[0] ?? '.codacy/codacy.config.json'

if (!existsSync(configPath)) {
  console.error(`SKIP: ${configPath} not found — write the config first.`)
  process.exit(1)
}

let config
try {
  config = JSON.parse(readFileSync(configPath, 'utf-8'))
} catch (err) {
  console.error(`FAIL: could not parse ${configPath}`)
  console.error(`  ${err.message}`)
  process.exit(1)
}

const tools = config?.tools ?? []
if (!Array.isArray(tools)) {
  console.error(`FAIL: ${configPath} has a "tools" field that is not an array.`)
  process.exit(1)
}

if (tools.length === 0) {
  console.log('OK: "tools": [] — every tool runs its default pattern set. Nothing to validate.')
  process.exit(0)
}

let invalidTotal = 0
let emptyTotal = 0
let unverifiableTotal = 0

/**
 * Reject a malformed tools[] entry with a located, actionable message. A generator
 * bug or a half-written file must fail closed here rather than throw somewhere
 * further down, where the stack trace would say nothing about which entry is bad.
 */
function readToolEntry(tool, index) {
  const at = `tools[${index}]`
  if (tool === null || typeof tool !== 'object' || Array.isArray(tool)) {
    console.error(`FAIL: ${at} is not an object.`)
    process.exit(1)
  }
  const { toolId, patterns } = tool
  if (typeof toolId !== 'string' || toolId.trim() === '') {
    console.error(`FAIL: ${at} has no valid "toolId" (expected a non-empty string).`)
    process.exit(1)
  }
  if (patterns !== undefined && !Array.isArray(patterns)) {
    console.error(`FAIL: ${toolId}: "patterns" must be an array, or omitted for tool defaults.`)
    process.exit(1)
  }
  const patternIds = []
  for (const [i, entry] of (patterns ?? []).entries()) {
    if (entry === null || typeof entry !== 'object' || typeof entry.patternId !== 'string') {
      console.error(
        `FAIL: ${toolId}: patterns[${i}] must be an object with a string "patternId".`,
      )
      process.exit(1)
    }
    patternIds.push(entry.patternId)
  }
  return { toolId, patternIds }
}

for (const [index, rawTool] of tools.entries()) {
  const { toolId, patternIds } = readToolEntry(rawTool, index)
  if (patternIds.length === 0) {
    console.log(`  ${toolId}: patterns: [] → all defaults enabled (valid, but noisy)`)
    emptyTotal++
    continue
  }
  const valid = harvestIds(toolsDir, toolId)
  // FAIL CLOSED. "Cannot verify" is not "verified". This whole script exists because
  // a silently-disabled tool looks identical to clean code, so reporting PASS on an
  // unverifiable tool would reproduce the exact failure it is meant to catch.
  if (valid.size === 0) {
    unverifiableTotal++
    console.log(
      `  ${toolId}: UNVERIFIABLE — no pattern IDs harvested. Adapter missing, or the` +
        ` toolId is misspelled (case-sensitive).`,
    )
    continue
  }
  const bad = patternIds.filter((id) => !valid.has(id))
  if (bad.length === 0) {
    console.log(`  ${toolId}: ${patternIds.length}/${patternIds.length} valid`)
  } else {
    invalidTotal += bad.length
    console.log(
      `  ${toolId}: ${patternIds.length - bad.length}/${patternIds.length} valid — ${bad.length} INVALID:`,
    )
    for (const id of bad) {
      // Suggest the conventional form so the fix is obvious.
      const guess = `${toolId}_${id.replace(/\//g, '_')}`
      const hint = valid.has(guess)
        ? `did you mean "${guess}"?`
        : `no close match — regenerate with: --emit ${toolId}`
      console.log(`      ✗ ${id} — ${hint}`)
    }
  }
}

console.log('')
if (invalidTotal > 0) {
  console.error(`FAIL: ${invalidTotal} patternId(s) do not exist. Those rules are SILENTLY DISABLED.`)
  console.error('      Regenerate the list with --emit <toolId>, or use "patterns": [] for tool defaults.')
  process.exit(1)
}
if (unverifiableTotal > 0) {
  console.error(`FAIL: ${unverifiableTotal} tool(s) could not be verified — this is NOT a pass.`)
  console.error('      Check the toolId spelling, reinstall @codacy/analysis-cli, or point')
  console.error('      CODACY_TOOLS_DIR at the directory holding the tools-* adapter packages.')
  process.exit(1)
}
console.log(`PASS: every patternId resolves${emptyTotal ? ` (${emptyTotal} tool(s) on defaults)` : ''}.`)
