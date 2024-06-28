---
description: List of events that Codacy can log for an organization.
---

# Audit logs for organizations

{%
    include-markdown "../assets/includes/paid.md"
    start="<!--paid-feature-business-start-->"
    end="<!--paid-feature-business-end-->"
%}

Codacy logs important events in your organization - when a user executed a specific operation - which enables the generation of comprehensive reports to assist you with the audit process. For example, you can track who added a repository to Codacy, or changed the settings of a coding standard.

[Organization admins and organization managers](./roles-and-permissions-for-organizations.md) can retrieve audit log reports of organization events [using the Codacy API](../codacy-api/examples/obtaining-audit-log-events-for-organization.md).

The retention period of audit logs for organization events is one year.

## Audit log events

<!--TODO PLUTO-952 Update the action for each event-->

Each audit log tracks when a Codacy user executed a specific operation in your organization using the Codacy app or the [Codacy API](https://api.codacy.com/api/api-docs#codacy-api). Each operation is identified by an **action**. For the detailed content of each audit log, see the [Codacy API reference](https://api.codacy.com/api/api-docs#codacy-api).<!--TODO PLUTO-952 Update link-->

The sections below list the events that Codacy logs for your organization at user, organization, and repository levels.<!--TODO PLUTO-952 Validate all actions-->

### User

|Event|Description|Action|
|-----|-----------|------|
|Log in|User logged in to Codacy|`user.login`|
|Create [account API token](../codacy-api/api-tokens.md#account-api-tokens)|New account API token created|`user.tokens.create`|
|Read account API token|List of account API tokens retrieved|`user.tokens.read`|
|Delete account API token|Account API token deleted|`user.tokens.delete`|
|?Add Git provider (depends on effort)?|New Git provider added to Codacy||

### Organization

|Event|Description|Action|
|-----|-----------|------|
|[Add organization](./what-are-organizations.md#adding-an-organization)|Organization added to Codacy|`organizations.create`|
|[Add people](./managing-people.md#adding-people) to organization|New people added to the organization|`organizations.people.create`|
|[Join organization](./managing-people.md#joining)|User joined the organization|`organizations.join`|
|Assign [organization manager](./roles-and-permissions-for-organizations.md#managing-the-organization-manager-role)|Organization manager role assigned to a team member|`organizations.security.managers.create`|
|Revoke organization manager|Organization manager role revoked from a team member|`organizations.security.managers.delete`|
|Update [default Git provider configuration](./integrations/default-git-provider-integration-settings.md)|Default Git provider configuration for the organization updated|`organizations.integrations.providersettings.update`|
|Apply default Git provider configuration to all repositories|Default Git provider configuration applied to all repositories of the organization|`organizations.integrations.providersettings.apply`|
|Create new organization hook|New organization webhook created|`organizations.settings.hooks.create`|
|Create new [gate policy](./using-gate-policies.md)|New gate policy created|`organizations.gatepolicies.create`|
|Update gate policy|Quality gate definition updated|`organizations.gatepolicies.update`|
|Apply gate policy to repositories|Gate policy applied to a list of repositories|`organizations.gatepolicies.repositories.apply`|
|Make gate policy default|Gate policy was made the default for the organization|`organizations.gatepolicies.setdefault`|
|Make Codacy gate policy default|Built-in Codacy gate policy was made the default for the organization|`organizations.gatepolicies.setcodacydefault`|
|Delete gate policy|Gate policy deleted|`organizations.gatepolicies.delete`|
|Create new [coding standard](./using-coding-standards.md) using the guided setup|New coding standard created|`organizations.presetsstandards.create`|
|Create new coding standard draft using the advanced setup|New coding standard draft created|`organizations.codingstandards.create`|
|Create new coding standard from draft|New coding standard created|`organizations.codingstandards.promote`|
|?Update coding standard?|Coding standard definition updated (validate updated fields)||
|Apply coding standard to repositories|Coding standard applied to a list of repositories|`organizations.codingstandards.repositories.apply`|
|Make coding standard default|Coding standard was made the default|`organizations.codingstandards.setdefault`|
|Delete coding standard|Coding standard deleted|`organizations.codingstandards.delete`|

### Repository

|Event|Description|Action|
|-----|-----------|------|
|Create new [post-commit hook](../repositories-configure/integrations/post-commit-hooks.md)|New repository hook created|`repositories.integrations.postcommithook`|
|Create [repository API token](../codacy-api/api-tokens.md#repository-api-tokens)|New repository API token created|`repositories.tokens.create`|
|Read repository API token|List of repository API tokens retrieved|`repositories.tokens.read`|
|Delete repository API token|Repository API token deleted|`repositories.tokens.delete`|
|Update Git provider settings|Git provider settings for the repository updated ([GitHub](../repositories-configure/integrations/github-integration.md#configuring), [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring), or [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring))|`repositories.integrations.providersettings.update`|
|Refresh Git provider integration|Git provider integration refreshed (applies only to [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#refreshing) and [GitLab](../repositories-configure/integrations/gitlab-integration.md#refreshing))|`repositories.integrations.refreshprovider`|
