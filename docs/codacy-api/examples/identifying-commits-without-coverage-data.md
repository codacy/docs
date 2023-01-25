---
description: Example of how to identify commits missing the coverage data required for calculating the coverage metrics of pull requests.
---

# Identifying commits without coverage data

To calculate the supported coverage metrics for pull requests, Codacy requires that at least the following commits provide coverage data:

-   The common ancestor commit of the pull request branch and the target branch
-   The head commit of the pull request branch

The following diagram highlights the commits that must have received coverage data for Codacy to display the coverage variation metric on a pull request:

![Commits that must have received coverage data](../../coverage-reporter/images/coverage-pr-commits.png)

However, different factors may prevent your setup from correctly reporting coverage data for the required commits.

To check if Codacy has received the required coverage data to calculate the coverage metrics for a pull request, use the Codacy API endpoint [getPullRequestCoverageReports](https://api.codacy.com/api/api-docs#getpullrequestcoveragereports).

## Example: Identifying which pull request commits are missing coverage data

<!--TODO-->
