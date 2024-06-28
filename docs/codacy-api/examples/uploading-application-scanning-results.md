---
description: Instructions on how to upload DAST results to Codacy using the API.
---

# Uploading application scanning results to Codacy

To ensure the security of your web applications, Codacy allows you to upload DAST results from [Zed Attack Proxy (ZAP)](https://www.zaproxy.org/) directly to Codacy and monitor them as findings under [Security and risk management](../../organizations/managing-security-and-risk.md).

## Uploading ZAP DAST Results to Codacy

1.  Use Zed Attack Proxy (ZAP) to perform dynamic application security testing on your application and generate a report in the [Traditional JSON format](https://www.zaproxy.org/docs/desktop/addons/report-generation/report-traditional-json/).

    For details on generating reports in ZAP, refer to the [ZAP documentation](https://www.zaproxy.org/docs/).

1.  Upload the report to the Codacy API endpoint [uploadDASTReport](https://app.codacy.com/api/api-docs#uploaddastreport):

    <!-- TODO TAROT-2712 is `csrf-token: nocheck` required? -->
    ```bash
    curl -X POST https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/security/tools/dast/<TOOL_NAME>/reports \
      -H 'api-token: <API_KEY>' \
      -H 'csrf-token: nocheck' \
      -H 'Content-Type: multipart/form-data' \
      -H 'Accept: application/json' \
      -F 'file=@<DAST_REPORT_PATH>' \
      -F 'reportFormat=json'
    ```

Substitute the placeholders with your own values:

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

-   **TOOL_NAME:** Name of the DAST tool used to generate the report.

    !!! note
        Currently, only ZAP is supported.

-   **DAST_REPORT_PATH:** Path to the file containing the DAST report.

Replace placeholders with your specific details to complete the upload. This process seamlessly integrates ZAP's security insights with Codacy's platform for a comprehensive security overview.

This procedure integrates your real-time security testing results with Codacy's comprehensive security management tools. 
 
## Example: Uploading ZAP DAST results

Use this example Bash script to upload DAST results from ZAP contained in a file to Codacy. This example can be adapted to fit your specific needs.

The example script:

1.  Defines the [API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
1.  Defines the path and filename of the file containing the DAST report.
1.  Calls the endpoint [uploadDASTReport](https://app.codacy.com/api/api-docs#uploaddastreport) to upload the report to Codacy.

<!-- TODO TAROT-2712 is `csrf-token: nocheck` required? -->
```bash
CODACY_API_TOKEN="<your API token>"
GIT_PROVIDER="<your Git provider>" # e.g., gh for GitHub
ORGANIZATION_NAME="<your organization name>"
TOOL_NAME="<DAST tool name>" # e.g., ZAP
REPORT_FILE_PATH="zap-report.json"

curl -X POST https://app.codacy.com/api/v3/organizations/$GIT_PROVIDER/$ORGANIZATION_NAME/security/tools/dast/$TOOL_NAME/reports \
     -H "api-token: $CODACY_API_TOKEN" \
     -H "csrf-token: nocheck" \
     -H "Content-Type: multipart/form-data" \
     -H "Accept: application/json" \
     -F "file=@$REPORT_FILE_PATH" \
     -F "reportFormat=json"
```
