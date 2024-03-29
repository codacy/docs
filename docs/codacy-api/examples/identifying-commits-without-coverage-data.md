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

This example checks whether the open pull requests in a repository have received coverage data for their head and common ancestor commits.

The example script:

1.  Defines the [account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API, the Git provider, the organization name, and the repository name passed as an argument to the script.
1.  Calls the Codacy API endpoint [listRepositoryPullRequests](https://api.codacy.com/api/api-docs#listrepositorypullrequests) to retrieve the list of open pull requests on the repository.
1.  Uses [jq](https://github.com/stedolan/jq) to select only the numbers that identify the pull requests on the Git provider.
1.  For each pull request, outputs the pull request number and calls the Codacy API endpoint [getPullRequestCoverageReports](https://api.codacy.com/api/api-docs#getpullrequestcoveragereports) to obtain the information about the coverage data received for the head and common ancestor commits of the pull request.
1.  Uses [jq](https://github.com/stedolan/jq) to select and output the commit SHA-1 and coverage status for the commits.

```bash
#!/bin/bash

CODACY_API_TOKEN="<your account API token>"
GIT_PROVIDER="<your Git provider>" # gh, ghe, gl, gle, bb, or bbe
ORGANIZATION="<your organization name>"
REPOSITORY=$1

curl -sX GET "https://app.codacy.com/api/v3/analysis/organizations/$GIT_PROVIDER/$ORGANIZATION/repositories/$REPOSITORY/pull-requests" \
     -H "api-token: $CODACY_API_TOKEN" \
     -H "Content-Type: application/json" \
| jq -r ".data[] | .pullRequest.number" | \

while read pull_request_number; do
    echo "Checking #$pull_request_number"
    curl -sX GET "https://app.codacy.com/api/v3/analysis/organizations/$GIT_PROVIDER/$ORGANIZATION/repositories/$REPOSITORY/pull-requests/$pull_request_number/coverage/status" \
         -H "api-token: $CODACY_API_TOKEN" \
         -H "Content-Type: application/json" \
    | jq -r '.data[] | "Coverage for \(.commitSha) is \(.reports[0].status)"'
done
```

Example usage and output, where:

-   The first commit listed for each pull request is the **head commit** of the pull request branch
-   The second commit listed for each pull request is the **common ancestor commit** of the pull request branch

!!! note
    If you find commits where the coverage status is different from `Processed`, [follow these troubleshooting instructions](../../coverage-reporter/index.md#validating-coverage) to validate that your coverage setup is working correctly.

```bash
$ ./check-coverage.sh pulse
Checking #1563
Coverage for 4faccc86676f7dba3af2b71400605b0be4a686e3 is Processed
Coverage for 51e57784468459b9b2839aa63c3e7e807a39c4ab is null
Checking #1481
Coverage for 6d6a3ec0c773fb016a7302f8111c185a34e1a9b2 is null
Coverage for 4015f987fab77d41dc27ec3100b57fa58bef4559 is Processed
Checking #1434
Coverage for 74efe5d7542846f36cb8c030bd6b73fa9060dca2 is null
Coverage for 1a64ea8885717e7b9874c9f3702806ec96b00276 is null
```

{% include-markdown "../../assets/includes/api-example-pagination-important.md" %}

## See also

-   [Adding coverage to your repository](../../coverage-reporter/index.md)
