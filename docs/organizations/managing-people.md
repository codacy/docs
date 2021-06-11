# Managing people

Members of an organization can see the details of the repositories in that organization and add new repositories to be analyzed by Codacy. Besides this, Codacy only analyzes commits to **private repositories** from contributors who are members of the corresponding organization on Codacy.

!!! important
    Make sure that you invite or ask your team members to join your organization on Codacy so that Codacy analyzes their commits on private repositories.

To list and manage the members of your organization, open your organization **Settings**, page **People**. This page also shows when the organization members last logged in to Codacy:

![People in an organization](images/organization-people.png)

## Joining an organization {: id="joining"}

To become a member of an organization on Codacy you must [sign up to Codacy](../getting-started/getting-started-with-codacy.md) using your Git provider and follow the instructions to either join an existing organization or add a new one.

To join or add an organization after having complete the signup process, click **Organizations** on the top right-hand menu under your avatar:

![Joining an organization](images/organization-join.png)

!!! note
    **On Codacy Cloud**, organization owners [control if team members need an approval](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization) before joining their organizations.

## Adding people to your organization {: id="adding-people"}

**On Codacy Cloud**, organization owners can also invite team members to their organization on Codacy. This is useful to allow Codacy to analyze commits in private repositories by contributors who haven't signed up to Codacy or joined the organization yet.

To add members to your organization:

1.  Open your organization **Settings**, page **People**, and click the button **Add people**.

    ![Adding members to your organization](images/organization-people-add-button.png)

1.  Select people from the list displaying pending requests to join the organization, as well as recent contributors to the private repositories in your organization.

    Alternatively, click **Add people using email addresses** to manually enter the list of email addresses of the people you wish to add.

    ![Adding members to your organization](images/organization-people-add-modal.png)

1.  Confirm the updated billing details displayed at the bottom of the window and click the button **Add people**.

## Removing people from your organization {: id="removing-people"}

Members of an organization on Codacy can remove themselves from the organization, and organization owners can also remove other members.

When a member leaves an organization:

-   Codacy stops analyzing commits to private repositories in the organization from contributors who are no longer members of the organization on Codacy
-   Codacy stops analyzing repositories that were added by the member
-   Organizations must have at least one owner, so when the last organization owner leaves the organization they must either add someone else as owner or [delete the organization](../organizations/what-are-synced-organizations.md#deleting-an-organization)

To remove members from your organization open your organization **Settings**, page **People**, and click the icon next to the members you wish to remove:

![Removing people from your organization](images/organization-people-remove.png)
