---
schema: 1
id: n010-mechanics-that-fail-silently
kind: domain
title: "Mechanics that fail silently"
confidence: 0.6
status: active
source: extractor
created_by: seed
created_at: 2026-09-14T10:26:36.300Z
updated_at: 2026-09-14T10:26:36.300Z
---

# Mechanics that fail silently

The build (`mkdocs build --strict`) does not catch these. Check each one by hand.

- **A new page needs a `nav:` entry in `mkdocs.yml`.** Without it the page builds and is reachable by URL but appears nowhere. MkDocs reports this at info level, so the strict build still passes.
- **A renamed or deleted page needs a `redirect_maps` entry** in `mkdocs.yml`. URLs derive from file paths, so any path change breaks inbound links.
- **A reworded heading changes its anchor.** The strict build catches internal breakage only if the `validation:` block in `mkdocs.yml` sets `anchors` to `warn` or higher — read the block rather than assuming. Nothing at all catches inbound links from the product UI, the blog, support macros, or search results. Preserve the old slug instead: `## New wording {: id="old-anchor"}`. That pattern is already used across the repo; follow it rather than adding a redirect.
- **A new top-level `nav:` section needs an `extra.sidebar_icons` entry, and the icon set is closed.** The value is used as a template path, so a name that does not exist crashes the build with a Jinja `TemplateNotFound` — not a warning you can defer. Pick a name that exists: `ls theme/assets/vendor/ionicons/svg/`. If nothing fits, say so and stop; vendoring an SVG is a separate change.
- **A release note needs three edits, not one.** See `docs-release-note`.
- **A Self-hosted-specific claim needs a version.** Check it against `extra.codacy_self_hosted_version` in `mkdocs.yml` and do not present a version-gated behavior as current.
- **Filenames are kebab-case and match the page title.** Release notes are the exception and carry a channel-and-date prefix instead.

_Seeded from CLAUDE.md. Edit or archive if outdated._
