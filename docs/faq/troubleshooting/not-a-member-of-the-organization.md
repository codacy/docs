# Not a member of the organization

{%
    include-markdown "../../assets/includes/cloud.md"
%}

When you see the message **Not a member of the organization** it means that Codacy Cloud can't analyze a commit because the associated email address doesn't belong to any [member or committer of your Codacy organization](../../organizations/managing-people.md).

You can check which email address is associated with a commit by hovering the cursor on the name of the committer on the page for the commit:

![Checking the email address for a commit](images/not-a-member-of-the-organization-commit.png)

To verify which email addresses are associated with the Codacy Cloud account, the user must click on their avatar on the top right-hand corner, select **Your account**, and open the page **Emails**:

![Email addresses associated with a user account](images/not-a-member-of-the-organization-account.png)

There may be different reasons for this issue to happen:

-   **The user making the commit hasn't signed in to Codacy Cloud and joined the organization yet**

    The user must [join the organization](../../organizations/managing-people.md#joining) or, if you're the organization admin, you can [add the user](../../organizations/managing-people.md#adding-people) instead.

-   **The commit email address isn't associated with the account of a Codacy Cloud user**

    Make sure the user [updates the email addresses associated with their Codacy account](../../account/emails.md#updating) to include the missing commit email address.

-   **Git isn't configured with the correct email address**

    Make sure the user [sets the Git email address](../../account/emails.md#git-config) correctly.
