# Organization Slack integration for Security issues

This integration sends notifications to a Slack channel of your choice whenever Codacy detects new critical Security issues in any repository within your organization.

## Installing the Slack integration

To install the Slack integration:

1. Follow the [instructions on the Slack documentation pages](https://api.slack.com/messaging/webhooks) to add an Incoming Webhook to your Slack workspace and set it to post to a channel of your choice, and then copy the webhook URL.

    The Incoming Webhook URL starts with `https://hooks.slack.com/services/`.

1.  Open your organization **Integrations**, page **Slack**, paste the Incoming Webhook URL in the field, and click **Install Slack**.

    ![Slack integration installation](images/slack-integration-install.png)

## Uninstalling the Slack integration

To uninstall the Slack integration, open your organization **Integrations**, page **Slack**, then click **Uninstall Slack** and confirm.

## See also

-   [Repository Slack integration](../../repositories-configure/integrations/slack-integration.md)
