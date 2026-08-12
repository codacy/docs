# Plan: "Developer tools" nav tab

Status: **proposal, not applied.** The `mkdocs.yml` diff below is written to be copy-pasted and applied directly — by you, or by whoever reviews the resulting PR. I'm not applying it myself: `CLAUDE.md`'s hard rules say not to apply an information-architecture change on my own initiative, and that rule holds even under a direct instruction to proceed. Everything else in this plan (the two reference-doc edits) is already applied, since those aren't site changes.

Classification decisions this plan depends on are recorded in [`.claude/reference/information-architecture.md`](../reference/information-architecture.md) — read that first if a "why" below is unclear.

## What moves, what's new, what stays

| Item | Action | File moves? | Redirect needed? |
|---|---|---|---|
| Codacy API (`codacy-api/` — using-the-API, tokens, examples, external Swagger links) | Relocate nav entry into the new tab | No | No |
| Codacy Cloud CLI (`codacy-cloud-cli/index.md`, includes the Codacy Skills pairing) | Relocate nav entry into the new tab | No | No |
| "Integrating Codacy with your IDE" (`getting-started/integrating-codacy-with-intellij-ides.md`, `-visual-studio-code.md`) | Relocate nav entry into the new tab, un-nest from "Getting started" | No | No |
| Codacy Guardrails (`codacy-guardrails/*`, 6 pages) | Relocate nav entry into the new tab; drop "(IDE Extension)" from the title | No | No |
| Codacy Analysis CLI, Codacy MCP Server | **Not extracted.** They stay inside the Guardrails page as-is — see the reference doc's "don't extract" rationale | — | — |
| Codacy Skills | **No page exists yet.** Stays as the install step inside Codacy Cloud CLI's page. A standalone page is separate `docs-write` work, not part of this move | — | — |
| Coverage Reporter | Excluded from this pass on your instruction | — | — |

Every move in this table is a `nav:` entry relocation with the underlying files left in their current directories, which is why none of them need a `redirect_maps` entry: URLs derive from file path, not nav position, and no file path changes.

## Naming decisions made along the way

- Section titles for API and Cloud CLI are **left unchanged** — renaming them to bare "API" / "CLIs" was considered and dropped to keep the diff minimal; the current titles read fine one tab over.
- "Integrating Codacy with your IDE" is left unchanged for the same reason. If you'd rather it read "IDE extensions" once it's not nested under "Getting started" anymore, that's a one-word `sidebar_icons` key change too — flag it and I'll add it to the diff.
- "Codacy Guardrails (IDE Extension)" → **"Codacy Guardrails"** is the one title change in this plan, because the qualifier is factually wrong (see the reference doc) — this one isn't cosmetic.
- No new grouping node was added for "CLIs" or "MCP." Codacy Cloud CLI is the only thing that would live under a "CLIs" wrapper today, and Guardrails' CLI/MCP content stays inside Guardrails — so a wrapper category would hold either one item or nothing. Matches the "section holding one page" smell called out in `docs-review-structure`.

## Cost / risk, beyond the table above

- **New top-level tab:** no `sidebar_icons` entry needed for the tab itself — that config only governs items nested one level inside a tab (confirmed in `theme/partials/nav-item.html:20`), not the tab label. No `TemplateNotFound` risk.
- **Icon carry-over:** "Codacy API" and "Codacy Cloud CLI" keep their existing `sidebar_icons` entries untouched, since their titles don't change. Only the Guardrails rename needs its icon key updated (`shield-checkmark-outline` carries over to the new title).
- **No icon exists for "IDE extensions"-shaped content** in the closed ionicon set (`ls theme/assets/vendor/ionicons/svg/`). Leaving it unset is safe — no icon renders, no crash. Vendoring one is a separate `docs-review-theme` change, out of scope here.
- **Positioning trade-off, not a technical risk:** moving Guardrails out of the main Documentation tab demotes its visibility — it currently sits right under "Getting started" with a blog-post CTA. Check with whoever owns that placement before applying this piece specifically.

## The `mkdocs.yml` diff

Two edits: remove the four sections/entries from inside `Documentation`, and add a new `Developer tools` tab (placed between `Documentation` and `Release notes`) reusing them as-is except for the one Guardrails rename.

**Remove from inside `- Documentation:`** (currently lines ~636–654 and ~717–730 in `mkdocs.yml`):

```yaml
                - Integrating Codacy with your IDE:
                      - getting-started/integrating-codacy-with-intellij-ides.md
                      - getting-started/integrating-codacy-with-visual-studio-code.md
```
(this block moves out of `Getting started`, which keeps its other children)

