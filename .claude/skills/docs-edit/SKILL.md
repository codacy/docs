---
name: docs-edit
description: Change content on a documentation page that already exists in docs/ — reword, correct, clarify, add or remove a step, update a fact, add or remove a supported tool or language, fix a link, or apply review feedback. Triggers on requests like "update the X page", "fix the sentence about Y", "add a note to Z", "this is wrong, correct it", "document that the new option exists", "add <tool> to the supported tools". Use this rather than docs-write whenever the target page exists. Carries the investigation checks that determine which other pages a change reaches.
---

# Editing an existing page

The dominant workflow in this repo. The risk is not a broken build — it is a change that is correct in itself but landed on one page when it belonged on several, or that moved an anchor other things point at. Investigation is most of the work.

Read [`.claude/reference/formatting.md`](../../reference/formatting.md) and [`.claude/reference/voice.md`](../../reference/voice.md) before writing. `CLAUDE.md` holds the hard rules and the silent-failure mechanics.

## 1. Investigate

**Read the entire page.** Not the section named in the request. An edit that contradicts a paragraph further down is worse than no edit, and a fragment does not show you that.

**Establish that the change is true.** Confirm the new fact against code, a shipped UI, an issue, or what the person asking told you. If the request itself contains the fact, that is a source — cite it as one. If nothing confirms it, that specific gets a `<!-- TODO: verify ... -->` marker rather than a plausible guess.

**Check the fact you are copying.** Edits frequently model themselves on a neighbouring sentence. If that sentence is stale, the edit propagates the staleness. Verify before mirroring.

**Then run these four checks in order.** All are cheap; skipping them is what produces the failure this workflow exists to prevent.

1.  **Lockstep siblings.** Some pages open with an HTML comment listing the other pages that must change alongside them. Adding, renaming, or removing a tool or a language is the usual trigger, and the comment — not the request — defines the real scope of the task.

    ```bash
    grep -rln '^<!--NOTE' docs/
    ```

    Read the comment on the page you are editing and follow it. It states a condition per sibling page; not every sibling applies to every change.

2.  **Shared includes.** Determine whether the text you are changing lives in `docs/assets/includes/`, and whether the paragraph you are about to write already exists there as a snippet.

    ```bash
    grep -rl '<include-filename>.md' docs/
    ```

    Editing an include changes every page listed. Read all of them. Wording that fits the page you came from is often wrong on the others; when it cannot fit all of them, write prose on your page instead of rewriting the include.

3.  **Anchors.** If the edit rewords a heading, its anchor changes and every link to it breaks.

    ```bash
    grep -rn '#<current-anchor-slug>' docs/
    ```

    Any hit, or any plausible link from the product UI, the blog, or support content, means you keep the old slug: `## New wording {: id="old-anchor"}`. Nothing in CI can see links from outside the repo, so default to pinning.

4.  **Version gating.** If the claim concerns Codacy Self-hosted, check whether it holds for all versions or only from a chart version onward. See `extra.codacy_self_hosted_version` in `mkdocs.yml`.

## 2. Change

**Smallest diff that does the job.** Fix the sentence you were asked to fix. Do not reflow the surrounding list, rename nearby headings, re-wrap paragraphs, or improve prose outside the request. The diff is what a reviewer reads, and noise in it hides the change.

**Match the page.** An existing page has settled conventions — how it phrases headings, whether it uses admonitions, how it addresses the reader. Follow them even where they diverge from `.claude/reference/formatting.md`. A page half-converted to a different convention is worse than a consistent old one. Raise the divergence separately.

**One exception.** If the edit lands inside content that hits a readability failure mode in `.claude/reference/formatting.md` — a procedure written as narrative, a table full of sentences — say so and propose the fix. Do not perform the restructure as part of an unrelated wording edit.

**Note what you did not fix.** Anything else you noticed goes in the handoff as a separate observation, not in the diff.

## 3. Verify

```bash
mkdocs build --strict
```

Then:

- Read `git diff` end to end. Every hunk should be traceable to the request.
- If a heading changed, confirm the anchor either still resolves or is pinned.
- If a lockstep page was in scope, confirm every applicable sibling changed.
- If an include changed, confirm the new wording reads correctly on each consuming page.
- Run Vale on the changed files only, never across `docs/`:

  ```bash
  vale docs/<path>/<page>.md
  ```

  It is advisory and never blocks. Read what it says about your lines and use judgement.

## Handoff

State, in this order:

- What changed and where, by file.
- Which of the four investigation checks applied and what each turned up — including the ones that came back empty, so the reviewer knows they were run.
- Every remaining `TODO: verify` marker.
- Which checks ran, and which you could not run and why.
- Anything you noticed and deliberately left alone.

Nothing is committed or pushed unless you were asked to. Opening the pull request produces a preview build for sharing with reviewers.
