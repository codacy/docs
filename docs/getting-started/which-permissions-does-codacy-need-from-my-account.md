# Which permissions does Codacy need from my account?

Codacy Cloud uses [OAuth](https://oauth.net/) to handle logins. We support the following providers:

-   GitHub Cloud
-   GitLab Cloud
-   Bitbucket Cloud
-   Google Sign-In

Depending on the provider, we may request different permissions due to different OAuth implementations. We strive to request only the necessary permissions.

## GitHub Cloud

If you log in with GitHub, Codacy requires the following [app permissions](https://developer.github.com/v3/apps/permissions/):

Repository permissions:

-   Checks - Read & Write. Codacy creates and updates check runs with the results of code analysis.
-   Issues - Read & Write. Codacy can create GitHub issues from issues found during code analysis.
-   Metadata - Read Only. Codacy retrieves repository metadata, such as name, languages, collaborators and commit information.
-   Pull requests - Read & Write. Codacy retrieves pull request information to display on its side. Codacy might also create comments and suggestions on the pull request, according to the results of code analysis.
-   Webhooks - Read & Write. Codacy creates webhooks for code pushes and pull request events (created, merged, etc.). These events might trigger code analysis.
-   Commit statuses - Read & Write. Codacy sets the status of commits according to the result of code analysis.
-   Administration - Read & Write. [Codacy creates an SSH key](#why-does-codacy-ask-for-permission-to-create-ssh-keys) on the repository to allow cloning and integrating with your repository.

Organization permissions:

-   Webhooks - Read & Write. Codacy creates webhooks for organization and repository events (creation, deletion, member added, etc.) to enable [synced organizations](../organizations/what-are-synced-organizations.md).
-   Members - Read Only. Codacy retrieves information about organization members and teams to enforce permissions, enable synced organizations and user management.

User permissions:

These permissions are granted on an individual user basis as part of the user authorization flow. They will be also be displayed during account installation for transparency.

-   Email addresses - Read Only. Codacy retrieves the user's email addresses to enforce which commits are eligible for analysis.
-   Git SSH keys - Read & Write. [Codacy creates an SSH key](#why-does-codacy-ask-for-permission-to-create-ssh-keys) on the repository to allow cloning and integrating with your repository.

## GitLab Cloud

If you sign up with GitLab Cloud, Codacy requires the following [permissions/scopes](https://docs.gitlab.com/ee/integration/oauth_provider.html#authorized-applications):

-   `api` - Codacy uses GitLab's API to read and update pull requests, create webhooks for code push events, list commits, repositories, groups, members and permissions.
-   `read_user` - Codacy retrieves the user's email addresses to enforce which commits are eligible for analysis.
-   `read_repository` - Codacy retrieves repository metadata, such as name, languages and collaborators.
-   `openid` - Codacy uses this permission for authentication using [OpenID Connect](https://docs.gitlab.com/ee/integration/openid_connect_provider.html#shared-information)

## Bitbucket Cloud

If you log in with Bitbucket, Codacy requires the following [permissions/scopes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-cloud-rest-api-scopes/):

-   `account:write` - Codacy retrieves the user's email addresses to enforce which commits are eligible for analysis. Furthermore, [Codacy creates an SSH key](#why-does-codacy-ask-for-permission-to-create-ssh-keys) on the repository to allow cloning and integrating with your repository.
-   `repository:admin` - Codacy retrieves repository metadata, such as name, languages and collaborators, and commit information. [Codacy creates an SSH key](#why-does-codacy-ask-for-permission-to-create-ssh-keys) on the repository to allow cloning and integrating with your repository (see box above).
-   `pullrequest:write` - Codacy retrieves pull request information to display on its side. Codacy might also create comments on the pull request, according to the results of code analysis.
-   `issue:write` - Codacy can create Bitbucket issues from issues found during code analysis.
-   `webhook` - Codacy creates webhooks for code pushes and pull request events (created, merged, etc.). These events might trigger code analysis. Codacy also creates repository webhooks to enable [synced organizations](../organizations/what-are-synced-organizations.md).
-   `team` - Codacy uses your group/team membership information to enforce permissions. 
-   Read your workspace's project settings and read repositories contained within your workspace's projects

## Google Sign-In

If you log in with Google, Codacy requires the following [permissions/scopes](https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in):

-   Email permission

## Revoking access to integrations

To revoke the access from Codacy to one or more of the OAuth providers:

1.  Click on your avatar on the top right-hand corner and select **Your Account**, tab **Access Management**.
2.  The **Access Management** page lists all current integrations with Git providers or Google that you used to sign in or log in to Codacy. To revoke access to an integration, click the button **Revoke access** for the intended integration.

    ![Revoking access to an integration](images/revoke-integration.png)

3.  To ensure that the integration is removed not only on Codacy but also on the integration side, we recommend that you follow the instructions on how to revoke the Codacy OAuth application on your provider:

    -   [GitHub Cloud](https://help.github.com/en/github/authenticating-to-github/reviewing-your-authorized-integrations)
    -   [GitLab Cloud](https://docs.gitlab.com/ee/integration/oauth_provider.html#authorized-applications)
    -   [Bitbucket Cloud](https://support.atlassian.com/bitbucket-cloud/docs/bitbucket-cloud-apps-overview/#OAuth-consumer-permissions)
    -   [Google Sign-in](https://support.google.com/accounts/answer/3466521#remove-access)

After revoking an integration, Codacy will no longer be able to access or manipulate resources that require API calls, such as detecting new pull requests or adding comments to pull requests. However, Codacy will still be able to perform operations that only require using the Git protocol either via SSH or HTTPS, such as detecting new commits and calculating diffs. To remove your repositories from Codacy and stop the analysis you must [delete them from your Codacy account](../repositories-configure/removing-your-repository.md).

If you need to use an integration that you have previously revoked, log in again to Codacy with that integration so that Codacy can request the required permissions from the provider.

## Why does Codacy ask for permission to create SSH keys?

Codacy asks for permission to create SSH keys because it needs to create an SSH key in your account in the following situations:

-   If your repository uses submodules, so that Codacy can clone the repositories for each submodule
-   If Codacy fails to integrate with a repository using the repository key, so that Codacy can continue to perform analysis

**Codacy only adds read-only SSH keys to be able to clone repositories** and won't have access to any of your existing SSH keys. You have full control over which organizations and repositories Codacy is authorized to access, and you can also [revoke the keys created by Codacy at any time](https://docs.github.com/en/github/authenticating-to-github/reviewing-your-ssh-keys). Codacy doesn't change the contents or member privileges of any repository you authorize it to analyze.

We understand the desire for security and privacy and find that the SSH protocol is preferable to HTTPS as it separates Codacy's access rights from the one of the users.
