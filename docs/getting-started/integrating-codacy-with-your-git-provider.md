---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# Integrating Codacy with your Git provider

Once you've [customized your setup](customizing-your-setup.md) to best match your needs, you can set up Codacy to act as a quality gate and block merging pull requests that don't meet your quality criteria. This safeguards your codebase against security issues, untested code, and the accumulation of tech debt.

To set up Codacy as a quality gate, follow these steps:

1.  [Configuring quality gate rules](#configuring-gate)
1.  [Providing feedback to your Git provider](#git-provider-feedback)
1.  [Enabling status checks](#enabling-status-checks)
1.  [Using code coverage as a quality gate](#coverage-gate) (optional)
1.  [Configuring your Git provider to block merging pull requests](#configuring-git-provider)
1.  [Next steps](#next-steps)

## 1. Configuring quality gate rules {: id="configuring-gate"}

[//]: # (TODO merge below in one paragraph only)

Codacy’s settings let you configure the recommended values and goals for quality, duplication, and complexity metrics. They are always visible on Codacy's dashboard and [can even be enforced](integrating-codacy-with-your-git-provider.md) when integrating with your Git provider.

[Adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) to control the quality metrics of your code and deliver features that exceed expectations.

To **set quality gate rules for pull requests to pass**, [adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) of your project.

!!! tip
    Depending on the initial quality of your repositories and on your current team practices, the default quality gates may be too strict.  Consider initially limiting gates to new critical issues, new security issues, and considerable drops in code coverage.

![Adjusting the quality settings](../repositories-configure/images/quality-settings.png)

## 2. Providing feedback to your Git provider {: id="git-provider-feedback"}

Configure Codacy to provide feedback directly on [GitHub](../repositories-configure/integrations/github-integration.md), [GitLab](../repositories-configure/integrations/gitlab-integration.md), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md) pull requests by annotating the lines with new issues, displaying a summary view of changes, and reporting when your changes and code coverage are up to standard.

## 3. Enabling status checks {: id="enabling-status-checks"}

To let Codacy **report analysis results on your pull requests** as status checks:

1.  Enable the Git provider integration ([GitHub](../repositories-configure/integrations/github-integration.md#enabling), [GitLab](../repositories-configure/integrations/gitlab-integration.md#enabling), [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#enabling))
1.  Activate the option **Status checks** (GitHub) or **Pull request status** (GitLab and Bitbucket) while enabling the Git provider integration

## 4. Using code coverage as a quality gate (optional) {: id="coverage-gate"}

To optionally **use code coverage as a quality gate** for merging pull requests:

1.  [Set up the coverage reporter pipeline](../coverage-reporter/index.md), and do so **before** opening a pull request, so that Codacy correctly reports the coverage status on both the pull request branch and the target branch
1.  [Update the quality gate rules](../repositories-configure/adjusting-quality-settings.md#gates) to enable **Diff coverage is under** or **Coverage variation is under**, so that Codacy reports the coverage status to your Git provider

![Enabling your Git provider integration](../repositories-configure/integrations/images/github-integration.png)

## 5. Configuring your Git provider to block merging pull requests {: id="configuring-git-provider"}

!!! important
    At this stage we recommend that you:

    -   Validate that Codacy is reporting the intended status on your pull requests
    -   Double check you repository's [tool and code pattern settings](../repositories-configure/configuring-code-patterns.md) and [quality gate settings](../repositories-configure/adjusting-quality-settings.md)

    This is important to eliminate any false positives that could inadvertently block the work of your team.

Set up your Git provider to block merging pull requests with failing status checks ([GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/)).

## 6. Next steps {: id="next-steps"}
