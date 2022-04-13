# Adjusting quality settings

The **Quality settings** allow you to configure quality gates for your pull requests and commits, and define quality goals that help you monitor the progress of the code quality in your repository dashboard.

To access the quality settings, open your repository **Settings**, tab **Quality Settings**:

![Quality settings](images/quality-settings.png)

The following sections explain the settings in detail.

## Gates

These settings configure when Codacy reports pull requests and commits as not up to standards.

Depending on the result of applying the quality gate rules, Codacy updates the color of the metrics on the [pull request or commit quality overview](../repositories/pull-requests.md#pull-request-quality-overview) and reports the corresponding pull request or commit status on your Git provider, if enabled.

!!! note
    **To enable pull request status** directly on your Git provider pull requests, see [GitHub](../repositories-configure/integrations/github-integration.md#configuring), [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring), depending on your Git provider. For Codacy to report the coverage status on your pull requests you must also turn on the rule **Diff coverage is under** or **Coverage variation is under**.

    **If you want to block merging pull requests** that aren't up to standards see [How do I block merging pull requests using Codacy as a quality gate?](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md)

The following screenshot displays the default configuration values:

![Quality gates](images/quality-settings-gates.png)

-   **New issues are over:** Pull requests or commits are marked not up to standards if the number of issues introduced that have at least the specified severity level is higher than the set value.
-   **New security issues are over:** Pull requests or commits are marked not up to standards if the number of security issues introduced is higher than the set value.
-   **Complexity is over:** Pull requests or commits are marked not up to standards if the introduced complexity is higher than the set value.
-   **Duplication is over:** Pull requests or commits are marked not up to standards if the number of clones introduced is higher than the set value.
-   **Diff coverage is under:** Pull requests are marked not up to standards if the diff coverage of the pull request is lower than the set value. This rule is only available for pull requests.
-   **Coverage variation is under:** Pull requests or commits are marked not up to standards if they introduce a variation to coverage lower than the set value. The maximum value is 1%.

    !!! tip
        To ensure that commits and pull requests:

        -   **Must improve** the coverage, set the value to 1%
        -   **Can't decrease** the coverage, set the value to 0%
        -   **Can decrease** the coverage, set the value to a negative percentage

## Goals

These settings configure the quality goals for your repository, and which files Codacy considers complex or duplicated.

Codacy displays the quality goals as dashed lines on the [quality evolution chart](../repositories/repository-dashboard.md#quality-evolution-chart) to help you monitor the progress and overall quality status of your repository.

The following screenshot displays the default configuration values:

![Quality settings for the repository](images/quality-settings-goals.png)

-   **Issues are over:** Defines the threshold displayed on the tab **Issues** of the quality evolution chart.
-   **Complexity of files is over:** Defines the threshold displayed on the tab **Complexity** of the quality evolution chart.
-   **File is complex when over:** A file is considered complex when its complexity is over this value.
-   **Duplication of files is over:** Defines the threshold displayed on the tab **Duplication** of the quality evolution chart.
-   **File is duplicate when over:** A file is considered duplicated when it has more clones than this value.
-   **Coverage is under:** Defines the threshold displayed on the tab **Coverage** of the quality evolution chart.

## See also

-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
-   [How do I block merging pull requests using Codacy as a quality gate?](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md)
-   [Diff coverage: <span class="skip-vale">we have</span> a new metric and quality gate rule for PRs](https://blog.codacy.com/diff-coverage/)
