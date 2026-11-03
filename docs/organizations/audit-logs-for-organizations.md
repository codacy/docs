---
description: View and export the events Codacy logs for your organization, and see the list of events Codacy logs.
---

# Audit logs for organizations

{%
    include-markdown "../assets/includes/paid.md"
    start="<!--paid-feature-business-start-->"
    end="<!--paid-feature-business-end-->"
%}

Codacy logs important events in your organization, reflecting when your team members execute specific operations. This enables the generation of comprehensive reports to assist you with the audit process. For example, you can track who changed a gate policy, or changed the settings of a coding standard.

Only [organization admins](./roles-and-permissions-for-organizations.md#permissions-by-codacy-role) can see the audit logs of an organization, on the **Audit logs** page or using the Codacy API. Organization managers and members can't, and personal organizations don't have audit logs.

Codacy keeps audit logs for one year. It records events only from the moment audit logs were enabled for your organization, so there's no history from before that date.

## Viewing audit logs in Codacy {: id="viewing-audit-logs"}

To see the events of your organization, open your organization **Settings**, page **Audit logs**.

The page shows the events of one day, starting with today. To see another day, pick a date in the date field. You can go back up to one year.

To find specific events, type an action, actor, or repository in the search box. The search covers only the selected day: to search another day, pick that date first. If nothing matches, check the action names in [Audit log events](#audit-log-events).

Each row is one event:

-   **Source:** Where the operation came from: the Codacy app (web icon) or the Codacy API (code icon).
-   **Action:** The identifier of the operation, such as `organizations.gatepolicies.update`. See [Audit log events](#audit-log-events) for what each action means.
-   **Actor:** The email of the user who executed the operation.
-   **Repository:** The repository the operation applies to, or `-` for operations on the organization or user.
-   **Time:** When the operation happened, in your local time zone.
-   **Result:** Whether the operation succeeded (**Success**), failed (**Failed**), or was denied (**Rejected**).

If a day shows **No audit logs on this date**, Codacy didn't record any events in your organization that day. This is also the case for every day before audit logs were enabled for your organization.

If your organization doesn't have access to audit logs yet, the **Audit logs** page shows an upgrade prompt instead. [Talk to us](https://start-chat.com/slack/codacy/rmbTzb) about upgrading.

## Exporting audit logs with the Codacy API {: id="exporting-audit-logs"}

The **Audit logs** page shows one day at a time. To get the events of a longer period, up to one year, use the Codacy API endpoint [listAuditLogsForOrganization](https://api.codacy.com/api/api-docs#listauditlogsfororganization).

1.  On the **Audit logs** page, click **Export via API**.
1.  Pick the **From** and **To** dates of the period you want to export. By default, Codacy selects yesterday and today.
1.  Copy the generated `curl` command.
1.  Replace `<API_KEY>` with an [account API token](../codacy-api/api-tokens.md#account-api-tokens) and run the command from your terminal or a script. If you don't have a token yet, generate one in your account, tab **Access management**.

To build the request yourself, pass the start and end of the period as Unix timestamps in milliseconds:

```bash
curl -X GET 'https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/audit?from=<FROM>&to=<TO>' \
     -H 'api-token: <API_KEY>'
```

If you leave out `from`, the response starts at the oldest event Codacy keeps. If you leave out `to`, it ends at the current time.

!!! note "Large date ranges may time out. If that happens, export the period in smaller chunks"

## Audit log events

Each audit log tracks when a Codacy user executed a specific operation in your organization using the Codacy app or the [Codacy API](https://api.codacy.com/api/api-docs#codacy-api). Each operation is identified by an **action**. For the detailed content of each audit log, see the [Codacy API reference](https://api.codacy.com/api/api-docs#listauditlogsfororganization).

The sections below list the events that Codacy logs for your organization at user, organization, and repository levels.

### User

|Event|Description|Action|
|-----|-----------|------|
|Log in|User logged in to Codacy|`user.login`|
|Create [account API token](../codacy-api/api-tokens.md#account-api-tokens)|New account API token created|`user.tokens.create`|
|Read account API token|List of account API tokens retrieved|`user.tokens.read`|
|Delete account API token|Account API token deleted|`user.tokens.delete`|

### Organization

| Event                                                                                                                   | Description                                                                        | Action                                                        |
|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [Add organization](./what-are-organizations.md#adding-an-organization)                                                  | Organization added to Codacy                                                       | `organizations.create`                                        |
| [Add people](./managing-people.md#adding-people) to organization                                                        | New people added to the organization                                               | `organizations.people.invite`                                 |
| [Remove people](./managing-people.md#removing-people) from organization | People removed from the organization | `organizations.people.remove` |
| [Join organization](./managing-people.md#joining)                                                                       | User joined the organization                                                       | `organizations.join`                                          |
| Update [repository management permissions](./roles-and-permissions-for-organizations.md#change-analysis-configuration)  | Repository management permissions updated                                          | `organizations.analysisconfigurationminimumpermission.update` |
| Assign [organization manager role](./roles-and-permissions-for-organizations.md#managing-the-organization-manager-role) | Organization manager role assigned to a team member                                | `security.managers.create`                                    |
| Revoke organization manager role                                                                                        | Organization manager role revoked from a team member                               | `security.manager.delete`                                     |
| Update [default Git provider configuration](./integrations/default-git-provider-integration-settings.md)                | Default Git provider configuration for the organization updated                    | `organizations.integrations.providersetting.update`           |
| Apply default Git provider configuration to all repositories                                                            | Default Git provider configuration applied to all repositories of the organization | `organizations.integrations.providersettings.apply`           |
| Create new organization hook                                                                                            | New organization webhook created                                                   | `organizations.hooks.create`                                  |
| Create new [gate policy](./using-gate-policies.md)                                                                      | New gate policy created                                                            | `organizations.gatepolicies.create`                           |
| Update gate policy                                                                                                      | Quality gate definition updated                                                    | `organizations.gatepolicies.update`                           |
| Apply gate policy to repositories                                                                                       | Gate policy applied to a list of repositories                                      | `organizations.gatepolicies.repositories.apply`               |
| Make gate policy default                                                                                                | Gate policy was made the default for the organization                              | `organizations.gatepolicies.setdefault`                       |
| Make Codacy gate policy default                                                                                         | Built-in Codacy gate policy was made the default for the organization              | `organizations.gatepolicies.setcodacydefault`                 |
| Delete gate policy                                                                                                      | Gate policy deleted                                                                | `organizations.gatepolicies.delete`                           |
| Create new [coding standard](./using-coding-standards.md) using preset sensitivity levels                               | New coding standard created                                                        | `organizations.presetsstandards.create`                       |
| Create new coding standard draft using individual language and code pattern settings                                    | New coding standard draft created                                                  | `organizations.codingstandards.create`                        |
| Create new coding standard from draft                                                                                   | New coding standard created                                                        | `organizations.codingstandards.promote`                       |
| Update coding standard from draft                                                                                       | Coding standard updated                                                            | `organizations.codingstandards.promote`                       |
| Update coding standard | Coding standard updated | `organizations.codingstandards.update` |
| Update tool in coding standard | Tool or code pattern settings of a coding standard updated | `organizations.codingstandards.tools.update` |
| Apply coding standard to repositories                                                                                   | Coding standard applied to a list of repositories                                  | `organizations.codingstandards.repositories`                  |
| Make coding standard default                                                                                            | Coding standard was made the default                                               | `organizations.codingstandards.setdefault`                    |
| Delete coding standard                                                                                                  | Coding standard deleted                                                            | `organizations.codingstandards.delete`                        |
| Export [security items](../security/index.md)                                                                | Export security items                                                              | `organizations.security.items.export`                         |
| Ignore security item                                                                                                    | Security item was ignored                                                          | `organizations.security.items.ignore`                         |
| Unignore security item                                                                                                  | Security item was unignored                                                        | `organizations.security.items.unignore`                       |
| Create DAST target                                                                                                      | A target for DAST scanning was created                                             | `organizations.dast.target.create`                            |
| Delete DAST target                                                                                                      | A target for DAST scanning was deleted                                             | `organizations.dast.target.delete`                            |
| Analyze DAST target                                                                                                     | Request a DAST scan of an existing target                                          | `organizations.dast.target.analyze`                           |
| Update security SLA configurations                                                                                               | The security SLA Configuration was updated                                                  | `organizations.sla.configuration.update`                             |
### Repository

|Event| Description                                                  |Action|
|-----|--------------------------------------------------------------|------|
|Create new [post-commit hook](../repositories-configure/integrations/post-commit-hooks.md)| New repository hook created                                  |`repositories.integrations.postcommithook`|
|Create [repository API token](../codacy-api/api-tokens.md#repository-api-tokens)| New repository API token created                             |`repositories.tokens.create`|
|Read repository API token| List of repository API tokens retrieved                      |`repositories.tokens.read`|
|Delete repository API token| Repository API token deleted                                 |`repositories.tokens.delete`|
|Update Git provider integration settings<br>([GitHub](../repositories-configure/integrations/github-integration.md#configuring), [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring), or [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring))| Git provider integration settings for the repository updated |`repositories.integrations.providersettings.update`|
|Apply organization Git provider settings to repository| Default Git provider configuration of the organization applied to the repository |`repositories.integrations.providersettings.apply`|
|Refresh Git provider integration<br>(applies only to [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#refreshing) and [GitLab](../repositories-configure/integrations/gitlab-integration.md#refreshing))| Git provider integration for the repository refreshed        |`repositories.integrations.refreshprovider`|
| Update issue                                                                                                         | For example ignore issue                                     |`repositories.issues.update`|
| Update tool                                                                                                          | Tool or code pattern settings updated, for example enabling a tool or a single code pattern |`repositories.tools.update`|
| Update code patterns in bulk | Enable or disable code patterns of a tool in bulk |`repositories.tools.bulk.update`|
| Bypass pull request                                                                                                  | Bypass pull request by authorized person                     |`repositories.pullrequests.bypass`|
| Update repository language                                                                                           | Change languages analyzed in repository                      |`repositories.settings.language.update`|
| Update branch                                                                                                        | Enable or Disable branch for analyse                         |`repositories.branches.update`|
| Update analysis settings                                                                                             | Update analysis settings                                     |`repositories.settings.analysis.update`|
| Reanalyze commit                                                                                                     | Reanalyze commit or pull request                             |`repositories.reanalyzecommit`|
| Synchronize repository with provider                                                                                 | Synchronize repository with provider                         |`repositories.settings.provider.sync`|
| Update quality settings for repository                                                                               | Update quality settings for repository                       |`repositories.settings.quality.repository.update`|
| Update quality settings for pull requests                                                                            | Update quality settings for pull requests                    |`repositories.settings.quality.pullrequests.update`|
| Update file state                                                                                                    | Ignore or Unignore file                                      |`repositories.file.update`|

## See also

-   [Roles and permissions for organizations](./roles-and-permissions-for-organizations.md)
-   [API tokens](../codacy-api/api-tokens.md)
-   [Using the Codacy API](../codacy-api/using-the-codacy-api.md)
