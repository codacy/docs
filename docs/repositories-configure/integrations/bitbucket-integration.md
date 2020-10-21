# Bitbucket integration

<!-- TODO Improve intro -->
When the integration is enabled, Codacy displays more options when browsing the existing issues on the repository:

![Bitbucket integration for issues](images/bitbucket-integration-issues.png)

## Enabling the Bitbucket integration

<!-- TODO Improve section -->
After adding a repository, navigate to your repository **Settings**, tab **Integrations** to enable and configure the Bitbucket integration for comments on pull requests, issue creation, and more.

![Bitbucket integration](images/bitbucket-integration.png)

When you add a new repository, the Bitbucket integration is enabled by default. However, if you delete the integration you can add it again by clicking the button **Add integration** and selecting **Bitbucket** on the list.

After installing the integration for a repository, it has to be enabled by a user with repository access on Bitbucket. For private repositories, this user will by default become the Bitbucket user that Codacy will use to comment and create issues on Bitbucket. For public repositories, comments made by Codacy will appear as coming from codacy-bot.

## Configuring the Bitbucket integration

When **Pull Request Status** or **Pull Request Comment** are enabled, Codacy will automatically update pull requests on Bitbucket with extra information when accepting pull requests:

-   **Pull Request Status** adds a report to your pull requests showing whether your pull requests and coverage are up to standards or not as per the [quality settings](../../repositories/quality-settings.md) configured for your repository. To see the coverage status, ensure that you enable the option **Coverage** in the quality settings. 

    !!! important
        Codacy can only add the report if the user that added the integration has at least write permissions for that repository.

-    **Pull Request Comment** adds comments on the lines of the pull request where Codacy finds new issues. Click on the issue links to open Codacy and see more details about the issues and how to fix them.
