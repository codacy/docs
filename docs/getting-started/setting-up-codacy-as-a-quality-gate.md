---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# Setting up Codacy as a quality gate

You can set up Codacy to act as a quality gate and block merging pull requests that don't meet your quality criteria. This safeguards your codebase against security issues, untested code, and the accumulation of tech debt.

!!! important "Prerequisites"
    Before setting up Codacy as a quality gate, [customize your settings](tweaking-your-settings.md) to best match your needs.

To set up Codacy as a quality gate, follow these steps:

1.  [Configuring the quality gate rules](#configuring-gate)
1.  [Using code coverage as a quality gate](#coverage-gate) (optional)
1.  [Enabling the Codacy pull request status checks](#enabling-status-checks)
1.  [Configuring your Git provider to block merging pull requests](#configuring-git-provider)

## 1. Configuring the quality gate rules {: id="configuring-gate"}

To **set the minimum values for merging pull requests to pass** the Codacy quality gates, [adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) of your project.

!!! tip
    Depending on the initial quality of your repositories and on your current team practices, the default quality gates may be too strict.  Consider initially limiting gates only to new critical issues, new security issues, and considerable drops in code coverage.

![Adjusting the quality settings](../repositories-configure/images/quality-settings.png)

## 2. Using code coverage as a quality gate (optional) {: id="coverage-gate"}

To **optionally use code coverage as a quality gate** for merging pull requests:

1.  [Set up the coverage reporter pipeline](../coverage-reporter/index.md), and do so **before** opening a pull request, so that Codacy correctly reports the coverage status on both the pull request branch and the target branch
1.  [Enable the rule](../repositories-configure/adjusting-quality-settings.md#gates) **Diff coverage is under** or **Coverage variation is under**, so that Codacy reports the coverage status to your Git provider

## 3. Enabling the Codacy pull request status checks {: id="enabling-status-checks"}

To let Codacy **report the results of the analysis directly on your pull requests** as status checks:

1.  Enable the Git provider integration ([GitHub](../repositories-configure/integrations/github-integration.md#enabling), [GitLab](../repositories-configure/integrations/gitlab-integration.md#enabling), [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#enabling))
1.  After enabling the Git provider integration, enable the option **Status checks** (GitHub) or **Pull request status** (GitLab and Bitbucket)

![Enabling your Git provider integration](../repositories-configure/integrations/images/github-integration.png)

## 4. Configuring your Git provider to block merging pull requests {: id="configuring-git-provider"}

!!! important
    At this stage we recommend that you:

    -   Validate that Codacy is reporting the intended status on your pull requests
    -   Double check you repository's [tool and code pattern settings](../repositories-configure/configuring-code-patterns.md) and [quality gate settings](../repositories-configure/adjusting-quality-settings.md)

    This is important to eliminate any false positives that could inadvertently block the work of your team.

Finally, follow the instructions from your Git provider to block merging pull requests if they don't pass the Codacy status check:

-   **GitHub:** [Set Codacy as a required status check](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)
-   **GitLab:** [Only allow merge requests to be merged if the pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds)
-   **Bitbucket:** [configure Bitbucket to prevent a merge with unresolved merge checks](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/)
