# Why did Codacy stop commenting on pull requests?

Various reasons can cause Codacy to stop commenting on pull requests. The most common is that the user who enabled the integration no longer has permissions on the repository or that the SSH key is no longer valid.

To fix the issue, we recommend that a user with administrator permissions on the repository recreates the Git provider integration on Codacy:

-   [Enabling the GitHub integration](../../repositories-configure/integrations/github-integration.md#enabling)

-   [Enabling the GitLab integration](../../repositories-configure/integrations/gitlab-integration.md#enabling)

-   [Enabling the Bitbucket integration](../../repositories-configure/integrations/bitbucket-integration.md#enabling)

If after recreating the Git provider integration you still have any issues, please contact us at <mailto:support@codacy.com>.
