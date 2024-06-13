---
page_name: pull request
file_name: pull-requests
product: coverage
---

# Coverage Pull Requests page

The **Coverage Pull Requests page** displays an overview of the pull requests in your repository, such as the status and coverage metrics for each pull request. This allows you to monitor the coverage of the work in progress in your repository.

By default, the page lists open pull requests but you can click the **Closed** tab at the top of the list to display the closed pull requests.

![Pull Requests page](images/pull-requests.png)

Click a specific pull request to see detailed coverage information for that pull request.

![Pull request detail](images/pull-requests-detail.png)

The next sections describe each area of the pull request detail page.

## Pull request information {: id="info"}

This area displays detailed information about the pull request:

-   Pull request title and pull request status
-   Pull request author, pull request branch, target branch, and pull request identifier on the Git provider
-   Last updated date of the pull request
-   Link to the pull request on your Git provider
-   Link to reanalyze the pull request
-   Link to [view analysis logs](#viewing-analysis-logs)

![Pull request information](images/pull-requests-detail-information.png)

{%
    include-markdown "./commits.md"
    start="<!--coverage-overview-start-->"
    end="<!--coverage-overview-end-->"
%}

{%
    include-markdown "./commits.md"
    start="<!--tab-diff-start-->"
    end="<!--tab-diff-end-->"
%}

{%
    include-markdown "./commits.md"
    start="<!--tab-files-start-->"
    end="<!--tab-files-end-->"
%}

## Commits tab

The **Commits** tab displays an overview of each commit included in the pull request, such as the status and coverage metrics for each commit.

Click a specific commit to see [detailed information about that commit](commits.md#info).

![Commits tab](images/pull-requests-tab-commits.png)

## Viewing analysis logs

Analysis logs can help you spot any issues with the coverage analysis, such as missing coverage reports.

To access the coverage analysis logs, click the **View logs** link in the [pull request information](#info) area. This opens a modal listing coverage reports received for the common ancestor commit and the head commit of the pull request.

![View logs modal](images/pull-requests-coverage-view-logs-modal.png)

## See also

-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
