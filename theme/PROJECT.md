# Codacy documentation theme

## Purpose

Replace the legacy `codacy-mkdocs-material` clone with a professional,
Mintlify-inspired visual layer while keeping the documentation static, free,
and entirely owned by Codacy.

The visual reference is the previous Codacy Mintlify proof of concept at
`https://codacy.mintlify.io/`. It is a direction for information density,
navigation, typography, and polish—not source code to copy.

## Architecture decisions

- Extend the installed `mkdocs-material` package using `theme.custom_dir`.
- Use only plain CSS, Markdown, and the smallest necessary Jinja partials.
  No vendored Material source, SCSS compilation, Webpack, Node build step, or
  copied upstream assets.
- Source colors and elevation from `../ui-components/src/theme/ColorSchemes/`.
- Use Inter for documentation text.
- Use `navigation.instant` with custom scripts bound through Material's
  `document$` lifecycle, so dynamic page content reinitializes after every
  client-side navigation.
- Do not change `submodules/chart` as part of phase 1. Its content is rendered
  by this root site's `mkdocs-monorepo-plugin`; its standalone preview is a
  separate, secondary migration.

## Functionality contract

The replacement must preserve the existing behavior before shipping:

- Search, redirects, RSS feeds, metadata generation, content inclusion,
  macros, self-hosted version deployment, and all existing MkDocs plugins.
- Cloud/Self-hosted version picker and its route-aware navigation.
- Segment analytics and feedback events, Zendesk, Disqus, edit/source links,
  last-modified metadata, preview notices, and Self-hosted `noindex`.
- Responsive navigation, accessible focus states, code-copy controls, dark
  mode, and the existing documentation URLs.

## Delivery sequence

1. Establish the new visual foundation and move the functionality contract.
2. Browser-test representative Cloud, Self-hosted, preview, search, mobile,
   feedback, and version-switcher states. Fix regressions before structural
   work.
3. Review information architecture: Cloud/API/CLI, maintained Self-hosted,
   and improved release-log sections/tabs.
4. Review the chart's standalone preview and decide whether to consume this
   theme as a submodule.
5. Remove obsolete theme processes and update contributor/runbook docs.

## Continuation checklist

At the start of every scheduled continuation:

1. Read this file and `git status`; do not overwrite unrelated local work.
2. Run `mkdocs build --strict` and record new warnings separately from the
   known content-link warnings.
3. Validate a representative page in a browser before claiming visual work.
4. Keep each change small, testable, and documented here when it changes an
   architectural decision or the next priority.

## Current state — 2026-07-10

- A fresh theme layer now exists in this directory. It has no frontend build
  tooling and only overrides the header plus Codacy-specific integrations.
- `mkdocs.yml` points to this layer, uses product design-system tokens and
  Inter, and enables native Material capabilities for search, code copying,
  navigation path, and linked tabs.
- Strict build passes after migrating Segment, Zendesk, Disqus, feedback,
  notices, source links, and revision dates. Existing content-link warnings
  remain unchanged.
- The original Material-like shell was discarded after user review. The
  replacement follows the measured Aikido/Mintlify pattern: 16px base type,
  36px H1, a narrow reading column, centered desktop search, quiet sidebars,
  and a plain TOC rail.
- The static header now owns the version `<select>` from first paint; the
  script populates it in place instead of injecting a new element on each
  page. The page title was removed from the header, light-mode logo contrast
  is fixed, and the palette control is intentionally icon-only.
- Page navigation now sits below article content. The global footer is a
  separate minimal copyright/link footer. Responsive tables retain Material's
  horizontal scrolling, and no theme scrollbar color is applied.
- Browser QA covers desktop, 390px mobile, dark-mode color tokens,
  header/version/footer DOM structure, code cards, raw data tables, TOC scroll
  state, and the search lifecycle. Keep representative browser checks in the
  delivery workflow whenever these components change.
- Follow-up shell/component loop: verified the custom search opens and closes
  correctly; suppressed Material's sidebar scrollbar treatment; raised the
  minimum size for legacy inline-styled data tables; and softened callouts.
  The homepage now has a product-oriented title and introduction without
  changing any destinations. Rebuild and visually re-check those latest edits
  before moving on to structural navigation work.
- The displayed `⌘ K` search affordance now works through
  `docs/assets/javascripts/docs-theme.js`, including `Ctrl+K` on non-macOS
  keyboards. Keep it compatible with non-instant Material navigation.
