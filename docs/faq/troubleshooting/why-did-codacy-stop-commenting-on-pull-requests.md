# Why did Codacy stop commenting on pull requests?

## Outdated app permissions

!!! info "This section applies to Codacy Coverage on GitHub"

Coverage information is currently sent to GitHub by a new version of the Codacy Coverage engine, which depends on updated app permissions.

If you stopped receiving coverage summaries on your pull requests, please [review and accept the updated Codacy app permissions on GitHub](https://docs.github.com/en/enterprise-cloud@latest/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#reviewing-permissions). For more information on the rollout of the new Coverage engine, [see the relevant release note](../../release-notes/cloud/cloud-2023-11-23-new-coverage-engine-status-checks.md).

## Outdated permissions or invalid SSH key

!!! info "This section applies to GitLab and Bitbucket"

Different reasons can cause Codacy to stop analyzing and commenting on pull requests, but the most common is that the user who initially enabled the GitLab or Bitbucket integration no longer has permissions on the repository or that the SSH key is no longer valid.

To fix this issue and avoid future disruptions, re-enable the GitLab or Bitbucket integration on Codacy using a dedicated service account on your Git provider:

1.  Create a service account on your Git provider exclusively dedicated to integrating Codacy with your repositories.

    !!! note
        The service account must:

        -   [Have administrator permissions](../../organizations/roles-and-permissions-for-organizations.md) on the repositories to integrate with Codacy
        -   Not be shared by other systems to ensure that Codacy doesn't hit the API rate limits of the Git provider when using this account

    !!! tip
        Using a dedicated service account also has the advantage of any pull request comments made by Codacy appearing as authored by the service account instead of by a regular organization member. You can name this account "Codacy" and use [this Codacy logo](https://avatars.githubusercontent.com/u/1834093) as the account picture so that your pull request comments look like the following example:

        ![Codacy comment on a GitLab merge request](../../repositories-configure/integrations/images/gitlab-integration-pr-comment.png)

1.  Log out of both your Git provider and of Codacy.

1.  Log in to Codacy using the new service account.

1.  Open your repository **Settings**, tab **Integrations**, and click the trash can icon to remove the existing Git provider integration:

    ![Removing the old Git provider integration](images/git-provider-integration-remove.png)

1.  Re-enable the integration by following the instructions for your Git provider:

    -   [Enabling the GitLab integration](../../repositories-configure/integrations/gitlab-integration.md#refreshing)

    -   [Enabling the Bitbucket integration](../../repositories-configure/integrations/bitbucket-integration.md#enabling)

    {%
        include-markdown "../../assets/includes/default-git-provider-settings-tip.md"
        start="<!--default-settings-start-->"
        end="<!--default-settings-end-->"
    %}

## See also

-   [We no longer have access to this repository, check your SSH keys](we-no-longer-have-access-to-this-repository.md)
