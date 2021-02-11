# Bitbucket changes

We're making some changes on February 18, 2019 **that will cause all existing integrations with Bitbucket to stop working**.

## What exactly are we doing?

We're reducing the permissions requested when authenticating with Bitbucket.

While we currently ask for all permissions, after this we will no longer require:

-   Write access for Teams
-   Write access for Projects
-   Delete access for Repositories
-   Full access to Wikis, Snippets, and Pipelines

## Why?

Previously, we were using OAuth 1, which forced us to request all permissions. This level of permissions requested to integrate with Bitbucket has been flagged as a concern by several of our users. We've now migrated to OAuth 2, which allows us to reduce the level of permissions required.

## What do you need to do if you have Bitbucket repositories?

The original user who set up your Bitbucket integration will need to log in to Codacy to confirm the new permissions. **Otherwise, Codacy will no longer be able to detect new Pull Requests, and existing repositories will stop receiving Pull Request status and comments on Bitbucket.**

If the original user who set up your Bitbucket integration isn't available, someone who has Admin permissions in both Codacy and Bitbucket to [re-do the integration](../../repositories-configure/integrations/bitbucket-integration.md) in Codacy.

You can log in with Bitbucket through <https://www.codacy.com/login-with/bitbucket>.

![Logging in using Bitbucket](images/Screenshot_2019-02-14_at_12.00.41.png)
