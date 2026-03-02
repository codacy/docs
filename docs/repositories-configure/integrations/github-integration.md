---
description: Enable the GitHub integration to have status checks, annotations, issue and coverage summaries, and suggested fixes from Codacy directly on pull requests.
---

# GitHub integration

The GitHub integration incorporates Codacy on your existing Git provider workflows by reporting issues and the analysis status directly on your pull requests.

When you add a new repository, Codacy sets the GitHub integration using the [default settings for your organization](../../organizations/integrations/default-git-provider-integration-settings.md). You can then [customize the settings](#configuring) for the repository.

![GitHub integration](images/github-integration.png)

## Configuring the GitHub integration {: id="configuring"}

To configure the GitHub integration, open your repository **Settings**, tab **Integrations**.

Depending on the options that you enable, Codacy will automatically update pull requests on GitHub with extra information when accepting pull requests.

{%
    include-markdown "../../assets/includes/default-git-provider-settings-tip.md"
    start="<!--default-settings-apply-all-start-->"
    end="<!--default-settings-apply-all-end-->"
%}

### Status checks

Adds a report to your pull requests showing whether your pull requests and coverage are up to standards or not as configured on the [quality gate rules](../../repositories-configure/adjusting-quality-gates.md) for your repository. You can then optionally [block merging pull requests that aren't up to standards](../../getting-started/integrating-codacy-with-your-git-workflow.md#blocking-pull-requests).

{% include-markdown "../../assets/includes/status-checks-important.md" %}

![Pull request status check on GitHub](images/github-integration-pr-status.png)

### Pull request review {: id="pull-request-review"}

{%
    include-markdown "../../assets/includes/paid.md"
    start="<!--paid-start-->"
    end="<!--paid-end-->"
%}

!!! note
    This feature is only supported on GitHub.

When enabled, Codacy posts a **Codacy's Analysis Summary** comment on your pull requests each time a new analysis completes, giving you a full overview of code quality,  security, complexity, and duplication metric changes, without requiring you to open the Codacy app.

#### Enable AI reviewer {: id="ai-reviewer"}

!!! note
    If you enable the AI Reviewer, consider disabling AI-enhanced comments to avoid receiving duplicate comments on Codacy issues.

The AI Reviewer extends Pull request review with an AI-powered code analysis. It combines the reliability of deterministic, rule-based static code analysis with the power of AI. It draws in the necessary context from source code and PR metadata to ensure the business intent matches the technical outcome, and can catch logic gaps that conventional scanners (and human reviewers) often miss.

It provides feedback on missing or weak tests, complex or duplicated code, and keeps security concerns up to date. Beyond that, it adds contextual insights about whether the changes follow the requirements, business rules, and logic used in the project.

Configure when the AI Reviewer runs using the **Run reviewer** setting:

| Mode | Behaviour |
|------|-----------|
| Manually | Click **Run Reviewer** in the pull request comment or call our [public API](https://api.codacy.com/api/api-docs#triggerpullrequestaireview) to trigger a review on demand. |
| Automatically (first review only) | Codacy runs the reviewer once automatically when the pull request is opened, then requires manual triggering for subsequent updates. |

!!! tip
    Improve the AI Reviewer results by providing custom instructions. [Learn how to do it here](../../codacy-ai/codacy-ai.md#custom-instructions).

![AI Reviewer on Github](images/github-integration-ai-reviewer.png)


### Issue annotations

Adds annotations on the lines of the pull request where Codacy finds new issues. Codacy maps the severity of the issues reported by the tools to the severity levels of the annotations. To enable this option, you must enable **Status checks** first.

![Issue annotation on GitHub](images/github-integration-pr-annotation.png)

### Issue summaries

Shows an overall view of the changes in the pull request, including new issues and metrics such as complexity and duplication. To enable this option, you must enable **Status checks** first.

![Issue summary on GitHub](images/github-integration-pr-summary.png)

### Coverage summaries

!!! warning "Coverage summary is moving to Pull request review"
    In the coming weeks, Codacy will include coverage data in the Pull request review comment and remove the Coverage summary setting. [Learn more](../../release-notes/cloud/cloud-2026-03-github-integration-settings-changes.md#coverage-summary).

Adds a pull request comment showing an overall view of the coverage metrics for the pull request, including details about the data that Codacy used to calculate the coverage variation and diff coverage metrics.

When there are new coverage results, Codacy updates the last coverage summary comment if it's included in the last 5 comments of the pull request. Otherwise, Codacy creates a new comment.

!!! important
    **To get coverage summaries** you must also [add coverage to your repository](../../coverage-reporter/index.md).

![Coverage summary on GitHub](images/github-integration-coverage-summary.png)

!!! note
    This feature is only supported on GitHub and GitLab Cloud.

### Suggested fixes {: id="suggest-fixes"}

{%
    include-markdown "../../assets/includes/paid.md"
    start="<!--paid-start-->"
    end="<!--paid-end-->"
%}

Adds comments on the lines of the pull request where Codacy finds new issues with suggestions on how to fix the issues. Codacy doesn't apply any changes automatically. To apply the changes, [manually review and accept the suggestions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request#applying-suggested-changes).

!!! tip
    Enable also **AI-enhanced comments** to get ready-to-commit AI-generated fixes.

![Comment suggesting a fix on GitHub](images/github-integration-suggest-fixes.png)

### AI-enhanced comments

!!! warning "AI-enhanced comments (Beta) is being deprecated on March 16, 2026"
    This feature is being replaced by the AI Reviewer, which provides a more accurate and comprehensive experience. [Learn more](../../release-notes/cloud/cloud-2026-03-github-integration-settings-changes.md#ai-enhanced-comments).

Adds AI-enhanced comments, providing insights and ready-to-commit AI-generated fixes for identified issues in cases where tool-suggested fixes are not supported. To enable this option, you must enable **Suggested fixes** first.

{% include-markdown "../../assets/includes/ai-info.md" %}

![AI-enhanced comment on GitHub](images/github-integration-ai-comment.png)

## See also

-   [Integrating Codacy with your Git workflow](../../getting-started/integrating-codacy-with-your-git-workflow.md)
