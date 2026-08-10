---
description: Reference for the local configuration and baseline files used by the Codacy Analysis CLI, covering their fields, how updates are applied to them, and how to combine them.
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

!!! warning
    Don't hand-edit these files to change which rules run. The IDE extension rewrites them for you, so your edits can be overwritten without warning: it regenerates the config whenever the repository's connection state stops matching `metadata.source`, and it re-syncs `remote` configs from Codacy Cloud outright. Change your rules on Codacy Cloud instead: see [how to customize the analysis rules](codacy-guardrails-how-to-configure-rules.md).

## The baseline file {: id="baseline-file"}

Every time `init` or `update-config` writes `codacy.config.json`, it also writes `.codacy/codacy.config.baseline.json`: an exact snapshot of what the generator produced. Its only purpose is letting a later `update-config` run tell what the generator chose apart from what's since diverged from it, so an update can be incremental instead of a full rewrite.

For a `local`, `auto`, or `default`-sourced config, `codacy-analysis update-config` reconciles three versions of the config:

-   **base**: the baseline snapshot (the generator's last output)
-   **current**: your live config
-   **next**: what the generator produces right now, for your repository's current stack

It adds whatever is new in `next` but wasn't in `base` (a newly detected language or framework), removes whatever was in `base` but isn't in `next` anymore (a language or framework that's gone), and leaves the rest of `current` as it is.

A `remote`- or `container`-sourced config skips this reconciliation entirely, because its origin is authoritative: for a `remote` config, both `codacy-analysis update-config` and Guardrails' background sync always pull a fresh copy from Codacy Cloud and overwrite the file outright, baseline included; a `container` config is regenerated from the `.codacyrc` the same way.

!!! important
    If `.codacy/codacy.config.baseline.json` is missing, for example because `.codacy` was gitignored and a teammate cloned the repository without it, `update-config` has nothing to compare against and can't tell an intentionally absent pattern apart from one that was never selected. It falls back to an additive merge instead: nothing is dropped, but tools or patterns for a language or framework that's no longer in the repository won't be pruned. The CLI prints a warning when this happens.

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
