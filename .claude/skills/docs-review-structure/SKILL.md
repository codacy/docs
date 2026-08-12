---
name: docs-review-structure
description: Review how the documentation is organized rather than how a page reads — where a page belongs, nav and tab placement, section boundaries, whether a page should be split or merged, duplicate coverage across pages, orphaned pages, and folder depth. Triggers on requests like "review the structure of X", "does this page belong here", "should we split this", "reorganize this section", "is the nav right", "where should this live", "find duplicate or orphaned pages". Produces a proposal; never applies the reorganization.
---

# Reviewing structure

Information architecture decides what a reader can find. Getting it wrong is expensive and mostly invisible: nobody reports a page they never located.

**This skill produces a proposal and stops.** Applying a reorganization is a human decision, per the hard rules in `CLAUDE.md`, and that holds even when the request says to make the change. Say that you are proposing rather than applying, and say why, in one sentence.

## 1. Investigate

Structure claims must be grounded in what is actually in the repo, not in an impression of it.

**Read the nav as the reader experiences it.** The `nav:` block in `mkdocs.yml` is the site's real table of contents. Top-level entries render as tabs; nesting under them becomes the sidebar. Read the whole block before proposing anything — the section you are asked about is a fragment of a shape.

**Map the actual files against it.**

```bash
# Pages on disk
find docs -name '*.md' -not -path 'docs/assets/*' | sort

# Whether a given page is registered
grep -n '<page-filename>.md' mkdocs.yml
```

A page on disk but absent from `nav:` is an orphan: it builds, it has a URL, and it appears in no menu. This is invisible to `mkdocs build --strict`, which reports it at info level. Orphans are the highest-value finding this review produces.

**Find duplicate coverage.** Two pages documenting the same subject split search results and rot at different rates.

```bash
grep -ril '<distinctive term>' docs/
```

**Check the page's internal shape before proposing to move it.** Sometimes the answer is not relocation but a split:

```bash
wc -l docs/<path>/<page>.md
grep -c '^## ' docs/<path>/<page>.md
```

One `##` section that has outgrown the rest of the page combined means the page has two subjects. Report that; the split itself is a proposal.

**Check inbound links before proposing any move or rename.** These determine the cost of the change, and the cost belongs in the proposal.

```bash
grep -rn '<page-filename>.md' docs/
grep -rn '#<anchor-slug>' docs/
```

## 2. What to look for

- **Orphans.** On disk, missing from `nav:`.
- **Duplicate coverage.** Two pages, one subject.
- **Misplacement.** A page whose subject does not match its section — readers navigate by section, so this makes it unfindable even though it exists.
- **Section imbalance.** A tab holding one page, or a section holding so many that the sidebar cannot be scanned.
- **Depth.** Folder nesting beyond two levels under `docs/`, or a nav hierarchy deeper than the sidebar renders usefully.
- **Ordering.** Whether a section's entries follow a defensible order — task sequence, or frequency of use — rather than the order they were added.
- **Missing entry points.** A section whose landing page does not tell a reader what is in it.
- **Naming.** Section and page titles that describe the reader's goal rather than the internal system that provides it.

## 3. Cost each proposal

A structure proposal without its cost is not actionable. For every move, rename, split, or merge, state:

- **URL impact.** URLs derive from file paths, not from `nav:`. Moving a *file* changes its URL and requires a `redirect_maps` entry in `mkdocs.yml`. Moving an entry *within* `nav:` without touching the file changes no URL and needs no redirect — but still changes what readers find, which is the part needing approval.
- **Inbound links,** from the greps above, plus the fact that links from the product UI, the blog, and support content are invisible to any check here. Any rename that changes a heading should preserve the old anchor with `{: id="old-anchor"}` rather than rely on a redirect.
- **New top-level sections.** A new tab needs an `extra.sidebar_icons` entry, and the icon set is closed — the value is a Jinja template path, so a name that does not exist crashes the build. Check `ls theme/assets/vendor/ionicons/svg/` and name a real one, or say that none fits.
- **Submodule content.** Sections sourced from `submodules/` belong to other repositories and cannot be restructured from here. Name the owning repository instead.

## 4. Report

Present the proposal as: the problem, the current shape, the proposed shape, the cost of getting there, and what stays as it is. Order findings by what they cost a reader, with orphans and duplicate coverage first.

Keep verified facts separate from judgement. "Three pages under this section are not in `nav:`, listed below" is a fact. "This section would read better split in two" is a recommendation, and should be labelled as one.

Recommend the smallest change that fixes the problem. A proposal to restructure a whole tab will not be actioned; a proposal to move two pages and add one landing page will be. If the current structure is defensible, say so — an honest "this is fine, here is why" is a useful outcome.
