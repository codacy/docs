# Emails

To manage the email addresses associated with your account and your email notifications, click on your avatar on the top right-hand corner and open **Your account**, page **Emails**.

![Email settings](images/emails-notifications.png)

## Updating your email addresses {: id="updating"}

Codacy automatically links to your Codacy account the email addresses from the Git provider associated with your current session. On the **Emails** page, you can verify which email addresses are linked to your Codacy account.

!!! note
    For **GitHub**, if you have [email privacy enabled](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address?platform=mac#about-commit-email-addresses) on the provider, Codacy doesn't show your private emails and uses another available email address when displaying your personal details on lists, search filters, or activity."

To update the email addresses associated with your Codacy account, do the following:

1.  [Configure your Git email address](#git-config). This ensures that commits are attributed to you.

1.  Update your email addresses on your Git provider ([GitHub](https://docs.github.com/en/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/set-email-aliases/), or [GitLab](https://docs.gitlab.com/ee/user/profile/#add-emails-to-your-user-profile)).

1.  Log out and log back in to Codacy.

    !!! tip
        If the updates are still not reflected on Codacy, navigate to the [access management](https://app.codacy.com/account/access-management) page, revoke the relevant Git provider or Google integration, then log out and back in to Codacy using the same provider.

!!! note
    When developers commit **from GitHub or Bitbucket**, Codacy automatically associates all the commit email addresses from the same Git provider user with a single Codacy committer. For developers that never logged in to the Codacy app, this mechanism requires that they [set their Git email address](#git-config) and add all their email addresses to their [GitHub account](https://github.com/settings/emails) or [Bitbucket account](https://bitbucket.org/account/settings/email/).

### Setting your Git email address {: id="git-config"}

Unless you explicitly [configure your email address](https://git-scm.com/docs/git-config#Documentation/git-config.txt-useremail), Git automatically uses an email address based on the username and hostname of your workstation, and associates this email address with your commits.

To check which email address your local Git installation is using, run the following command on your workstation:

```bash
git config user.email
```

If the returned email address isn't one of the email addresses associated with your Git provider account, configure Git to use one of those email addresses instead:

```bash
git config --global user.email you@example.com
```

!!! important
    Make sure that your email address doesn't include any extra characters such as quotes (`""` or `''`).

## Managing your email notifications

Codacy can send you an email whenever there are new analysis results on your repositories with the list of found issues and the changes that created them. Codacy sends all email notifications to your default email address, and you can change your default email address by clicking **make default** next to another email address.

Configure the notifications that you wish to receive under **Repository notifications**:

-   **Per commit:** Codacy will send you an email for each analyzed commit.

-   **Per pull request:** Codacy will send you an email for each analyzed pull request.

-   **Only my activity:** By default, Codacy will only send you emails about your own commits and pull requests. Turn off this setting to receive emails for commits and pull requests made by other people as well.

!!! tip
    To turn off all email notifications, disable the settings **Per commit** and **Per pull request**.
