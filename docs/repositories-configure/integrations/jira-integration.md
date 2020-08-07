# Jira integration

After adding a repository, you may want to enable the Jira integration to manually create issues on your Jira board.

To set up, navigate to your repository's **Settings**, tab **Integrations**, click **Add integration**, select **Jira**, fill in all the fields, and click **Save**.

The integration only support the Basic authentication method. Use your email address as username and an API token as the password. Follow the instructions to [generate a Jira API token](https://confluence.atlassian.com/x/Vo71Nw).

![Enabling Jira integration](/images/Sep-04-2019_10-40-19.gif)

Once the Jira integration is set up, browse to **Settings**, tab **Integrations**, select **Advanced**, and make sure to fill in all the fields, including the Labels.

![](/images/test3.gif)

## Creating an issue on Jira

After configuring your Jira integration with your server settings, you will have additional options when browsing the existing issues on the repository that allow you to create Jira issues for results found on Codacy:

![Jira integration](/images/Jira_issue.gif)
