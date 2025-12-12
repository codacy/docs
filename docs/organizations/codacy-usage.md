# Codacy usage

The **Codacy usage** dashboard offers an overview of your organization's adoption of Codacy. You can filter the displayed list of repositories by their Git provider, as well as by their gate and coverage information within Codacy. Additionally, you can filter by selecting specific repositories or by using [the segments that you have set up](segments.md).

![Codacy usage dashboard](images/codacy-usage-dashboard.png)

!!! important
    Repositories not in Codacy is only available to GitHub accounts.

To view the **Codacy usage** dashboard:

- Select an organization from the top navigation bar.
- On the organization overview page, click the Codacy usage tab.

The Codacy usage dashboard includes the following sections to help you monitor Codacy adoption:

- [Repositories](#repositories)
- [Repositories evolution](#repositories-evolution)
- [Merged pull requests](#merged-pull-requests)
- [Top repositories](#top-repositories)

!!! tip
    In each section, you can click on the ellipsis icon in the top right corner to export that section's data to CSV or JSON.

## Repositories

This chart displays the distribution of repositories in Codacy and repositories that aren't. The doughnut chart also details the breakdown of Codacy repositories based on their configuration: those without quality gates, without coverage, without either gates or coverage, and those with both gates and coverage. Users can interact with the doughnut chart or the numerical data to filter the results. Applying a filter will also affect the repositories displayed in the evolution chart and the results will appear in the "Top repositories" list.

![Repositories distribution](images/repositories-distribution.png)

## Repositories evolution

This chart shows the trend of repositories in your organization over time, considering the filters applied. You can hover over the chart to see the number of repositories on a specific date. You can also click on the chart to filter results.

![Repositories evolution](images/repositories-evolution.png)

## Merged pull requests

This chart displays the number of pull requests merged in your repositories, categorizing them as either analyzed or not analyzed.
Analyzed PRs are further broken down into three sub-categories:

- Passing Gates: Merged PRs that successfully passed all quality gates.
- Failing Gates: Merged PRs that failed one or more quality gates.
- Without Gates: Merged PRs where no quality gates were configured or applied.

Interacting with the chart allows you to filter the data, with the resulting repositories displayed in the "Top repositories" list.

!!! note
    Merged pull requests data is only from repositories that are in Codacy.

![Merged pull requests](images/merged-pull-requests.png)

## Top repositories

The list shows a maximum of 10 repositories from your Git provider. You can use filters to display repositories that aren't yet in Codacy, or repositories that are already in Codacy. For repositories in Codacy, the list can also group them by specific metrics such as gates, coverage, and merged pull request information.

![Top repositories](images/top-repositories.png)
