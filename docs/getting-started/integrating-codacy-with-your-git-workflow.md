---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# Integrating Codacy with your Git workflow

Once you've [customized your setup](customizing-your-setup.md) to best match your needs, you can integrate Codacy with your Git workflow to annotate the lines with new issues, display a summary of changes, report if your changes are up to standard, and block problematic pull requests.

To integrate Codacy with your Git workflow, follow these steps:

1.  [Configuring quality gate rules](#configuring-gate-rules)
1.  [Activate the Git provider integration](#git-provider-integration)
1.  [Enabling status checks](#enabling-status-checks)
1.  [Using code coverage as a quality gate](#coverage-gate)
1.  [Configuring your Git provider to block merging pull requests](#block-pull-requests)
1.  [Next steps](#next-steps)

## 1. Configuring quality gate rules {: id="configuring-gate-rules"}

To **configure quality gate rules and goals** for quality, duplication, complexity, and coverage metrics, [adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) of your project.

These rules, goals, and metrics are always visible on Codacy's dashboard and [can be optionally enforced](#block-pull-requests) when merging pull requests.

!!! tip
    Depending on the initial quality of your repositories and on your current team practices, the default quality gates may be too strict.  Consider initially limiting gates to new critical issues, new security issues, and considerable drops in code coverage.

![Configuring quality gate rules](../repositories-configure/images/quality-settings.png)

## 2. Activate the Git provider integration {: id="git-provider-integration"}

To **provide feedback to your Git provider** on pull requests, annotate lines with new issues, display a summary view of changes, and report if your changes and code coverage are up to standard, activate the integration with your provider ([GitHub](../repositories-configure/integrations/github-integration.md), [GitLab](../repositories-configure/integrations/gitlab-integration.md), [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md)).

## 3. Enabling status checks {: id="enabling-status-checks"}

To let Codacy **report analysis results on your pull requests as status checks**, enable the option **Status checks** (GitHub) or **Pull request status** (GitLab and Bitbucket) when [activating the Git provider integration](#integrating-codacy-with-your-git-provider).

## 3. Using code coverage as a quality gate {: id="coverage-gate"}

To **use code coverage as a quality gate** for merging pull requests:

1.  [Set up the coverage reporter pipeline](../coverage-reporter/index.md), and do so **before** opening a pull request, so that Codacy correctly reports the coverage status on both the pull request branch and the target branch
1.  [Update the quality gate rules](../repositories-configure/adjusting-quality-settings.md#gates) to enable **Diff coverage is under** or **Coverage variation is under**, so that Codacy reports the coverage status to your Git provider

![Enabling your Git provider integration](../repositories-configure/integrations/images/github-integration.png)

## 4. Block merging pull requests {: id="block-pull-requests"}

!!! important
    At this stage we recommend that you:

    -   Validate that Codacy is reporting the intended status on your pull requests
    -   Double check you repository's [tool and code pattern settings](../repositories-configure/configuring-code-patterns.md) and [quality gate settings](../repositories-configure/adjusting-quality-settings.md)

    This is important to eliminate any false positives that could inadvertently block the work of your team.

To block merging pull requests, set up your Git provider to block merging pull requests with failing status checks ([GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/)).

## 5. Next steps {: id="next-steps"}

-   TODO
