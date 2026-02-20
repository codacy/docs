---
title: Organization Slack integration for Security issues
---


The organization Slack integration for Security issues sends notifications to a Slack channel of your choice whenever Codacy detects new critical Security issues in the default branch of any repository in your organization.

## Installing the Slack integration

To install the Slack integration:

1.  **On Slack**:
    1.  Access the [Incoming WebHooks](https://slack.com/apps/new/A0F7XDUAZ-incoming-webhooks) page on the App Directory of your Slack account.

    1.  Select the channel where you want to receive notifications and click **Add Incoming WebHooks Integration**.

    1.  Copy the Incoming WebHook URL (it starts with `https://hooks.slack.com/services/`).

1.  **On Codacy**:

    1.  Open your organization **Integrations**, page **Slack**.

    1.  Paste the Incoming WebHook URL in the field and click **Install Slack**.

    ![Slack integration installation](images/slack-integration-install.png)

Once the Slack integration is installed, Codacy sends a confirmation message to the Slack channel you configured when creating the Incoming WebHook. From there on, Codacy notifies you on the same channel whenever a new critical Security issue is detected in the default branch of any repository in your organization.

![Slack integration message](images/slack-integration-message.png)

## Uninstalling the Slack integration

To uninstall the Slack integration, open your organization **Integrations**, page **Slack**, then click **Uninstall Slack** and confirm.
