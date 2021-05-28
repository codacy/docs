---
description: Example of how to obtain code quality metrics for a subset of the files in a repository.
---

# Obtaining code quality metrics for files

If you're managing your source code using a monorepo strategy you may want to generate separate code quality reports for the files that belong to each component or project in your repository.

To have more flexibility over the code quality information that Codacy provides for your files, use Codacy's API v3 endpoint [listFiles](https://app.codacy.com/api/api-docs#listfiles){: target="_blank"} by performing an HTTP GET request to `/organizations/<GIT_PROVIDER>/<GIT_ORGANIZATION>/repositories/<GIT_REPOSITORY>/files`, specifying the Git provider, the Git organization, and the repository in the URL of the request:

```bash
curl -X GET 'https://app.codacy.com/api/v3/organizations/gh/codacy/repositories/codacy/files?search=src/components/router/' \
     -H 'api-token: SjE9y7ekgKdpaCofsAhd' \
jq '.data[] | [.path, .totalIssues, .grade, .complexity, .coverage, .duplication] | @csv'
```

Resulting CSV:

```text
"\"src/components/router/index.ts\",0,90,8,61,0"
"\"src/components/router/Link.tsx\",0,93,5,73,0"
"\"src/components/router/Redirect.tsx\",0,82,2,14,0"
"\"src/components/router/routes/account.ts\",0,100,0,100,0"
"\"src/components/router/routes/administration.ts\",0,100,0,100,0"
"\"src/components/router/routes/configuration.ts\",0,100,0,100,0"
"\"src/components/router/routes/legacy.ts\",0,100,0,100,0"
"\"src/components/router/routes/organizations.ts\",0,100,0,100,0"
"\"src/components/router/routes/organization.ts\",0,99,2,98,0"
"\"src/components/router/routes/repository.ts\",0,100,0,100,0"
"\"src/components/router/types.ts\",0,80,0,0,0"
```

!!! important
    For the sake of simplicity, the example doesn't consider paginated results obtained from the Codacy API. [Learn how to use pagination](using-the-codacy-api.md#using-pagination) to ensure that you obtain all the results returned by the API.
