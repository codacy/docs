# GitHub Integration

After adding a repository, navigate to your repository's **Settings**, tab **Integrations** to enable GitHub integration for comments on pull requests, issue creation, and more.

It installs in just one click but you may need to move back and forth between Codacy and GitHub if it requires additional permissions.

After installing it for a repository, it has to be enabled by a user with repository access on GitHub. For private repositories, this user will by default become the GitHub user that Codacy will use to comment and create issues on GitHub. For public repositories, comments made by Codacy will appear as coming from codacy-bot.

![](../../images/Aug-10-2017_17-47-06.gif)

Once the integration is enabled, you will see additional options when browsing the existing issues on the repository:

![](../../images/Screen_Shot_2016-12-27_at_12.11.35.png)

Enabling **Pull Request Status**, **Pull Request Comment** or **Pull Request Summary** Codacy will automatically update pull requests on GitHub with additional information when accepting pull requests.

![](../../images/Screen_Shot_2017-11-15_at_17.50.49.png)
 

-   **Pull Request Status** will only be added if the user that added the integration has at least write permissions for that repo.

    The status shows whether your PR and coverage are up to standards or not as per the [Pull Request Quality Settings](/hc/en-us/articles/360009164573-Quality-Settings) set up for your repository. To see the coverage status, please make sure the Coverage option is enabled in the PR Quality settings.

    ![](/hc/article_attachments/360004728273/image.png)

-   **Pull Request Comment** makes a comment on the Pull Request line when a new issue is found and shows the pattern raising the issue. Click on the Issue link to go to Codacy to see more details about the issue and how to fix it.

    ![](../../images/Screen_Shot_2017-11-15_at_18.23.26.png)


-   **Pull Request Summary** shows an overall view of the changes in the PR. Including newly found issues and other metrics such as complexity and duplication. 

    ![](../../images/Screen_Shot_2017-11-15_at_18.12.58.png)
