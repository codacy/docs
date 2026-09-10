---
description: Install and use the Codacy Analysis CLI to run Codacy's analyzers on your own machine, scope analysis to changed files, and upload the results to Codacy.
---

# Codacy Analysis CLI

The Codacy Analysis CLI runs Codacy's analyzers locally. It detects your stack, configures the tools that fit it, reports issues in your terminal, and optionally uploads the results to Codacy. Your code never leaves your machine unless you run [`upload`](#upload-results-to-codacy).

Pair it with the [Codacy Skills](../codacy-skills/index.md) to run local analysis in plain language from your AI assistant.

!!! note
    The Codacy Analysis CLI (`codacy-analysis`) and the [Codacy Cloud CLI](../codacy-cloud-cli/index.md) (`codacy`) are different tools. Use `codacy-analysis` to run analyzers on your machine, and `codacy` to query the data Codacy already holds.

## Requirements

-   Node.js 20 or later
-   git — the CLI resolves paths against the repository root, and the [git-aware flags](#scope-the-analysis) read your branch and staging area

From there, what you run depends on one thing: whether the repository is already on Codacy.

**If your repository is on Codacy**, pull its configuration down. Local results then match what Codacy reports on your pull requests, which is usually the reason for running the CLI at all:

```bash
npm i -g @codacy/analysis-cli
codacy-analysis login
codacy-analysis init --remote gh my-org my-repo
codacy-analysis analyze --install-dependencies
```

**If it isn't**, let the CLI detect your stack and pick the rules. No token, no account, and nothing leaves your machine:

```bash
npm i -g @codacy/analysis-cli
codacy-analysis init --auto
codacy-analysis analyze --install-dependencies
```

The rest of this page covers each of those steps on its own, and the flags worth knowing once the first run works.

## Installation

The CLI is published on npm and installs the same way on macOS, Linux, and Windows:

```bash
npm i -g @codacy/analysis-cli
```

The Codacy IDE extension bundles its own copy of the analyzer and doesn't put the `codacy-analysis` command on your `PATH`. Install the package above if you want to run the CLI yourself, and see [Codacy Guardrails](../codacy-guardrails/codacy-guardrails-getting-started.md) for the extension.

To confirm the install and see which analyzers are available on your machine, with the version and origin of each:

```bash
codacy-analysis info
```

## Authentication {: id="authentication"}

Local analysis works without authentication. You only need a token to pull a repository's configuration from Codacy with [`init --remote`](#configure-your-repository), or to [upload results](#upload-results-to-codacy).

Run `codacy-analysis login` and enter an [account API token](../codacy-api/api-tokens.md#account-api-tokens) when prompted. Get the token under **My Account > Access Management > API Tokens** in Codacy.

```bash
codacy-analysis login
```

For non-interactive environments such as CI/CD pipelines, set the `CODACY_API_TOKEN` environment variable instead. To remove your stored credentials, run `codacy-analysis logout`.

The Codacy Analysis CLI and the [Codacy Cloud CLI](../codacy-cloud-cli/index.md) share the same credentials at `~/.codacy/credentials`, so a single login covers both.

A [repository API token](../codacy-api/api-tokens.md#repository-api-tokens) works for the three commands that accept one — `init --remote`, `update-config`, and `upload`. Prefer it in CI/CD pipelines, because it only grants access to a single repository, and it wins over an account token when both are available:

```bash
codacy-analysis init --remote gh my-org my-repo --repository-token <token>
```

{% include-markdown "../assets/includes/api-token-warning.md" %}

## Choose which rules run {: id="configure-your-repository"}

`init` writes `.codacy/codacy.config.json`, which records the tools and patterns that run. `analyze` reads it, so run `init` once per repository before analyzing. The modes below are mutually exclusive: each one is a different answer to where the configuration comes from.

Alongside it, `init` writes `codacy.config.baseline.json`, which records what the generator last produced, and a `.codacy/.gitignore` that keeps the derived `generated/` folder out of version control. Commit both JSON files so your team analyzes against the same configuration.

### If your repository is on Codacy

`init --remote` fetches the configuration Codacy already holds, so local analysis applies the same code patterns and coding standards as your pull requests:

```bash
codacy-analysis init --remote gh my-org my-repo
```

It takes your provider — `gh` for GitHub, `gl` for GitLab, or `bb` for Bitbucket — then your organization and repository name, and it needs [authentication](#authentication).

If you want the rules Codacy enforces as well as the tools the CLI detects locally, you can have both: see [analyzing against your stack and your Codacy Cloud rules](#merge-auto-and-remote).

### If your repository isn't on Codacy

`init --auto` discovers your languages and frameworks and selects patterns to match, enabling framework-specific rules only when it finds the corresponding dependency. This is the mode to reach for:

```bash
codacy-analysis init --auto
```

Narrow it with comma-separated severities and categories when a full run reports more than you want to act on:

```bash
codacy-analysis init --auto Critical,High,Security
```

Two narrower modes exist for cases `--auto` doesn't fit. Bare `init` configures only the tools that already have a configuration file in the repository, and `init --default` adds Codacy's default patterns from the public API, which needs no token:

```bash
codacy-analysis init
codacy-analysis init --default
```

### Keep the configuration current

As your stack changes, bring the configuration along with it:

```bash
codacy-analysis update-config
```

By default this is incremental: patterns you disabled stay disabled and your parameters and excludes survive, while tools and patterns for newly detected languages and frameworks are added. Add `--reset` to regenerate from scratch and discard your edits.

Configurations created with `init --remote` are always re-synced in full, because Codacy Cloud is authoritative for them. Local edits to those are discarded, which is the trade for staying in step with the UI.

!!! note
    `init` and `update-config` read the `exclude_paths` in your [Codacy configuration file](../repositories-configure/codacy-configuration-file.md) and record them in `codacy.config.json`, which is where `analyze` reads them from. Editing `.codacy.yaml` on its own doesn't change what `analyze` covers — run `update-config` afterward.

## Analyze

With the configuration in place, analyze the repository:

```bash
codacy-analysis analyze
```

Some analyzers ship inside the npm package; the rest are downloaded on demand. On a first run, use `--install-dependencies`, which fetches the missing ones and then runs the analysis. They go to `~/.codacy`, so every repository on the machine reuses them:

```bash
codacy-analysis analyze --install-dependencies
```

To see which analyzers are ready and which are missing without running anything, use `--inspect`:

```bash
codacy-analysis analyze --inspect
```

`--inspect`, `--install-dependencies`, and `--fail-if-missing` are mutually exclusive — passing two of them exits `2` without analyzing.

### Read the results

`analyze` prints text by default. Use `--output-format` for machine-readable output, and `--output` to write it to a file:

```bash
codacy-analysis analyze --output-format json
codacy-analysis analyze --output-format sarif --output results.sarif
```

The command exits `0` when it finds no issues and `1` when it finds issues, which is what makes it usable as a gate in CI. An invalid combination of flags exits `2`.

A tool the CLI can't run is reported as unavailable and the rest of the analysis continues. `--fail-if-missing` adds an explicit error to the report for those tools, but it doesn't change the exit code, so it doesn't by itself fail a job.

### Restrict to specific tools

`--tool` is repeatable and matches the tool IDs recorded in `.codacy/codacy.config.json`. Only tools listed there run:

```bash
codacy-analysis analyze --tool ESLint9 --tool Ruff
```

The IDs are case-sensitive and don't always match the tool's display name — Pylint is `PyLintPython3`, and Opengrep is `Semgrep`. Run `codacy-analysis info` for the full table of names, IDs, and versions.

### Scope the analysis {: id="scope-the-analysis"}

Analyze a single file, a subdirectory, or a glob by passing it as the argument. Quote globs so your shell doesn't expand them first:

```bash
codacy-analysis analyze ./src/main.py
codacy-analysis analyze ./src/api/
codacy-analysis analyze "src/**/*.ts"
```

`--files` takes several paths or globs at once and can be repeated:

```bash
codacy-analysis analyze --files src/a.py src/b.py
codacy-analysis analyze --files "**/*.py" --files "**/*.rs"
```

The git-aware flags scope the run to what changed. They're mutually exclusive:

```bash
# Files in the git staging area
codacy-analysis analyze --staged

# Files changed against the default branch, or against a base branch you name
codacy-analysis analyze --diff
codacy-analysis analyze --diff develop

# Files in the current pull request
codacy-analysis analyze --pr
```

`--staged` is the one to put in a pre-commit hook: it exits `1` when it finds anything, which is all the hook needs to block the commit. Combining a git flag with `--files` analyzes the intersection of the two, which keeps a hook down to the analyzers that matter for the files you touch.

### Tune the run

```bash
# Run up to four tools at a time
codacy-analysis analyze --parallel-tools 4

# Raise the per-tool timeout in milliseconds
codacy-analysis analyze --tool-timeout 1800000

# Log every tool invocation to stderr
codacy-analysis analyze --log-level debug
```

Logs are written to `~/.codacy/logs/` as JSON lines and rotate at 10 MB. Add `--no-log` to disable file logging, which is worth doing in CI.

## Upload results to Codacy {: id="upload-results-to-codacy"}

`upload` sends a report produced by `analyze` to Codacy and attaches its issues to a commit. Only reports from this CLI are accepted, because they already carry Codacy pattern IDs.

```bash
codacy-analysis analyze --output-format sarif --output results.sarif
codacy-analysis upload results.sarif --repository-token <token>
```

The commit defaults to your current git `HEAD`. Pass `--commit` to attach the results elsewhere.

With an account API token instead of a repository API token, name the repository as well. `upload` falls back to the coordinates stored by `init --remote` when you omit them:

```bash
codacy-analysis upload results.sarif --repository gh my-org my-repo --commit <sha>
```

!!! tip
    For Codacy to wait for these results before it resumes analyzing your commits, enable **Run analysis on your build server** on your repository **Settings**, tab **General**, **Repository analysis on your server**.

## Inspect and combine configurations

`discover` reports the languages, frameworks, libraries, and notable files the CLI finds, which is what `init --auto` bases its selection on:

```bash
codacy-analysis discover
codacy-analysis discover --output-format json
```

It applies your `exclude_paths` by default. Add `--no-exclude` to see the unfiltered scan.

`config` performs set operations on the tools and patterns of two configuration files and writes the result to the destination, leaving the source untouched. Use it to keep a configuration synced from Codacy Cloud while testing a variant beside it:

```bash
# Union of both files
codacy-analysis config --merge --source .codacy/extra.json

# Only what both files have in common
codacy-analysis config --intersect --source a.json --dest b.json

# What the destination has and the source doesn't
codacy-analysis config --diff --source baseline.json --dest .codacy/codacy.config.json
```

Exactly one operation is required, and `--source` and `--dest` can't both fall back to the same default file. `init`, `analyze`, and `update-config` all accept `--config-file <path>` to read or write a configuration outside the default location.

## Common workflows

### Analyze against your stack and your Codacy Cloud rules {: id="merge-auto-and-remote"}

`init --auto` and `init --remote` answer different questions. `--auto` picks tools and patterns from what it finds in the repository, down to the framework: React patterns switch on only when React is a dependency. `--remote` gives you the rules your repository already enforces on Codacy Cloud, including ones no local configuration file mentions. Neither set contains the other, so choosing one means giving something up.

`config` lets you keep both. Write the Codacy Cloud configuration to a second file, then fold it into the detected one:

```bash
codacy-analysis init --auto
codacy-analysis init --remote gh my-org my-repo --config-file .codacy/remote.json
codacy-analysis config --merge --source .codacy/remote.json
```

`--merge` writes the union of the two to `.codacy/codacy.config.json` and reports what came out:

```text
✔ merge complete: 16 tool(s), 1793 pattern(s) written to .codacy/codacy.config.json
```

Swap `--merge` for `--intersect` to go the other way and keep only what both configurations agree on. That lands well below either input, and it's the direction to take when a merge reports more than you're willing to act on.

The merged file keeps `source: auto` in its metadata, so [`update-config`](#configure-your-repository) still works on it: newly detected tools are added, and the patterns you merged in from Codacy Cloud stay put.

!!! note
    Merging copies the Codacy Cloud rules once. `update-config` re-reads your stack, but it doesn't go back to Codacy for a configuration whose `source` is `auto` — so when the rules change on Codacy Cloud, re-run `init --remote --config-file .codacy/remote.json` and merge again.

### Use the CLI in CI

Install the CLI as a step and pass a repository API token as a secret:

{% raw %}
```yaml
- name: Install Codacy Analysis CLI
  run: npm i -g @codacy/analysis-cli

- name: Analyze and upload
  env:
      CODACY_PROJECT_TOKEN: ${{ secrets.CODACY_PROJECT_TOKEN }}
  run: |
      codacy-analysis init --remote gh ${{ github.repository_owner }} my-repo
      codacy-analysis analyze --install-dependencies --no-log \
          --output-format sarif --output results.sarif
      codacy-analysis upload results.sarif
```
{% endraw %}

To gate a pull request on the analysis rather than only reporting it, drop the `upload` step and let the exit code of `analyze --diff` fail the job.

## Network and Codacy Self-hosted

On Codacy Self-hosted, point the CLI at your own instance with `CODACY_API_BASE_URL`. The `upload` command talks to a different endpoint from the rest of the CLI and reads its own variable, so set both:

```bash
export CODACY_API_BASE_URL=<your Codacy instance API URL>
export CODACY_RESULTS_API_BASE_URL=<your Codacy instance results API URL>
```

All outbound requests — Codacy API calls and analyzer downloads alike — honor the standard proxy variables:

```bash
export HTTPS_PROXY=http://proxy.corp:8080
export NO_PROXY=app.codacy.com,.internal
export SSL_CERT_FILE=/path/to/corporate-ca.pem
```

Trust your organization's CA through `SSL_CERT_FILE` or `NODE_EXTRA_CA_CERTS` rather than disabling TLS verification. A misconfigured bundle fails with an explicit error.

The update-available check uses a separate network stack that ignores these variables. Behind a strict proxy, turn it off with `CODACY_DISABLE_UPDATE_CHECK=1`.

## See also

- [Codacy Analysis CLI on npm](https://www.npmjs.com/package/@codacy/analysis-cli)
- [Codacy Cloud CLI](../codacy-cloud-cli/index.md)
- [Codacy Skills](../codacy-skills/index.md)
- [Codacy Guardrails](../codacy-guardrails/codacy-guardrails-getting-started.md)
- [Supported languages and tools](../getting-started/supported-languages-and-tools.md)
- [Codacy configuration file](../repositories-configure/codacy-configuration-file.md)
- [API tokens](../codacy-api/api-tokens.md)
