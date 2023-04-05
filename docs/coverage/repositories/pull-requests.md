---
page_name: pull request
file_name: pull-requests
product: coverage
---

# [Coverage] Pull Requests page
<!--TODO
    Review page, see https://codacy.atlassian.net/browse/COV-119 for more details-->

The **Pull Requests page** displays an overview of the pull requests in your repository, such as the analysis status and coverage metrics for each pull request. This allows you to monitor the coverage of the work in progress in your repository.

By default, the page lists open pull requests but you can click the **Closed** tab at the top of the list to display the closed pull requests.

![Pull Requests page](images/pull-requests.png)<!--TODO Update-->

Click a specific commit to see detailed coverage information for that pull request.

![Pull request detail](images/pull-requests-detail.png)

The next sections describe each area of the pull request detail page.

## Pull request information {: id="info"}

This area displays detailed information about the pull request:

-   Pull request title
-   Pull request author, pull request branch, and target branch
-   Last updated date of the pull request
-   Link to the pull request on your Git provider
-   Codacy analysis logs<!--TODO Explain how to read the logs in more detail?-->

![Pull request information](images/pull-requests-detail-information.png)<!--TODO Update-->

{%
    include-markdown "commits.md"
    start="<!--coverage-overview-start-->"
    end="<!--coverage-overview-end-->"
%}

{%
    include-markdown "commits.md"
    start="<!--tab-files-start-->"
    end="<!--tab-files-end-->"
%}

## Commits tab

The **Commits** tab displays an overview of each commit included in the pull request, such as the analysis status and the coverage metrics for each commit.

![Commits tab](images/pull-requests-tab-commits.png)

## See also

-   [Which metrics does Codacy calculate?](../../faq/code-analysis/which-metrics-does-codacy-calculate.md)
