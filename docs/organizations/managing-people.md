# Managing people

<!-- Concept: Member of an organization

     What does it mean to be a member of an organization?
     Codacy only analyzes commits in repositories from people who are members of the respective organization -->

Members of an organization can see the details of the repositories in that organization and add new repositories to be analyzed by Codacy. Besides this, **Codacy only analyzes commits to repositories from contributors who are members of the corresponding organization on Codacy**.

!!! important
    Make sure that your team members join your organization on Codacy so that Codacy analyzes their commits in the repositories of that organization.

<!-- Task: Listing people in an organization

     Codacy only analyzes commits from users on the People page
     Can be used to check the last login date of the users -->

To list and manage the members of your organization on Codacy open your organization **Settings**, page **People**:

![People in an organization](images/organization-people.png)

On this page you can see the list of members of your organization and when they last logged in to Codacy.

## Joining an organization

To become a member of an organization on Codacy you must [sign up to Codacy](../getting-started/getting-started-with-codacy.md) using your Git provider and follow the instructions to either join an existing organization or add a new one.

To join or add an organization after completing the sign up process, click **Organizations** on the top right-hand menu under your avatar:

![Joining an organization](images/organization-join.png)

<!-- Concept: Controlling how people join an organization -->

Organization owners can control who joins their organization by choosing one of the following options on the page **Plan and Billing** of the organization:

-   **Allow new people to join:** team members with access to the organization on the Git provider are able to join the Codacy organization automatically. Your billing is updated accordingly.
-   **New people need to request access to join:** when team members with access to the organization on the Git provider join the Codacy organization, an organization owner must manually approve their requests on the page **People**. You can override this setting for organization owners.

![Accepting new people to the organization](images/organization-accepting-new-people.png)

## Adding members to your organization

Organization owners can add other team members to their organization on Codacy. This is useful to allow Codacy to analyze commits by contributors who haven't signed up for Codacy yet.

To add members to your organization on Codacy:

1.  Open your organization **Settings**, page **People**, and click the button **Add people**.

    <!-- TODO Consider adding another screenshot to show the UI path -->

    ![Adding members to your organization](images/organization-add-people.png)

1.  Select people from the list of recent contributors to the repositories in your organization. Alternatively, click **Add people using email addresses** to manually enter the list of email addresses of the people you wish to add.

1.  Confirm the updated billing details displayed at the bottom of the window and click the button **Add people**.

## Leaving an organization

<!-- Task: Leaving an organization, Removing people from an organization

     Users leave an organization themselves and removing other users from an organization

     What happens when different types of users leave an organization (stop having access to the organization, stop analyzing repositories added by the user, delete the organization if last remaining organization owner) -->

Members can remove themselves from organizations, while owners can remove themselves as well as other users, even other owners. Organizations must have at least one owner.

## WIP Notes

<!-- Details about personal organizations

     TODO: Move to "What are synced organizations"? Or does it make more sense to mention this here? -->

The organizations that contain your personal repositories can only have the owner of the repositories as their single member.

!!! important
    **If you are using Bitbucket Cloud** the organization that contains your personal repositories can have other members since Bitbucket Cloud doesn't have a different type of [workspace](https://support.atlassian.com/bitbucket-cloud/docs/what-is-a-workspace/){: target="_blank"} for personal use.
