---
name: docs-release-note
description: Write a release note announcing a change that has shipped, for Codacy Cloud or Codacy Self-hosted. Triggers on requests like "draft a release note", "announce that X shipped", "write up this month's changes", "add a release note for the new Y". Release notes have their own filename convention, their own deliberately different voice, and require three edits rather than one — the third is the one that gets forgotten and that no check catches.
---

# Writing a release note

Three things make this different from every other page in the repo: the filename is date-based rather than title-based, the voice is a deliberate exception to the house style, and registering the note takes three edits instead of one. Get the third edit wrong and the note is simply absent from the page readers browse, with nothing warning anyone.

Read [`.claude/reference/voice.md`](../../reference/voice.md) — specifically the release-notes exception — before writing.

## 1. Investigate

**Confirm it shipped.** A release note describes something a reader can use now. If the change is merged but not released, say so and stop; that is a decision for a human.

**Establish what actually changed for the reader**, not what changed in the implementation. The note answers: what is different, what do I do to use it, do I have to do anything. Anything you cannot confirm gets a `<!-- TODO: verify ... -->` marker.

**Pick the channel and the shape.** Cloud and Self-hosted have separate directories, separate index sections, and separate nav trees. A monthly roundup and a single-topic note are different files with different names.

**Read the most recent note in the same directory.** It shows the current conventions for length, heading form, and closing line more reliably than any description here.

## 2. Write the page

Start from [`.claude/templates/release-note.md`](../../templates/release-note.md).

**Filename** — the one place kebab-case-from-the-title does not apply:

| Kind | Filename |
|---|---|
| Single-topic Cloud note | `docs/release-notes/cloud/cloud-YYYY-MM-<slug>.md` |
| Monthly Cloud roundup | `docs/release-notes/cloud/cloud-YYYY-MM.md` |
| Self-hosted release | `docs/release-notes/self-hosted/self-hosted-vX.Y.Z.md` |

**Voice.** This is the one page type that is first-person, cheerful, and allowed an exclamation mark: "We've upgraded how ShellCheck works on Codacy! While you previously had to configure ShellCheck analysis directly through the Codacy UI, you can now manage your settings using a configuration file." Do not flatten it into the neutral instructional voice, and do not carry this voice into any other page type. Both are regressions.

**Content.** Short. One topic for a single-topic note. State what changed, then what the reader does about it if anything. A screenshot if there is a visible UI change, with alt text. Close by naming a way to get help, matching how recent notes do it.

The formatting rules in [`.claude/reference/formatting.md`](../../reference/formatting.md) still apply — a release note is short, not exempt.

## 3. Register it: three edits

1.  **The page**, named as above.

2.  **A bullet in `docs/release-notes/index.md`.** Under the correct channel section and the correct `### <year> {.release-series}` heading, newest first. Link text is the page title.

    ```markdown
    -   [<Page title>](cloud/cloud-YYYY-MM-<slug>.md)
    ```

3.  **A `nav:` entry in `mkdocs.yml`**, under `Release notes` → the channel → the year, also newest first.

**Edit 2 is the one that gets skipped.** Nothing catches it: the page is in `nav:`, so the build passes, and the note is missing from the index. That index matters more here than elsewhere because release notes are excluded from the site search index — check `exclude-search` in `mkdocs.yml` — so the index link and the RSS feed are how readers find them.

If the year heading does not exist yet, add it in the same form as the existing ones, in both the index and the nav.

## 4. Verify

```bash
mkdocs build --strict
```

- Confirm all three edits by eye. Name each one in the handoff.
- Confirm both lists are newest-first, and that the note is under the right year in both.
- Confirm the link in `index.md` resolves to the new file.
- Run Vale on the new file only: `vale docs/release-notes/<channel>/<file>.md`. Expect it to flag first person and the exclamation mark; those are the intended exception here, so leave them.

## Handoff

Name all three files you edited, explicitly. Note any `TODO: verify` markers, which checks ran, and which you could not run. Nothing is committed or pushed unless you were asked to.