- Restored the custom 404 compatibility behavior for legacy Zendesk support
  ticket URLs in `404.html`.
- Runtime alignment: `requirements.txt` now pins MkDocs Material 9.7.6, the
  current supported release. Validate the exact pinned environment before
  shipping; the desktop environment previously had 9.7.1 while CI declared
  the obsolete 8.2.3.
- Consolidated a second visual/functional pass: removed the obsolete
  version-picker stylesheet, rebuilt sidebar hierarchy selectors to avoid
  recursive indentation, restored browser-native sidebar scrolling, moved
  article navigation to the final action after feedback, and added runtime
  wrappers for raw HTML tables so they scroll safely on small screens.
- Parallel audits completed: the contributor guide now documents the plain-CSS
  workflow; a clean temporary environment builds with the pinned Material
  9.7.6; and all audited Cloud, Self-hosted, and preview behavior remains
  present. Version selection now waits for sitemap data and degrades safely;
  preview branch links, keyboard-accessible search, and detailed negative
  feedback are restored. Remaining phase-1 work is visual component polish
  and browser verification after each change, not architecture rediscovery.
- The superseded `theme/` prototype and its unused stylesheet were removed
  after explicit user direction. `theme/` is now the only theme
  source of truth; do not resurrect the old full-template approach.
- The Mintlify reference currently redirects to its sign-in page, so visual
  comparisons use its established direction rather than live DOM inspection.
- Latest refinement loop: the search is now an intentional full dialog with
  backdrop, focus return on Escape, and an accessible trigger state; code,
  highlight, copy, tab, and all used admonition variants share the same quiet
  component system; Inter is loaded at the exact 400/500/600/700 weights used
  by the theme. The mobile header retains a cropped Codacy mark instead of
  losing the brand at narrow widths. The pinned strict build and static
  Cloud/Self-hosted/preview functional QA pass after these changes.
- Live review completed the final responsive details: Material's inherited
  floating search inner element is explicitly neutralized so the dialog stays
  centered on desktop and full-width on mobile; the search trigger synchronizes
  its expanded state with backdrop dismissal; and the secondary TOC has a
  restrained active marker rather than a changing card/padding treatment.
- Wide-screen review now uses the Aikido, Lovable, and Replit documentation
  references as a measured layout system: a 288px primary rail, 608px reading
  column, 224px TOC allocation, 48px gutters, and a 28px desktop wordmark.
  The shell is capped at 96rem so those rails stay stable at 1280px, 1728px,
  and 2560px rather than stretching the text. Browser checks at those widths
  and at 390px confirmed the desktop composition and mobile header remain
  intact. The root navigation link remains available; visual work must not
  trade away existing navigation behavior.
- Scheduled review on 2026-07-11 additionally verified the 1728px dark theme
  and the documentation landing page. The shared color tokens retain readable
  header controls, code/data surfaces, callouts, cards, navigation, and TOC
  without introducing a dark-mode-only override layer.
- Sidebar interaction pass: removed Material's inherited wide-rail end padding
  that restricted the 288px desktop rail to a 168px navigation column. The
  usable navigation is now 250px, active rows use a stable Mintlify-style tint
  instead of a shifting left rule, and nested indentation is shallower. The
  mobile drawer now uses a 320px maximum width rather than Material's 194px
  default; its native flex/chevron behavior, overlay dismissal, and route
  selection remain intact at 390px.
- Right-rail/article-ending pass: the native MkDocs TOC title is now “On this
  page,” so the visual label and accessible navigation name stay synchronized.
  Scroll tracking retains the restrained active marker. The feedback surface
  was reduced from a 243px card to a 142px desktop row (192px stacked on
  mobile), while preserving Yes/No analytics, the focused qualitative form,
  GitHub issue fallback, edit link, and support contact. Mobile pagination and
  the minimal global footer were rechecked at 390px.
- Search command-palette pass: the site now uses Material 9.7.6's native
  `material/search` worker instead of the legacy alias, while retaining the
  custom Mintlify-style trigger. Paste, autofill, composition input, and typed
  input all reach the same search pipeline. The opened surface is a single
  680px command card with concise two-line excerpts, stable result spacing,
  native scrollbars, light/dark treatment, and viewport-bounded results.
  Dialog naming, live result counts, focus containment/restoration, background
  inerting, and platform-correct keyboard hints are part of the theme rather
  than injected page markup. Wide 1728px and medium 1280px browser checks pass;
  the 390px rules cap the card against `100dvh` and safe-area insets.
