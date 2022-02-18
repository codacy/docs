# Adjusting quality settings

The **Quality settings** allow you to configure quality gates for your pull requests and commits, and define quality goals that help you monitor the progress of the code quality in your repository dashboard.

To access the quality settings, open your repository **Settings**, tab **Quality Settings**:

![Quality settings](images/quality-settings.png)

The following sections explain the settings in detail.

## Gates

These settings configure when Codacy reports pull requests and commits as not up to standards.

!!! note
    **To enable pull request status** directly on your Git provider pull requests, see [GitHub](../repositories-configure/integrations/github-integration.md#configuring-the-github-integration), [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring-the-gitlab-integration), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring-the-bitbucket-integration), depending on your Git provider. For Codacy to report the coverage status on your pull requests you must also turn on the rule **Diff coverage is under** or **Coverage variation is under**.

    **If you want to block merging pull requests** that aren't up to standards see [How do I block merging pull requests using Codacy as a quality gate?](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md)

![Quality gates](images/quality-settings-gates.png)

-   **New issues are over:** Pull requests or commits are marked not up to standards if the number of issues introduced that have at least the specified severity level is higher than the set value. The default value is 0.
-   **New security issues are over:** Pull requests or commits are marked not up to standards if the number of security issues introduced is higher than the set value. By default, this setting is off.
-   **Complexity is over:** Pull requests or commits are marked not up to standards if the introduced complexity is higher than the set value. By default, this setting is off.
-   **Duplication is over:** Pull requests or commits are marked not up to standards if the number of clones introduced is higher than the set value. By default, this setting is off.
-   **Diff coverage is under:** Pull requests are marked not up to standards if the code coverage of the lines added or changed by the pull request is lower than the set value. By default, this setting is off.

    !!! note
        The rule **Diff coverage is under** is only available for pull requests.

-   **Coverage variation is under:** Pull requests or commits are marked not up to standards if they introduce a variation to coverage lower than the set value. The maximum value is 1%. By default, this setting is off.

    !!! tip
        To ensure that commits and pull requests:

        -   **Must improve** the coverage, set the value to 1%
        -   **Can't decrease** the coverage, set the value to 0%
        -   **Can decrease** the coverage, set the value to a negative percentage

## Goals

These settings configure the quality goals for your repository, and which files Codacy considers complex or duplicated.

Codacy displays the quality goals as dashed lines on the [quality evolution chart](../repositories/repository-dashboard.md#quality-evolution-chart) to help you monitor the progress and overall quality status of your repository.

![Quality settings for the repository](images/quality-settings-goals.png)

-   **Issues are over:** Defines the threshold displayed on the tab **Issues** of the quality evolution chart.
-   **Complexity of files is over:** Defines the threshold displayed on the tab **Complexity** of the quality evolution chart.
-   **File is complex when over:** A file is considered complex when its complexity is over this value.
-   **Duplication of files is over:** Defines the threshold displayed on the tab **Duplication** of the quality evolution chart.
-   **File is duplicate when over:** A file is considered duplicated when it has more clones than this value.
-   **Coverage is under:** Defines the threshold displayed on the tab **Coverage** of the quality evolution chart.

## See also

-   [How do I block merging pull requests using Codacy as a quality gate?](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md)
