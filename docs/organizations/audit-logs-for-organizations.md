---
description: List of events that Codacy can log an organization.
---

# Audit logs for organizations

!!! info "This feature is available only to business tier customers"

< CONCEPT >
< HOW TO USE THE FEATURE >

The table below lists the events that Codacy logs for your organization at user, organization, and repository levels.

## User

|Event|Description|
|-----|-----------|
|Sign up|User signed up to Codacy|
|Log in|User logged in to Codacy|
|Create account API token|New [account API token](../../codacy-api/api-tokens.md#account-api-tokens) created|
|Read account API token|List of [account API tokens](../../codacy-api/api-tokens.md#account-api-tokens) retrieved|
|Delete account API token|[Account API token](../../codacy-api/api-tokens.md#account-api-tokens) deleted|
|Add Git provider|New Git provider added to Codacy|

## Organization

|Event|Description|
|-----|-----------|
|Add organization|Organization added to Codacy|
|Add person to organization|New person added to the organization|
|?Remove person from organization (depends on effort)?|Person removed from the organization|
|Join organization|User joined the organization|
|Assign organization manager|Organization manager role assigned to a team member|
|Revoke organization manager|Organization manager role revoked from a team member|
|Update repository management permissions|Repository management permissions updated|
|Update default Git provider configuration|Default Git provider configuration for the organization updated|
|Apply default Git provider configuration to all repositories|Default Git provider configuration applied to all repositories of the organization|
|Create new organization hook|New organization webhook created|
|Create new gate policy|New gate policy created|
|Update gate policy|Quality gate definition updated (validate updated fields)|
|Apply gate policy to repositories|Gate policy applied to a list of repositories|
|?Make gate policy default?|Gate policy was made the default for the organization (validate)|
|?Make Codacy gate policy default?|Built-in Codacy gate policy was made the default for the organization (validate)|
|Delete gate policy|Gate policy deleted|
|Create new coding standard|New coding standard created (validate implementation)|
|Update coding standard|Coding standard definition updated (validate updated fields)|
|Apply coding standard to repositories|Coding standard applied to a list of repositories|
|?Make coding standard default?|Coding standard was made the default (validate)|
|Delete coding standard|Coding standard deleted|

## Repository

|Event|Description|
|-----|-----------|
|Create new post-commit hook|New repository hook created|
|Create repository API token|New [repository API token](../../codacy-api/api-tokens.md#repository-api-tokens) created|
|Read repository API token|List of [repository API tokens](../../codacy-api/api-tokens.md#repository-api-tokens) retrieved|
|Delete repository API token|[Repository API token](../../codacy-api/api-tokens.md#repository-api-tokens) deleted|
|Update Git provider settings|Git provider settings for the repository updated|
|Refresh Git provider integration|Git provider integration refreshed (applies only to Bitbucket and GitLab)|
