---
description: Install and use the Codacy Cloud CLI to manage your repositories, issues, security findings, pull requests, and tool configurations directly from your terminal.
---

# Codacy Cloud CLI

The Codacy Cloud CLI gives you a fast terminal interface to your Codacy data. Add repositories, review issues, investigate security findings, inspect pull requests, and configure tools—all without opening a browser.

Pair it with [Codacy Skills](#install-the-codacy-skills) to interact with your Codacy data in plain language directly from your AI assistant.

<div style="position: relative; padding-bottom: 61.224489795918366%; height: 0;"><iframe src="https://www.loom.com/embed/1960b3f07f2c419682a1e22e2b2928d1" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>

## Installation

Install the CLI using npm:

```bash
npm install -g @codacy/codacy-cloud-cli
```

Alternatively, you can build from source. See the [GitHub repository](https://github.com/codacy/codacy-cloud-cli) for instructions.

## Authentication {: id="authentication"}

Run `codacy login` and enter your API token when prompted. Codacy stores your credentials encrypted at `~/.codacy/credentials`.

```bash
codacy login
```

To authenticate without a prompt (for example, in a CI/CD pipeline), pass your token directly:

```bash
codacy login --token <your-api-token>
```

You can also set `CODACY_API_TOKEN` as an environment variable. This takes precedence over stored credentials.

Get your API token under **My Account > Access Management > API Tokens** in Codacy. See [API tokens](../codacy-api/api-tokens.md) for details.

To remove your stored credentials, run `codacy logout`.

## Install the Codacy Skills {: id="install-the-codacy-skills"}

The [Codacy Skills](https://github.com/codacy/codacy-skills) let your AI assistant interact with your Codacy data in plain language, without needing to remember command syntax:

- "Show me the critical security findings in my org"
- "What issues were introduced in PR #42?"
- "Ignore all false positives in the last pull request"

**Claude Code** (recommended):

```bash
claude plugin install codacy-skills@codacy
```

**Claude.ai**: download the skill folder, zip it, and upload it under **Settings > Capabilities > Skills**.

If you use a different AI assistant, visit the [Codacy Skills repository](https://github.com/codacy/codacy-skills) to install the skills directly.

## What you can do

All commands follow the same pattern:

```bash
codacy <command> <provider> <organization> [repository] [options]
```

Where `<provider>` is `gh` (GitHub), `gl` (GitLab), or `bb` (Bitbucket).

Use `--output json` on any command to get machine-readable output for scripting.

### Manage your repositories

```bash
# List repositories in an organization
codacy repositories gh my-org

# Get a full overview of a specific repository
codacy repository gh my-org my-repo
```

You can also add or remove repositories, follow/unfollow them, link coding standards, and request reanalysis. Use flags like `--add`, `--remove`, and `--reanalyze` on the same command.

### Review code issues

List and filter issues by severity, category, tool, author, or branch:

```bash
# List all issues
codacy issues gh my-org my-repo

# Filter by severity and category
codacy issues gh my-org my-repo --severities Critical,High --categories Security

# Filter by branch or author
codacy issues gh my-org my-repo --branch feature/my-feature --authors dev@example.com

# Show counts only
codacy issues gh my-org my-repo --overview
```

Ignore all issues matching your current filters in one step:

```bash
codacy issues gh my-org my-repo --severities Critical --ignore --ignore-reason FalsePositive
```

Inspect a single issue and ignore or remove the ignore flag:

```bash
codacy issue gh my-org my-repo <issueId> --ignore --ignore-reason AcceptedUse
```

### Investigate security findings

List findings for an organization or a specific repository, with optional filters:

```bash
# Organization-wide findings
codacy findings gh my-org

# Per-repository, filtered by severity
codacy findings gh my-org my-repo --severities Critical,High

# Filter by scan type
codacy findings gh my-org --scan-types SAST,Secrets
codacy findings gh my-org --scan-types SCA,IaC --severities High
```

Findings are tracked with statuses like `Overdue`, `OnTrack`, and `DueSoon`. Use `--statuses` to filter accordingly:

```bash
codacy findings gh my-org --statuses Overdue,DueSoon
```

### Inspect pull requests

```bash
# Get the full analysis summary
codacy pull-request gh my-org my-repo 42

# View an annotated diff with new issues and coverage changes
codacy pull-request gh my-org my-repo 42 --diff

# Ignore all false positives in bulk
codacy pull-request gh my-org my-repo 42 --ignore-all-false-positives

# Trigger reanalysis of the HEAD commit
codacy pull-request gh my-org my-repo 42 --reanalyze
```

### Configure tools and patterns

```bash
# List all tools and see which are enabled
codacy tools gh my-org my-repo

# Enable or disable a tool
codacy tool gh my-org my-repo eslint --enable
codacy tool gh my-org my-repo pylint --disable

# Import tool configuration from .codacy/codacy.config.json
codacy tools gh my-org my-repo --import
```

Bulk-enable or bulk-disable patterns, or set a parameter on a specific pattern:

```bash
# Bulk-enable or bulk-disable by category or severity
codacy patterns gh my-org my-repo eslint --categories Security --enable-all
codacy patterns gh my-org my-repo eslint --severities Minor --disable-all

# Set a parameter on a specific pattern
codacy pattern gh my-org my-repo eslint max-len --enable --parameter max=120
```

!!! note
    Tool and pattern changes take effect after the next analysis. Use `--reanalyze` on the repository or pull request command to trigger one immediately.

## Example workflows

### Terminal-first PR review

Before merging, check the full analysis of a pull request (issues, coverage delta, and security findings) without leaving the terminal:

```bash
# See the PR summary
codacy pull-request gh my-org my-repo 42

# See an annotated diff with new issues inline
codacy pull-request gh my-org my-repo 42 --diff
```

### Combine with the GitHub CLI and AI Reviewer

Use the [GitHub CLI](https://cli.github.com/) alongside the Codacy CLI to incorporate feedback from the [AI Reviewer](../repositories-configure/integrations/github-integration.md#ai-reviewer), which posts analysis summaries as PR comments:

```bash
# Read AI Reviewer comments on the PR
gh pr view 42 --comments

# Cross-reference with the Codacy annotated diff
codacy pull-request gh my-org my-repo 42 --diff
```

Feed both outputs to Claude Code (with the Codacy skill installed) to decide what to fix and apply it directly.

### Use the CLI in CI

The CLI works in any CI environment. Set `CODACY_API_TOKEN` as a secret and install the CLI as a step:

{% raw %}
```yaml
- name: Install Codacy Cloud CLI
  run: npm install -g @codacy/codacy-cloud-cli

- name: Run Codacy CLI
  env:
    CODACY_API_TOKEN: ${{ secrets.CODACY_API_TOKEN }}
  run: codacy issues gh ${{ github.repository_owner }} my-repo --output json
```
{% endraw %}

From there, pipe the JSON output to `jq`, post results as PR comments with the [GitHub CLI](https://cli.github.com/), open issues, send Slack notifications — whatever fits your workflow.

## See also

- [Codacy Cloud CLI on GitHub](https://github.com/codacy/codacy-cloud-cli)
- [Codacy Skills on GitHub](https://github.com/codacy/codacy-skills)
- [API tokens](../codacy-api/api-tokens.md)
- [Using the Codacy API](../codacy-api/using-the-codacy-api.md)
- [GitHub integration and AI Reviewer](../repositories-configure/integrations/github-integration.md#ai-reviewer)
