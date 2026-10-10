# /verity-setup — Configure Verity for this project

You are finishing Verity's setup: the half that needs a model.

**`verity init` already ran the deterministic half** — prerequisites, the skills,
the Claude Code hooks (reconciled to the moments the user chose), `.gitignore`,
the CLAUDE.md instructions, the optional GitHub login, and telemetry. It recorded
the user's answers in `.verity/setup.json` and then handed off to you.

So: **do not re-ask what init asked, and do not re-write what init wrote.** Wiring
hooks or a `.gitignore` block here is how the two flows drifted apart before — the
skill reconciled hooks init had just installed, silently removing them.

**What is yours** — everything a program cannot decide:
1. Read the codebase and understand it (Step 2).
2. Synthesize `.verity/standard.yaml` from what you found (Step 4).
3. Write `.codacy/codacy.config.json` with curated, validated pattern ids (Step 5).
4. Upload both, seed the knowledge base, write `VERITY.md` (Steps 7–8).

**Reference files** (installed in this project at `.claude/skills/verity-setup/`):
- `patterns-reference.yaml` — Research-backed patterns catalog (quality, security, language-specific)
- `standard-template.yaml` — YAML skeleton for the Standard

---

## Step 1: Confirm the deterministic phase ran

```bash
verity doctor --json
```

One read gives you prerequisites, which phase is done, the user's recorded
answers, the hook wiring, and a `next` list. Branch on it:

- **`phases.init.done` is false** → `verity init` has not run in this project.
  Run it (it is idempotent, and it is what installed this skill):

  ```bash
  verity init --yes --no-setup
  ```

  `--yes` takes the recommended answer for every question — use it only because
  you are already inside a Claude Code session and cannot ask on init's terminal.
  Tell the user which defaults were taken and that `verity init` (run by hand in a
  terminal) is where those choices are made. `--no-setup` stops init from trying
  to launch a second Claude Code session on top of this one.
- **`blocked` is true** → a required prerequisite is missing. Show the
  `prerequisites[].remedy` lines and stop; nothing below can work.
