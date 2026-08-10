---
description: Reference for the local configuration and baseline files used by the Codacy Analysis CLI, covering their fields, how updates reconcile your edits, and how to combine them.
---

# Configuration file reference

This page describes the files themselves: their fields and how updates to them work. If what you want is to **change which rules run**, start from [how to customize the analysis rules](codacy-guardrails-how-to-configure-rules.md) instead.

The [Codacy Analysis CLI](codacy-guardrails-getting-started.md#install-cli) (`@codacy/analysis-cli`, the `codacy-analysis` command) is what powers Codacy Guardrails' local analysis, and it's the same CLI you install manually for [local analysis outside an IDE](../repositories-configure/local-analysis/client-side-tools.md). It keeps its own configuration in two files inside `.codacy/`:

-   `.codacy/codacy.config.json`: which tools and patterns run, and any parameter overrides
-   `.codacy/codacy.config.baseline.json`: a snapshot used to keep future updates precise

Don't confuse these with the [Codacy configuration file](../repositories-configure/codacy-configuration-file.md) (`.codacy.yml`/`.codacy.yaml`) in your repository root, which configures Codacy Cloud's own analysis. The two are separate, and the CLI takes just one thing from it: your `exclude_paths`, which `init` copies into the `exclude` fields described below.

!!! important
    The IDE extension bundles the analyzer, so Guardrails works without you installing anything: it writes and updates these files for you. The `codacy-analysis` commands on this page are the standalone CLI, which the extension doesn't put on your `PATH`. To run them yourself, [install the CLI](codacy-guardrails-getting-started.md#install-cli) first:

    ```bash
    npm i -g @codacy/analysis-cli
    ```

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
| `tools[].toolId` | The tool's identifier (for example `ESLint9`, `PMD7`). The tools in this list are the ones that run on your repository; to see every tool ID the CLI knows about, along with whether it's installed locally, run `codacy-analysis info` |
| `tools[].patterns` | The **enabled** patterns for that tool. There's no `enabled: false` flag: a pattern not listed here is disabled |
| `tools[].patterns[].parameters` | Parameter overrides for that pattern, as string values |
| `tools[].exclude` / top-level `exclude` | Glob patterns excluded from that tool, or from analysis entirely |
| `tools[].useLocalConfigurationFile` | When `true`, the tool runs from its own native config file (recorded in `tools[].localConfigurationFile`, for example `.eslintrc.json`) instead of the patterns listed here. `init` sets this for you when it finds a native config file for the tool in your repository; for a `remote`-sourced config it reflects the **Configuration file** toggle on your repository's **Code patterns** page (see [customizing analysis rules](codacy-guardrails-how-to-configure-rules.md#using-configuration-files)) |

## Changing a pattern {: id="disabling-a-pattern"}

Where you change a pattern depends on `metadata.source`, because that decides who owns the file.

### Local configurations: edit the file {: id="editing-the-file"}

When `metadata.source` is `local`, `auto`, or `default`, the file is yours. Remove a pattern's entry to disable it, add one to enable it, or add a `parameters` object to tune it. Save the file and run `codacy-analysis analyze`: no extra command is needed to pick up your edits, and a later [`update-config`](#baseline-file) preserves them.

### Cloud-connected configurations: change it on Codacy Cloud {: id="changing-on-codacy-cloud"}

When `metadata.source` is `remote`, Codacy Cloud owns the file. Editing it by hand doesn't stick: the next sync, whether a manual `codacy-analysis update-config` or Guardrails' automatic background sync, overwrites it from Codacy Cloud rather than merging your edits in. Change the pattern on Codacy Cloud instead, in one of two places:

-   **From your editor**, when Codacy Guardrails flags the issue on a line: open the Quick Fix menu (the lightbulb) and choose **Codacy CLI: Disable pattern**. This calls the Codacy API and disables the pattern for the repository, so it needs [admin permission](../organizations/roles-and-permissions-for-organizations.md) on the repository. If the pattern comes from a [coding standard](../organizations/using-coding-standards.md), the action can't disable it, since standards are shared across your organization: it opens a panel pointing you to the standards to edit instead.

-   **From the Codacy Cloud UI**, on your repository's **Code patterns** page or in the coding standard itself. See [how to customize the analysis rules](codacy-guardrails-how-to-configure-rules.md).

Either way, your local file only reflects the change once it's regenerated from Codacy Cloud, either by running `codacy-analysis update-config` yourself or when Guardrails re-syncs in the background, which it does whenever you add a new file to the repository (see [does changing configuration in the UI apply automatically?](codacy-guardrails-faq.md#when-i-change-some-analysis-configuration-in-the-ui-is-it-automatically-applied-to-guardrails)).

## The baseline file {: id="baseline-file"}

Every time `init` or `update-config` writes `codacy.config.json`, it also writes `.codacy/codacy.config.baseline.json`: an exact snapshot of what the generator produced, before any manual edits. Its only purpose is letting a later `update-config` run tell your deliberate edits apart from whatever the generator would have produced anyway.

For a `local`, `auto`, or `default`-sourced config, running `codacy-analysis update-config` (or Guardrails triggering the equivalent automatically) reconciles three versions of the config:

-   **base**: the baseline snapshot (the generator's last output)
-   **current**: your live config (baseline plus your edits)
-   **next**: what the generator produces right now, for your repository's current stack

It adds whatever is new in `next` but wasn't in `base` (a newly detected language or framework), removes whatever was in `base` but isn't in `next` anymore (a language or framework that's gone), and otherwise leaves `current` untouched: patterns you disabled stay disabled and parameters you tuned survive.

A `remote`- or `container`-sourced config skips this reconciliation entirely, because its origin is authoritative: for a `remote` config, both `codacy-analysis update-config` and Guardrails' background sync always pull a fresh copy from Codacy Cloud and overwrite the file outright, baseline included; a `container` config is regenerated from the `.codacyrc` the same way. Manual edits to either don't survive the next update, no matter how it's triggered.

!!! important
    If `.codacy/codacy.config.baseline.json` is missing, for example because `.codacy` was gitignored and a teammate cloned the repository without it, `update-config` can't tell "you disabled this pattern" apart from "this pattern was never selected." It falls back to an additive merge instead: your edits are kept, but tools or patterns for a language/framework that's no longer in the repository won't be pruned, and disabled patterns may reappear. The CLI prints a warning when this happens.

    To keep incremental updates precise, commit both `codacy.config.json` and `codacy.config.baseline.json`. Only `.codacy/generated/` (per-tool generated files) needs to stay out of version control — the CLI adds it to `.codacy/.gitignore` automatically.

## Combining configuration files {: id="combining-configuration-files"}

Use `codacy-analysis config` to combine the tools and patterns of two configuration files via set operations:

```bash
# Union of tools and patterns
codacy-analysis config --merge --source .codacy/extra.json --dest .codacy/codacy.config.json

# Only tools/patterns present in both
codacy-analysis config --intersect --source .codacy/a.json --dest .codacy/b.json

# Tools/patterns in dest that aren't in source
codacy-analysis config --diff --source .codacy/codacy.config.baseline.json --dest .codacy/codacy.config.json
```

The result is always written to `--dest`; `--source` is read-only.

## See also

-   [Getting started with Codacy Guardrails](codacy-guardrails-getting-started.md)
-   [How to customize the analysis rules for Codacy Guardrails](codacy-guardrails-how-to-configure-rules.md)
-   [Codacy configuration file](../repositories-configure/codacy-configuration-file.md): the separate file used to configure Codacy Cloud's own analysis
