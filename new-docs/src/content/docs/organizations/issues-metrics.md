---
title: Issues metrics
description: The organization's Issues dashboard provides an overview of all the issues detected in the repositories belonging to your Git provider organization.
---

# Issues metrics

The **Issues metrics** dashboard provides an overview of all the issues detected in the repositories belonging to your Git provider organization. Here, you can navigate through the issues detected in your repositories and filter them by severity and category. You can also filter the issues by selecting specific repositories or using [the segments that you have set up](segments.md).

![Open issues dashboard](images/open-issues-dashboard.png)

To access the Issues Metrics dashboard, select an organization from the top navigation bar and click on the **Open Issues** tab at the top of the page.

By default, the Issues Metrics dashboard displays metrics as the absolute number of issues. You can change the display to **Issues per 1,000 lines of code** by clicking on the ellipsis icon at the top right of the Open Issues tab. From here, you can also customize the period against which you want to compare the issues detected in your repositories. When available, comparisons against the previously selected period will be shown next to each value, and you can hover over the comparison to see the variation.

![Open issues tab options](images/open-issues-tab-options.png)

The Issues Metrics dashboard includes the following sections to help you monitor the issues detected in your repositories:

- [Open issues by severity](#open-issues-by-severity)
- [Open issues by category](#open-issues-by-category)
- [Open issues evolution](#open-issues-evolution)
- [Issues activity](#issues-activity)
- [Repositories with the most issues](#repositories-with-the-most-issues)

:::tip
In each section, you can click on the ellipsis icon in the top right corner to export that section's data to CSV or JSON.
:::

## Open Issues by Severity

This chart displays the current number of open issues detected in your repositories, grouped by severity. You can click on each severity level to filter the results in the rest of the dashboard.

![Open issues by severity](images/open-issues-by-severity.png)

## Open Issues by Category

This chart displays the current number of open issues detected in your repositories, grouped by category. You can click on each category to filter the results in the rest of the dashboard.

![Open issues by category](images/open-issues-by-category.png)

## Open Issues Evolution

This chart shows the trend of open issues in your repositories over time, either by severity or by category, depending on the filters applied. You can hover over the chart to see the number of open issues on a specific date. You can also click on the chart to filter results in the **Issues Activity** chart and the **Repositories with the Most Issues** list.

:::caution
Data for each period represents an average of the values during that period.
:::

![Open issues evolution by severity](images/open-issues-evolution-by-severity.png)

![Open issues evolution by category](images/open-issues-evolution-by-category.png)

## Issues Activity

This chart displays the number of issues fixed and introduced in your repositories over time. You can hover over the chart to see the number of issues fixed and introduced on a specific date. You can also click on the chart to filter results in the **Repositories with the Most Issues** list.

![Issues activity](images/issues-activity.png)

## Repositories with the Most Issues

This list displays repositories in descending order based on the number of issues. Depending on the filters applied, the list will show repositories with the most open issues, grouped by severity or category, or within a specific period.

![Open issues ranking](images/open-issues-ranking.png)
