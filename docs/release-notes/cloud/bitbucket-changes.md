# Bitbucket changes

We are making some changes on the 18th Feb 2019 onwards **that will cause all existing integrations with Bitbucket to stop working**.

**What exactly are we doing?**

We are reducing the permissions requested when authenticating with Bitbucket.

While we currently ask for all permissions, after this we will no longer require:

-   Write access for Teams
-   Write access for Projects
-   Delete access for Repositories
-   Full access to Wikis, Snippets and Pipelines

**Why?**

Previously, we were using OAuth 1, which forced us to request all permissions. This level of permissions requested to integrate with Bitbucket has been flagged as a concern by several of our users. We have now migrated to OAuth 2, which allows us to reduce the level of permissions required.

**What do you need to do if you have Bitbucket repositories?**

The original user who set up your Bitbucket integration will need to log in to Codacy to confirm the new permissions. **Otherwise, Codacy will no longer be able to detect new Pull Requests, and existing repositories will stop receiving Pull Request status and comments on Bitbucket.**

If the original user who set up your Bitbucket integration is not available, someone who has Admin permissions in both Codacy and Bitbucket to [re-do the integration](/hc/en-us/articles/207280239-Bitbucket-Integration) in Codacy.

You can login with Bitbucket through <https://www.codacy.com/login-with/bitbucket>.

![Screenshot_2019-02-14_at_12.00.41.png](/images/Screenshot_2019-02-14_at_12.00.41.png)
