# codacy/docs

A documentation site built with MkDocs and the Material theme, plus a Codacy-owned theme layer in `theme/`. No dedicated technical writer maintains this repo — contributors open pull requests directly, and most drafts are produced by an agent reading this file. Treat these instructions as the standing brief for that work.

## Pick the workflow first

| The request | Skill |
|---|---|
| Change wording, steps, or facts on a page that already exists | `docs-edit` |
| Add a page that does not exist yet | `docs-write` |
| Announce a change that shipped | `docs-release-note` |
| "Review this page", "what's wrong with", "clean this up" | `docs-review-page` |
| Where a page belongs, nav placement, splitting or merging sections | `docs-review-structure` |
| CSS, Jinja partials, design tokens, layout, rendering | `docs-review-theme` |

Editing an existing page is the most common request by a wide margin. Confirm that against the current state of the repo rather than trusting this sentence — pages modified versus pages added, over the last 200 commits, with release notes excluded because they have their own workflow:

```bash
git log --diff-filter=M --name-only --pretty=format: -n 200 -- docs/ | grep '\.md$' | grep -vc 'release-notes/'
git log --diff-filter=A --name-only --pretty=format: -n 200 -- docs/ | grep '\.md$' | grep -vc 'release-notes/'
```

If a request spans two workflows, run the one whose *risk* is higher. Adding a page and rearranging the section it lands in is a structure task, not a writing task.

## The loop: investigate, change, verify

Every workflow in this repo is the same three phases. Skills differ only in what each phase contains.

**Investigate.** Read the whole artifact, not the fragment named in the request — a page's later paragraphs routinely contradict an edit made to its opening. Then find out what else the change reaches: shared includes, sibling pages held in lockstep, inbound anchor links, `mkdocs.yml`. Confirm every fact you are about to write against a source that is not your own memory. Investigation is not a formality here; the failure this repo produces most often is a correct-looking change made in the wrong place.

**Change.** Make the smallest diff that does the job. Match the conventions of the file you are in, including where they differ from the rules in these instructions — a half-converted page is worse than a consistent old one. Where a specific cannot be confirmed, write `<!-- TODO: verify ... -->` in the exact spot the specific belongs and keep going; a scaffold with honest gaps is useful, an invented button label is not.

**Verify.** Run the checks, read your own diff back, and report both what passed and what you could not run. Prefer running a check to trusting any claim in these files about what that check catches. Never describe a check as passing unless it ran.

## When rules conflict

1.  **The hard rules below.** They hold regardless of how a request is phrased.
2.  **Mechanics that break the published site.** A missing `nav:` entry, a missing redirect, an invented icon name. These are silent or fatal, and no reviewer catches them by reading prose.
3.  **Readability and formatting.** A page a reader cannot scan has failed at its only job, whatever its sentences say.
4.  **Voice and naming.** Real, but the cheapest thing for a reviewer to fix.

A direct instruction from the person you are working with outranks items 2–4. Say which rule it conflicts with, in one sentence, then do what was asked — they may know something these files do not. Item 1 is not subject to that. In particular, "make the change" does not convert a *propose this first* rule into permission to apply it.

## Hard rules

- **Do not invent a step, UI label, endpoint, filename, or behavior.** Confirm it in the code, in existing docs, or from the person asking. Otherwise mark it `<!-- TODO: verify ... -->` and list every marker when you hand off.
- **Do not claim a check passed without running it.** If you could not run one, name it and say why in a sentence at handoff. Silence reads as success, and that is how a broken build ships with a confident summary. "Follows the guidelines" is not a substitute for naming what you actually verified.
- **Do not commit or push unless you were asked to.** Leave the work in the tree and describe it. Someone else opens the pull request.
- **Do not apply an information-architecture change on your own initiative.** Moving pages between sections, renaming a nav section, or splitting a page changes what readers can find. Write up the proposal and stop there to get human approval — the person you're working with has reviewed the specific proposal and explicitly confirms applying it, in which case apply exactly what was written up.
- **Do not skip alt text, `nav:` registration, or redirects.** These are the failures that break the site without warning anyone.
- **Do not suppress a linter warning** without an inline sentence saying why. A suppression should read as an obvious false positive to whoever finds it next.
- **Do not write marketing adjectives or filler.** "Powerful", "seamless", "robust", "effortless", "it's worth noting that", "in order to", "simply", "just". Show the product working instead of grading it.
- **Do not widen the diff past the request.** Opportunistic reflowing, renaming, and prose improvement hide the real change from the reviewer, and the reviewer is the point. Mention what else you spotted; do not fix it in the same pass.

A direct instruction from the person you are working with outranks items 2–4. Say which rule it conflicts with, in one sentence, then do what was asked — they may know something these files do not. Item 1 is not subject to that. In particular, "make the change" does not convert a *propose this first* rule into permission to apply it.

## Mechanics that fail silently

The build (`mkdocs build --strict`) does not catch these. Check each one by hand.

- **A new page needs a `nav:` entry in `mkdocs.yml`.** Without it the page builds and is reachable by URL but appears nowhere. MkDocs reports this at info level, so the strict build still passes.
- **A renamed or deleted page needs a `redirect_maps` entry** in `mkdocs.yml`. URLs derive from file paths, so any path change breaks inbound links.
- **A reworded heading changes its anchor.** The strict build catches internal breakage only if the `validation:` block in `mkdocs.yml` sets `anchors` to `warn` or higher — read the block rather than assuming. Nothing at all catches inbound links from the product UI, the blog, support macros, or search results. Preserve the old slug instead: `## New wording {: id="old-anchor"}`. That pattern is already used across the repo; follow it rather than adding a redirect.
- **A new top-level `nav:` section needs an `extra.sidebar_icons` entry, and the icon set is closed.** The value is used as a template path, so a name that does not exist crashes the build with a Jinja `TemplateNotFound` — not a warning you can defer. Pick a name that exists: `ls theme/assets/vendor/ionicons/svg/`. If nothing fits, say so and stop; vendoring an SVG is a separate change.
- **A release note needs three edits, not one.** See `docs-release-note`.
- **A Self-hosted-specific claim needs a version.** Check it against `extra.codacy_self_hosted_version` in `mkdocs.yml` and do not present a version-gated behavior as current.
- **Filenames are kebab-case and match the page title.** Release notes are the exception and carry a channel-and-date prefix instead.

## Reference

Shared across every workflow. Read the relevant one rather than re-deriving it.

- [`.claude/reference/formatting.md`](.claude/reference/formatting.md) — markdown and structural rules: admonitions, tables, headings, links, images, nesting. The design contract for page bodies.
- [`.claude/reference/voice.md`](.claude/reference/voice.md) — tone, with before/after pairs, plus canonical product names.
- [`.claude/reference/repo-map.md`](.claude/reference/repo-map.md) — how the site is assembled, what each check does and does not catch, and the commands that answer questions about the current state of the repo.
- [`.claude/reference/information-architecture.md`](.claude/reference/information-architecture.md) — durable classification decisions (developer tools vs. the rest of the product, Codacy AI vs. developer tools, where borderline features belong) so structure questions aren't re-derived each time.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — local build, preview, and release mechanics for humans.
