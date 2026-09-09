---
description: Install the Codacy Skills to let your AI assistant query your Codacy data, review pull requests, configure analysis, and set up coverage in plain language.
---

# Codacy Skills

The Codacy Skills teach your AI coding assistant how to drive Codacy: they tell it which command to run, how to read the output, and what to do next. You describe what you want in plain language instead of remembering command syntax.

The skills are open source under the MIT license and live in the [`codacy/codacy-skills`](https://github.com/codacy/codacy-skills) repository. They follow the [Agent Skills](https://agentskills.io/) standard, so they work with Claude Code, Claude.ai, OpenAI Codex, GitHub Copilot, Gemini CLI, and any other assistant that supports it.

## Available skills

| Skill | What it does |
|---|---|
| [`codacy-cloud-cli`](https://github.com/codacy/codacy-skills/blob/master/skills/codacy-cloud-cli/SKILL.md) | Queries repositories, issues, security findings, pull requests, tools, and patterns on Codacy Cloud |
| [`codacy-code-review`](https://github.com/codacy/codacy-skills/blob/master/skills/codacy-code-review/SKILL.md) | Adds Codacy issues, security findings, coverage, and duplication to a pull request review |
| [`codacy-analysis-cli`](https://github.com/codacy/codacy-skills/blob/master/skills/codacy-analysis-cli/SKILL.md) | Runs static analysis locally, without sending your code to Codacy |
| [`configure-codacy`](https://github.com/codacy/codacy-skills/blob/master/skills/configure-codacy/SKILL.md) | Discovers your project's stack, enables the tools and patterns that fit it, and cuts noise from the results |
| [`configure-codacy-cloud`](https://github.com/codacy/codacy-skills/blob/master/skills/configure-codacy-cloud/SKILL.md) | Tunes the configuration of a repository already analyzed on Codacy, without running local analysis |
| [`setup-coverage`](https://github.com/codacy/codacy-skills/blob/master/skills/setup-coverage/SKILL.md) | Detects your test framework and CI, then adds what's missing to generate and upload coverage reports |

The skills work together. Ask your assistant to review a pull request and it uses `codacy-code-review`, which in turn reaches for the two CLI skills to get local analysis and cloud coverage data.

!!! note
    The Codacy Cloud CLI (`codacy`) and the Codacy Analysis CLI (`codacy-analysis`) are different tools. Use `codacy` to query your data on Codacy, and `codacy-analysis` to run analyzers on your machine.

## Requirements

Most skills use both CLIs. Install them with:

```bash
npm install -g @codacy/codacy-cloud-cli
npm install -g @codacy/analysis-cli
```

`codacy-cloud-cli` needs only the Codacy Cloud CLI and `codacy-analysis-cli` only the Codacy Analysis CLI. `setup-coverage` also needs the repository to be added to Codacy.

Then authenticate. Run `codacy login` and paste an [account API token](../codacy-api/api-tokens.md#account-api-tokens), or set the `CODACY_API_TOKEN` environment variable for non-interactive environments. Both CLIs read the same credentials from `~/.codacy/credentials`, so a single login covers both.

See [Codacy Cloud CLI](../codacy-cloud-cli/index.md#authentication) for the full set of authentication options, including repository API tokens.

## Install the skills

How you install the skills depends on your assistant.

### Claude Code

Add the Codacy marketplace, then install the plugin:

```bash
claude plugin marketplace add codacy/codacy-skills
claude plugin install codacy-skills@codacy
```

### Claude.ai

Download the folder of the skill you want from the repository, zip it, and upload it under **Settings > Capabilities > Skills > Upload skill**. Repeat for each skill you want.

### OpenAI Codex

Codex discovers skills from an `.agents/skills/` directory. The repository already points at each skill from that path, so cloning the repository is enough:

```bash
git clone https://github.com/codacy/codacy-skills ~/.codacy-skills

# For a single project, from the project's root directory
ln -s ~/.codacy-skills/.agents/skills .agents/skills

# Or for every project
ln -s ~/.codacy-skills/.agents/skills ~/.agents/skills
```

### GitHub Copilot

Copilot's coding agent reads an `AGENTS.md` file from the root of your repository:

```bash
curl -o AGENTS.md https://raw.githubusercontent.com/codacy/codacy-skills/master/AGENTS.md
```

If your repository already has an `AGENTS.md`, merge the two files instead of overwriting yours.

### Gemini CLI

```bash
gemini extensions install https://github.com/codacy/codacy-skills.git --consent
```

## Keep the skills up to date

The skills change as the CLIs gain commands, so update them periodically. How you do that depends on how you installed them:

-   **Claude Code:** `claude plugin update`
-   **Claude.ai:** download and upload the skill folder again, replacing the existing one
-   **OpenAI Codex:** `git -C ~/.codacy-skills pull`
-   **GitHub Copilot:** download `AGENTS.md` again and merge it into yours. The install copies the file into your repository rather than linking to it, so it never updates on its own.
-   **Gemini CLI:** `gemini extensions update codacy-skills`. Restart the CLI afterward for the change to take effect.

## What you can ask for

Once the skills are installed, describe the outcome you want rather than the command:

```text
Show me the critical security findings in my org
What issues were introduced in PR #42?
Ignore all false positives in the last pull request
Set up coverage reporting for this repository
```

Your assistant picks the skill that matches, runs the underlying commands, and reports back. Two workflows are documented in more detail elsewhere:

-   [Auditing vulnerable dependencies across repositories](../codacy-cloud-cli/index.md#affected-functions-scale) with `codacy-cloud-cli`.
-   [Running auto-configuration locally](../repositories-configure/configuring-code-patterns.md#running-it-with-codacy-skills) with `configure-codacy`, which works on any plan.

!!! note
    A skill runs the CLIs with your credentials and acts on what it finds. Review what it proposes before letting it ignore findings, change your tool configuration, or upgrade a dependency.

## See also

- [Codacy Skills on GitHub](https://github.com/codacy/codacy-skills)
- [Codacy Cloud CLI](../codacy-cloud-cli/index.md)
- [API tokens](../codacy-api/api-tokens.md)
- [Adding coverage to your repository](../coverage-reporter/index.md)
