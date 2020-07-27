# How do I add multiple repositories?

If you are adding a large number of repositories to Codacy, manually adding each individual repository on the Codacy UI can be time consuming.

To add a batch of repositories in an automated way, use the endpoint **addRepository**, available on the Codacy API v3:

<https://app.codacy.com/api/api-docs#addrepository>

To use add a repository using this endpoint you must perform an HTTP POST request to `/repositories`, specifying the Git provider and the full path of the repository in the body of the request:

```bash
curl -X POST https://app.codacy.com/api/v3/repositories \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'api-token: <API_KEY>' \
  -d '{"provider":"<GIT_PROVIDER>", "repositoryFullPath":"<REPOSITORY_FULL_PATH>"}
```

Substitute the placeholders with your own values:

-   **`API_KEY`**: [API token](../../related-tools/api-tokens.md) used to authenticate on the Codacy API.
-   **`GIT_PROVIDER*`**: Git provider hosting the repository, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    |Value |Git provider |
    |------|-------------|
    |`gh`  |GitHub Cloud | 
    |`ghe` |GitHub Enterprise |
    |`gl`  |GitLab Cloud |
    |`gle` |GitLab Enterprise |
    |`bb`  |BitBucket Cloud |
    |`bbe` |BitBucker Enterprise |

-   **`REPOSITORY_FULL_PATH`**: Name of the organization and repository on the Git provider, using the format `<organization>/<repository>`. For example, `codacy/docs`.

    !!! important
        **If you are using GitLab** you must specify the full group path and the repository using the format `<group>/<subgroup>/.../<repository>`.

## Example: Adding all repositories in a GitHub organization

```bash
!/bin/bash
# Add all repositories from a Github Organization to Codacy
GITHUB_AUTH_TOKEN="<Replace Me>"
GITHUB_ORG_NAME="<Replace Me>"
CODACY_API_TOKEN="<Replace Me>"
for repo in $(curl -s -H "Authorization: Bearer $GITHUB_AUTH_TOKEN" "https://api.github.com/orgs/$GITHUB_ORG_NAME/repos" | jq -r '.[] | .full_name'); do
     echo "Adding $repo to Codacy" 
     curl -d '{"provider":"gh","repositoryFullPath":"'$repo'"}' \
          -H "Content-Type: application/json" \
          -H "api-token: $CODACY_API_TOKEN" \
          -X POST "https://app.codacy.com/api/v3/repositories"
     echo # Echo a newline for readability
done
```
