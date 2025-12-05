# Codacy usage

The **Codacy usage** dashboard provides an overview of how your organization is adopting Codacy. You can view and filter the list of repositories from your Git provider. You can also filter repositories in Codacy by gate and coverage information. You can also filter by selecting specific repositories or using [the segments that you have set up](segments.md).

![Codacy usage dashboard](images/codacy-usage-dashboard.png)

!!! important
    Repositories not in Codacy is only available to GitHub accounts.

To access the Codacy usage dashboard, select an organization from the top navigation bar and click on the **Codacy usage** tab at the top of the page.

On the tab, if your Git provider is GitHub, you can view the percentage of repositories added to Codacy. Otherwise, you'll see the total number of repositories in Codacy.

The Codacy usage dashboard includes the following sections to help you monitor Codacy adoption:

- [Repositories](#repositories)
- [Repositories evolution](#repositories-evolution)
- [Merged pull requests](#merged-pull-requests)
- [Top repositories](#top-repositories)

!!! tip
    In each section, you can click on the ellipsis icon in the top right corner to export that section's data to CSV or JSON.

## Repositories

This chart displays the distribution of repositories in Codacy and repositories not in Codacy. On the pie chart, around the number of repositories in Codacy, you can also see the distribution of repositories without gates, without coverage, without gates nor coverage, and with gates and coverage. You can click both on the pie chart and numbers to filter the results in the rest of the dashboard.

![Repositories distribution](images/repositories-distribution.png)

## Repositories evolution

This chart shows the trend of repositories in your organization over time, considering the filters applied. You can hover over the chart to see the number of repositories on a specific date. You can also click on the chart to filter results in the dashboard.

!!! important
    Data for each period represents an average of the values during that period.

![Repositories evolution](images/repositories-evolution.png)

## Merged pull requests

This chart displays the number of pull requests merged in your repositories. Merged pull requests are distributed in two main categories - analyzed and not analyzed. Analyzed merged pull requests are shown in three different categories - passing gates, failing gates, and without gates. You can click on the chart to filter results in the dashboard.

!!! note
    Merged pull requests data is only from repositories that are in Codacy.

![Merged pull requests](images/merged-pull-requests.png)

## Top repositories

This list displays a maximum of 10 repositories in your Git provider. Depending on the filters applied, the list will show repositories not in Codacy, repositories in Codacy, or repositories in Codacy grouped by a specific dimension, such as gates information and/or coverage information.

![Top repositories](images/top-repositories.png)
