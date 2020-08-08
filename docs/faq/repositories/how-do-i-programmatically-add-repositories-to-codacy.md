# How do I programmatically add repositories to Codacy?

There are scenarios where manually adding Git repositories on the Codacy UI is inconvenient or time consuming. For example:

-   You want to add all new repositories to Codacy when they are created on the Git provider
-   You are adding a large number of repositories to Codacy, such as when initially adding all repositories in your Git provider organization

To add repositories programmatically, you can use Codacy's API v3 endpoint [addRepository](https://app.codacy.com/api/api-docs#addrepository){: target="_blank"} by performing an HTTP POST request to `/repositories`, specifying the Git provider and the full path of the repository in the body of the request:

```bash
curl -X POST https://app.codacy.com/api/v3/repositories \
  -H 'Content-Type: application/json' \
  -H 'api-token: <API_KEY>' \
  -d '{"provider":"<GIT_PROVIDER>", "repositoryFullPath":"<REPOSITORY_FULL_PATH>"}
```

Substitute the placeholders with your own values:

-   **API_KEY**: [API token](../../related-tools/api-tokens.md) used to authenticate on the Codacy API.
-   **GIT_PROVIDER**: Git provider hosting the repository, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    |Value |Git provider |
    |------|-------------|
    |`gh`  |GitHub Cloud | 
    |`ghe` |GitHub Enterprise |
    |`gl`  |GitLab Cloud |
    |`gle` |GitLab Enterprise |
    |`bb`  |BitBucket Cloud |
    |`bbe` |BitBucker Enterprise |

-   **REPOSITORY_FULL_PATH**: Name of the organization and repository on the Git provider, using the format `<organization>/<repository>`. For example, `codacy/docs`.

    !!! important
        **If you are using GitLab** you must specify the full group path and the repository using the format `<group>/<subgroup-1>/.../<subgroup-N>/<repository>`.

Currently, Codacy does not provide API endpoints to automate other parts of setting up new repositories, such as configuring the repository settings or the enabled code patterns.

## Example: Adding all repositories in a GitHub organization

The following Bash script adds all repositories in a GitHub Cloud organization to Codacy.

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
          200) printf "Repository added successfully\n" ;;
          401) printf "Error: $http_status Unauthorized, check the Codacy API token\n" ;;
            *) printf "Error: $http_status HTTP status code\n" ;;
  esac
  sleep 10 # Wait 10 seconds
done
```

This script:

1.  Defines a GitHub [personal access token](https://github.com/settings/tokens), the GitHub organization name, and a [Codacy API token](../../related-tools/api-tokens.md).
1.  Calls the GitHub API to [obtain the list of all repositories](https://docs.github.com/en/rest/reference/repos) in the defined organization.
1.  Uses [jq](https://github.com/stedolan/jq) to return the value of `full_name` for each repository obtained in the JSON response. The `full_name` already includes the organization and repository names using the format `<organization>/<repository>`.
1.  For each repository, calls the Codacy API endpoint to add a new repository specifying `gh` as the Git provider and the value of `full_name` as the full path of the repository.

!!! note
    For the sake of simplicity, this example script does not take into account paginated results obtained from the GitHub API. To ensure that you obtain all the repositories in your organization, learn [how to use pagination](https://docs.github.com/en/rest/guides/traversing-with-pagination) on the GitHub API.
