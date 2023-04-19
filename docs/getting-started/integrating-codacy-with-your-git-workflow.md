---
description: Integrate Codacy with your Git workflow to display analysis results and code coverage as status checks on your pull requests and optionally block merging pull requests.
nav_step: 2
---

# Integrating Codacy with your Git workflow

<!--TODO PLUTO-532 Review all the content of this page-->

{% include-markdown "../assets/includes/nav-multistep-quickstart.md" %}

Once you've configured your repository to best match your use case, integrate Codacy with your Git workflow to display analysis results and code coverage as status checks on your pull requests.

In particular, you can configure quality gates to block merging pull requests that don't meet the quality standards of your team. This ensures the quality of the changes to your codebase, preventing the introduction of security issues and untested code.

To integrate Codacy with your Git workflow, follow these steps:

1.  [Configuring the quality gate rules](#configuring-gate)
1.  [Activating the Git provider integration](#git-provider-integration)
1.  [Blocking merging pull requests](#blocking-pull-requests) (optional)

## 1. Configuring the quality gate rules {: id="configuring-gate"}

[Review and adjust the quality gates](../repositories-configure/adjusting-quality-gates.md) of your repository to decide which pull requests should fail the Codacy quality gate.

!!! tip
    The default values of the quality gate rules are designed to help maintain the current code quality of your repository. In particular, the default value for the coverage rule might be demanding. Depending on factors such as the current code quality of your repository and the maturity of your team practices, consider the balance between implementing stricter quality gates and the possibility of delaying or blocking the development progress.

    Codacy generally recommends that on a first stage you configure rules that focus on stopping new critical issues from entering your code base, such as:

    -   High severity issues
    -   Security issues
    -   Considerable drops in code coverage

!!! important
    **If you want to use code coverage** to block merging pull requests that don't meet your standards, make sure that you enable the rule **Diff coverage is under** or **Coverage variation is under**. This is required for Codacy to report the coverage status directly on your pull requests.

![Adjusting the quality gates](../repositories-configure/images/quality-settings-gates.png)

## 2. Activating the Git provider integration {: id="git-provider-integration"}

Follow the instructions for [GitHub](../repositories-configure/integrations/github-integration.md#enabling), [GitLab](../repositories-configure/integrations/gitlab-integration.md#enabling), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#enabling) depending on your Git provider, and make sure that you:

1.  Enable the Git provider integration
1.  Enable the option **Status checks** (GitHub) or **Pull request status** (GitLab and Bitbucket)

![Enabling your Git provider integration](../repositories-configure/integrations/images/github-integration.png)

## 3. Blocking merging pull requests (optional) {: id="blocking-pull-requests"}

Once you've tested out Codacy for a while and you're happy with the level of feedback provided, you can decide to enforce the quality gates and use Codacy to block merging pull requests on your Git provider. This is the best way to protect your code from unwelcome changes and fully integrates code quality and coverage analysis into your development pipeline.

!!! important
    To eliminate any false positives that could inadvertently block the work of your team, it's important that before activating this feature you:

    -   Validate that Codacy is reporting the intended status on your pull requests
    -   Double check you repository's [tool and code pattern settings](../repositories-configure/configuring-code-patterns.md) and [quality gate settings](../repositories-configure/adjusting-quality-gates.md)

Follow the instructions from your Git provider to block merging pull requests if they don't pass the Codacy status check:

-   **GitHub:** [set Codacy as a required status check](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)
-   **GitLab:** [only allow merge requests to be merged if the pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds)
-   **Bitbucket:** [configure Bitbucket to prevent a merge with unresolved merge checks](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/)

## You're all set! 🎉

**Congratulations!** You've successfully integrated and set up your first repository.
