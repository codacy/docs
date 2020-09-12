# Repository Dashboard

The **Repository Dashboard** provides an overview of the repository code quality and items that require your attention.

To access your Repository Dashboard, select a repository from the [Organization Dashboard](../organizations/organization-overview.md) or open a repository on any other page and select **Dashboard** on the left navigation sidebar.

The top of the Repository Dashboard displays:

-   The name and code quality grade of the repository
-   A drop-down list that selects which branch of your repository to display on the dashboard
-   The button **Add Badge** that you can use to add a [Codacy code quality badge](./badges.md) to the README of your repository

![Changing the branch](images/repository-dashboard-select-branch.png)

On the Repository Dashboard you have four areas to help you monitor your repository:

-   [Quality evolution chart](#quality-evolution-chart)
-   [Issues breakdown](#issues-breakdown)
-   [Coverage](#coverage)
-   [Open pull requests](#open-pull-requests)

![Repository Dashboard](images/repository-dashboard.png)

The following sections provide a detailed overview of each dashboard area.

## Quality evolution chart

Here you can see the grade of the repository and the evolution of the code quality. On the chart you can select to see results for the last 7 or 31 days. Use the tabs to see the evolution for each metric: Issues, Complex files, Duplicated code, and Coverage.

The chart also displays the **trend for the next 31 days** based on the past behavior, the **pull request prediction** (the changes caused by open pull requests if they are not changed) and the **quality standard** (defined on the repository [quality settings](quality-settings.md)).

![Quality evolution chart](images/repository-dashboard-quality-evolution.png)

In the example above, "Issues" has a red indicator ![](images/repository-dashboard-indicator-red.png) meaning that the number of Issues is above what was defined on the quality standards. Next to each metric there's a delta (can be "=", a drop, or an increase), representing the changes observed during the selected period. In the example, there was no change of number of Issues on the last 31 days, however there was a decrease of 160% of duplicated code.

You should know for Issues/Complex Files/Duplicated code (the more we have it, the worse we are), being above of the defined standards is considered bad, so the indication will be ![](images/repository-dashboard-indicator-red.png) while for Coverage (the more we have it, the better we are), being above the defined standards will be flagged with ![](images/repository-dashboard-indicator-green.png).

Still with regards to coverage it only shows a value if the most recent commit received a coverage report. We do this as one commit can easily change the size or number of files on the repository and even remove some of the files that had coverage information.

If you don't have recent data, Codacy displays the chart and all the metrics for the last 8 analyzed commits instead.

## Issues breakdown

The **Issues breakdown** area displays the total number of issues found on the selected branch, as well as the distribution of issues across each code quality issue category.

Click **See all issues** to see the full [list of issues](issues-view.md) found, or click a category to see the issues in that category.

![Issues breakdown](images/repository-dashboard-issues-breakdown.png)

## Coverage

The **Coverage** area displays the percentage of lines of code on the selected branch that are covered by tests versus the [quality settings](quality-settings.md) defined for the repository, as well as the number of files:

-   Without coverage
-   With coverage not up to standards (based on your repository quality settings)
-   With coverage up to standards (based on your repository quality settings)

Click **See all files** to open the [list of files](files-view.md) in the repository.

![Coverage](images/repository-dashboard-coverage.png)

!!! tip
    If you don't have coverage set up for your repository yet, the Coverage area provides you with instructions on [how to add coverage for your repository](../coverage-reporter/adding-coverage-to-your-repository.md).

## Open pull requests

The **Open pull requests** area displays the number of open pull requests in the repository and the split between the following status:

-   Not up to standards
-   Up to standards
-   Analysis failed (something went wrong during the analysis)
-   Analyzing (intermediate status while Codacy is analyzing the pull request)

Click **See all pull requests** to open the list of pull requests in the repository.

![Open pull requests](images/repository-dashboard-open-pull-requests.png)
