---
description: Install and use the Codacy Cloud CLI to manage your repositories, issues, security findings, pull requests, and tool configurations directly from your terminal.
---

# Codacy Cloud CLI

The Codacy Cloud CLI gives you a fast terminal interface to your Codacy data. Add repositories, review issues, investigate security findings, inspect pull requests, and configure tools—all without opening a browser.

Pair it with the [Codacy Claude Code skill](#install-the-claude-code-skill) to interact with your Codacy data in plain language directly from your AI assistant.

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

## Install the Claude Code skill {: id="install-the-claude-code-skill"}

!!! tip
    This step is optional but highly recommended. The Codacy skill for Claude Code lets you ask questions about your Codacy data in plain language, without needing to remember command syntax.

Install the Codacy skills package in Claude Code:

```bash
claude plugin install codacy-skills@codacy
```

Once installed, you can ask Claude things like:

- *"Show me the critical security findings in my org"*
- *"What issues were introduced in PR #42?"*
- *"Ignore all false positives in the last pull request"*

## What you can do

All commands follow the same pattern:

```bash
codacy <command> <provider> <organization> [repository] [options]
```

Where `<provider>` is `gh` (GitHub), `gl` (GitLab), or `bb` (Bitbucket).

Use `--output json` on any command to get machine-readable output for scripting.

### Manage your repositories

List the repositories in an organization and see their analysis status:

```bash
codacy repositories gh my-org
```

Get a full overview of a specific repository (analysis status, quality metrics, and recent activity):

```bash
codacy repository gh my-org my-repo
```

You can also add or remove repositories, follow/unfollow them, link coding standards, and request reanalysis. Use flags like `--add`, `--remove`, and `--reanalyze` on the same command.

### Review code issues

List issues in a repository, with optional filters for severity, category, tool, author, and branch:

```bash
codacy issues gh my-org my-repo
codacy issues gh my-org my-repo --severities Critical,High --categories Security
codacy issues gh my-org my-repo --branch feature/my-feature --authors dev@example.com
```

Get a count overview instead of the full list:

```bash
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

List security findings for an organization or a specific repository:

```bash
codacy findings gh my-org
codacy findings gh my-org my-repo --severities Critical,High
```

Filter by scan type to focus on what matters:

```bash
codacy findings gh my-org --scan-types SAST,Secrets
codacy findings gh my-org --scan-types SCA,IaC --severities High
```

Findings are tracked with statuses like `Overdue`, `OnTrack`, and `DueSoon`. Use `--statuses` to filter accordingly:

```bash
codacy findings gh my-org --statuses Overdue,DueSoon
```

### Inspect pull requests

Get the full analysis summary for a pull request:

```bash
codacy pull-request gh my-org my-repo 42
```

View an annotated diff showing new issues and coverage changes line by line:

```bash
codacy pull-request gh my-org my-repo 42 --diff
```

Ignore all potential false positives in a PR at once:

```bash
codacy pull-request gh my-org my-repo 42 --ignore-all-false-positives
```

Request reanalysis of the pull request HEAD commit:

```bash
codacy pull-request gh my-org my-repo 42 --reanalyze
```

### Configure tools and patterns

List all tools for a repository and see which ones are enabled:

```bash
codacy tools gh my-org my-repo
```

Enable or disable a specific tool:

```bash
codacy tool gh my-org my-repo eslint --enable
codacy tool gh my-org my-repo pylint --disable
```

Import tool configurations from a `.codacy/codacy.config.json` file:

```bash
codacy tools gh my-org my-repo --import
```

Bulk-enable or bulk-disable patterns for a tool:

```bash
codacy patterns gh my-org my-repo eslint --categories Security --enable-all
codacy patterns gh my-org my-repo eslint --severities Minor --disable-all
```

Set a parameter on a specific pattern:

```bash
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

### Monthly quality report

Generate a JSON summary of open issues and pipe it to `jq` for a quick overview:

```bash
codacy issues gh my-org my-repo --output json | jq '{ total: length, critical: [.[] | select(.severity == "Critical")] | length, high: [.[] | select(.severity == "High")] | length }'
```

Post the result as a comment on a GitHub issue to keep your team informed:

```bash
REPORT=$(codacy issues gh my-org my-repo --output json | jq -r '"Critical: \([.[] | select(.severity=="Critical")] | length), High: \([.[] | select(.severity=="High")] | length)"')
gh issue comment 123 --body "Monthly quality report: $REPORT"
```

### Scheduled issue triage in CI

Use the CLI in a GitHub Actions workflow to automatically review and flag issues on a schedule:

{% raw %}
```yaml
name: Monthly Codacy Issue Triage
on:
  schedule:
    - cron: '0 9 1 * *'  # First day of each month at 09:00 UTC

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - name: Install Codacy Cloud CLI
        run: npm install -g @codacy/codacy-cloud-cli

      - name: Generate issue report
        env:
          CODACY_API_TOKEN: ${{ secrets.CODACY_API_TOKEN }}
        run: |
          codacy issues gh ${{ github.repository_owner }} my-repo \
            --severities Critical,High \
            --output json > issues.json
          echo "Open critical/high issues: $(cat issues.json | jq length)"
```
{% endraw %}

## See also

- [Codacy Cloud CLI on GitHub](https://github.com/codacy/codacy-cloud-cli)
- [API tokens](../codacy-api/api-tokens.md)
- [Using the Codacy API](../codacy-api/using-the-codacy-api.md)
- [GitHub integration and AI Reviewer](../repositories-configure/integrations/github-integration.md#ai-reviewer)
