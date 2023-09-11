# Organization Slack integration for Security issues

The organization Slack integration for Security issues sends notifications to a Slack channel of your choice whenever Codacy detects new critical Security issues in the default branch of any repository in your organization.

## Installing the Slack integration

To install the Slack integration:

1.  Follow the [instructions on the Slack documentation pages](https://api.slack.com/messaging/webhooks) to create an Incoming Webhook and set it to post to a channel of your choice.

1.  On Slack, from the page [Your Apps](https://api.slack.com/apps), select the application linked to the webhook, page **Incoming Webhooks**, and copy the URL of the Incoming Webhook you've just created (it starts with `https://hooks.slack.com/services/`).

1.  On Codacy, open your organization **Integrations**, page **Slack**, paste the Incoming Webhook URL in the field, and click **Install Slack**.

    ![Slack integration installation](images/slack-integration-install.png)

Once the Slack integration is installed, Codacy sends a confirmation message to the Slack channel you configured when creating the Incoming Webhook. From there on, Codacy notifies you on the same channel whenever a new critical Security issue is detected in any repository within your organization.

![Slack integration message](images/slack-integration-message.png)

## Uninstalling the Slack integration

To uninstall the Slack integration, open your organization **Integrations**, page **Slack**, then click **Uninstall Slack** and confirm.

## See also

-   [Repository Slack integration](../../repositories-configure/integrations/slack-integration.md)
