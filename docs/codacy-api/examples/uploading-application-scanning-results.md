---
description: Instructions on how to upload ZAP DAST results to Codacy using the API.
---

# Uploading application scanning results to Codacy

To ensure the security of your web applications, Codacy allows you to upload DAST results from [Zed Attack Proxy (ZAP)](https://www.zaproxy.org/) directly to Codacy and monitor them as findings under [Security and risk management](../../organizations/managing-security-and-risk.md).

## Uploading ZAP DAST Results to Codacy

1.  Use Zed Attack Proxy (ZAP) to perform dynamic application security testing on your application and generate a report in the [Traditional JSON format](https://www.zaproxy.org/docs/desktop/addons/report-generation/report-traditional-json/).

    For details on generating reports in ZAP, refer to the [ZAP documentation](https://www.zaproxy.org/docs/).

1.  Upload the report to the Codacy API endpoint [uploadDASTReport](https://app.codacy.com/api/api-docs#addpeopletoorganization):<!-- TODO TAROT-2712 Review and confirm -->

   ```bash
   curl -X POST 'https://api.codacy.com/organizations/{provider}/{remoteOrganizationName}/security/dast/results' \
     -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
     -F 'file=@path_to_your_zap_report.json' \
     -F 'tool=ZAP' \
     -F 'resultsFormat=json'
   ```
   Replace the placeholders with your actual data, such as your access token and organization details.

Replace placeholders with your specific details to complete the upload. This process seamlessly integrates ZAP's security insights with Codacy's platform for a comprehensive security overview.

This procedure integrates your real-time security testing results with Codacy's comprehensive security management tools. 
 
## Example: Uploading ZAP DAST results

We provide an example Bash script that uploads DAST results from ZAP contained in a file to Codacy. This example can be adapted to fit your specific needs.

The example script:<!-- TODO TAROT-2712 Review and confirm -->

1.  Defines the [API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
1.  Defines the path and filename of the file containing the ZAP DAST report.
1.  Calls the endpoint to upload DAST results to Codacy.

```bash
CODACY_API_TOKEN="<your API token>"
GIT_PROVIDER="<your Git provider>" # e.g., gh for GitHub
ORGANIZATION_NAME="<your organization name>"
REPORT_FILE_PATH="zap-report.json"

curl -X POST "https://api.codacy.com/organizations/$GIT_PROVIDER/$ORGANIZATION_NAME/security/dast/results" \
     -H 'Authorization: Bearer $CODACY_API_TOKEN' \
     -F 'file=@$REPORT_FILE_PATH' \
     -F 'tool=ZAP' \
     -F 'resultsFormat=json'
```

This script reads the ZAP DAST report file and uploads it to Codacy, integrating your security testing into Codacy's analysis.
