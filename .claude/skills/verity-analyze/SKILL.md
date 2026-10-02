# /verity-analyze — Run Verity analysis on demand

You are running an on-demand Verity analysis. This is like a "second opinion" — the user (or you) can invoke it at any point to get a quality and security review with rich context.

**Usage:**
- `/verity-analyze` — Curate files, write intent, select specs autonomously (deep review)
- `/verity-analyze src/api/routes.ts src/db.ts` — Analyze specific files (quick check)
- `/verity-analyze src/api/` — Analyze a directory and related files
- `/verity-analyze --full` — Sample the full codebase (20 most recently modified files)
- `/verity-analyze --intent "Implementing OAuth2 PKCE flow per spec/AUTH.md"` — User provides intent

---

## Step 1: Check configuration

1. Verify `.verity/standard.yaml` exists. If not: "Run `/verity-setup` first."
2. Verify `verity` CLI is available: `which verity`. If not: "Re-run the Verity installer: `curl -fsSL https://raw.githubusercontent.com/codacy/verity/main/install.sh | bash`"
3. Run `verity auth verify` to check the token is valid.
   - **Valid**: proceed with the full deep review.
   - **Fails / not authenticated**: don't stop. Tell the user Verity is in
     **local-only mode**, so the review will run static analysis and show findings
     but won't perform the deep (LLM) review or upload anything. To unlock the deep
     review they can authenticate with `verity login` (one login covers every
     repository they can write to).
     Continue — `verity review` degrades to a local static-only report on its own.

---

## Step 2: Determine files to analyze

### Quick mode (specific files or `--full`)

**Specific files** (paths or directories provided):
- Use the provided file paths directly. If a directory is given, include all analyzable files under it.
- Verify each file exists.

**`--full` flag** (full codebase sample):
```bash
FILES=$(git ls-files | grep -E '\.(ts|tsx|js|jsx|mjs|cjs|py|go|java|kt|rb|rs|c|cpp|h|hpp|cs|php)$')
```
If more than 20 files, select the 20 most recently modified:
```bash
echo "$FILES" | xargs ls -t | head -20
```

In quick mode, skip Steps 3 and 4 — go straight to Step 5.

### Deep mode (no arguments, or directory hints)

When no specific files are given, curate a comprehensive review scope:

#### 2a. Start with changed files

```bash
CHANGED=$(git diff --name-only HEAD 2>/dev/null; git diff --name-only --cached 2>/dev/null; git ls-files --others --exclude-standard 2>/dev/null)
CHANGED_CODE=$(echo "$CHANGED" | sort -u | grep -E '\.(ts|tsx|js|jsx|mjs|cjs|py|go|java|kt|rb|rs|c|cpp|h|hpp|cs|php)$')
```

Also check if the agent just committed (clean tree but recent HEAD):
```bash
# If working tree is clean, check what the last commit changed
git diff --name-only HEAD~1..HEAD 2>/dev/null
```

If the user provided directory hints (e.g., `/verity-analyze src/api/`), also include all files under those directories.

#### 2b. Add related files

For each changed file, identify and add:

1. **Direct dependencies** — files that the changed file imports. Read the import/require statements and resolve the paths.
2. **Reverse dependencies** — files that import the changed file. Grep for the module name across the codebase.
3. **Type/interface files** — shared type definitions, interfaces, or schemas referenced by the changes.
4. **Test files** — corresponding test files for changed modules (e.g., `foo.test.ts` for `foo.ts`, `test_foo.py` for `foo.py`).

#### 2c. Prioritize and cap

Rank files by relevance:
1. Changed files (always included first)
2. Direct dependencies that define interfaces/types being used
3. Test files for changed code
4. Reverse dependencies (consumers that might break)

**Cap at 20 files total.** If you need to cut, drop reverse dependencies first, then tests.

#### 2d. Track changed vs context

Keep two lists:
- **`changed_files`** — the files that were actually modified (git dirty or recently committed)
- **`all_files`** — all files to include in the analysis (changed + context)

If no analyzable files found: "No analyzable files found."

---

## Step 3: Write the intent description

Synthesize the conversation context into a clear intent description. This is NOT the raw user prompt — it's your understanding of what the work is trying to achieve.

