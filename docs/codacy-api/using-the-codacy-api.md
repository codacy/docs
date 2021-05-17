# Using the Codacy API

The Codacy API allows you to programmatically retrieve and analyze data from Codacy and perform a few configuration changes.

Codacy supports two API versions but we strongly recommend using the new API v3 when possible since it's the version being actively developed:

<table>
  <thead>
    <tr>
      <td></td>
      <th><strong>API v3 (recommended)</strong></th>
      <th><strong>API v2</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Endpoint documentation</th>
      <td><a target="_blank" href="https://api.codacy.com/api/api-docs">https://api.codacy.com/api/api-docs</a></td>
      <td><a target="_blank" href="https://api.codacy.com/swagger">https://api.codacy.com/swagger</a></td>
    </tr>
    <tr>
      <th>Base URL</th>
      <td><code>https://api.codacy.com/api/v3</code></td>
      <td><code>https://api.codacy.com/</code></td>
    </tr>
    <tr>
      <th>Overview</th>
      <td>
        <p>Use the new endpoints to access and manipulate the following resources, among others:<p>
        <ul>
          <li><a target="_blank" href="https://api.codacy.com/api/api-docs#codacy-api-analysis">Analysis</a> details, issue and ignored issue details, repository quality settings</li>
          <li><a target="_blank" href="https://api.codacy.com/api/api-docs#codacy-api-account">Account</a> details and API token management</li>
          <li><a target="_blank" href="https://api.codacy.com/api/api-docs#codacy-api-organization">Organization</a> details and join request management</li>
          <li><a target="_blank" href="https://api.codacy.com/api/api-docs#codacy-api-people">People</a> management</li>
          <li><a target="_blank" href="https://api.codacy.com/api/api-docs#codacy-api-repository">Repository</a> management and file details</li>
          <li><a target="_blank" href="https://api.codacy.com/api/api-docs#codacy-api-tools">Tool</a> and code pattern details</li>
        </ul>
      </td>
      <td>
        <p>Use the legacy endpoints to access and manipulate the following resources:</p>
          <ul>
            <li><a target="_blank" href="https://api.codacy.com/swagger#codacy-api-commit">Commit</a> code quality details and deltas</li>
            <li><a target="_blank" href="https://api.codacy.com/swagger#codacy-api-project">Project</a> details and configurations, file code quality and issue details</li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

!!! important
    **If you're using Codacy Self-hosted** you must update the base URL of the APIs to include your Codacy instance domain name. For example:

    ```
    https://codacy.example.com/api/v3	
    ```

## Authenticating requests to the Codacy API

Most API endpoints require that you provide either a [project or account API token](api-tokens.md). After obtaining the necessary tokens, include them in your request headers using the format `api-token: <token key>` or `project-token: <token key>`.

For example, to make a request to an API v3 endpoint that requires an **account API token**:

```bash
curl -X GET 'https://api.codacy.com/api/v3/user/organizations/gh' \
     -H 'api-token: SjE9y7ekgKdpaCofsAhd'
```

Or to make a request to an API v2 endpoint that requires a **project API token**:

```bash
curl -X GET 'https://api.codacy.com/2.0/commit/da275c14ffab6e402dcc6009828067ffa44b7ee0' \
     -H 'project-token: c9f2feb28e780acc8dc40754978b8bd9'
```

## Using parameters in requests

Most API endpoints require that you specify parameters.

**For `GET` requests**, specify parameters directly as path segments of the endpoint URLs. Some endpoints also accept optional query string parameters.

For example, to call the endpoint [getRepositoryWithAnalysis](https://api.codacy.com/api/api-docs#getrepositorywithanalysis) with the parameters:

-   provider: `gh`
-   remoteOrganizationName: `codacy`
-   repositoryName: `docs`
-   branch (query string): `api-overview`

```bash
curl -X GET 'https://app.codacy.com/api/v3/analysis/organizations/gh/codacy/repositories/docs?branch=api-overview' \
     -H 'api-token: SjE9y7ekgKdpaCofsAhd'
```

**For `POST`, `PATCH`, and `DELETE` requests**, besides the parameters included in the URL you may also need to include a JSON body.

For example, to call the endpoint [searchRepositoryIssues](https://api.codacy.com/api/api-docs#searchrepositoryissues) specifying the issue levels `Error` and `Warning` in the body:

```bash
curl -X POST 'https://app.codacy.com/api/v3/analysis/organizations/gh/codacy/repositories/docs/issues/search' \
     -H 'api-token: SjE9y7ekgKdpaCofsAhd' \
     -H 'Content-Type: application/json' \
     -d '{"levels": ["Error", "Warning"]}'
```
