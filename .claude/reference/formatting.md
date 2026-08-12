# Formatting and page design

The design contract for anything inside `docs/`. It applies identically whether you are editing one sentence, writing a page from nothing, or reviewing someone else's work. A page that reads as a wall of text has failed at its only job, so these rules outrank voice and wording.

Confirm which markdown extensions are available before using syntax not listed here: read `markdown_extensions:` in `mkdocs.yml`. This repo is plain Markdown with Python-Markdown extensions. It is not Mintlify and it is not MDX, whatever the visual styling suggests — JSX-style components such as `<Steps>`, `<Tabs>`, or `<Cards>` do not exist and will render as literal text.

## Readability failure modes

Check for these first, in this order. Each one makes a page unusable regardless of how accurate its content is.

1.  **Unbroken prose.** A screenful of text with no heading, list, or table gives a scanning reader nowhere to land. Anything longer than roughly four paragraphs needs a structural break, and the break has to be meaningful — not a heading inserted every N lines.
2.  **Procedure written as narrative.** If the reader has to perform steps in order, the page must be numbered steps. A paragraph describing five actions in sequence is a defect, not a style preference.
3.  **Wrong container for the content.** A table whose cells hold sentences, a list that should be a table, a code block holding prose, an admonition holding the page's main content. Each is harder to read than the correct container.
4.  **Undifferentiated emphasis.** Bold on every other phrase reads the same as bold on nothing. Bold is for UI labels the reader must find on screen, and for the one clause in a paragraph that changes their decision.
5.  **Heading levels that do not describe a hierarchy.** Skipped levels, or headings whose nesting does not match how the content actually contains itself.
6.  **A section that is really a page.** When one `##` section outgrows the rest of the page combined, the page has two subjects. Flag it as a structure question; do not split it on your own initiative.

## Page shape

- **Lead with orientation.** One or two sentences on what the page covers and why the reader is here, before any step or subheading. Never open on an admonition.
- **Headings phrase the reader's question,** not a topic label: "Why can't I see my organization?" over "Organization visibility". Sentence case.
- **Never skip a level.** `##` then `###` then `####`. Needing a fifth level means the page should be two pages.
- **A trailing section that points forward** — next steps, related pages, or a support fallback — is expected on most page types. Which one depends on the type; see the skill you are running.
- **The generated "On this page" nav is built from headings** at the depth set by `toc_depth` in `mkdocs.yml`. A long page whose headings all sit below that depth gets an empty nav. Worth mentioning in a review, well below the failure modes above.

## Admonitions

Syntax is `!!! note`, with the body indented four spaces. Available types include `note`, `tip`, `info`, `warning`, `important`, `example`, and `quote`.

Two forms are both valid and both in use here. `!!! note` followed by an indented body renders the type name as the heading. `!!! note "Some text"` puts that text in the heading and needs no body — used throughout this repo for one-line asides, including ones containing markdown links, which do render inside the title. Do not convert between the forms while making an unrelated change; match the page. Two things to get right in the title form: no leading space inside the quotes, and no closing period.

- One admonition carries one message at one severity. Two messages means either two blocks in different places, or prose.
- Place it directly above the step or paragraph it modifies, never at the top of a page as an introduction.
- Never stack two in a row and never nest one inside another. Stacking is a signal that the surrounding prose is doing too little work.
- Roughly two per `##` section is the ceiling. Past that, readers stop seeing them.
- Use `warning` and `important` only for consequences the reader cannot undo or would not expect. Downgrade anything else to `note`.

## Tables and description lists

Use a table only when a reader compares two or more attributes across three or more items, scanning cell to cell. Everything else is a list.

- A cell that needs more than one short sentence means the content is not tabular.
- A column where every row holds the same value, or only one row holds anything, is not a column.
- The alternative is the description-list pattern used throughout this repo: `-   **Term:** explanation`. It handles long explanations that tables cannot.
- Very wide comparison tables in this repo are written as raw HTML `<table>` rather than pipe syntax, because pipe tables cannot hold the required markup. Match whichever form the page already uses.

## Links

- **Relative paths ending in `.md`**: `[organizations on Codacy](../organizations/what-are-organizations.md)`. MkDocs resolves and rewrites these.
- **Never the directory form** `../organizations/what-are-organizations/`. It silently resolves to the wrong URL and the strict build only catches it when `validation:` in `mkdocs.yml` promotes `unrecognized_links` — check whether it does before relying on that.
- Link text describes the destination. Never "here", "this page", or a bare URL in prose.
- Anchors on the same page: `[the section](#anchor-id)`. Across pages: `path/to/page.md#anchor-id`.

## Images

- Live in an `images/` folder beside the page that uses them, filenames lowercase and hyphenated.
- Alt text is mandatory and describes what the image shows, not that it is an image: `![Adding an organization](images/organization-add.png)`.
- A screenshot has to earn its place. It is worth including when it shows where something is on screen, and not worth including when the surrounding sentence already says everything the picture does.

## Code, lists, and content that hides

- **Fenced code blocks always carry a language tag.** Use `text` when there is no better fit. Never put prose in a code block for emphasis.
- **Lists**: hyphens for unordered, repeated `1.` for ordered, four-space indent for continuation. Two levels of nesting maximum — a third level means the content wants to be a subsection or a numbered procedure.
- **Collapsibles** (`pymdownx.details`) and **content tabs** (`pymdownx.tabbed`) both hide content behind a click. Pick one mechanism per page, and use it for genuine alternatives — one path per operating system, per provider, per install method — never to shorten a page that is simply too long.
- Content behind a tab or a collapsible is invisible to a reader scanning the page and to anyone using in-page search. Nothing required for the task at hand goes in there.

## Shared includes

Repeated boilerplate lives in `docs/assets/includes/` and is pulled in with `{% include-markdown "../assets/includes/<file>.md" %}`. Before writing a new notice, warning, or disclaimer paragraph, list that folder and check whether it already exists.

Editing a file in that folder changes every page that includes it. Find them first, and read all of them:

```bash
grep -rl "<include-filename>.md" docs/
```

Wording that fits the page you came from is frequently wrong on the others. If it cannot be made to fit all of them, the right answer is prose on your page, not a rewritten include.

## Frontmatter

- `description:` — one or two sentences, used for search results and social previews. Expected on substantive pages.
- Release notes carry their own RSS fields; the `docs-release-note` skill covers them.
- Do not invent frontmatter keys. Only keys already used in `docs/` or consumed by a plugin in `mkdocs.yml` do anything.
