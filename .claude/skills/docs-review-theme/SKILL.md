---
name: docs-review-theme
description: Work on or review the site's presentation layer in theme/ — stylesheets, design tokens, Jinja partials and template overrides, build hooks, layout, responsive behavior, color schemes, and anything about how pages render rather than what they say. Triggers on requests like "review the theme", "the sidebar looks wrong", "fix the spacing on", "why is this page rendering unstyled", "add a style for", "check dark mode", "the header is broken on mobile". Carries the override model, the token discipline, and the verification steps that catch presentation regressions the build cannot.
---

# Working on the theme layer

`theme/` is a plain-CSS and Jinja layer over the installed Material package. There is no bundler, no preprocessor, and no minification step: the file that is committed is the file that ships. That makes changes easy to make and easy to get wrong in ways no check reports, because a successful build says nothing about whether a page looks right.

See [`.claude/reference/repo-map.md`](../../reference/repo-map.md) for how the layer is wired into `mkdocs.yml`.

## 1. Investigate

**Reproduce it in the browser before reading any CSS.** Presentation problems are described in terms of symptoms, and the symptom frequently does not come from the file it appears to come from.

```bash
mkdocs serve
```

Look at the actual rendered page. Inspect the element and find which rule wins before deciding which file to edit.

**Do not trust the working tree as a description of production.** Theme options, feature flags, and deployed assets can drift from `master`. When a live-site symptom cannot be reproduced locally, read what the deployed site is actually running rather than assuming the repo describes it — Material serializes its active configuration into the page, and the deployed stylesheets are fetchable. A symptom that exists live and not locally is a deployment or configuration difference, and identifying which one is the finding.

**Rule out caching before touching code.** With no bundler, filenames never change when contents do, so a browser or a CDN can serve a stale stylesheet after a deploy. A shipped fix that appears not to have worked is a cache question first and a code question second. Check the response headers and try a hard reload before re-editing anything.

**Establish which layer owns the behavior.** In order:

1.  `theme/stylesheets/` — Codacy's CSS, loaded in the order listed by `extra_css` in `mkdocs.yml`. That order is load-bearing.
2.  `theme/partials/*.html` — each file silently replaces the upstream Material partial of the same name. Anything in an overridden partial is frozen at the moment it was copied; upstream improvements to that partial no longer reach the site. When a partial's markup looks out of date, this is why.
3.  `theme/main.html` — block-level overrides of Material's `base.html`.
4.  `theme/hooks/` — Python hooks registered under `hooks:` in `mkdocs.yml` that transform pages at build time. A rendering oddity present in the built HTML but absent from the markdown source is usually here.
5.  `submodules/codacy-mkdocs-material` — a separate repository. Not editable from here; changes belong upstream.

**Read `theme/stylesheets/tokens.css` before writing a color, a space, or a radius.** It defines the design tokens per color scheme, and every other stylesheet consumes them.

## 2. Change

- **Never hardcode a value that a token exists for.** A literal color in a component stylesheet will be wrong in one of the two color schemes, and it will be wrong silently — nothing tests it. If no suitable token exists, add one to `tokens.css` for every scheme defined there, then consume it.
- **Every visual change is two changes.** Both color schemes are defined; a change made against one has to be checked against the other.
- **Put the rule in the stylesheet that owns the concern.** The split by concern is the only organizing principle the layer has; a header rule in `content.css` erodes it.
- **Prefer a stylesheet fix to a partial override.** Overriding a partial to change presentation freezes that partial's markup forever. Reach for it only when the markup genuinely has to change.
- **When you must override a partial, note what you copied it from.** The next person needs to know what upstream version they are comparing against.
- **Do not raise specificity to win a cascade fight without understanding why you are losing it.** Long selector chains and `!important` are how this layer becomes unmaintainable. Check `extra_css` order first.
- **Client-side behavior must survive navigation.** If Material's instant-navigation feature is enabled, in-page clicks swap the document body rather than triggering a full load, and any script hooking a one-time load event never runs again — pages then render with scripts and third-party embeds dead until a manual refresh. Check the theme's `features:` list in `mkdocs.yml` and, for the live site, its serialized config. Where instant navigation is in play, custom styles belong in the document head and custom scripts must run on Material's per-navigation observable rather than on a load event.

## 3. Verify

The build is not a check on appearance. `mkdocs build --strict` passing tells you the templates compile, nothing more.

```bash
mkdocs build --strict
mkdocs serve
```

Then look, on real pages:

- **Both color schemes.** Switch the scheme and re-check every element you touched.
- **At least one narrow viewport as well as a wide one.** Responsive rules live in their own stylesheet and are easy to leave behind.
- **More than one page type.** A landing page, a long content page with a deep heading tree, a page with tabs or collapsibles, and a page with a wide table. Layout regressions usually appear only on the type you did not open.
- **Navigation between pages, not just a fresh load.** Clicking through is a different code path from loading, and is where scripting regressions surface.
- **The browser console.** A template or script error can leave the page looking almost correct.

## Report

State what the symptom was, which layer actually owned it, and what changed. Name the pages, the color schemes, and the viewport widths you checked — a claim that a visual change works means nothing without saying what was looked at. Say what you did not check.

If the finding is a configuration or deployment drift rather than a repo bug, say so plainly and do not paper over it with a stylesheet change. Nothing is committed or pushed unless you were asked to.
