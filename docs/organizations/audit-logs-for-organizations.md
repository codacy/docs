---
description: List of events that Codacy can log for an organization.
---

# Audit logs for organizations

!!! info "This feature is available only to business tier customers"

Codacy logs important events in your organization which enables the generation of comprehensive reports to assist you with the audit process. For example, you can track who added a repository to Codacy, or changed the settings of a coding standard.

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
|Create account API token|New [account API token](../codacy-api/api-tokens.md#account-api-tokens) created|`user.tokens.create`|
|Read account API token|List of [account API tokens](../codacy-api/api-tokens.md#account-api-tokens) retrieved|`user.tokens.read`|
|Delete account API token|[Account API token](../codacy-api/api-tokens.md#account-api-tokens) deleted|`user.tokens.delete`|
|Add Git provider|New Git provider added to Codacy|`user.providers.create`|

### Organization

|Event|Description|Action|
|-----|-----------|------|
|Add organization|Organization added to Codacy|`organizations.create`|
|Add people to organization|New people added to the organization|`organizations.people.create.`|
|?Remove person from organization (depends on effort)?|Person removed from the organization||
|Join organization|User joined the organization|`user.join`|
|Assign organization manager|Organization manager role assigned to a team member||
|Revoke organization manager|Organization manager role revoked from a team member||
|Update repository management permissions|Repository management permissions updated||
|Update default Git provider configuration|Default Git provider configuration for the organization updated|`organizations.integrations.providersetting.update`|
|Apply default Git provider configuration to all repositories|Default Git provider configuration applied to all repositories of the organization|`organizations.integrations.providersetting.apply`|
|Create new organization hook|New organization webhook created||
|Create new gate policy|New gate policy created|`organizations.gatepolicies.create`|
|Update gate policy|Quality gate definition updated|`organizations.gatepolicies.update`|
|Apply gate policy to repositories|Gate policy applied to a list of repositories|`organizations.gatepolicies.repositories.apply`|
|Make gate policy default|Gate policy was made the default for the organization|`organizations.gatepolicies.setdefault`|
|Make Codacy gate policy default|Built-in Codacy gate policy was made the default for the organization|`organizations.gatepolicies.setcodacydefault`|
|Delete gate policy|Gate policy deleted|`organizations.gatepolicies.delete`|
|Create new coding standard|New coding standard created (validate implementation)||
|Update coding standard|Coding standard definition updated (validate updated fields)||
|Apply coding standard to repositories|Coding standard applied to a list of repositories|`organizations.codingstandards.repositories.apply`|
|Make coding standard default|Coding standard was made the default|`organizations.codingstandards.setdefault`|
|Delete coding standard|Coding standard deleted|`organizations.codingstandards.delete`|

### Repository

|Event|Description|Action|
|-----|-----------|------|
|Create new post-commit hook|New repository hook created|`repositories.integrations.postcommithook`|
|Create repository API token|New [repository API token](../codacy-api/api-tokens.md#repository-api-tokens) created|`repositories.tokens.create`|
|Read repository API token|List of [repository API tokens](../codacy-api/api-tokens.md#repository-api-tokens) retrieved|`repositories.tokens.read`|
|Delete repository API token|[Repository API token](../codacy-api/api-tokens.md#repository-api-tokens) deleted|`repositories.tokens.delete`|
|Update Git provider settings|Git provider settings for the repository updated|`repositories.integrations.providersettings.update`|
|Refresh Git provider integration|Git provider integration refreshed (applies only to Bitbucket and GitLab)|`repositories.integrations.refreshprovider`|
