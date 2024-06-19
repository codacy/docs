---
description: Example of how to obtain audit log events for an organization using the Codacy API endpoint listAuditLogsForOrganization.
---

# Obtaining audit log events for an organization

!!! info "This feature is available only to business tier customers"

To obtain the audit log events for your organization, use the Codacy API endpoint [<span class="skip-vale">listAuditLogsForOrganization</span>](https://api.codacy.com/api/api-docs#codacy-api-organization).<!--TODO PLUTO-952 Update link-->

For example, you may want to generate an audit log report for your organization, or retrieve audit log data from Codacy to integrate with your internal audit reporting tool.

## Example: Obtaining audit log events for your organization

This example exports the actor, action, timestamp, result, source, repository name, and details in CSV format for [all tracked events](../../organizations/audit-logs-for-organizations.md) of your organization.

!!! important
   The user authenticating on the Codacy API must be an organization admin or organization manager.

The example script:

1.  Defines the [account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
1.  Calls the endpoint [<span class="skip-vale">listAuditLogsForOrganization</span>](https://api.codacy.com/api/api-docs#codacy-api-organization) to retrieve the audit log events for your organization.<!--TODO PLUTO-952 Update link-->
1.  Uses [jq](https://github.com/stedolan/jq) to select only the necessary data fields and convert the results to the CSV format.<!--TODO PLUTO-952 Confirm pagination usage-->

```bash
CODACY_API_TOKEN="<your account API token>"
GIT_PROVIDER="<your Git provider>" # gh, ghe, gl, gle, bb, or bbe
ORGANIZATION="<your organization name>"

curl -X GET "https://app.codacy.com/api/v3/organizations/$GIT_PROVIDER/$ORGANIZATION/audit" \
     -H "api-token: $CODACY_API_TOKEN" \
| jq -r ".data[] | [.actor, .action, .timestamp, .result, .source, .repositoryName, .requestDetails] | @csv"
```

Example output:<!--TODO PLUTO-952 Update output-->

```text
"src/components/router/index.ts","A",0,8,70,0
"src/components/router/Link.tsx","A",0,5,100,0
"src/components/router/Redirect.tsx","B",0,2,14,0
"src/components/router/routes/account.ts","A",0,0,100,0
[...]
```

{% include-markdown "../../assets/includes/api-example-pagination-important.md" %}

## See also

-   [Audit logs for organizations](../../organizations/audit-logs-for-organizations.md)
