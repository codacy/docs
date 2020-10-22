# GitHub integration

<!-- TODO Improve intro -->
When the integration is enabled, Codacy displays more options when browsing the existing issues on the repository:

The GitHub integration for comments on pull requests, issue creation, and more.

![GitHub integration for issues](images/github-integration-issues.png)

## Enabling the GitHub integration

To enable the GitHub integration, open your project **Settings**, tab **Integrations**.

When you add a new repository, the integration is enabled by default. However, if you remove the integration you can add it again by clicking the button **Add integration** and selecting **GitHub** on the list.

![GitHub integration](images/github-integration.png)

## Configuring the GitHub integration

To configure the GitHub integration, open your project **Settings**, tab **Integrations**.

Depending on the options that you enable, Codacy will automatically update pull requests on GitHub with extra information when accepting pull requests:

-   **Pull Request Status** adds a report to your pull requests showing whether your pull requests and coverage are up to standards or not as per the [quality settings](../../repositories/quality-settings.md) configured for your repository. To see the coverage status, ensure that you enable the option **Coverage** in the quality settings.

    ![Pull request status on GitHub](images/github-integration-pr-status.png)

    !!! important
        Codacy can only add the report if the user that added the integration has at least write permissions for that repository.

-   **Pull Request Comment** adds comments on the lines of the pull request where Codacy finds new issues. Click on the issue links to open Codacy and see more details about the issues and how to fix them.

    ![Pull request comment on GitHub](images/github-integration-pr-comment.png)


-   **Pull Request Summary** shows an overall view of the changes in the pull request, including new issues and metrics such as complexity and duplication.

    ![Pull request summary on GitHub](images/github-integration-pr-summary.png)
