---
page_name: "pull request"
file_name: "pull-requests"
---

# Quality Pull Requests page

The **Quality Pull Requests page** displays an overview of the pull requests in your repository, such as the analysis status and the code quality metrics for each pull request. This allows you to monitor the code quality of the work in progress in your repository.

By default, the page lists open pull requests, but you can click the **Closed** tab at the top of the list to display the closed pull requests.

![Pull Requests page](images/pull-requests.png)

Click a specific pull request to see detailed information about the code quality changes introduced by that pull request.

![Pull request detail](images/pull-requests-detail.png)

The next sections describe each area of the pull request detail page.

## Pull request status {: id="status"}

This area displays the information that identifies the pull request (name, author, head and base branches, and date), as well as:

-   A link to the pull request on your Git provider
-   A [button to reanalyze the latest pull request commit](../faq/repositories/how-do-i-reanalyze-my-repository.md), enabled when the committer [is part of your organization](../organizations/managing-people.md)
-   A link to the analysis logs

![Pull request status](images/pull-requests-detail-status.png)

{%
    include-markdown "./commits.md"
    start="<!--quality-overview-start-->"
    end="<!--quality-overview-end-->"
%}

{%
    include-markdown "./commits.md"
    start="<!--tabs-start-->"
    end="<!--tabs-end-->"
%}

## Commits tab

The **Commits** tab displays an overview of each commit included in the pull request, such as the analysis status and the number of issues fixed or introduced.

Click a specific commit to see [detailed information about that commit](commits.md#status).

![Commits tab](images/pull-requests-tab-commits.png)

## See also

-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
