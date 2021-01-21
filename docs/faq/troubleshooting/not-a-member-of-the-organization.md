# Not a member of the organization

When you see this message, it means that Codacy can't analyze a commit because the associated email address doesn't belong to any Codacy member or author.

You can check which email address is associated with a commit by hovering the cursor on the name of the contributor on the page for the commit:

![Checking the email address for a commit](images/not-a-member-of-the-organization-commit.png)

To verify which email addresses are associated with the Codacy account, the user must click on their avatar on the top right-hand corner, select **Your account**, and open the page **Emails**:

![Email addresses associated with a user account](images/not-a-member-of-the-organization-account.png)

There may be different reasons for this issue to happen:

-   **The user making the commit hasn't [signed in to Codacy and joined the organization](../../getting-started/getting-started-with-codacy.md) yet.** Or, if the user doesn't belong to your organization, an organization owner must [add the user as an author](../../organizations/adding-and-managing-authors.md) instead.

-   **The commit email address isn't associated with the account of a Codacy user.** Codacy automatically associates the email addresses from the Git provider accounts to the Codacy accounts when users sign in to Codacy. Make sure that the user configures the missing email address on their Git provider account, and that the user logs in again on Codacy for the change to take effect.

-   **Git isn't configured with your correct email address.** Unless you explicitly [configure your email address](https://git-scm.com/docs/git-config#Documentation/git-config.txt-useremail), Git automatically uses an email address based on the username and hostname of your workstation, and associates this email address with your commits.

    To check which email address is configured on your local Git installation, run:

    ```bash
    git config user.email
    ```

    If the value is incorrect, configure Git to use the same email address as the one associated with your Codacy account:

    ```bash
    git config --global user.email you@example.com
    ```

    !!! important
        Make sure that your email address doesn't include any extra characters such as quotes (`""` or `''`).
