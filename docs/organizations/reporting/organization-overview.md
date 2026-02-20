---
description: The Organization overview provides an overview of the repositories belonging to your Git provider organization. Here you can compare their statuses and check for items that require your attention.
---

# Organization overview

Codacy guarantees you high-level visibility of your organization regarding its code quality, security positioning, AI risks, and Codacy's usage and configurations. In the **Organization overview**, you'll be able to see all these metrics at a glance.

The **Organization overview** summarizes the repositories belonging to your Git provider organization that you [follow on Codacy](../managing-repositories.md). Here you can compare their statuses and check for items that require your attention.

To access your Organization overview, select an organization from the top navigation bar and select **Overview** on the left navigation sidebar.

![Image of the Organization Overview on the Overview tab](./images/organization-overview.png)

The Organization overview contains the following tabs:

- [Overview](#overview)
- [Open issues](./issues-metrics.md)
- [Grade](#grade)
- [Complexity](#complexity)
- [Duplication](#duplication)
- [Coverage](#coverage)
- [Codacy Usage](./codacy-usage.md)
- [AI Risk Hub](./ai-risk-hub.md)

You can use the filters at the top of the page to filter all information displayed by the repositories or segments that you select. For example, you can use the filter to monitor the quality of the repositories maintained by specific teams or that include certain programming languages, or to ignore legacy repositories that are no longer maintained. Your filter selection is stored in your browser so that you can keep your focus between your visits.

On this page, we'll cover the Overview section, along with the Grade, Complexity, Duplication, and Coverage sections.

{% include-markdown "../../assets/includes/dashboard-api-report-note.md" %}

## Overview

On the Organization overview you have the following areas to help you monitor your repositories:

-   [Code health and security](#code-health-and-security)
-   [Last updated repositories](#last-updated-repositories)

On this page, you can also see the **Organization setup** area, which provides you with a checklist of items that you should complete to ensure that your organization is set up correctly and that you're getting the most out of Codacy.


### Code health and security {: id="overall-quality-chart"}

![Image of Code health and security section](./images/organization-overview-code-health-security.png)

The **Code health and security** provides a snapshot of your organization and its hotspots. Here you can see at a glance the number of Open Issues, New vs Fixed issues, Prevented issues, along with complexity, duplication, coverage and security metrics. You can click on any of these metrics to go into more details on each section.

Some of these metrics will be dependent on your billing plan, and are calculated based on different factors. To understand more, you can check the table below:

| Metric | Availability | How it is calculated |
| ------ | ------------ | -------------------- |
| Open issues, New and Fixed issues, and Prevented issues | Paid plans | [More details](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#issues) |
| Grade | Open source & Trials | [More details](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#grade) |
| Complexity | All plans | [More details](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#complexity) |
| Duplication | All plans | [More details](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#duplication) |
| Coverage | All plans <a href="#coverage"><sup>1</sup></a>| [More details](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#code-coverage) |
| Security | All plans | [More details](../managing-security-and-risk.md) |


!!! important
    -   The overall quality chart calculates metrics and displays data only for the **repositories that you follow** on Codacy. This means that depending on their list of followed repositories, two users can see different results on this chart.

    -   Metrics like Grade, Complexity, Duplication, and Coverage (on free plans) only represent **at most the last 100 updated repositories**.

<sup><span id="coverage">1</span></sup>: The way that coverage metrics are calculated is different between Paid, and Open source and trials. [Learn more](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#code-coverage)

### Last updated repositories

The **Last updated repositories** list displays the last updated repositories, sorted by reverse date of the last update.

![Last updated repositories](images/organization-overview-repositories-last-updated.png)

!!! note
    The exact value of the last updated date of the repositories depends on your Git provider:

    -   **GitHub:** date of the last commit to any branch of the repository (value of `pushed_at` from the [GitHub Repositories API](https://docs.github.com/en/rest/repos/repos#list-organization-repositories){: target=_"blank"}).
    -   **GitLab:** date when the project was last updated (value of `last_activity_at` from the [GitLab Groups API](https://docs.gitlab.com/ee/api/groups.html)). Note that this value is only updated [at most once per hour](https://gitlab.com/gitlab-org/gitlab/-/issues/20952)).
    -   **Bitbucket:** date when the repository was last updated (value of `updated_on` from the [Bitbucket Repositories API](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-repositories/#api-group-repositories)). **On Bitbucket Server** Codacy can't obtain this information and the list displays the repositories in alphabetical order.

## Grade

![Image of the Grade tab](./images/organization-overview-grade.png)

Grade tab will give you visibility over the distributions of Grades accross your repositories. From this tab, you can understand which repositories are most at risk by selecting a grade from the distribution chart. This will give you prioritize which repositories need more attention.

To learn more about how grades are calculated [how metrics are calculated](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#grade).

!!! important
    Grade metrics are based **at most on the last 100 updated repositories**.

## Complexity

![Image of the Complexity tab](./images/organization-overview-complexity.png)

Complexity is a metric that allows you to understand which repositories are at risk of ...
In this tab, you'll be able to understand your complexity positioning (based on the number of complex files) at an organization level, plus how repos stack according to their [Goals](../../repositories/adjusting-quality-goals.md). We consider a file "complex" if its cyclomatic complexity value is higher than the goal defined at a repository level. To learn about what we consider a complex file, see [how metrics are calculated](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#complexity).

From this panel you can understand, from the list of the top 100 most recently updated repositories, which ones are above, below or don't have a goal. Since complexity is a "depreciative metric", repositories "above goal" will be the ones immediately flagged, so you can review and take action uppon them.

On the bottom, you have a section where you can see the distribution of complex files, and here you can understand more clearly which files are complex because they are above goal, below goal, or without a goal on their repository. Files are not filterable, whereas the Repository goal distributions are.

!!! important
    Complexity metrics are based **at most on the last 100 updated repositories**.

## Duplication
![Image of the Duplication tab](./images/organization-overview-duplication.png)

Duplication is a metric that allows you to check if sequences of duplicate code exist in at least two different places of the source code of your repository.

In this tab, you'll be able to see the average of duplication that you have in your repositores, check which repos has duplication above, bellow or without any goals set up.

To learn more about duplication metrics, see [How duplication is calculated](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#duplication).

!!! important
    Duplication metrics are based **at most on the last 100 updated repositories**.


## Coverage

Paid mode
How coverage is calculated

Free mode
How coverage is calculated

![Image of the Coverage tab](./images/organization-overview-coverage.png)


## See also
-   [Which metrics does Codacy calculate?](../../faq/code-analysis/which-metrics-does-codacy-calculate.md)
-   [Using the Codacy API to obtain current issues in repositories](../../codacy-api/examples/obtaining-current-issues-in-repositories.md)
-   [Using the Codacy API to obtain code quality metrics for files](../../codacy-api/examples/obtaining-code-quality-metrics-for-files.md)