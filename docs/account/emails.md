# Emails

To manage the email addresses associated with your account and your email notifications, click on your avatar on the top right-hand corner and open **Your account**, page **Emails**.

## Updating your email addresses

Codacy pulls email addresses from the Git provider associated with your current session. To update the email addresses displayed on Codacy, update them on your Git provider, then log out and back in to Codacy.

!!! note
    If the updates are still not reflected on Codacy, navigate to the [access management](https://app.codacy.com/account/access-management) page, revoke the relevant Git provider or Google integration, then log out and back in to Codacy using the same provider.

## Managing your email notifications

Codacy can send you an email whenever there are new analysis results on your repositories with the list of found issues and the changes that created them. Codacy sends all email notifications to your default email address, and you can change your default email address by clicking **make default** next to another email address.

Configure the notifications that you wish to receive under **Repository notifications**:

-   **Per commit:** Codacy will send you an email for each analyzed commit.

-   **Per pull request:** Codacy will send you an email for each analyzed pull request.

-   **Only my activity:** By default, Codacy will only send you emails about your own commits and pull requests. Turn off this setting to receive emails for commits and pull requests made by other people as well.

![Email settings](images/emails-notifications.png)

!!! tip
    To turn off all email notifications, disable the settings **Per commit** and **Per pull request**.
