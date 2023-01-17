---
description: Enable the GitHub integration to have status checks, annotations, issue and coverage summaries, and suggested fixes from Codacy directly on pull requests.
---

# GitHub integration

The GitHub integration incorporates Codacy on your existing Git provider workflows by reporting issues and the analysis status directly on your pull requests.

When the integration is enabled, you can also create pull request comments and GitHub issues directly from Codacy when [browsing the existing issues](../../repositories/issues.md) on the repository:

![GitHub integration for issues](images/github-integration-issues.png)

## Enabling the GitHub integration {: id="enabling"}

To enable the GitHub integration, open your repository **Settings**, tab **Integrations**. When you add a new repository, the integration is already enabled by default.

![GitHub integration](images/github-integration.png)

If you remove the integration, you can enable it again as follows:

1.  Click the button **Add integration** and select **GitHub** on the list.
1.  Click the button **Enable** and follow the instructions.

    !!! important
        The user that enables the integration [must have administrator access to the repository](../../organizations/roles-and-permissions-for-organizations.md#permissions-for-github).

## Configuring the GitHub integration {: id="configuring"}

To configure the GitHub integration, open your repository **Settings**, tab **Integrations**.

Depending on the options that you enable, Codacy will automatically update pull requests on GitHub with extra information when accepting pull requests:

### Status checks

Adds a report to your pull requests showing whether your pull requests and coverage are up to standards or not as configured on the [quality settings](../../repositories-configure/adjusting-quality-settings.md) of your repository.

{%
    include-markdown "../../assets/includes/status-checks-important.md"
    start="<!--coverage-status-start-->"
    end="<!--coverage-status-end-->"
%}

![Pull request status check on GitHub](images/github-integration-pr-status.png)

### Issue annotations

Adds annotations on the lines of the pull request where Codacy finds new issues. Codacy maps the severity of the issues reported by the tools to the severity levels of the annotations. To enable this option, you must enable **Status checks** first.

![Issue annotation on GitHub](images/github-integration-pr-annotation.png)

### Issue summaries

Shows an overall view of the changes in the pull request, including new issues and metrics such as complexity and duplication. To enable this option, you must enable **Status checks** first.

![Issue summary on GitHub](images/github-integration-pr-summary.png)

### Coverage summaries

Adds a pull request comment showing an overall view of the coverage metrics for the pull request, including details about the data that Codacy used to calculate the coverage variation and diff coverage metrics.

When there are new coverage results, Codacy updates the last coverage summary comment if it's included in the last 5 comments of the pull request. Otherwise, Codacy creates a new comment.

!!! important
    **To get coverage summaries** you must also [add coverage to your repository](../../coverage-reporter/index.md).

![Coverage summary on GitHub](images/github-integration-coverage-summary.png)

!!! note
    This feature is only supported on GitHub Cloud.

### Suggested fixes {: id="suggest-fixes"}

{%
    include-markdown "../../assets/includes/paid.md"
    start="<!--paid-start-->"
    end="<!--paid-end-->"
%}

Adds comments on the lines of the pull request where Codacy finds new issues with suggestions on how to fix the issues. Codacy doesn't apply any changes automatically. To apply the changes, [manually review and accept the suggestions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request#applying-suggested-changes).

![Comment suggesting a fix on GitHub](images/github-integration-suggest-fixes.png)

!!! note
    This feature is in early access and has the following limitations for now:

    -   The only supported Git providers are GitHub Cloud and GitHub Enterprise.
    -   The only two tools that suggest fixes are [ESLint](https://eslint.org/docs/rules/) and [markdownlint](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md). However, we're planning to support suggestions from more tools.

    📢 [Activate suggested fixes now](#enabling) and [let us know](mailto:support@codacy.com?subject=Feedback on Suggest fixes) what you think!

## See also

-   [Integrating Codacy with your Git workflow](../../getting-started/integrating-codacy-with-your-git-workflow.md)
