---
name: docs-write
description: Write a documentation page that does not exist yet in docs/ — a how-to procedure, a concept explainer, an API or CLI reference, or a troubleshooting page. Triggers on requests like "write a doc for X", "add a page about Y", "document this new feature", "we need a guide for Z". Use docs-edit instead when the target page already exists, and docs-release-note for announcing a shipped change. Carries the doc-type structures, the templates, and the navigation registration that the build does not check.
---

# Writing a new page

Rarer than editing, and it fails differently: a new page can be well written and still be invisible, unfindable, or duplicating a page that already covers the subject. Confirm the page is needed and register it correctly.

Read [`.claude/reference/formatting.md`](../../reference/formatting.md) and [`.claude/reference/voice.md`](../../reference/voice.md) before writing. `CLAUDE.md` holds the hard rules and the silent-failure mechanics.

## 1. Investigate

**Check the subject is not already documented.** Search before writing. A second page on a subject splits the reader's search results and both pages then rot at different rates.

```bash
grep -ril '<distinctive term>' docs/
```

If a page covers part of the subject, the correct outcome is usually an edit to that page — switch to `docs-edit` and say why.

**Pick the doc type.** This determines the page's entire shape. If the request maps to two types, it is two pages or one page with a clear primary type; do not blend them.

| Type | Use when | Shape | Reference |
|---|---|---|---|
| How-to | The reader follows steps to reach an outcome | Orientation paragraph → numbered `##` steps, each with an explicit `{: id="..."}` anchor → **Next steps** | `docs/getting-started/codacy-quickstart.md` |
| Concept | The reader needs to understand something before acting | Descriptive lead, no steps → one `##` per sub-topic → description lists or a comparison table → **See also** | `docs/organizations/what-are-organizations.md` |
| Reference | The reader looks up a specific capability | Short intro → one `##` per capability or endpoint group → tagged code blocks | `docs/codacy-api/using-the-codacy-api.md` |
| Troubleshooting | The reader has hit a specific failure | `description:` frontmatter → numbered checklist of things to try → a named way to get help | `docs/faq/troubleshooting/why-cant-i-see-my-organization.md` |

Open the reference page and read it for shape and tone before writing. If a named page no longer exists, find the closest current page of the same type and use that instead.

**Establish the facts.** Every step, label, endpoint, filename, and default has to come from code, a shipped UI, an existing page, or the person asking. Anything else gets a `<!-- TODO: verify ... -->` marker in place. Write the rest of the page around the markers rather than stopping.

**Look for boilerplate that exists.** List `docs/assets/includes/` and check whether the notice or warning you are about to write is already a snippet. Include it rather than duplicating it:

```
{% include-markdown "../assets/includes/<file>.md" %}
```

**Decide where the file goes, and say so before writing.** Put it in the folder of the closest related page. If no folder fits, that is an information-architecture question — describe the options and let a human choose. Do not create a new top-level section on your own initiative.

## 2. Write

Start from the matching skeleton in [`.claude/templates/`](../../templates/). Delete its instructional comments before saving.

- Filename is kebab-case and matches the page title: a page titled "Adding a Codacy badge" is `adding-a-codacy-badge.md`.
- Give every `##` in a how-to an explicit anchor: `## 1. Add the provider {: id="add-the-provider"}`. Explicit anchors survive later rewording, which is the whole point.
- One `description:` in frontmatter, one or two sentences. It is what search results and link previews show.
- Screenshots go in an `images/` folder beside the page, with alt text.

## 3. Register it

Two edits in `mkdocs.yml` that no check will remind you about:

1.  **A `nav:` entry.** Without it the page builds, is reachable by URL, and appears in no menu. MkDocs reports the omission at info level, so the strict build passes. Verify by eye:

    ```bash
    grep -n '<new-filename>.md' mkdocs.yml
    ```

2.  **An `extra.sidebar_icons` entry, only if you added a top-level `nav:` section** — which you should not have done without approval. The icon set is closed; the value is a template path, so a name that does not exist crashes the build with `TemplateNotFound`. Pick from:

    ```bash
    ls theme/assets/vendor/ionicons/svg/
    ```

    If nothing fits, say so and stop.

No redirect is needed for a genuinely new page. One is needed the moment you rename or move it.

## 4. Verify

```bash
mkdocs build --strict
```

- Confirm the `nav:` entry by eye — the build will not.
- Read the page top to bottom as a reader who has not seen the feature. Check it against the readability failure modes in `.claude/reference/formatting.md`: can it be scanned, is the procedure numbered, is every container the right one for its content.
- Confirm links are relative paths ending in `.md`, and that images have alt text.
- Run Vale on the new file only: `vale docs/<path>/<page>.md`. Advisory.

## Handoff

State the doc type and why, where the file went and why, every remaining `TODO: verify` marker, that the `nav:` entry is present and was checked by hand, which checks ran, and which you could not run. Nothing is committed or pushed unless you were asked to.