```yaml
          - Codacy Guardrails (IDE Extension):
                - codacy-guardrails/codacy-guardrails-getting-started.md
                - codacy-guardrails/codacy-guardrails-how-to-use.md
                - codacy-guardrails/codacy-guardrails-how-to-configure-rules.md
                - codacy-guardrails/codacy-guardrails-limitations.md
                - codacy-guardrails/codacy-guardrails-troubleshooting.md
                - codacy-guardrails/codacy-guardrails-faq.md
          - Codacy Cloud CLI:
                - codacy-cloud-cli/index.md
```

```yaml
          - Codacy API:
                - codacy-api/using-the-codacy-api.md
                - codacy-api/api-tokens.md
                - API v3 reference (recommended): https://api.codacy.com/api/api-docs
                - API v2 reference: https://api.codacy.com/api-docs
                - Examples:
                      - codacy-api/examples/adding-people-to-codacy-programmatically.md
                      - codacy-api/examples/adding-repositories-to-codacy-programmatically.md
                      - codacy-api/examples/creating-repository-api-tokens-programmatically.md
                      - codacy-api/examples/obtaining-code-quality-metrics-for-files.md
                      - codacy-api/examples/obtaining-current-issues-in-repositories.md
                      - codacy-api/examples/identifying-commits-without-coverage-data.md
                      - codacy-api/examples/uploading-dast-results.md
                      - codacy-api/examples/triggering-dast-scans.md
```

**Add as a new top-level tab**, sibling to `- Documentation:` and `- Release notes:`:

```yaml
    - Developer tools:
          - Codacy API:
                - codacy-api/using-the-codacy-api.md
                - codacy-api/api-tokens.md
                - API v3 reference (recommended): https://api.codacy.com/api/api-docs
                - API v2 reference: https://api.codacy.com/api-docs
                - Examples:
                      - codacy-api/examples/adding-people-to-codacy-programmatically.md
                      - codacy-api/examples/adding-repositories-to-codacy-programmatically.md
                      - codacy-api/examples/creating-repository-api-tokens-programmatically.md
                      - codacy-api/examples/obtaining-code-quality-metrics-for-files.md
                      - codacy-api/examples/obtaining-current-issues-in-repositories.md
                      - codacy-api/examples/identifying-commits-without-coverage-data.md
                      - codacy-api/examples/uploading-dast-results.md
                      - codacy-api/examples/triggering-dast-scans.md
          - Codacy Cloud CLI:
                - codacy-cloud-cli/index.md
          - Integrating Codacy with your IDE:
                - getting-started/integrating-codacy-with-intellij-ides.md
                - getting-started/integrating-codacy-with-visual-studio-code.md
          - Codacy Guardrails:
                - codacy-guardrails/codacy-guardrails-getting-started.md
                - codacy-guardrails/codacy-guardrails-how-to-use.md
                - codacy-guardrails/codacy-guardrails-how-to-configure-rules.md
                - codacy-guardrails/codacy-guardrails-limitations.md
                - codacy-guardrails/codacy-guardrails-troubleshooting.md
                - codacy-guardrails/codacy-guardrails-faq.md
```

**`extra.sidebar_icons`** — one key rename, everything else untouched:

```yaml
        "Codacy Guardrails (IDE Extension)": "shield-checkmark-outline"
```
becomes
```yaml
        "Codacy Guardrails": "shield-checkmark-outline"
```

## Applying this

1. Make the two nav edits and the one `sidebar_icons` key rename above in `mkdocs.yml`.
2. Run `mkdocs build --strict` (after `git submodule update --init --recursive` if the submodule content isn't checked out). This is the self-checking step: every one of the ~25 inbound relative links found during investigation (`grep -rn "codacy-api/\|codacy-cloud-cli\|codacy-guardrails/" docs/`) resolves by file path, unaffected by the nav move — if any of them were missed in this plan's accounting, the strict build fails loudly rather than shipping a broken link silently.
3. Spot-check the three in-repo links to `codacy-guardrails-getting-started.md#install-cli` (`client-side-tools.md`, `codacy-guardrails-troubleshooting.md`, `codacy-guardrails-faq.md`) still resolve — they should, since the file and its headings are untouched.
4. Preview the new tab locally and confirm: no icon renders for "Integrating Codacy with your IDE" (expected, no crash), Guardrails keeps its shield icon, API and Cloud CLI keep theirs.
5. Separately, before or alongside this: check with whoever owns Guardrails' marketing placement about the visibility trade-off noted above.

## Explicitly out of scope for this pass

- Extracting Codacy Analysis CLI or Codacy MCP Server into their own pages.
- Writing a first Codacy Skills page.
- Any change to Coverage Reporter's placement.
- Any theme change (external-link marker on the Swagger nav entries, a real "IDE" icon).