- The strict Cloud, preview, and Self-hosted build matrix passes with
  `material/search` and `mkdocs-exclude-search==0.6.6`. Each build produces the
  worker and index, retains 708 searchable documents, and excludes all 502
  intended release-note records. Existing unresolved-link notices, the one
  release-note file omitted from nav, and the monorepo plugin deprecation are
  pre-existing cleanup items, not theme regressions.
- Shell refinement pass: page titles now follow Mintlify's 30px desktop / 28px
  mobile scale, H2 is 24px, breadcrumb and article text share an exact left
  edge, and the wide TOC grows to a useful 256px allocation. The primary rail
  starts slightly above the heading while the outline aligns with it, matching
  the intentional stagger in the Aikido/GitBook references. At 960px the
  article + outline cluster is centered instead of leaving an unused right
  gutter; at 1220–1279px a compact three-rail grid avoids overflow; 1280px and
  1728px use the full 288/608/224–256 rail system.
- Sidebar cascade/accessibility pass: inactive and active rows now share the
  same 14px type, 33px height, and 5.44px/8.8px padding, so selection no longer
  shifts text or changes row height. Group labels use 12px sentence case,
  native scrollbars replace Material's blue thin scrollbar, and light muted
  text was darkened to a verified 4.77:1 contrast on white. The header logo is
  explicitly retained at tablet widths and becomes a 24px Codacy mark below
  432px, still larger than utility icons.
- Mobile navigation preserves Material's nested/back behavior but now opens
  from a real named button. Enter, Space, pointer activation, Escape, focus
  entry/return, focus containment, `aria-expanded`, and background inerting
  are handled by `docs-theme.js`. Breadcrumbs have a distinct landmark name,
  the current primary link exposes `aria-current="page"`, and empty outlines
  are removed from the accessibility tree. These are attribute/behavior
  enhancements only; navigation destinations and hierarchy are unchanged.
- Article-component pass: all 229 callouts now render at 14px/1.65 instead of
  Material's inherited 10.24px, using a quiet full-surface tint and restrained
  one-pixel border rather than a saturated title strip plus heavy left rail.
  Note/tip/warning/important variants, nested callout content, and mobile
  layouts were visually checked in light and dark themes. Three capitalized
  `Important` declarations and one malformed `notes` declaration were
  normalized without changing their content or links.
- Code blocks retain the dark Codacy surface in both page themes but now use an
  accessible GitHub-dark-style syntax palette. The current Material 9.7
  `.md-code__button` is explicitly styled as a visible 32px copy control with
  hover and keyboard focus states; the obsolete `.md-clipboard` overrides were
  removed. Copy interaction and long YAML/Bash rendering were rechecked.
- Data-table pass: the supported-languages matrix no longer forces 8px text or
  white links in light mode. All prose tables use the 13px baseline and the
  native Material scroll wrapper as the single overflow owner, including the
  1,134px language matrix inside 390px and 1,280px viewports. The runtime no
  longer adds a redundant inner scroller around Material or highlight tables.
- Screenshots wider than 280px are framed consistently even when several occur
  inside a paragraph; small icons and table imagery remain untouched.
  Blockquotes now use a quiet two-pixel rail and 16px inset. Native
  `pymdownx.details` and `pymdownx.tabbed` support is enabled without custom
  JavaScript; a temporary fixture verified pointer/keyboard disclosure,
  Cloud/Self-hosted tab switching, code tabs, and table tabs, then was removed.
- Article-ending pass: revision output is now a semantic “Last updated” row
  with a `<time>` value. Feedback is an `aria-pressed` choice group with a
  changeable selection, described counter, visible selected/disabled states,
  and a focused live completion status. GitHub links use safe new-window
  semantics and encoded titles. Next-only pagination occupies the right
  desktop column and resets to the single mobile column; mobile feedback and
  footer targets are 44px. The footer has a no-JavaScript 2026 copyright.
- Homepage pass: the landing page now uses a dedicated 768px desktop content
  track with no empty TOC allocation, while ordinary articles remain at the
  608px reading measure. “Get started” and “Use Codacy” are real navigable
  sections; all seven destinations use one card system with concise copy,
  stable equal-height rows, a subtle action arrow, decorative icon semantics,
  preview-safe relative asset URLs, and a clearly emphasized five-minute
  quickstart. It collapses to one 364px card column at 390px without overflow.
