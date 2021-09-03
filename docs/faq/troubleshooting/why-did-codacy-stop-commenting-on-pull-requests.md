# Why did Codacy stop commenting on pull requests?

Different reasons can cause Codacy to stop analyzing and commenting on pull requests, but the most common is that the user who initially enabled the Git provider integration no longer has permissions on the repository or that the SSH key is no longer valid.

To fix this issue and also avoid future disruptions, Codacy recommends that you re-enable the Git provider integration on Codacy using a dedicated service account on your Git provider:

1.  Create a dedicated service account on your Git provider for integrating Codacy with your repositories.

    !!! note
        The service account must have **administrator permissions** on the repositories to integrate with Codacy.

    !!! tip
        Using a dedicated service account also has the advantage of any pull request comments made by Codacy appearing as authored by the service account instead of by a regular organization member. You can name this account "Codacy" and use [this Codacy logo](https://avatars.githubusercontent.com/u/1834093){: target="_blank"} as the account picture so that your pull request comments look like the following example:

        ![Suggest fix comment on GitHub](../../repositories-configure/integrations/images/github-integration-suggest-fixes.png)

1.  Log out of both your Git provider and of Codacy.

1.  Log in to Codacy using the new service account.

1.  Open your repository **Settings**, tab **Integrations**, and click the trash can icon to remove the existing Git provider integration:

    ![Removing the old Git provider integration](images/git-provider-integration-remove.png)

1.  Re-enable the integration by following the instructions for your Git provider:

    -   [Enabling the GitHub integration](../../repositories-configure/integrations/github-integration.md#enabling)

    -   [Enabling the GitLab integration](../../repositories-configure/integrations/gitlab-integration.md#enabling)

    -   [Enabling the Bitbucket integration](../../repositories-configure/integrations/bitbucket-integration.md#enabling)

## See also

-   [We no longer have access to this repository, check your SSH keys](we-no-longer-have-access-to-this-repository.md)
