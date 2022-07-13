# Repository Dashboard

The **Repository Dashboard** provides an overview of the repository code quality and items that require your attention.

To access your Repository Dashboard, select a repository from the [Organization Dashboard](../organizations/organization-overview.md) or open a repository on any other page and select **Dashboard** on the left navigation sidebar.

!!! tip
    You can share the URL of the Repository Dashboard for your **public repositories** to allow other people to see your repository code quality metrics, even if they aren't registered on Codacy.

![Repository Dashboard](images/repository-dashboard.png)

The top of the Repository Dashboard displays:

-   The name and [code quality grade](../faq/code-analysis/which-metrics-does-codacy-calculate.md#grade) of the repository
-   A drop-down list that selects which branch of your repository to display on the dashboard

On the Repository Dashboard you have the following areas to help you monitor your repository:

-   [Quality evolution chart](#quality-evolution-chart)
-   [Issues breakdown](#issues-breakdown)
-   [Coverage](#coverage)
-   [Open pull requests](#open-pull-requests)

The following sections provide a detailed overview of each dashboard area.

{% include-markdown "../assets/includes/dashboard-api-report-note.md" %}

## Quality evolution chart

The **Quality evolution** chart displays the evolution of the repository code quality regarding [issues](../faq/code-analysis/which-metrics-does-codacy-calculate.md#issues), [complex files](../faq/code-analysis/which-metrics-does-codacy-calculate.md#complexity), [duplication](../faq/code-analysis/which-metrics-does-codacy-calculate.md#duplication), and [code coverage](../faq/code-analysis/which-metrics-does-codacy-calculate.md#code-coverage). Click on **Last 3 months**, **Last 31 days**, or **Last 7 days** to select the time interval of the historical data to display on the chart.

Each tab displays the following information for the corresponding metric:

-   A green or red indicator depending if the metric is within the acceptable quality level or not
-   The current value
-   The variation of the value introduced by the last commit

!!! note
    The coverage tab only displays a value if Codacy received coverage data for the most recent commit. This is because one commit can easily change the size or number of files on the repository, or even remove some of the files that had coverage information.

The chart also displays the **trendline** based on the past behavior and the **quality goal** defined on the repository [quality settings](../repositories-configure/adjusting-quality-settings.md).

![Quality evolution chart](images/repository-dashboard-quality-evolution.png)

## Issues breakdown

The **Issues breakdown** area displays the total number of issues found on the selected branch, as well as the distribution of issues across each code quality issue category.

Click **See all issues** to see the full [list of issues](issues.md) found, or click a category to see the issues in that category.

![Issues breakdown](images/repository-dashboard-issues-breakdown.png)

## Coverage

The **Coverage** area displays the percentage of lines of code on the selected branch that are covered by tests versus the [quality settings](../repositories-configure/adjusting-quality-settings.md) defined for the repository, as well as the number of files:

-   Without coverage
-   With coverage not up to standards (based on your repository quality settings)
-   With coverage up to standards (based on your repository quality settings)

Click **See all files** to open the [list of files](files.md) in the repository.

!!! tip
    If you don't have coverage set up for your repository yet, the Coverage area provides you with instructions on [how to add coverage for your repository](../coverage-reporter/index.md).

![Coverage](images/repository-dashboard-coverage.png)

## Open pull requests

The **Open pull requests** area displays the last updated pull requests and the split between the status of all open pull requests in your repository:

-   **Up to standards:** Pull requests that meet the minimum quality levels
-   **Not up to standards:** Pull requests that failed to meet at least one of the [quality gate rules defined for the repository](../repositories-configure/adjusting-quality-settings.md#gates)
-   **Analyzing:** Pull requests currently being analyzed by Codacy

Click a bar segment to display only pull requests with the corresponding status.

To see the details of pull requests, click a pull request from the list or click **See all pull requests** to open the [list of pull requests](pull-requests.md) in the repository.

![Open pull requests](images/repository-dashboard-open-pull-requests.png)

## See also

-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
-   [Using the Codacy API to obtain current issues in repositories](../codacy-api/examples/obtaining-current-issues-in-repositories.md)
-   [Using the Codacy API to obtain code quality metrics for files](../codacy-api/examples/obtaining-code-quality-metrics-for-files.md)
