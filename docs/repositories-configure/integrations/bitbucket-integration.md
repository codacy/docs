# Bitbucket integration

After adding a repository, navigate to your repository's **Settings**, tab **Integrations** to enable Bitbucket integration for comments on pull requests, issue creation, and more.

It installs in just one click but you may need to move back and forth between Codacy and Bitbucket if it requires additional permissions.

After installing the integration for a repository, it has to be enabled by a user with repository access on Bitbucket. For private repositories, this user will by default become the Bitbucket Cloud user that Codacy will use to comment and create issues on Bitbucket Cloud. For public repositories, comments made by Codacy will appear as coming from codacy-bot.

![Bitbucket Cloud integration](images/bitbucket-integration.png)

Once the integration is enabled, you will see additional options when browsing the existing issues on the repository:

![Bitbucket Cloud integration for issues](images/bitbucket-integration-issues.png)

When **Pull Request Status** or **Pull Request Comment** is enabled, Codacy will automatically update pull requests on Bitbucket with additional information when accepting pull requests.

-   **Pull Request Status** adds a report to your merge request showing whether your merge request and coverage are up to standards or not as per the [quality settings](../../repositories/quality-settings.md) configured for your project. To see the coverage status, ensure that the **Coverage** option is enabled in the quality settings. The report will only be added if the user that added the integration has at least write permissions for that project.

-   **Pull Request Comment** makes a comment on the Pull Request line when a new issue is found and shows the pattern raising the issue. Click on the issue link to open Codacy and see more details about the issue and how to fix it.
