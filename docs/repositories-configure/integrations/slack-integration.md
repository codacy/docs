# Slack integration

After adding a repository, you may want to enable Slack integration. Codacy integrates with Slack by sending messages to a channel when it finds new issues.

To enable the Slack integration access the **Integrations** tab of your repository **Settings**, click **Add integration** and select **Slack** from the list.

![Enabling the Slack integration](images/slack-integration.gif)

## Configuration

Configure the Slack integration as follows:

**Incoming webhook:**

1.  Access the **Incoming Webhooks** page on the App Directory of your Slack account
2.  Select the channel where you want to receive notifications and click **Add Incoming Webhooks Integration**
3.  Copy the generated URL and use it on Codacy

    ![Copying the webhook URL](images/slack-integration-webhook.png)

4.  Save settings on Slack

**Channel:** The name of the channel where Codacy will send the notifications. This value is optional and it will override the default channel of the webhook.

After filling both fields, click the **Save** button. You can also use the **Test** button to send a test notification to your Slack channel and confirm that the integration is working.

![Slack integration configuration](images/slack-integration-example.png)

After configuring your Slack integration with your server settings, Codacy will send a message on Slack whenever it finds new issues.

![Example Slack notification](images/slack-integration-notification.png)