**Template:**

```
I am [adding/modifying/fixing/refactoring] [feature/component name].

Goal: [What the user asked for, or the problem being solved.]

Approach: [Key architectural decisions. What patterns are being used?]

Trade-offs: [Anything you chose deliberately that could be questioned.]

Review focus: [Specific concerns you want the reviewer to evaluate.]
```

**Guidelines:**
- Cap at 2000 characters
- Be specific — "adding JWT auth with RS256 to /api/users" not "adding authentication"
- Include trade-offs and areas of uncertainty — the reviewer will focus there
- If the user provided `--intent`, use it as the base and augment with your understanding
- Skip this step entirely in quick mode (specific files or --full)

---

## Step 4: Select relevant specs

Identify spec/documentation files that provide context:

- Specs referenced in the user's request
- Specs that define interfaces or APIs being implemented
- Architecture docs relevant to the area being changed

**Read each spec file and prepare for inclusion.** Limits: max 10 files, 10KB per file, 30KB total.

Common spec locations to check:
- `spec/*.md`, `docs/*.md`
- `CLAUDE.md`, `AGENTS.md`, `CONTRIBUTING.md`

If no specs are relevant, skip this step.

---

## Step 5: Run the analysis

Use the `verity review` command with all the context you gathered:

```bash
verity review \
  --files "src/auth/pkce.ts,src/auth/callback.ts,src/auth/types.ts,src/middleware/auth.ts" \
  --changed "src/auth/pkce.ts,src/auth/callback.ts" \
  --intent "I am adding OAuth2 PKCE authentication flow..." \
  --specs "spec/AUTH.md,CLAUDE.md"
```

**Arguments:**
- `--files` (required): Comma-separated list of ALL files to include (changed + context)
- `--changed` (optional): Comma-separated list of actually-modified files (subset of --files). If omitted, all files are treated as changed.
- `--intent` (optional): Your synthesized intent description. Quote it.
- `--specs` (optional): Comma-separated list of spec file paths to include.

The CLI handles static analysis, file reading with size limits, payload construction, and the API call.

---

## Step 6: Display results

Parse the JSON response and format clearly:

```
=== Verity Analysis ===
Gate Decision: WARN
Quality: 7.5/10  |  Security: 8.0/10  |  Overall: 7.8/10
Trend: stable

--- Assessment ---
[narrative from assessment.narrative]

--- Findings (2) ---

[HIGH] Service Role Client for Non-Admin Operations
  File: supabase/functions/webhook/index.ts:25
  Pattern: access-control-checks (CWE-639)
  Fix: Limit SELECT fields to only what's needed for the notification.

[MEDIUM] File Complexity Exceeds Threshold
  File: supabase/functions/webhook/index.ts:1
  Pattern: comprehensibility
  Fix: Refactor into separate handler files per event type.

--- Intent Alignment ---
Score: 9/10 (aligned)
Goal: "Add webhook handlers for Stripe events"
Implementation matches intent. No gaps detected.

--- Quality Dimensions ---
Comprehensibility: 6.5/10 — webhook file is too large
Modularity: 7.0/10 — good separation except webhook handler
Type Safety: 9.0/10 — strict TypeScript throughout
Test Adequacy: 5.0/10 — missing webhook handler tests

--- Pending Items ---
1. [HIGH] Add tests for webhook event handlers
2. [MEDIUM] Refactor webhook into handler modules

View full report: https://verity.md/runs/run-20260327-...?token=verityview_...
```

---

## Step 7: Offer to fix

- **If FAIL or findings exist**: "The analysis found N issues. Would you like me to fix them?" If yes, apply fixes from findings, then re-run (iteration 2 max). If iteration 2 still fails, report remaining issues for human review.
- **If WARN**: "Non-blocking issues found. Would you like me to address them?"
- **If PASS**: "Code meets the Standard. No issues found."

---

## Important notes

- This does NOT replace the automatic stop hook. The hook still fires on every agent stop.
- Runs are tagged with `trigger: "review"` in the database.
- Size limits: 20 files max, 50KB per file, 200KB total code, 2000 char intent, 30KB specs.
- If the service is unreachable, static analysis still runs locally.
