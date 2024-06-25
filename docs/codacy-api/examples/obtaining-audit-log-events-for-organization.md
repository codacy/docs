---
description: Example of how to obtain audit log events for an organization using the Codacy API endpoint listAuditLogsForOrganization.
---

# Obtaining audit log events for an organization

!!! info "This feature is available only to business tier customers"

To obtain the audit log events for your organization, use the Codacy API endpoint [<span class="skip-vale">listAuditLogsForOrganization</span>](https://api.codacy.com/api/api-docs#codacy-api-organization).<!--TODO PLUTO-952 Update link-->

For example, you may want to generate an audit log report for your organization, or retrieve audit log data from Codacy to integrate with your internal audit reporting tool.

## Example: Obtaining audit log events for your organization

This example exports the actor, action, timestamp, result, source, repository name, and log details in CSV format for [all tracked events](../../organizations/audit-logs-for-organizations.md) of your organization.

The example script:

1.  Defines the [account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.

    !!! note
        The user authenticating on the Codacy API must be an [organization admin or organization manager](../../organizations/roles-and-permissions-for-organizations.md).

1.  Calls the endpoint [<span class="skip-vale">listAuditLogsForOrganization</span>](https://api.codacy.com/api/api-docs#codacy-api-organization) to retrieve the audit log events for your organization.<!--TODO PLUTO-952 Update link-->
1.  Uses [jq](https://github.com/stedolan/jq) to select only the necessary data fields and convert the results to the CSV format.

```bash
CODACY_API_TOKEN="<your account API token>"
GIT_PROVIDER="<your Git provider>" # gh, ghe, gl, gle, bb, or bbe
ORGANIZATION="<your organization name>"

curl -X GET "https://app.codacy.com/api/v3/organizations/$GIT_PROVIDER/$ORGANIZATION/audit" \
     -H "api-token: $CODACY_API_TOKEN" \
| jq -r ".[] | [.actor.email, .actor.role, .action, .timestamp, .result, .source, .repositoryName, .requestDetails] | @csv"
```

Example output:

```text
"johnsmith@emailprovider.com","organizationAdmin","user.login","2024-07-01T09:30:24.656Z","succeed","UI","",""
"johnsmith@emailprovider.com","organizationAdmin","repositories.add","2024-07-01T09:40:20.656Z","succeed","UI","service-repo",""
"johnsmith@emailprovider.com","organizationAdmin","repositories.integrations.providersettings.update","2024-07-01T09:45:30.656Z","succeed","UI","service-repo","{\"commitStatus\":false,\"pullRequestComment\":false,\"pullRequestSummary\":false,\"aiEnhancedComments\":false,\"coverageSummary\":false,\"suggestions\":true}"
[...]
```

## See also

-   [Audit logs for organizations](../../organizations/audit-logs-for-organizations.md)