- Release-log pass: the intended no-TOC state now uses Material's supported
  `hide: [toc]` metadata. Year and Self-hosted version labels are semantic H3
  scan anchors, and the 132-entry index is a compact divided chronology rather
  than generic bullets. Release detail tool-version lists use a 14px two-column
  desktop grid and one mobile column. The index is 704px at desktop and remains
  a single readable stream at 390px; destinations and release ordering are
  unchanged.
- Edge-state pass: 404 pages now provide centered Browse/Search recovery
  actions and no empty rails. The exact legacy Zendesk path matching,
  destination, visible fallback, and five-second `location.assign` redirect
  remain verified. Header drawer/search controls are enhanced labels tied to
  Material's native checkboxes, so pointer toggling still works without custom
  JavaScript while Enter/Space, focus return, inerting, and focus trapping work
  with it. The version selector enables immediately after `versions.json` and
  fetches only the selected version's sitemap instead of all 34 on every page;
  initial Self-hosted builds render their actual version instead of Cloud.
- Cleanup in the same pass removed the unused empty `overrides/` prototype,
  dead header selectors, and the obsolete legacy search-plugin condition. The
  active custom header, search, source-file, footer, feedback, and 404 partials
  remain intentionally small overrides over Material 9.7.6.
- Asset-delivery pass: Inter 400–700 and Roboto Mono 400–700 now ship as
  self-hosted Latin/Latin-ext variable WOFF2 assets with their OFL license.
  The rendered site makes no Google Fonts request, so Cloud, preview, and
  Self-hosted typography is private, offline-safe, and independent of an
  external font service while retaining the exact theme families and weights.
- Image-stability pass: a dependency-free MkDocs hook adds intrinsic dimensions
  and asynchronous decoding to resolved local content images before first
  paint. It leaves the first wide image eager and lazy-loads later screenshots,
  preserves author-provided attributes, and skips remote or unresolved sources.
  The runtime framing pass now uses those declared dimensions immediately,
  avoiding a visible border/radius change after a screenshot finishes loading.
- Wide-shell correction: live 1728px comparisons against Aikido, Lovable, and
  Replit exposed that the previous 96rem shell left the three-rail composition
  112px left of the viewport center. At 1440px and wider the shell now uses the
  shared reference geometry—288px navigation, 768px article, 224px outline,
  48px gaps—inside a centered 90rem frame. The compact 1280px article remains
  608px so the transition does not overflow or abruptly squeeze the rails.
- Contextual-sidebar pass: removed Material's `navigation.sections` expansion,
  which exposed roughly 90–100 navigation rows on every desktop page. The
  current root section now opens by default while other product areas remain
  compact native disclosures; all destinations and the existing mobile
  drill-down behavior are preserved. This is the phase-1 bridge to the later
  Cloud/API/CLI/Self-hosted/Release top-level information architecture.
- Rail-alignment pass: desktop navigation and “On this page” now share the
  breadcrumb baseline, matching the Aikido reference instead of placing the
  outline beside the H1. The outline stays hidden until the full three-rail
  breakpoint rather than creating an asymmetric article+TOC layout at
  960–1219px. Sidebar group labels are 13px and active rows use an 8px radius;
  header search/version controls are the 36px height used by the references.
- Article-header pass: every page now has a native 36px “Copy page” action that
  copies clean article text while excluding navigation, feedback, revision,
  and permalink UI. It becomes an accessible icon-only control on mobile and
  announces success/failure through a live region. Pages with an authored
  frontmatter description receive the slightly larger Mintlify-style lead;
  pages without one keep their existing first-paragraph typography.
- Brand pass: the header now uses dedicated dark/light wordmark assets rather
  than flattening the dark logo with `brightness(0)`. Both schemes retain the
  Codacy blue “Docs” accent, while the mobile crop still shows the 24px mark.
- Sidebar reference pass: aligned the primary rail more closely with Aikido's
  compact 288px documentation navigation. Desktop rows now use the full rail,
  uppercase 12px group labels, quiet chevrons, a border-free text-led active
  state, and contained native scrolling. The mobile drawer keeps Material's
  native behavior but no longer adds a separator border when open.
- Instant-navigation pass: enabled Material's base instant navigation only.
  The version picker and theme enhancements now subscribe to `document$`, and
  the custom TOC listener is cleaned up between page injections. Prefetching,
  previews, and the progress indicator remain intentionally disabled.

## Self-paced loop — continuation log

This section records incremental Mintlify-matching passes run under the
self-paced loop. Each entry is one small, browser-verified, strict-build-clean
change. Note: `mkdocs serve` does not hot-reload `theme/` assets in
this setup — restart the preview server after editing theme CSS/partials before
re-checking in the browser.

