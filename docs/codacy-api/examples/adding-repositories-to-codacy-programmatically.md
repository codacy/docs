---
description: Example of how to add multiple repositories programmatically using Codacy's API v3 endpoint addRepository.
---

# Adding repositories to Codacy programmatically

There are scenarios where manually adding Git repositories on the Codacy UI is inconvenient or time-consuming. For example:

-   You want to add all new repositories to Codacy when they're created on the Git provider
-   You're adding a large number of repositories to Codacy, such as when initially adding all repositories in your Git provider organization

To add repositories programmatically, use Codacy's API v3 endpoint [addRepository](https://app.codacy.com/api/api-docs#addrepository){: target="_blank"} by performing an HTTP POST request to `/repositories`, specifying the Git provider and the full path of the repository in the body of the request:

```bash
curl -X POST https://app.codacy.com/api/v3/repositories \
  -H 'Content-Type: application/json' \
  -H 'api-token: <API_KEY>' \
  -d '{"provider":"<GIT_PROVIDER>", "repositoryFullPath":"<REPOSITORY_FULL_PATH>"}
```

Substitute the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting the repository, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider         |
    |-------|----------------------|
    | `gh`  | GitHub Cloud         |
    | `ghe` | GitHub Enterprise    |
    | `gl`  | GitLab Cloud         |
    | `gle` | GitLab Enterprise    |
    | `bb`  | Bitbucket Cloud      |
    | `bbe` | Bitbucket Server     |

-   **REPOSITORY_FULL_PATH:** Name of the organization and repository on the Git provider, using the format `<organization>/<repository>`. For example, `codacy/docs`. You must have admin permissions over the repository on the Git provider.

    !!! important
        **If you're using GitLab** you must specify the full group path and the repository using the format `<group>/<subgroup-1>/.../<subgroup-N>/<repository>`.

## Example: Adding all repositories in a GitHub organization

We provide an example Bash script that adds all repositories in a GitHub Cloud organization to Codacy. We suggest that you adapt the script to your specific scenario.

!!! warning
    Since Codacy automatically analyzes new repositories, adding many repositories in a short time can cause delays in the analysis of other repositories depending on the size of the repositories, the sizing of the infrastructure, and the concurrent analysis configuration. For example:

    | Repositories added | Expected delay |
    |--------------------|----------------|
    | 1 to 10            | Small          |
    | 11 to 100          | Considerable   |
    | More than 100      | Extreme        |

    To avoid these delays, we recommend that you add repositories in small batches or that you space out adding new repositories in time.

The example script:

1.  Defines a GitHub [personal access token](https://github.com/settings/tokens){: target="_blank"}, the GitHub organization name, and the [account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
1.  Calls the GitHub API to [obtain the list of all repositories](https://docs.github.com/en/rest/reference/repos#list-organization-repositories){: target="_blank"} in the defined organization.
1.  Uses [jq](https://github.com/stedolan/jq){: target="_blank"} to return the value of `full_name` for each repository obtained in the JSON response. The `full_name` already includes the organization and repository names using the format `<organization>/<repository>`.
1.  For each repository, calls the Codacy API endpoint to add a new repository specifying `gh` as the Git provider and the value of `full_name` as the full path of the repository.
1.  Checks the HTTP status code obtained in the response and performs basic error handling.
1.  Pauses a few seconds between requests to the Codacy API to avoid rate limiting.

```bash
#!/bin/bash

GITHUB_AUTH_TOKEN="<REPLACE_ME>"
GITHUB_ORG_NAME="<REPLACE_ME>"
CODACY_API_TOKEN="<REPLACE_ME>"

printf "Obtaining all repositories in the $GITHUB_ORG_NAME organization\n"
for repo in $(curl -s https://api.github.com/orgs/$GITHUB_ORG_NAME/repos -H "Authorization: Bearer $GITHUB_AUTH_TOKEN" | jq -r '.[] | .full_name'); do
  printf "Adding $repo to Codacy\n"
  http_status=$(curl -X POST https://app.codacy.com/api/v3/repositories \
                     -H "Content-Type: application/json" \
                     -H "api-token: $CODACY_API_TOKEN" \
                     -d '{"provider":"gh", "repositoryFullPath":"'$repo'"}' \
                     -sSo /dev/null -w "%{http_code}")
  case "$http_status" in
    200) printf "$repo added successfully\n"
         ;;
    401) printf "Error: 401 Unauthorized, check the Codacy API token\n"
         break
         ;;
    409) printf "Error: 409 Conflict, $repo is already added to Codacy\n"
         ;;
      *) printf "Error: $http_status HTTP status code\n"
         break
         ;;
  esac
  sleep 10 # Wait 10 seconds
done
```

{% include "../../assets/includes/api-example-pagination-important.md" %}

    Besides this, the script doesn't consider paginated results obtained from the GitHub API. [Learn how to use pagination on the GitHub API](https://docs.github.com/en/rest/guides/traversing-with-pagination){: target="_blank"} to ensure that you obtain all the repositories in your organization.
