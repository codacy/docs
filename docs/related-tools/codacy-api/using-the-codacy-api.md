# Using the Codacy API

The Codacy API allows you to programmatically retrieve and analyze data from Codacy and perform a few configuration changes.

Currently, Codacy supports two API versions. We recommend that you use API v3 whenever possible since it's the version being actively developed:

<table>
  <thead>
    <tr>
      <td></td>
      <th><strong>API v3 (active development)</strong></th>
      <th><strong>API v2 (legacy)</strong></th>
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
        <p>The new endpoints allow you to access and manipulate the following resources, among others:<p>
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
        <p>The legacy endpoints allow you to access and manipulate the following resources:</p>
          <ul>
            <li><a target="_blank" href="https://api.codacy.com/swagger#codacy-api-commit">Commit</a> code quality details and deltas</li>
            <li><a target="_blank" href="https://api.codacy.com/swagger#codacy-api-project">Project</a> details and configurations, file code quality and issue details</li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>
