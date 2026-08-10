---
description: How the local configuration and baseline files used by the Codacy Analysis CLI work, and how to edit them.
---

# Codacy Analysis CLI configuration file

The [Codacy Analysis CLI](codacy-guardrails-getting-started.md#install-cli) (`@codacy/analysis-cli`, the `codacy-analysis` command) is what powers Codacy Guardrails' local analysis, and it's the same CLI you install manually for [local analysis outside an IDE](../repositories-configure/local-analysis/client-side-tools.md). It keeps its own configuration in two files inside `.codacy/`:

-   `.codacy/codacy.config.json`: which tools and patterns run, and any parameter overrides
-   `.codacy/codacy.config.baseline.json`: a snapshot used to keep future updates precise

!!! note
    This is different from the [Codacy configuration file](../repositories-configure/codacy-configuration-file.md) (`.codacy.yml`/`.codacy.yaml`), which configures Codacy Cloud's own analysis. The two aren't related.

## The configuration file {: id="configuration-file"}

`codacy-analysis init` creates `.codacy/codacy.config.json` the first time you run it: Guardrails does this for you automatically. It looks like this:

```json
{
  "version": 1,
  "metadata": {
    "source": "auto",
    "provider": null,
    "organization": null,
    "repositoryId": null,
    "repositoryName": null,
    "createdAt": "2026-08-10T10:00:00.000Z",
    "updatedAt": "2026-08-10T10:00:00.000Z",
    "languages": ["Javascript"]
  },
  "tools": [
    {
      "toolId": "ESLint9",
      "patterns": [
        { "patternId": "ESLint9_no-unused-vars" },
        { "patternId": "ESLint9_complexity", "parameters": { "max": "15" } }
      ]
    }
  ],
  "exclude": ["**/dist/**"]
}
```

| Field | Meaning |
|---|---|
| `metadata.source` | How the file was generated: `local` (default detection, no flag), `auto` (`init --auto`), `default` (`init --default`), `remote` (`init --remote`, synced from Codacy Cloud), or `container` (`init --container`, from a `.codacyrc`) |
| `tools[].toolId` | The tool's identifier (for example `ESLint9`, `PMD7`). Run `codacy-analysis info` to see the exact IDs registered for your repository |
| `tools[].patterns` | The **enabled** patterns for that tool. There's no `enabled: false` flag: a pattern not listed here is disabled |
| `tools[].patterns[].parameters` | Parameter overrides for that pattern, as string values |
| `tools[].exclude` / top-level `exclude` | Glob patterns excluded from that tool, or from analysis entirely |
| `tools[].useLocalConfigurationFile` | When `true`, the tool runs from its own native config file (for example `.eslintrc.json`) instead of the patterns listed here (see [customizing analysis rules](codacy-guardrails-how-to-configure-rules.md)) |

To hand-edit the file: remove a pattern's entry to disable it, add one to enable it, or add a `parameters` object to tune it. Save the file and run `codacy-analysis analyze`: no extra command is needed to pick up manual edits.

## Disabling a pattern from the editor {: id="disabling-a-pattern"}

You don't have to hand-edit the file for the most common change. When Codacy Guardrails flags an issue in your editor, open the Quick Fix menu (the lightbulb) on the highlighted line and choose **Codacy CLI: Disable pattern**.

!!! note
    This action only appears when your repository is connected to Codacy Cloud and you have admin permission on it: it isn't available for a purely local, cloud-disconnected setup.

This doesn't edit `codacy.config.json` directly: it calls the Codacy API to disable the pattern for the repository on Codacy Cloud. Your local configuration only picks up the change the next time it's regenerated from Codacy Cloud, either by running `codacy-analysis update-config` yourself, or incidentally, whenever Guardrails re-syncs your configuration in the background (see [does changing configuration in the UI apply automatically?](codacy-guardrails-faq.md#when-i-change-some-analysis-configuration-in-the-ui-is-it-automatically-applied-to-guardrails)).

For a purely local setup with no Codacy Cloud connection, there's no editor action for this: edit `tools[].patterns` in the file directly, as described above.

## The baseline file {: id="baseline-file"}

Every time `init` or `update-config` writes `codacy.config.json`, it also writes `.codacy/codacy.config.baseline.json`: an exact snapshot of what the generator produced, before any manual edits. Its only purpose is letting a later `update-config` run tell your deliberate edits apart from whatever the generator would have produced anyway.

When you run `codacy-analysis update-config` (or Guardrails triggers the equivalent automatically), it reconciles three versions of the config:

-   **base**: the baseline snapshot (the generator's last output)
-   **current**: your live config (baseline plus your edits)
-   **next**: what the generator produces right now, for your repository's current stack

It adds whatever is new in `next` but wasn't in `base` (a newly detected language or framework), removes whatever was in `base` but isn't in `next` anymore (a language or framework that's gone), and otherwise leaves `current` untouched: patterns you disabled stay disabled and parameters you tuned survive.

!!! important
    If `.codacy/codacy.config.baseline.json` is missing, for example because `.codacy` was gitignored and a teammate cloned the repository without it, `update-config` can't tell "you disabled this pattern" apart from "this pattern was never selected." It falls back to an additive merge instead: your edits are kept, but tools or patterns for a language/framework that's no longer in the repository won't be pruned, and disabled patterns may reappear. The CLI prints a warning when this happens.

    To keep incremental updates precise, commit both `codacy.config.json` and `codacy.config.baseline.json`. Only `.codacy/generated/` (per-tool generated files) needs to stay out of version control — the CLI adds it to `.codacy/.gitignore` automatically.

## Combining configuration files {: id="combining-configuration-files"}

Use `codacy-analysis config` to combine the tools and patterns of two configuration files via set operations:

```bash
# Union of tools and patterns
codacy-analysis config --merge --source .codacy/extra.json --dest .codacy/codacy.config.json

# Only tools/patterns present in both
codacy-analysis config --intersect --source a.json --dest b.json

# Tools/patterns in dest that aren't in source
codacy-analysis config --diff --source baseline.json --dest .codacy/codacy.config.json
```

The result is always written to `--dest`; `--source` is read-only.

## See also

-   [Getting started with Codacy Guardrails](codacy-guardrails-getting-started.md)
-   [How to customize the analysis rules for Codacy Guardrails](codacy-guardrails-how-to-configure-rules.md)
-   [Codacy configuration file](../repositories-configure/codacy-configuration-file.md): the separate file used to configure Codacy Cloud's own analysis
