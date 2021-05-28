---
description: Example of how to obtain code quality metrics for a subset of the files in a repository.
---

# Obtaining code quality metrics for files

If you're managing your source code using a monorepo strategy you may want to generate separate code quality reports for the files that belong to each component or project in your repository.

To obtain the code quality information for your files in a flexible way, use the Codacy API v3 endpoint [listFiles](https://app.codacy.com/api/api-docs#listfiles){: target="_blank"} by performing an HTTP GET request to `/organizations/<GIT_PROVIDER>/<GIT_ORGANIZATION>/repositories/<GIT_REPOSITORY>/files`, specifying the Git provider, Git organization, and the repository in the URL of the request:

```bash
curl -X GET "https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/repositories/<REPOSITORY>/files?search=<PATTERN>" \
     -H "api-token: $ACCOUNT_API_TOKEN"
```

Substitute the placeholders with your own values:

-   **ACCOUNT_API_TOKEN:** [Account API token](api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting the repository, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider         |
    |-------|----------------------|
    | `gh`  | GitHub Cloud         | 
    | `ghe` | GitHub Enterprise    |
    | `gl`  | GitLab Cloud         |
    | `gle` | GitLab Enterprise    |
    | `bb`  | Bitbucket Cloud      |
    | `bbe` | Bitbucket Server     |

-   **ORGANIZATION:** Name of the organization on the Git provider
-   **REPOSITORY:** Name of the repository on the Git provider
-   **PATTERN:** String that the files in the repository must match to filter the returned the results

## Example: Obtaining the current code quality metrics for all files in a directory

This example exports the total issues, grade, complexity, coverage, and duplication in CSV format for all files in the directory `src/components/router`.

The example script:

1.  Defines an [account API token](api-tokens.md#account-api-tokens).
1.  Calls the Codacy API endpoint to retrieve the code quality metrics, filtering the results by retrieving only data for the files that include `src/components/router/` in the path.
1.  Uses [jq](https://github.com/stedolan/jq){: target="_blank"} to select only the necessary information and convert the results to a CSV list.

```bash
export CODACY_API_TOKEN="SjE9y7ekgKdpaCofsAhd"

curl -X GET "https://app.codacy.com/api/v3/organizations/gh/codacy/repositories/codacy/files?search=src/components/router/" \
     -H "api-token: $CODACY_API_TOKEN" \
| jq ".data[] | [.path, .totalIssues, .gradeLetter, .complexity, .coverage, .duplication] | @csv"
```

Output:

```text
"\"src/components/router/index.ts\",0,\"A\",8,70,0"
"\"src/components/router/Link.tsx\",0,\"A\",5,100,0"
"\"src/components/router/Redirect.tsx\",0,\"B\",2,14,0"
"\"src/components/router/routes/account.ts\",0,\"A\",0,100,0"
...
```

!!! important
    For the sake of simplicity, the example doesn't consider paginated results obtained from the Codacy API. [Learn how to use pagination](using-the-codacy-api.md#using-pagination) to ensure that you obtain all the results returned by the API.
