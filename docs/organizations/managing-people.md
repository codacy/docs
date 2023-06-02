# Managing people

People signing up to the Codacy app and joining an organization become members of that organization. Members of a Codacy organization can see the dashboards and details of the organization repositories. Depending on their permissions on the Git provider, members can also manage the organization and repository settings on Codacy.

For **private repositories**, Codacy only analyzes commits from people in your Codacy organization. To make sure that Codacy analyzes all relevant commits, add to your Codacy organization the committers that are not members of the organization yet.

!!! important
    -   Make sure that you invite or ask your teammates to join your organization on Codacy so that Codacy analyzes their commits to private repositories.

    -   Committers who aren't part of your Git provider organization can't join your organization on Codacy app, but you should still add them to your Codacy organization to analyze their commits to private repositories.

    -   In some Enterprise plans, Codacy automatically adds to the organization new people that commit to your private repositories and analyzes their commits. Also, Codacy updates your seats automatically when adding these new committers.

To list and manage the people in your organization, open your organization **Settings**, page **People**. This page also shows their last activity on Codacy:

![People in an organization](images/organization-people.png)

## Joining an organization {: id="joining"}

To become a member of an organization on Codacy app you must [sign up to Codacy](../getting-started/codacy-quickstart.md) using your Git provider and follow the instructions to either join an existing organization or add a new one.

To join or add an organization after completing the sign-up process, click **Organizations** on the top right-hand menu under your avatar:

![Joining an organization](images/organization-join.png)

!!! note
    **On Codacy Cloud**, organization owners [control if team members need an approval](changing-your-plan-and-billing.md#allowing-new-people-to-join-your-organization) before joining their organizations.

## Adding people to your organization {: id="adding-people"}

**On Codacy Cloud**, organization owners can also add teammates to their organization on Codacy. This is useful to allow Codacy to analyze commits to private repositories by committers who haven't signed up to Codacy or joined the organization yet.

!!! tip
    You can also use the Codacy API to [add people to your Codacy organization](../codacy-api/examples/adding-people-to-codacy-programmatically.md). This is useful while adding a large amount of people or to automatically add new members of your Git provider organization to Codacy.

!!! note
    For Enterprise plans where Codacy automatically adds new committers to your organization, you can invite them to join the organization on the Codacy app.

To add people to your organization:

1.  Open your organization **Settings**, page **People**, and click the button **Add people**.

    ![Adding people to your organization](images/organization-people-add-button.png)

1.  Select people from the list displaying pending requests to join the organization, as well as recent committers to the private repositories in your organization.

    Alternatively, click **Add people using email addresses** to manually enter the list of email addresses of the people you wish to add.

    ![Adding people to your organization](images/organization-people-add-modal.png)

1.  Confirm the updated billing details displayed at the bottom of the window and click the button **Add people**. Codacy emails the newly added people inviting them to log in.

## Removing people from your organization {: id="removing-people"}

Members of an organization on Codacy can remove themselves from the organization, and organization owners can also remove other members and committers.

When a member or committer leaves an organization:

-   Codacy stops analyzing their commits to private repositories in the organization
-   **On GitLab and Bitbucket organizations** Codacy stops analyzing repositories that were added by the member
-   Organizations must have at least one owner, so when the last organization owner leaves the organization they must either add someone else as owner or [delete the organization](../organizations/what-are-organizations.md#deleting-an-organization)

To remove people from your organization open your organization **Settings**, page **People**, and click the icon next to the member or committer you wish to remove:

![Removing people from your organization](images/organization-people-remove.png)

!!! important
    For Enterprise plans where Codacy automatically adds new committers to the organization, people that you remove from your organization will be added again if they keep committing.

## See also

-   [Adding people to Codacy programmatically](../codacy-api/examples/adding-people-to-codacy-programmatically.md)
-   [Roles and permissions for organizations](roles-and-permissions-for-organizations.md)
