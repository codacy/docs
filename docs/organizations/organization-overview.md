---
description: The Organization Overview provides an overview of repositories that belong to the same Git provider organization. Here you can compare their statuses and check for items that require your attention.
---

# Organization Overview

{%
    include-markdown "../assets/includes/paid.md"
    start="<!--start-paid-->"
    end="<!--end-paid-->"
%}

The **Organization Overview** provides an overview of repositories that belong to the same Git provider organization. Here you can compare their statuses and check for items that require your attention.

!!! important
    -   The Organization Overview calculates metrics and displays data only for the repositories that you have access to. This means that depending on their permissions, two users could see different results on their Organization Overview.

    -   The Organization Overview displays information for **at most the last 100 updated repositories**.

To access your Organization Overview, select an organization from the top navigation bar and select **Overview** on the left navigation sidebar.

On the Organization Overview you have three areas to help you monitor your repositories:

-   [Overall quality chart](#overall-quality-chart)
-   [Open pull requests](#open-pull-requests)
-   [Last updated repositories](#last-updated-repositories)

{% if not config.extra.self_hosted %}
Use the drop-down list at the top of the page to filter the information displayed on all dashboard areas based on the repositories that you select. For example, you can use the filter to monitor the quality of the repositories maintained by specific teams, or to ignore legacy repositories that are no longer maintained.

!!! tip
    Use the language filter to help you narrow down the list of repositories in the drop-down list:

    ![Using the language filter to narrow down the list of repositories](images/organization-overview-filter-language-beta.png)

![Organization Overview](images/organization-overview-beta.png)
{% else %}
![Organization Overview](images/organization-overview.png)
{% endif %}

The following sections provide a detailed description of each dashboard area.

## Overall quality chart

The **Overall quality** chart compares the repositories in your organization regarding grade, issues, complex files, duplication, and coverage. Each tab displays the average value for the corresponding metric across your repositories.

![Overall quality chart](images/organization-overview-overall-quality.png)

-   Hover the mouse pointer over the bars to see the metrics for the corresponding repositories.
-   Click the bars to navigate directly to the corresponding repository.

If you have over 8 repositories, the chart displays your repositories grouped by grade or percentage intervals. Click the bars to see and navigate directly to the corresponding repositories.

![Overall quality chart with grouped repositories](images/organization-overview-overall-quality-grouped.png)

!!! tip
    If you don't have coverage set up for any of your repositories yet, the coverage tab provides you with instructions on [how to add coverage for your repositories](../coverage-reporter/index.md).

## Open pull requests

The **Most problematic** tab displays a short list of the open pull requests that aren't up to standards and have the most potential to negatively affect your code quality. Click directly on each pull request to see more details.

![Most problematic pull requests](images/organization-overview-prs-problematic.png)

The **Last updated** tab displays open pull requests sorted by the date of update with one of the following status:

-   Not up to standards
-   Up to standards
-   Analysis failed (something went wrong during the analysis)
-   Analyzing (intermediate status while Codacy is analyzing the pull request)

![Last updated pull requests](images/organization-overview-prs-last-updated.png)

## Last updated repositories

The **Last updated repositories** list displays the last updated repositories, sorted by reverse date of the last update. Each item displays the date of the last update and the current grade of the repository.

Click **See all** to see all repositories in your organization.

![Last updated repositories](images/organization-overview-repositories-last-updated.png)

!!! note
    The exact value of the last updated date of the repositories depends on your Git provider:

    -   **GitHub:** date of the last commit to any branch of the repository (value of `pushed_at` from the [GitHub Repositories API](https://docs.github.com/en/rest/reference/repos){: target=_"blank"}).
    -   **GitLab:** date when the project was last updated (value of `last_activity_at` from the [GitLab Groups API](https://docs.gitlab.com/ee/api/groups.html){: target="_blank"}). Note that this value is only updated [at most once per hour](https://gitlab.com/gitlab-org/gitlab/-/issues/20952){: target="_blank"}).
    -   **Bitbucket:** date when the repository was last updated (value of `updated_on` from the [Bitbucket Repositories API](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-repositories/#api-group-repositories){: target="_blank"}). **On Bitbucket Server** Codacy can't obtain this information and the list displays the repositories in alphabetical order.
