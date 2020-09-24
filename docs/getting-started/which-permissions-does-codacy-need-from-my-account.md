# Which permissions does Codacy need from my account?

Codacy Cloud uses [OAuth](https://oauth.net/) to handle logins. We support the following providers:

-   GitHub Cloud
-   GitLab Cloud
-   Bitbucket Cloud
-   Google Sign-In

Depending on the provider, we may request different permissions due to different OAuth implementations. We strive to request only the necessary permissions.

## GitHub Cloud

If you log in with GitHub, Codacy requires the following [permissions/scopes](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/):

-   'user' permissions to access GitHub user info
-   'public\_repo' permissions to set PR status on public repositories
-   'repo' access to access private repositories
-   'write: public\_key' to add SSH keys to the repositories, so that Codacy can have access to the repository
-   'write:repo\_hook' access to add post-commit hooks
-   'read:org': read-only access to organization membership, organization repositories, and team membership
-   'admin:org\_hook' to access organization hooks

## GitHub Cloud using GitHub Apps

If you log in with GitHub, Codacy requires the following [app permissions](https://developer.github.com/v3/apps/permissions/):

Repository permissions:

-   Checks: Checks on code - Read & Write
-   Issues: Issues and related comments, assignees, labels, and milestones - Read & Write
-   Metadata: Search repositories, list collaborators, and access repository metadata - Read Only
-   Pull requests: Pull requests and related comments, assignees, labels, milestones, and merges - Read & Write
-   Webhooks: Manage the post-receive hooks for a repository - Read & Write
-   Commit statuses: Commit statuses - Read & Write
-   Administration: Create SSH keys - Read & Write. Codacy creates an SSH key on the repository to allow cloning and integrating with your repository.

Organization permissions:

-   Members: Organization members and teams - Read Only
-   Webhooks: Manage the post-receive hooks for an organization - Read & Write

User permissions:

These permissions are granted on an individual user basis as part of the User authorization flow. They will be also be displayed during account installation for transparency.

-   Email addresses: Manage a user's email addresses - Read Only
-   Git SSH keys: Create SSH keys - Read & Write. Codacy may need to create an SSH key in your account:
    -   If your repository uses submodules, so that Codacy can clone the repositories for each submodule, or
    -   If Codacy fails to integrate with a repository using the repository key, so that Codacy can continue to perform analysis.

## GitLab Cloud

If you sign up with GitLab Cloud, Codacy requires the following [permissions/scopes](https://docs.gitlab.com/ee/integration/oauth_provider.html#authorized-applications):

-   ‘api’ permissions to access the authenticated user's API
-   ‘read\_user’ permissions to read the authenticated user's personal information
-   ‘read\_repository’ permissions to read the repositories
-   ‘openid’ to authenticate using [OpenID Connect](https://docs.gitlab.com/ee/integration/openid_connect_provider.html#shared-information)

## Bitbucket Cloud

If you log in with Bitbucket, Codacy requires the following [permissions/scopes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-cloud-rest-api-scopes/):

-   Read and modify your account information
-   Read and modify your repositories' issues
-   Read your workspace’s project settings and read repositories contained within your workspace's projects
-   Read and modify your repositories and their pull requests
-   Administer your repositories
-   Read your group membership information
-   Read and modify your repositories' webhooks

## Google Sign-In

If you log in with Google, Codacy requires the following [permissions/scopes](https://developers.google.com/identity/protocols/googlescopes#google_sign-in):

-   Email permission

## Revoking access to integrations

To revoke the access from Codacy to one or more of the OAuth providers:

1.  Click on your avatar on the top right-hand corner an select **Your Account**, tab **Access Management**.
2.  The **Access Management** page lists all current integrations with Git providers or Google that you used to sign in or log in to Codacy. To revoke the access to an integration, click the button **Revoke access** for the intended integration.

    ![](/images/revoke.png)

3.  To ensure that the integration is removed not only on Codacy but also on the integration side, we recommend that you follow the instructions on how to revoke the Codacy OAuth application on your provider:

    -   [GitHub Cloud](https://help.github.com/en/github/authenticating-to-github/reviewing-your-authorized-integrations)
    -   [GitLab Cloud](https://docs.gitlab.com/ee/integration/oauth_provider.html#authorized-applications)
    -   [Bitbucket Cloud](https://confluence.atlassian.com/bitbucket/bitbucket-cloud-apps-979433330.html#BitbucketCloudapps-OAuthconsumerpermissions)
    -   [Google Sign-in](https://support.google.com/accounts/answer/3466521#remove-access)

After revoking an integration, Codacy will no longer be able to access or manipulate resources that require API calls, such as detecting new pull requests or adding comments to pull requests. However, Codacy will continue to be able to perform operations that only require using the Git protocol either via SSH or HTTPS, such as detecting new commits and calculating diffs. To unregister your repositories from Codacy and stop the analysis you must [delete them from your Codacy account](../faq/repositories/how-do-i-delete-or-move-a-repository-to-another-organization.md).

If you need to use an integration that you have previously revoked, log in again to Codacy with that integration so that Codacy can request the required permissions from the provider.
