# Managing people

<!-- Concept: Member of an organization

     What does it mean to be a member of an organization?
     Codacy only analyzes commits in repositories from people who are members of the respective organization -->

As a member, you will be able to see the organization's repositories on Codacy, add new ones to be analyzed, and check each the details of each repository.

<!-- Task: Listing people in an organization

     Codacy only analyzes commits from users on the People page
     Can be used to check the last login date of the users -->

To see and manage the members of your organization on Codacy open your organization **Settings** and open **People**.

![Managing people in an organization](images/organization-people.png)

## Joining an organization

<!-- Concept: Process for joining an organization -->

<!-- Task: Adding people to an organization

     Using either the list of recent contributors and pending requests, or using email addresses -->

Click **Organizations** on the top right-hand menu under your avatar and you will see a list of organizations that you can join:

![Joining an organization](images/organization-join.png)

Members can add themselves to your Codacy organization when they log into Codacy using their Git provider credentials. On the **Plan and Billing** page there are different ways to control who can join your organization:

-   **Allow new people to join:** team members with access on the Git provider will be able to join the Codacy organization automatically and your billing will be updated accordingly.
-   **New people need to request access to join:** team members must request access to be able to join the Codacy organization. You can override this setting for organization owners.

![Accepting new people to the organization](images/organization-plan-billing.png)

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
