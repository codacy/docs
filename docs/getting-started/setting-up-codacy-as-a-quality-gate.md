---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# Setting up Codacy as a quality gate

You can block merging pull requests until they pass the Codacy quality gate. This ensures the quality of the changes to your codebase, such as to prevent introducing security issues or adding code that isn't covered by tests.

!!! important "Prerequisites"
    Before setting up Codacy as a quality gate, [customize your settings](tweak-your-settings.md) to best match your needs.

To block merging pull requests that don't meet the quality standards of your team, complete these steps:

1.  [Deciding which pull requests fail the Codacy quality gate](#configuring-gate)
1.  [Enabling the Codacy pull request status checks](#enabling-status-checks)
1.  [Configuring your Git provider to block merging pull requests](#configuring-git-provider)

The next sections include detailed instructions on how to complete each step.

## 1. Configuring the quality gate rules {: id="configuring-gate"}

[Review and adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) of your repository to decide which pull requests should fail the Codacy quality gate.

!!! important
    To use code coverage to block merging pull requests that don't meet your standards:

    -   [Set up coverage](../coverage-reporter/index.md) before opening the pull request
    -   [Enable the rule](../repositories-configure/adjusting-quality-settings.md#gates) Diff coverage is under or Coverage variation is under

!!! tip
    Depending on the initial quality of your repositories and the maturity of your team practices, the default quality gates may be too strict.  Consider initially setting gates only on new critical issues, new security issues, and considerable drops in code coverage.

![Adjusting the quality settings](../repositories-configure/images/quality-settings.png)

## 2. Enabling the Codacy pull request status checks {: id="enabling-status-checks"}

Set up your repository so that Codacy reports the results of the analysis directly on your pull requests as status checks:

To do this, follow the instructions for [GitHub](../repositories-configure/integrations/github-integration.md#enabling), [GitLab](../repositories-configure/integrations/gitlab-integration.md#enabling), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#enabling) depending on your Git provider, and make sure that you:

1.  Enable the Git provider integration
1.  Enable the option **Status checks** (GitHub) or **Pull request status** (GitLab and Bitbucket)

![Enabling your Git provider integration](../repositories-configure/integrations/images/github-integration.png)

## 3. Configuring your Git provider to block merging pull requests {: id="configuring-git-provider"}

!!! important
    At this stage we recommend that you:

    -   Validate that Codacy is reporting the intended status on your pull requests
    -   Double check you repository's [tool and code pattern settings](../repositories-configure/configuring-code-patterns.md) and [quality gate settings](../repositories-configure/adjusting-quality-settings.md)

    This is important to eliminate any false positives that could inadvertently block the work of your team.

Finally, follow the instructions from your Git provider to block merging pull requests if they don't pass the Codacy status check:

-   **GitHub:** [Set Codacy as a required status check](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)
-   **GitLab:** [Only allow merge requests to be merged if the pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds)
-   **Bitbucket:** [configure Bitbucket to prevent a merge with unresolved merge checks](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/)
