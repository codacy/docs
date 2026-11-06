# Codacy AI

## What is Codacy AI?

Codacy AI is a set of optional features integrated into the Software, designed to optimise development workflows and elevate code quality standards through automated issue descriptions, actionable recommendations and false-positive detection. These features are available for the Customer.

Codacy AI utilizes only enterprise-grade instances of OpenAI services, accessed directly or through Amazon Bedrock, with enhanced security, privacy, and data protection features. Customer Code processed through Codacy AI will not be used by Codacy, OpenAI, or any third-party AI provider for training, improving, or developing artificial intelligence models, machine learning algorithms, or any other automated systems.

## AI Features

### AI-enhanced comments

!!! note
    This feature is available on GitLab and Bitbucket. It is no longer available on GitHub, where it has been replaced by the [AI Reviewer](#ai-reviewer).

_This feature leverages OpenAI models, and is strictly opt-in: it will only run on repositories or projects where a repository admin has enabled it._

AI-enhanced comments are optional, machine-generated suggestions that appear directly in pull requests and review threads. They use Codacy's AI to provide concise issue summaries, remediation suggestions, and links to relevant documentation — helping reviewers and authors quickly understand and fix problems.

**How to turn it on**

1. Go to your organization or repository settings in Codacy.
2. Navigate to the "Integrations" or "AI features" section (depending on your Codacy plan and UI version).
3. Find "AI-enhanced comments" and toggle the feature to "On" for the repository or organization scope you want to enable.
4. Optionally configure which repositories, branches, or severity levels should receive AI comments to reduce noise.
5. Save your changes. Once enabled, Codacy will start adding AI-enhanced comments to new pull requests and code reviews according to the configured scope.

**Notes**

- Administrators can enable or disable the feature at organization or repository level.
- Enabling the feature may be subject to plan limitations and governance controls; check your Codacy subscription and admin permissions.
- Users can still ignore or dismiss individual AI comments during code review.

**Data usage and privacy**

- To generate an AI-enhanced comment, Codacy only processes the specific issue context: the issue line plus up to ten lines before and ten lines after that line. No additional repository data is sent or used.
- Codacy does not use your code, repository contents, or comments to train external AI models. No customer code or review text is incorporated into model training.

### Smart False Positive Triage

{%
    include-markdown "../assets/includes/paid.md"
    start="<!--paid-feature-business-start-->"
    end="<!--paid-feature-business-end-->"
%}

_This feature leverages OpenAI models through Amazon Bedrock, and is strictly opt-in: you need to get in touch with us in order to enable it._

Codacy False Positive triage analyzes results on a commit basis to give you visibility into issues that may be false positives (based on their context). During triage, each issue is given a confidence score along with an explanation. When the confidence level falls below a defined threshold, the issue is then flagged as an AI false positive and surfaced for manual review. You can evaluate potential false positives during a pull request in app or on any Codacy page where issues appear. These issues can be ignored or marked as Not a false positive.

More details about [False Positives here](../repositories/commits.md#false-positive-issues).

**How to turn it on**

1. Get in touch with your Customer Success Manager or with <support@codacy.com>

**Notes**

- Codacy does not use your code, repository contents, or comments to train external AI models. No customer code or review text is incorporated into model training.
- To detect a Possible False Positive, Codacy only processes the specific issue context: one request per file with issues. No additional repository data is sent or used.
- Prompts are neither stored nor visible to anyone.
- As an extra precaution, before any code snippet is sent to the AI model, Codacy automatically redacts secrets (API keys, tokens, credentials, and other high-entropy strings) from the code context.

#### Which issues are triaged

Codacy triages issues based on their [issue category](../faq/code-analysis/which-metrics-does-codacy-calculate.md#issues):

- Issues in the **Security** and **Error prone** categories are always triaged, at any severity.
- Issues in the **Code style**, **Code complexity**, **Documentation**, and **Comprehensibility** categories are never triaged.
- Issues in the remaining categories are also triaged, except the ones that have **minor** severity. 

Also note that:

- There's a limit to the number of files per commit and issues per file. In this scenario, Security and Error prone issues are triaged first, and within each, higher severities get prioritized.
- Files larger than 150 KB are excluded from triaging, because Codacy [doesn't analyze them](../faq/code-analysis/does-codacy-place-limits-on-the-code-analysis.md).
- Issues that already have a triage result aren't triaged again.

<div id="pr-reviewer"></div>

### AI Reviewer

!!! note
    AI Reviewer is currently only available on GitHub, for all Team and Business plans.

_This feature leverages OpenAI models through Amazon Bedrock, and is strictly opt-in; it will only run on repositories or organizations where an admin has enabled it._

The AI Reviewer combines the reliability of deterministic, rule-based static code analysis with the enhanced context and prioritization capabilities of AI. It draws in the necessary context from PR metadata, a [Jira or Linear ticket](#ticket-context), your repository's [review instructions and agent guidelines](#custom-instructions), source code, and Codacy data to ensure the business intent matches the technical outcome, and can catch logic gaps that conventional scanners (and human reviewers) often miss.

More details about [AI Reviewer here](../repositories-configure/integrations/github-integration.md#ai-reviewer).

**How to turn it on**

1. Go to your organization or repository settings in Codacy.
2. Navigate to the "Integrations" or "AI features" section (depending on your Codacy plan and UI version).
3. Find "AI Reviewer", under "Pull request summary", and toggle the feature to "On" for the repository or organization scope you want to enable.
4. Save your changes. Once enabled, Codacy will start adding a Summary to your pull requests based on the AI-enriched reviews.
5. To request a PR review, click **Run Reviewer** in the Summary or call our [public API](https://api.codacy.com/api/api-docs#triggerpullrequestaireview). Your review will be published as soon as it's ready.

<div id="jira-context-for-the-ai-reviewer"></div>

#### Ticket context for the AI Reviewer {: id="ticket-context"}

The AI Reviewer looks for a ticket key, such as ABC-123, in the pull request title, branch name, description, or latest commit message. It then reads the ticket from Jira or Linear:

- **Jira:** If the [Jira integration](../organizations/integrations/jira-integration.md) is enabled, the AI Reviewer reads the ticket's title and description, and those of its parent epic or task.
- **Linear:** If you use the [Linear integration for GitHub](https://linear.app/docs/github), the AI Reviewer reads the Linear issues linked to the pull request when there's no Jira ticket. You don't need to set up anything in Codacy for this.

The AI Reviewer is designed to paraphrase what it needs from the ticket rather than quote it in the review.

#### Custom Instructions

To improve the results of the AI Reviewer, you can provide custom instructions to the AI Reviewer. These instructions are specific to a repository and help the AI Reviewer understand the structure of the code, the business logic of the project, and your own preferences.

These instructions are specified in a `review.md` file in the `.codacy/instructions` directory of your repository.

You can kickstart this instructions file by asking your AI coding agent of choice to summarize the project and the codebase. Here is an example prompt:

```markdown
Analyze this repository and generate a concise AI PR reviewer instruction file in Markdown.

The file should give a PR reviewer the essential context that won't be visible in a diff. Cover:

- **Purpose**: What this repo does in 1-2 sentences.
- **Architecture**: High-level structure, patterns used (e.g. MVC, event-driven, monorepo, etc.).
- **Folder structure**: Key directories and what lives in each. Skip obvious ones.
- **Stack**: Languages, frameworks, major libraries, and their roles.
- **Testing**: Framework used, where tests live, what's expected to be tested.
- **Code style & conventions**: Naming, file organization, formatting tools, any patterns enforced.
- **PR-specific rules**: Branch strategy, what a PR should/shouldn't include, migration rules, etc.
- **Common pitfalls**: Things reviewers should flag — anti-patterns, known gotchas, areas that break easily.
- **Out of scope**: Anything reviewers should explicitly ignore or not enforce.

Rules for the output:
- Output only the Markdown content, no preamble or explanation.
- Be concise. Every line should earn its place — no filler.
- Use short sections with bullet points. Avoid long prose.
- If something is not applicable or not inferable, omit the section entirely.
```

The AI Reviewer also reads the guideline files that AI coding agents use, so it knows your conventions even without a `review.md` file:

- `AGENTS.md`, `AGENT.md`, `CLAUDE.md`, and `GEMINI.md`
- `.cursorrules`, `.windsurfrules`, and the rule files in `.cursor/rules`, `.clinerules`, and `.rules`
- `.github/copilot-instructions.md` and the `.instructions.md` files in `.github/instructions`

Use `review.md` for instructions that only apply to code reviews.

#### Learning from your reviews {: id="learning-from-reviews"}

The AI Reviewer adapts to your team using your recently closed pull requests. It reads:

- The review comments that people left on those pull requests
- The replies and reactions to the AI Reviewer's own comments

From these, it picks up what your team cares about and what to stop flagging. To steer it, react 👍 to the AI Reviewer's comments that are right, and reply to the ones that are wrong saying why.

**Notes**

- Codacy does not use your code, repository contents, or comments to train external AI models. No customer code or review text is incorporated into model training.
- To enrich the review, Codacy can send this context:
    - The git diff of the pull request and the contents of related files
    - Your review instructions and agent guideline files
    - The linked Jira or Linear tickets
    - The AI Reviewer's earlier comments on the pull request
    - Review comments from closed pull requests
- Codacy stores the AI Reviewer's own comments, a summary of your agent guideline files, and the rules it learns from your reviews.
- Codacy doesn't store the comments people leave on your pull requests, including replies to the AI Reviewer. For replies and reactions to its comments, it keeps only the number of reactions and whether the replies agree with the comment.
- Prompts are neither stored nor visible to anyone.
- As an extra precaution, before any code snippet is sent to the AI model, Codacy automatically redacts secrets (API keys, tokens, credentials, and other high-entropy strings) from the code context.

### Auto-configure repository {: id="auto-configure-repository"}

_This feature uses an AI coding agent, and is strictly opt-in: it only runs when someone with permission to configure code patterns starts it for a specific repository._

Auto-configure reviews the repository, then applies the same kind of tool and code pattern settings you could otherwise set by hand or through a [Codacy configuration file](../repositories-configure/codacy-configuration-file.md). It also recommends paths to exclude from analysis, which you review and apply yourself.

More details about [Auto-configure repository here](../repositories-configure/configuring-code-patterns.md#auto-configuring-your-repository).

**Notes**

- Codacy does not use your code, repository contents, or comments to train external AI models. No customer code is incorporated into model training.
