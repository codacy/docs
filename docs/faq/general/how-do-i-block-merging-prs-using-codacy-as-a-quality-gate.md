---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# How do I block merging pull requests using Codacy as a quality gate?

You can block merging pull requests until they pass the Codacy quality gate. This ensures the quality of the changes to your codebase, such as to prevent introducing security issues or adding code that isn't covered by tests.

To block merging pull requests that don't meet the quality standards of your team you must complete these main steps:

1.  Adding coverage to your repository (optional)
1.  Reviewing and adjusting the Codacy analysis settings
1.  Enabling the Codacy pull request status checks
1.  Configuring your Git provider to block merging pull requests

The next sections include detailed instructions on how to complete each step.

## 1. Adding coverage to your repository (optional) {: id="adding-coverage"}

If you want to use code coverage to block merging pull requests that don't meet your quality standards, make sure that you [add coverage to your repository](../../coverage-reporter/index.md).

It's important that you set up coverage beforehand because Codacy can only report the coverage status for pull requests after receiving reports for the last commits **on both the pull request branch and the target branch**.

![Adding coverage to your repository](../../coverage-reporter/images/coverage-codacy-ui.png)

## 2. Reviewing and adjusting the Codacy analysis settings {: id="adjusting-analysis-settings"}

We recommend that you spend some time reviewing the Codacy analysis settings to focus on the tools and code patterns that bring more value to your team. Importantly, this eliminates the risk of having false positives block the work of your team once you start using Codacy as a quality gate.

1.  [Ignore any files and directories](../../repositories-configure/ignoring-files.md) that aren't relevant for the Codacy analysis, such as generated code or any third-party libraries included in your repositories.

    ![Ignoring files](../../repositories-configure/images/ignored-files.png)

1.  [Configure the tools and code patterns](../../repositories-configure/configuring-code-patterns.md) that Codacy uses to analyze your repository.

    !!! tip
        To ensure that multiple repositories consistently follow the same global tool and code pattern configurations, [use an organization coding standard](../../organizations/using-a-coding-standard.md) instead.

    ![Configuring the tools and code patterns](../../repositories-configure/images/code-patterns.png)

1.  [Review and adjust the quality settings](../../repositories-configure/adjusting-quality-settings.md) of your repository to decide which pull requests should fail the Codacy quality gate.

    !!! important
        **If you want to use code coverage** to block merging pull requests that don't meet your standards, make sure that you enable the rule **Coverage variation is under**. This is required for Codacy to report the coverage status directly on your pull requests.

    ![Adjusting the quality settings](../../repositories-configure/images/quality-settings.png)

## 3. Enabling the Codacy pull request status checks {: id="enabling-status-checks"}

Set up your repository so that Codacy reports the results of the analysis directly on your pull requests as status checks:

To do this, follow the instructions for [GitHub](../../repositories-configure/integrations/github-integration.md#enabling), [GitLab](../../repositories-configure/integrations/gitlab-integration.md#enabling), or [Bitbucket](../../repositories-configure/integrations/bitbucket-integration.md#enabling) depending on your Git provider, and make sure that you:

1.  Enable the Git provider integration
1.  Enable the option **Status checks** (GitHub) or **Pull request status** (GitLab and Bitbucket)

![Enabling your Git provider integration](../../repositories-configure/integrations/images/github-integration.png)

## 4. Configuring your Git provider to block merging pull requests {: id="configuring-git-provider"}

!!! important
    At this stage we recommend that you:

    -   Validate that Codacy is reporting the intended status on your pull requests
    -   Double check you repository's [tool and code pattern settings](../../repositories-configure/configuring-code-patterns.md) and [quality gate settings](../../repositories-configure/adjusting-quality-settings.md)

    This is important to eliminate any false positives that could inadvertently block the work of your team.

Finally, follow the instructions from your Git provider to block merging pull requests if they don't pass the Codacy status check:

-   **GitHub:** [Set Codacy as a required status check](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule){: target="_blank"}
-   **GitLab:** [Only allow merge requests to be merged if the pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds){: target="_blank"}
-   **Bitbucket:** [configure Bitbucket to prevent a merge with unresolved merge checks](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/){: target="_blank"}