- Loop pass 1 (2026-07-11): fixed anchor/TOC/deep-link scroll offset. Added
  `html { scroll-padding-top: 5rem }` so in-page anchors, TOC clicks, `#`
  permalinks, and search deep links no longer scroll the target heading under
  the 64px sticky header. Verified live: a fresh load to
  `…/supported-languages-and-tools/#docker-images-of-supported-tools` now lands
  the heading ~134px from the viewport top (clear of the 65px header) with the
  matching TOC item active, versus being clipped under the header before.
  Strict build passes and the rule ships in the built `stylesheets/theme.css`.
- Preview watch: `.claude/launch.json` now runs
  `mkdocs serve --watch theme --watch docs/assets`, so theme CSS and
  partial edits rebuild live. Restarting the preview server after theme edits is
  no longer required (server log confirms both dirs are watched).
- Loop pass 2 (2026-07-11, user-directed): three composition fixes.
  (a) Sidebar alignment — section children were indented 13px more than the
  top-level "Documentation home" link. Removed the level-1 nested-nav
  margin/list padding so children now align flush with top-level links
  (both at left=45px); deeper sub-items keep a subtle `.8rem` indent for
  hierarchy (measured left=58px).
  (b) Header regroup — the version `<select>` was floating mid-right by the
  search box. Header grid is now `auto 1fr minmax(15rem,30rem) 1fr auto auto`
  with the version selector on `grid-column: 5` and the palette on `6`, so the
  version picker sits directly next to the theme toggle (measured 5px gap) while
  search stays centered. Mobile resets both to `grid-column: auto` so the 6-col
  desktop grid doesn't leak into the narrow header (verified intact at 375px).
  (c) Type sizes — breadcrumb (`.md-path`, previously unstyled Material 11.2px),
  TOC title (12px), and TOC links (12.48px) are now all `.8125rem` (13px),
  matching the ~13px norm used by Mintlify/Docusaurus for secondary text.
  Desktop, mobile, and strict build all verified.
- Loop pass 3 (2026-07-11): table legibility. Normal prose tables rendered at
  Material's default 10.24px, small versus Mintlify's ~13px. Bumped
  `table:not([class]):not([style])` to `.8125rem` (13px) with airier
  `.6rem .9rem` cells and a header bottom border. The `:not([style])` scope
  leaves inline-styled tables — notably the wide supported-languages matrix,
  which carries `style="font-size:.5rem"` to fit ~10 columns — untouched (and an
  inline style would win over the rule anyway). Verified live: the 2-column
  "Docker images of supported tools" table is now 13px with 9.6/14.4px cell
  padding while the matrix stays 8px/compact; strict build passes.
- Loop pass 4 (2026-07-11): dark-mode verification + two small Mintlify touches.
  Verified dark mode across content, code, callouts, and the restyled tables —
  all tokens resolve with good contrast (e.g. dark table th bg #11151D, text
  #F9FAFB, border #344056); no dark-only override layer needed. Added
  `html { scroll-behavior: smooth }` with a `prefers-reduced-motion` guard so
  anchor/TOC/deep-link jumps glide (pairs with the pass-1 scroll-padding fix),
  and gave inline code a hairline border via `.md-typeset :not(pre) > code`
  (scoped so block code inside `pre` is untouched — verified: inline border
  1px/#344056, block code 0px, both fonts unchanged at 13.6px) plus
  `.md-typeset a code { color: inherit }` so code inside links takes the link
  color. Verified live in light and dark; strict build passes.
- Loop pass 5 (2026-07-11): framed screenshots, a strong Mintlify signature that
  was missing (content images had no border/radius/shadow). Added a JS pass in
  `docs/assets/javascripts/docs-theme.js` that tags an image `.docs-image` only
  when it stands alone in an empty-text paragraph (one `<img>`, no sibling text)
  and its `naturalWidth >= 280px`; the class adds a `1px` border, `.5rem` radius,
  and soft `--docs-shadow-1`. Note the content root is `article.md-typeset`
  (the article *is* `.md-typeset`), so the selector is `.md-typeset img`, not
  `.md-typeset article img`. The empty-paragraph + size guards leave inline
  badges, emoji, and `.tc-icon` card icons untouched. Verified live: three
  screenshots (705/1172/1240px) framed on the organizations page; on the badge
  page the 825px and 1280px screenshots framed while a 260px badge-like image
  was correctly left unframed. JS syntax check and strict build pass.
