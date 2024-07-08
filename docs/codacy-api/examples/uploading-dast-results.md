---
description: Instructions on how to upload DAST results to Codacy using the API.
---

# Uploading DAST results to Codacy

To ensure the security of your web applications, Codacy allows you to upload DAST (dynamic application security testing) results from [Zed Attack Proxy (ZAP)](https://www.zaproxy.org/) directly to Codacy and monitor them as findings under [Security and risk management](../../organizations/managing-security-and-risk.md).

## Uploading results to Codacy

1.  Use [ZAP](https://www.zaproxy.org/) to perform DAST on your application and generate a report in the [Traditional JSON format](https://www.zaproxy.org/docs/desktop/addons/report-generation/report-traditional-json/).

    For details on generating reports in ZAP, refer to the [ZAP documentation](https://www.zaproxy.org/docs/).

1.  Upload the report to Codacy using the API endpoint [<span class="skip-vale">uploadDASTReport</span>](https://app.codacy.com/api/api-docs#uploaddastreport):

    !!! note
        The DAST report must be under 20MB in size.

    ```bash
    curl -X POST https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/security/tools/dast/<TOOL_NAME>/reports \
      -H 'api-token: <API_KEY>' \
      -H 'Content-Type: multipart/form-data' \
      -H 'Accept: application/json' \
      -F 'file=@<REPORT_PATH>' \
      -F 'reportFormat=json'
    ```

Replace the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting of the organization, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider      |
    |-------|-------------------|
    | `gh`  | GitHub Cloud      |
    | `ghe` | GitHub Enterprise |
    | `gl`  | GitLab Cloud      |
    | `gle` | GitLab Enterprise |
    | `bb`  | Bitbucket Cloud   |
    | `bbe` | Bitbucket Server  |

-   **ORGANIZATION:** Name of the organization on the Git provider. For example, `codacy`. You must have admin permissions over the organization on the Git provider.

-   **TOOL_NAME:** Name of the tool used to generate the report. Currently, only ZAP is supported.

-   **REPORT_PATH:** Path to the file containing the DAST report.

Replace placeholders with your specific details to complete the upload.

This process seamlessly integrates the security insights of third-party DAST tools with Codacy for a comprehensive security overview.

## Retrieving uploaded results on Codacy

To retrieve a list of uploaded DAST reports, access the Codacy API endpoint [<span class="skip-vale">listDASTReports</span>](https://api.codacy.com/api/api-docs#listdastreports):

GET /organizations/{provider}/{remoteOrganizationName}/security/dast/reports
```bash
curl -X GET https://api.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/security/dast/reports \
  -H 'api-token: <API_KEY>' \
  -H 'Accept: application/json'
```

Replace the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting of the organization, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider      |
    |-------|-------------------|
    | `gh`  | GitHub Cloud      |
    | `ghe` | GitHub Enterprise |
    | `gl`  | GitLab Cloud      |
    | `gle` | GitLab Enterprise |
    | `bb`  | Bitbucket Cloud   |
    | `bbe` | Bitbucket Server  |

-   **TOOL_NAME:** Name of the tool used to generate the report. Currently, only ZAP is supported.

This endpoint provides a list of all DAST reports uploaded to Codacy, allowing you to check the status and details of each report.
 
## Example: Uploading ZAP DAST results

Use this example Bash script to upload the ZAP DAST report to Codacy. This example can be adapted to fit your specific needs.

The example script:

1.  Defines the [API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
1.  Defines the path and filename of the file containing the DAST report.
1.  Calls the endpoint [<span class="skip-vale">uploadDASTReport</span>](https://app.codacy.com/api/api-docs#uploaddastreport) to upload the report to Codacy.

```bash
CODACY_API_TOKEN="<your API token>"
GIT_PROVIDER="<your Git provider>" # e.g., gh for GitHub
ORGANIZATION_NAME="<your organization name>"
TOOL_NAME="<DAST tool name>" # e.g., ZAP
REPORT_FILE_PATH="zap-report.json"

curl -X POST https://app.codacy.com/api/v3/organizations/$GIT_PROVIDER/$ORGANIZATION_NAME/security/tools/dast/$TOOL_NAME/reports \
     -H "api-token: $CODACY_API_TOKEN" \
     -H "Content-Type: multipart/form-data" \
     -H "Accept: application/json" \
     -F "file=@$REPORT_FILE_PATH" \
     -F "reportFormat=json"
```
