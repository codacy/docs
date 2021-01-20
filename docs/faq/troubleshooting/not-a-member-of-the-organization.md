# Not a member of the organization

When you see this message, it means that Codacy can't analyze a commit because the associated email address doesn't belong to any Codacy member or author.

There may be different reasons for this to happen:

-   **The user making the commit hasn't [signed in to Codacy and joined the organization](../../getting-started/getting-started-with-codacy.md) yet.** Or, if the user doesn't belong to your organization, an organization owner must [add the user as an author](../../organizations/adding-and-managing-authors.md) instead.

-   **The commit email address isn't associated with the account of a Codacy user.** Codacy automatically associates the email addresses from the Git provider accounts to the Codacy accounts when users sign in to Codacy. Make sure that the user configures the missing email address on their Git provider account, and that the user logs in again on Codacy for the change to take effect.

!!! note
    Please note that Codacy doesn't allow adding email addresses ending with `.local`. In this case, please use the email address that's associated with your Codacy account instead.
