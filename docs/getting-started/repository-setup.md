# Setting up your repository

To set up a repository, first select your source code repository.

**Open source** repositories are **free** and set as public on Codacy by default

## Requirements

* **Git provider**: We support GitHub, Bitbucket, and GitLab (for Self-hosted only). Codacy does not support other version control systems.
* **Repository access**: The server hosting your repository must be accessible by the Codacy servers. This is already the case for GitHub and Bitbucket repositories (both private and public). You need to have Admin rights for the repository you wish to set up.
* **Programming language requirements**: View the full list of [languages that Codacy supports](/hc/en-us/articles/207994735-Supported-Languages).

## Setting up a GitHub repository

**Check our guide to [getting started with the Synced organizations for GitHub](/hc/en-us/articles/360010263540), our new experience for simplified user and repository management.**

If you are logged in to GitHub account, you should be presented with a list of GitHub repositories when you click on the **Add repository** button. If not, click **Import from GitHub** on the left.

If your repository is private on GitHub, you might have to select **Include private repositories** (on the left) to grant additional permissions to Codacy. Select the organization and team where you want to add the repository.

After finding your repository, click the check box to add your repository. Your repository is now imported, and a first analysis will begin. If you wish to analyze other repositories, there is no need to repeat the wizard, just select the other repositories. When you have added your repositories, click on the bottom message to set up your integrations.

![](/hc/en-us/article_attachments/115000332689/github.gif)

After finding your repository, select it and click **Add**.

## Setting up a Bitbucket repository

If your repository is hosted on Bitbucket, select **Import from Bitbucket**.\
You must provide Codacy the following permissions:

![](/hc/en-us/article_attachments/204008065/Confirm_access_to_your_account.png)

After finding your repository, select it and click **Add**.\
Your repository has now been imported, and a first analysis will start.

## That's it!

After the first analysis, you can customize the code patterns of your repositories in the [Code Patterns](/hc/en-us/articles/207994335-Code-Patterns) tab.