- **`artifacts.standard` is true but `artifacts.analysisConfig` is false** → this
  project adopted a Standard rather than synthesizing one (`verity init` can pull
  the team's Standard straight from the service), and the only missing piece is
  the analysis config. **Do Step 2 and Step 5 only**, then `verity config push`,
  then stop. Do NOT re-synthesize the Standard: the team already agreed one, and
  `verity standard push` auto-versions, so writing a new one lands as the version
  everybody is then held to.
- **`artifacts.verityMd` is true and the user did not pass `--force`** → already
  configured. Say "Already configured. Run `/verity-setup --force` to
  reconfigure." and stop.
- A **warn**-status prerequisite (Claude Code, `@codacy/analysis-cli`) is not
  fatal. Mention it once — a missing analysis CLI means no static findings — and
  continue.

Then get the git remote: `git remote get-url origin`. If there is none, ask the
user for a project identifier to use instead.

---

## Step 2: Analyze the codebase

Detect the following by reading project files:

**Languages** — count files by extension:
```bash
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.py" -o -name "*.go" -o -name "*.java" -o -name "*.kt" -o -name "*.rb" -o -name "*.rs" -o -name "*.c" -o -name "*.cpp" \) -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/dist/*" -not -path "*/vendor/*" | sed 's/.*\.//' | sort | uniq -c | sort -rn
```

**Frameworks** — check config files and dependencies:
- Read `package.json` → check `dependencies` and `devDependencies` for React, Express, Next.js, Vue, Angular, Fastify, NestJS, etc.
- Read `pyproject.toml` or `requirements.txt` → check for Django, Flask, FastAPI, etc.
- Read `go.mod` → check for gin, echo, fiber, etc.
- Read `pom.xml` or `build.gradle` → check for Spring, etc.

**Architecture** — check for markers:
- `lerna.json`, `pnpm-workspace.yaml`, `nx.json`, `turbo.json` → monorepo
- Multiple `go.mod` or multiple `package.json` → monorepo
- `services/` or `packages/` directories → monorepo or microservices
- Single root → monolith

**Existing tool configs** — check for configs already present:
- `eslint.config.*` or `.eslintrc*` → ESLint already configured (note the path)
- `.semgrep*` or `semgrep.yaml` → Semgrep rules
- `trivy.yaml` → Trivy config (note the path)
- `ruff.toml` or `pyproject.toml [tool.ruff]` → Ruff config
- `.pylintrc` → Pylint config
- `.codacy/tools-configs/` → Codacy tool configs (note any files here)

**Context** — read for additional insight:
- `README.md` — project description, purpose
- `CLAUDE.md` — existing agent instructions
- Recent `git log --oneline -10` — commit patterns

Record all findings. You will use them in the next steps.

---

## Step 3: Read the choices already made

From the `verity doctor --json` output in Step 1:

| Field | What it is | Where you use it |
|---|---|---|
| `answers.intensity` | `lightweight` \| `balanced` \| `thorough` | Step 4 (`process_constraints.analysis_mode`) and Step 5 (which tools/patterns) |
| `answers.moments` | `stop`, `pre-commit`, `pre-push` | Nothing to do — the hooks are already wired to exactly this |
| `answers.telemetry` | `enabled` \| `declined` \| `deferred` | Nothing to do — mention `deferred` once (see below) |

**Do not ask these again.** They were asked on init's terminal, and the machine
state already reflects them.

If `answers.intensity` is `null` (a project set up before this file existed, or a
failed write), that is the only case where you ask — a single question, defaulting
to `balanced`:

> **Analysis intensity:** lightweight (critical security only, ~3s) ·
> **balanced** (security + quality, ~8s) · thorough (all tools, all rules, ~15s)

If `answers.telemetry` is `deferred`, the user asked for cost & usage telemetry
before a token existed. Say so once, and that `verity login` followed by
`verity telemetry install` finishes it. Do not run either — logging in is the
user's decision to make at a terminal.

---

## Step 4: Synthesize the Standard

Read `.claude/skills/verity-setup/patterns-reference.yaml` and `.claude/skills/verity-setup/standard-template.yaml` from the project root.

Generate `.verity/standard.yaml` by filling in the template:

1. **knowledge_spec**: Fill from Step 2 findings (project_name from git remote or directory, languages, frameworks, architecture, build_system, test_framework).

2. **quality_dimensions**: Keep all 4. Adjust thresholds if the existing codebase diverges significantly (e.g., if average file length is 500, set threshold to 400 instead of 300). Add language-specific type_safety signals from the patterns reference.

3. **security_patterns**: Keep all 7. Populate `enforced_by` fields based on detected languages and the tool recommendations in the patterns reference. For tools with existing configs, add those references.

4. **custom_patterns**: Synthesize 2-5 project-specific patterns by analyzing:
   - Project structure (e.g., "all files in `api/` use auth middleware")
   - README/docs stated conventions
   - Existing code patterns (e.g., "RLS policies on all Supabase tables")
   - Each pattern needs: id, description, severity, rationale

5. **process_constraints**: Set `analysis_mode` to `answers.intensity` from Step 3. Keep `self_healing_limit: 2`. Leave the knowledge-system flags (`compound_enabled`, `memory_graph_enabled`, `memory_graph_budget_tokens`, `knowledge_injection_budget_tokens`, `finding_autosuppress_threshold`) and intent thresholds (`intent_fail_threshold`, `intent_warn_threshold`) at their template defaults — they're surfaced so users can tune later, not so you pick new values during setup.

6. **tool_configuration**: Based on detected languages + the intensity from Step 3, select tools from the patterns reference `tool_recommendations` section. For existing tool configs, set the config_file path.

Write the file to `.verity/standard.yaml`. Show the user a summary:
> **Standard synthesized:**
> - Languages: typescript, python
> - Quality dimensions: 4 (comprehensibility, modularity, type_safety, test_adequacy)
> - Security patterns: 7 (3 critical, 4 high)
> - Custom patterns: 3 (auth-middleware, rls-policy, error-boundary)
> - Analysis mode: balanced
> - Tools: ESLint9, Trivy

Ask for confirmation before proceeding.

---

## Step 5: Configure analysis CLI

**ALWAYS OVERWRITE `.codacy/codacy.config.json` completely.** Do NOT read an existing config and tweak it — delete it and write a fresh file from scratch using the template below. Do NOT run `codacy-analysis init` either.

### Why this matters

`"patterns": []` means **ALL default patterns** for a tool:
- ESLint9 = 2,900+ rules → massive output, slow, token explosion
- Semgrep = 2,517 rules → massive output, slow, token explosion
- Ruff = 773 rules → same problem

**NEVER use `"patterns": []`.** Always populate patterns with specific patternId entries from `patterns-reference.yaml` section 8 (`curated_patterns`). This is the single most important step for keeping analysis fast and token-efficient.

### Pattern ID format — a wrong ID disables the tool SILENTLY

Every ID is `<toolId>_<ruleId>`, with `/` replaced by `_`:

| Rule as documented upstream | patternId to write |
|---|---|
| `no-eval` | `ESLint9_no-eval` |
| `@typescript-eslint/no-explicit-any` | `ESLint9_@typescript-eslint_no-explicit-any` |
| `F401` | `Ruff_F401` |
| `SC2086` | `shellcheck_SC2086` |

An unrecognised ID produces **no error**. The adapter builds `enabledPatterns` from
the config, matches nothing, and returns 0 issues — indistinguishable from clean
code. Note the perverse asymmetry: `patterns: []` (size 0) means "run all defaults"
and works, so a *wrong* list is strictly worse than *no* list.

Never hand-author or guess an ID. Copy it from `patterns-reference.yaml`, or derive
it from the installed adapter. Then **always validate** (next section).

### How to build the config

1. **Generate the umbrella-pattern tools mechanically.** Trivy's catalogue is small,
   fixed, and severity-partitioned, so never copy it by hand — emit it from the
   installed adapter metadata:

   ```bash
   # balanced/thorough: critical + high vulns, secrets, malicious packages
   node <skill-dir>/validate-patterns.mjs --emit Trivy \
     '^Trivy_(secret|malicious_packages|vulnerability_(critical|high))$'

   # lightweight: drop malicious_packages if you want the minimum
   # thorough: add |medium to the regex to widen severity
   ```

   Paste the emitted array straight into the Trivy `patterns` field. `--list Trivy`
   shows all six available patterns if you need to choose a different subset.

2. Read `patterns-reference.yaml` → `curated_patterns` section for the rule-level
   tools (ESLint9, Ruff, shellcheck, …), where the curation is an editorial choice
   about signal rather than a complete enumeration. Copy the pattern list for each
   tool selected for this mode. `--list <toolId> <regex>` will confirm any single ID
   or let you derive additions.
> ⚠ **Semgrep ids carry a doubled suffix.** The rule name appears twice — once as
> the path segment and once as the rule id:
> `Semgrep_javascript.browser.security.raw-html-concat.raw-html-concat`. Deriving
> them with `--list Semgrep '<regex>'` gives the correct form; constructing them by
> hand from the rule name does not.

3. ⚠ **NEVER point `localConfigurationFile` at the project's own config** (VRT-108).
   Doing so hands the tool the project's rule set, and Verity's `patterns` array
   degrades to a **filter over rules someone else enabled** — it can no longer turn
   a rule ON. A project that disables a rule makes it permanently unreachable by
   the gate, silently. Measured: a repo whose `eslint.config.js` sets
   `"@typescript-eslint/no-unused-vars": "off"` and omits `no-eval`/`eqeqeq`/`no-var`
   had all four listed in its Verity config and **only** `no-explicit-any` could fire.

   Setting the path is not even sufficient on its own. `useLocalConfigurationFile`
   **defaults to true**, and the adapter auto-discovers `./eslint.config.js` and
   overrides your value unless the flag is explicitly `false`:

   ```js
   // @codacy/analysis-cli — defaults to true unless EXPLICITLY false
   if (!existing || existing.useLocalConfigurationFile !== false) {
     config.useLocalConfigurationFile = true;
   }
   // patterns become the ENABLED set only when the flag is false
   if (!codacyToolConfig.useLocalConfigurationFile && codacyToolConfig.patterns.length === …)
   ```

   So for ESLint9 always emit **both**:

   - `"useLocalConfigurationFile": false` — makes `patterns` the enabled rule set
   - `"localConfigurationFile": "./.codacy/tools-configs/eslint.config.mjs"` — a
     **Verity-owned** config, written by this skill, so the gate does not inherit
     the project's lint policy

   The project's own `eslint.config.js` is left untouched and keeps serving
   `npm run lint`. The two are deliberately independent: a team may reasonably turn
   a rule off for their editor and still want the gate to enforce it.
4. For tools **without** a local config: populate the full curated pattern list from `patterns-reference.yaml`
5. **Validate** (next section). This is not optional — it is the only thing that
   catches a stale or mistyped ID, and the failure mode is silent.

### Template — write this file exactly

Delete `.codacy/codacy.config.json` and write a new one. This example is for TypeScript **balanced** mode. Adapt the tool list and patterns for the detected languages and mode.

> The `Trivy` block below shows what `--emit Trivy` produces for balanced mode — it is
> illustrative output, **not** a list to copy. Run the command (step 1) and paste its
> actual result, so the config tracks the installed adapter rather than this document.
> `patterns-reference.yaml` deliberately stores no Trivy list for the same reason.

```json
{
  "version": 1,
  "metadata": {
    "source": "local",
    "languages": ["TypeScript"]
  },
  "tools": [
    {
      "toolId": "ESLint9",
      "localConfigurationFile": "./.codacy/tools-configs/eslint.config.mjs",
      "useLocalConfigurationFile": false,
      "patterns": [
        { "patternId": "ESLint9_no-eval" },
        { "patternId": "ESLint9_no-implied-eval" },
        { "patternId": "ESLint9_no-new-func" },
        { "patternId": "ESLint9_no-script-url" },
        { "patternId": "ESLint9_no-unused-vars" },
        { "patternId": "ESLint9_no-undef" },
        { "patternId": "ESLint9_no-unreachable" },
        { "patternId": "ESLint9_no-constant-condition" },
        { "patternId": "ESLint9_no-dupe-keys" },
        { "patternId": "ESLint9_no-duplicate-case" },
        { "patternId": "ESLint9_no-fallthrough" },
        { "patternId": "ESLint9_no-self-assign" },
        { "patternId": "ESLint9_no-self-compare" },
        { "patternId": "ESLint9_use-isnan" },
        { "patternId": "ESLint9_valid-typeof" },
        { "patternId": "ESLint9_no-loss-of-precision" },
        { "patternId": "ESLint9_no-unsafe-optional-chaining" },
        { "patternId": "ESLint9_@typescript-eslint_no-explicit-any" },
        { "patternId": "ESLint9_@typescript-eslint_no-unused-vars" },
        { "patternId": "ESLint9_@typescript-eslint_no-unsafe-assignment" },
        { "patternId": "ESLint9_@typescript-eslint_no-unsafe-call" },
        { "patternId": "ESLint9_@typescript-eslint_no-unsafe-return" },
        { "patternId": "ESLint9_eqeqeq" },
        { "patternId": "ESLint9_no-var" },
        { "patternId": "ESLint9_prefer-const" }
      ]
    },
    {
      "toolId": "Trivy",
      "patterns": [
        { "patternId": "Trivy_vulnerability_critical" },
        { "patternId": "Trivy_vulnerability_high" },
        { "patternId": "Trivy_secret" },
        { "patternId": "Trivy_malicious_packages" }
      ]
    }
  ],
  "exclude": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.git/**",
    "**/vendor/**",
    "**/coverage/**"
  ]
}
```

### Also write the Verity-owned ESLint config

Because `useLocalConfigurationFile` is `false`, the adapter builds ESLint's rule set
from the `patterns` array — but ESLint still needs a config for parser, globals and
ignores. Write `.codacy/tools-configs/eslint.config.mjs`, adapted to the project's
frameworks and ignore paths:

```js
// Verity-owned ESLint config for the quality gate.
//
// Deliberately SEPARATE from the project's ./eslint.config.js. Pointing the gate at
// the project config makes Verity's pattern list a FILTER over rules the project
// enabled, so any rule the project disables becomes unreachable (VRT-108).
//
// Keep the rules here in sync with the ESLint9 patterns in codacy.config.json.
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**", "build/**", "node_modules/**", "coverage/**", ".codacy/**"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Mirror the ESLint9 patterns in codacy.config.json.
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      eqeqeq: ["error", "smart"],
      "no-var": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
);
```

⚠ **Do not enable type-checked rules** (`no-unsafe-assignment`, `no-unsafe-call`,
`no-unsafe-return`). They require `parserOptions.projectService`, which makes a
per-turn gate far too slow on a large repo. Cover those through AI review in the
Standard instead.

⚠ **Generated files belong in `ignores`** — `src/integrations/supabase/types.ts` and
similar. They are not the agent's work and will otherwise dominate the findings.

### Validate the config — REQUIRED, do not skip

Immediately after writing `.codacy/codacy.config.json`, run the validator that ships
alongside this skill. It checks every `patternId` against the IDs the installed
adapters actually define, and exits non-zero on any that does not exist:

```bash
node "$(dirname "$0")/validate-patterns.mjs"   # or: node <skill-dir>/validate-patterns.mjs
```

Expected output:

```
  ESLint9: 25/25 valid
  Trivy: 4/4 valid
  shellcheck: 14/14 valid

PASS: every patternId resolves.
```

**If it reports FAIL, fix the IDs before continuing.** Do not report setup as
complete with a failing validation — every listed pattern is silently disabled, so
the project would appear to have static analysis while enforcing nothing. The
validator prints the conventional `<toolId>_<rule>` form as a suggested fix.

**Tool selection by language** — ONLY include tools that apply to the detected languages:

| Language | Balanced mode tools |
|----------|-------------------|
| TypeScript/JavaScript | ESLint9 + Trivy |
| Python | Ruff + Trivy |
| Go | Trivy |
| Java | PMD7 + Trivy |
| Kotlin | detekt + Trivy |
| Shell | shellcheck + Trivy |
| C/C++ | cppcheck + flawfinder + Trivy |
| Dockerfile | Hadolint + Trivy |

> **Semgrep is deliberately absent.** Its curated pattern IDs have not been derived
> yet (see the note in `patterns-reference.yaml`), and it additionally requires the
> Opengrep binary, which `--install-dependencies` does not fetch. Omit the Semgrep
> tool block entirely rather than emitting `patterns: []`, which would enable all
> 2523 default rules. Re-add it once IDs are derived and the validator passes.

Use curated patterns from `patterns-reference.yaml` for each tool. For Python, use the Ruff patterns. For TypeScript, use the ESLint9 patterns.

**Do NOT include tools for languages not in the project.** For example:
- Do NOT add ESLint9 to a Python project
- Do NOT add Checkov unless the project has Terraform/CloudFormation/K8s files
- Do NOT add Hadolint unless the project has Dockerfiles
- Do NOT add shellcheck unless the project has shell scripts

### Format rules (the CLI will crash without these)

- **Every tool MUST have a `"patterns"` array with at least one entry.** Without it: `Cannot read properties of undefined (reading 'map')`.
- **NEVER use `"patterns": []`** — this enables ALL defaults (thousands of rules).
- `"toolId"` is the field name, NOT `"name"` or `"tool"`.
- Exact adapter IDs: `ESLint9`, `Semgrep`, `Trivy`, `Ruff`, `Bandit`, `shellcheck`, `Hadolint`, `PMD7`, `Checkstyle`, `detekt`, `cppcheck`, `flawfinder`, `Lizard`, `PyLintPython3`.
- `"metadata.languages"` — capitalize first letter: `"TypeScript"`, `"Python"`, `"JavaScript"`, `"Go"`, `"Java"`, `"Shell"`.

### Tool selection by mode

| Mode | Tools | Approximate pattern count |
|------|-------|--------------------------|
| lightweight | Trivy only | ~4 patterns |
| balanced | Language linter + Trivy | ~25 + 4 = ~29 patterns |
| thorough | All applicable + Lizard | ~60-80 patterns |

### Verify

First confirm every pattern ID resolves (see "Validate the config" above) — a silently
disabled tool produces the same zero findings as clean code, so a quiet run proves
nothing on its own:

```bash
node <skill-dir>/validate-patterns.mjs
```

Then confirm the volume is sane:

```bash
codacy-analysis analyze --install-dependencies --files src/some-small-file.ts --log-level error --output-format json 2>/dev/null
```

Expected: single-digit findings per file, not hundreds. If you see 50+ issues from one
file, you likely have `"patterns": []` somewhere — fix it.

Check the `capability.ready` array in the JSON to see which tools actually ran.
`--install-dependencies` handles tools the CLI can install itself (ESLint9 is bundled,
shellcheck it downloads, Trivy it finds on PATH) but it does **not** fetch every
binary — Semgrep needs Opengrep installed separately, and at `--log-level error` the
"Tool unavailable" warning is suppressed, so the omission is invisible. Use
`--log-level warning` or `--inspect` when a tool seems to report nothing.

---

## Step 6: Check authentication

Login happens in `verity init` (an optional, skippable step), **not** here. This
step only checks whether it happened, and branches the rest of setup.

```bash
verity auth verify
```

- **Token valid** (prints the project name): continue to Step 7 — the Standard,
  config, and knowledge base will upload.
- **Not authenticated / no token**: the user skipped login in `verity init` (or
  lacks write access). Verity runs in **local-only mode** — the gate still runs
  and surfaces findings, but nothing uploads and no history is stored. **Skip
  Step 7** (it requires a token) and continue to Step 8. Tell them they can
  authenticate anytime with:

  ```bash
  verity login         # one GitHub login covers every repo you can write to
  ```

  Then re-run `/verity-setup --force` to upload what was generated locally.

**If the user asks what signing in does or why it matters:**
- It confirms they have **write access to this repository** — the GitHub token is
  used **once** for that check, then discarded. Verity never stores it.
- It does **not** give Verity access to their code. Code checked by the gate is
  analyzed **in memory and discarded**.
- It is **required to store and access run history** (past results, trends,
  shareable reports).
- Login is **provider-gated** (GitHub today) via a GitHub App **device flow**
  ("open https://github.com/login/device and enter code WXYZ-1234"). The App
  requests only read-only permissions (Metadata + Email addresses).
- **One login covers every repository** the user can write to. Re-running
  `verity login` is also how newly-granted repos are picked up and how an expired
  verification is restored. If login reports this repository is **not covered**,
  the Verity GitHub App has not been granted access to it — grant it, then re-run
  `verity login`.

The token and service_url live in the single global file `~/.verity/credentials`
— nothing secret is written into the repo.

---

## Step 7: Upload Standard and config

> **Skip this entire step if the user is not authenticated** (Step 6 reported
> local-only mode). These commands require a token and will fail without one. The
> `.verity/standard.yaml` and `.codacy/codacy.config.json` you generated locally
> still drive the gate; they'll upload the next time the user authenticates and
> re-runs setup.

### Upload the Standard

The `verity` CLI handles YAML→JSON conversion automatically:

```bash
verity standard push
```

This reads `.verity/standard.yaml`, converts it to JSON, and uploads it. Verify the output shows `version: 1`.

### Upload analysis config

```bash
verity config push
```

This reads `.codacy/codacy.config.json` and uploads it.

### Seed the knowledge base

```bash
verity memory seed
```

This derives a small set of descriptive memory nodes from what you already analyzed in Steps 2–4: a `domain/project-overview.md` from `knowledge_spec`, one `integrations/{framework}.md` per detected framework, a `domain/project-purpose.md` from the README's first paragraph if present, and sections of `CLAUDE.md` split into the appropriate domains if the file exists. Nodes are marked `source: extractor`, `created_by: seed`, so the user can tell them apart from reflections they author later. The command is idempotent — re-running is a no-op unless `--force` is passed. Tell the user how many were seeded (the command prints the count) and point them at `/knowledge` on the dashboard to review.

---

## Step 8: Generate VERITY.md file

Create `VERITY.md` at the project root with this content:

```markdown
# VERITY.md — Quality Gate

> This project uses [Verity](https://verity.md) to enforce quality and security standards on AI-generated code.

**URL:** ${SERVICE_URL}
**Project:** ${PROJECT_ID}
**Standard:** v1

## Quality Dimensions
- Comprehensibility (file length, complexity, naming)
- Modularity (separation of concerns, shallow abstractions)
- Type Safety (strict types, explicit returns)
- Test Adequacy (coverage, test quality)

## Security Patterns
- No hardcoded secrets (CWE-798)
- Input sanitization (CWE-20)
- Parameterized queries (CWE-89)
- Dependency verification (CWE-1395)
- No unsafe deserialization (CWE-502)
- Access control checks (CWE-639)
- Config file integrity (CWE-15)

## How It Works
Every time the coding agent stops, the Verity hook:
1. Runs static analysis via @codacy/analysis-cli
2. Sends results + code to the Verity service
3. Gemini independently reviews the code
4. Returns PASS / WARN / FAIL with actionable findings
```

---

## Step 9: Offer a `.verityignore` (optional)

Only if the codebase analysis in Step 2 found committed generated output —
`dist/`, `build/`, vendored bundles, generated API clients, large fixture
corpora. Do NOT create the file speculatively; an empty or guessed ruleset is
worse than none.

Ask the user first, naming the specific directories you found. If they agree,
write `.verityignore` at the repo root, gitignore syntax, and **commit it** — it
is a shared team decision, not machine-local state, so it does NOT go in
`.gitignore`.

```
# Generated — reviewing it grades a generator, not a person.
src/generated/**
dist/

# …but keep this one in scope.
!dist/entry.js
```

Rules, in the order they matter:

- **Last match wins.** A later `!` line re-includes what an earlier line
  excluded. Order is load-bearing.
- A pattern with **no slash** matches at any depth (`*.min.js`). One **with** a
  slash is anchored to the repo root (`src/generated/**`).
- `**`, `*`, `/` and `**/*` on their own are **refused** — they exclude the whole
  repository, which is turning the product off rather than scoping it.

Two things to tell the user, because both surprise people:

1. **It cannot hide a finding you just created.** Any turn that changes
   `.verityignore` has its rules suspended entirely, and the edit is always
   reviewed. A rule takes effect from the next turn onward.
2. **A pattern that covers a secret is warned about, not refused** — `config/**`
   also hides `config/.env`. Verity says so at push time and again on any run
   where it actually excludes one. Add a `!` rule if that is not what was meant.

Excluded files are still named in every run's coverage ledger, and the share of
changed files they cover is reported — an ignore file is never silent.

---

## Step 10: Show summary

Report both halves, so the user sees one flow rather than two:

```
=== Verity setup complete ===

Project:      ${PROJECT_NAME}
Languages:    ${LANGUAGES}
Frameworks:   ${FRAMEWORKS}
Architecture: ${ARCHITECTURE}
Intensity:    ${MODE}            (chosen during verity init)

This step wrote:
  .verity/standard.yaml        — Standard v1 (4 quality, 7 security, N custom patterns)
  .codacy/codacy.config.json   — ${TOOL_LIST}, curated patterns, validated
  VERITY.md                    — project quality overview
  .verityignore                — only if you created one in Step 9

Already in place from verity init:
  Hooks:      ${MOMENTS}        (+ intent, baseline, compact, session-end)
  Telemetry:  ${TELEMETRY_STATUS}
  Uploads:    ${authenticated ? "on — runs & memory sync to Verity" : "off — local-only mode"}

Next: the gate now runs at the moments you chose. You should see the first
analysis below.
```

Run `verity doctor` if anything above looks wrong — it reports the real state of
every part of the install.
