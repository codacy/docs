# Post-Commit Hooks

For Codacy to check updates in your repository (new commits and pull requests) you must have post-commit hooks enabled.

There are two ways to do this: **automatically** or **manually**

## Automatic Setup of Post-Commit Hook

If you are using GitHub or Bitbucket you can let Codacy configure the hook for you. Just go to your **repository settings** and click on the **Integrations** tab. This should have a switch button for automatic setup of post-commit hooks.

### Missing hook automatic setup switch button

It is possible that this switch is not visible for you.
If this is your case, go to the **Integrations** tab and add GitHub/Bitbucket. **Make sure you enable it after adding it.**

![Screen\_Shot\_.png](/images/Screen_Shot_.png)

## Manual Setup of Post-Commit Hooks on GitHub

To turn on post-commit hooks for GitHub:

1.  Copy the Hook URL to your Clipboard.
2.  Go to Webhooks &amp; Services under your repository settings
3.  Paste the Hook URL into the "Payload URL" field
4.  Select "application/json" in the "Content Type" field
5.  Click "Add Webhook"

Here's an example of how to configure your hooks on Github:

![](https://support.codacy.com/hc/en-us/article_attachments/115000853845/YmJy6PV8ge_2.gif)

**Permissions to create Post-Commit Hooks**

If you get an error when turning on the Post-Commit hook, please make sure you have Admin rights on the GitHub repository.
