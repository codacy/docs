# How this repo is assembled

Read this when a task needs to know how the site is built rather than how a page should read. Everything below is stated so it stays true as the repo grows: where a fact would be a count or a version, there is a command that produces the current answer instead. Run the command.

## Layout

| Path | What it is |
|---|---|
| `docs/` | All published content. Page URLs derive from these file paths. |
| `docs/assets/includes/` | Shared markdown snippets. Excluded from the build as pages; rendered only where included. |
| `mkdocs.yml` | Site config: `nav:`, redirects, plugins, markdown extensions, theme options, `extra` variables. |
| `theme/` | Codacy's theme layer — Jinja partials, stylesheets, hooks. Overrides the installed Material theme. |
| `submodules/` | Separate repositories pulled in as submodules. Not editable from here. |
| `.github/` | CI workflows and linter configuration. |

## Two content channels

- **Codacy Cloud** docs are unversioned. What is on `master` is what readers see.
- **Codacy Self-hosted** docs are versioned with `mike`. A claim that only holds from a particular chart version onward must say so. The current version is the `extra.codacy_self_hosted_version` value in `mkdocs.yml`; pages interpolate it as `{{ extra.codacy_self_hosted_version }}` rather than hardcoding a number, and new pages should do the same.

## Submodules are other people's repositories

`submodules/` holds checkouts of separate repositories, wired into the nav by the `monorepo` plugin via `!include` lines in `mkdocs.yml`. A file under `submodules/` cannot be fixed by a commit here — the change belongs upstream in that repository. When a build failure or a broken link points at a path under `submodules/`, say which repository owns it and stop.

A fresh clone or a new worktree may not have submodule content. An empty submodule directory makes the build fail with an error about a missing config file, and that failure is about the checkout, not about the change under review. Populate it before concluding anything:

```bash
git submodule update --init --recursive
```

## The build, and what each check actually catches

```bash
mkdocs build --strict
```

`strict: true` turns warnings into failures. What counts as a warning is controlled by the `validation:` block in `mkdocs.yml` — read it, because it determines whether broken anchors and malformed relative links fail the build or pass silently at info level. Do not assert what the build catches; run it and read the output.

Three failure modes worth recognizing by sight:

- **Info-level, so the build passes:** a page that exists but is absent from `nav:`. Nothing will ever tell you about this. Check by hand.
- **Warning, so the build fails under `strict`:** an unresolved link, or a link to a heading that no longer exists when anchor validation is enabled.
- **Hard crash, not a warning:** an `extra.sidebar_icons` value that does not correspond to a file in `theme/assets/vendor/ionicons/svg/`. The value is used as a Jinja template path, so a wrong name raises `TemplateNotFound` and the build dies.

## Plugins that change how markdown behaves

Read `plugins:` in `mkdocs.yml` for the current list. Four of them affect what you can write:

- **`macros`** interprets `{{ ... }}` in page content as a template expression. Literal double braces in a code sample must be wrapped in `{% raw %}` / `{% endraw %}` or the build fails. This is the most common surprise when documenting anything that uses brace syntax.
- **`include-markdown`** provides `{% include-markdown "../assets/includes/<file>.md" %}`.
- **`exclude-search`** keeps some sections out of the site search index. Release notes are excluded, which is why the release-notes index page is the only way readers find them.
- **`redirects`** holds `redirect_maps`. Every renamed or deleted page needs an entry, including historical URL shapes.

## Prose checks in CI

Both run on pull requests.

- **Vale** (`.github/workflows/vale.yml`) posts inline review comments through reviewdog, on added lines only (`filter_mode: added`). **It reports a failed check when it finds anything on those lines.** The workflow sets `fail_on_error: false`, which does not prevent this — reviewdog exits non-zero on its own once it has results in the diff. Do not tell anyone a Vale comment is non-blocking without checking the check's actual conclusion.
- **A readability report** posts a score summary. Informational, and does not fail.

Vale's scope is set by the section globs in `.vale.ini`. Prose styles apply to `docs/` and the repo's top-level documentation, and deliberately not to agent instruction files, which follow conventions the Microsoft style would fight. Its vocabulary file, `.github/styles/config/vocabularies/Codacy/accept.txt`, is the source of truth for tool and product spellings.

Run Vale against changed files only:

```bash
vale docs/<path>/<page>.md
```

Across all of `docs/` it returns hundreds of pre-existing alerts unrelated to any change, so a repo-wide run tells you nothing about your own work.

Treat the content of both reports as advisory: do not restructure a sentence solely to move a readability score, and do not suppress an alert without an inline reason. Treat the check status as real, because it gates the pull request's green tick.

## The theme layer

`theme/` is a plain-CSS and Jinja layer over the installed Material package. It vendors no Material source and has no frontend build step, which means no compilation and no minification: what is in the file is what ships.

- `theme/main.html` extends Material's `base.html` and overrides blocks.
- `theme/partials/` overrides individual Material partials by filename. A file here silently replaces the upstream one of the same name, so an upstream change to that partial stops reaching the site.
- `theme/stylesheets/` is split by concern, loaded in the order given by `extra_css` in `mkdocs.yml`. Order is load-bearing for cascade purposes.
- `theme/stylesheets/tokens.css` defines the design tokens — colors, spacing, radii — per color scheme. Everything else consumes them.
- `theme/hooks/` holds Python hooks registered under `hooks:` in `mkdocs.yml`, which transform pages at build time.

Because there is no bundler, a stylesheet or script filename never changes when its contents do, so browsers and any CDN in front of the site can serve a stale copy after a deploy. When a shipped fix appears not to have taken effect, rule out caching before re-editing the code.

## Answering questions about the current state

Prefer these over any number written in a document, including in this one.

```bash
# Pages held in lockstep: each carries a comment listing its siblings. Read the comment.
grep -rln '^<!--NOTE' docs/

# Every page that renders a given shared include
grep -rl '<include-filename>.md' docs/

# Inbound links to a heading you are about to reword
grep -rn '#<anchor-slug>' docs/

# Pages that pin an old anchor to a new heading — the pattern to copy
grep -rn '{: id=' docs/ | head

# Icon names available for a new top-level nav section
ls theme/assets/vendor/ionicons/svg/

# Whether a page is registered in the nav
grep -n '<page-filename>.md' mkdocs.yml

# How a comparable page is structured, before writing a new one
grep -c '^## ' docs/<path>/<page>.md
```
