# /verity-reflect — Capture learnings after a task

At a natural task-completion moment, **the agent reflects first** — draft a
concrete, cited observation from what actually happened — then either confirm it
with the user (interactive) or record it directly (autonomous). This is the
"reflection flip": Verity stops asking the user to do the reflecting and instead
does the work, with the human as editor rather than author.

## The flip — draft first, then confirm or auto-record

### 1. Self-draft (always)

When a task is complete, draft **1–3** things genuinely worth remembering — a
**decision**, a **gotcha**, or a **pattern** — from what happened this task. Each
item must be **concrete and cited**: name the files, PR, commands, or
error-signatures it came from. **Skip entirely if nothing non-obvious happened**
— an empty reflection is better than a filler one.

Pick the right `--kind` per item: `decision`, `gotcha`, `pattern`, `security`,
`quality`, `intent`, `domain`, `integration`.

### 2. Branch on run mode

**Interactive** (a person is at the keyboard — a TTY): show your draft and ask
one question before recording:

> "Here's my reflection draft for the project memory: _\<draft\>_. Anything to
> **confirm, correct, or add** before I record it? (Say 'skip' to drop it.)"

Then record the **final** text — with their corrections folded in — via:

```bash
verity reflect --user-input "<final reflection>" --kind <kind>
```

If they say "skip", do **not** record.

**Autonomous** (no person to confirm — headless / CI / cron, or
`VERITY_AUTONOMOUS=1`, or a non-TTY session): record your draft **directly**,
never blocking:

```bash
verity reflect --user-input "<your draft>" --kind <kind> --autonomous
```

Mode is auto-detected when you omit the flag (TTY ⇒ interactive, non-TTY ⇒
autonomous); pass `--autonomous` to be explicit, or set `VERITY_AUTONOMOUS=0` to
force a confirm step even in a headless run.

### 3. Where it lands

The reflection is recorded **only to Verity's own memory namespace** —
`.verity/memory/` (synced to the service). Verity never writes a repo's own
`agents/memory` or any other store. One node per item; `source: 'user'`,
`confidence: 1.0`, never auto-archived.

## Auto-reflection (extract from task history)

Complementary to the flip: trigger the server-side LLM extractor to mine the
current task's run history and produce 0–3 nodes. This is the same extraction
that runs automatically on task close and every 5 runs — use it to trigger
mid-task:

```bash
verity reflect
```

Use the self-draft flow above for the **compound moment** (a specific insight
worth a confirmed node); use auto-extract to harvest what the run history shows.

## When to reflect

At natural task-completion moments:

- After creating a PR
- When the user says "done", "ship it", or "that's it"
- When a task is explicitly closed

## Examples of good drafts

- "The Stripe retry logic needs idempotency keys or we double-charge — hit it in `payments/retry.ts:88`." → `gotchas/stripe-idempotency-keys.md`
- "We chose advisory locks over optimistic locking because Supabase supports them natively (see PR #214)." → `decisions/advisory-locks-for-versioning.md`
- "Don't touch the RLS policies without updating the cleanup cron — they're coupled (`migrations/0190`, `cron/cleanup.sql`)." → `gotchas/rls-cleanup-coupling.md`
