# Managing people

To see and manage who joined your organization on Codacy open your organization **Settings** and open **People**.

![Managing people in an organization](images/organization-people.png)

Members can add themselves to your Codacy organization when they log into Codacy using their Git provider credentials. In the **Plan and Billing** page there are different ways to control who can join your organization:

-   **Allow new people to join:** team members with access on the Git provider will be able to join the Codacy organization automatically and your billing will be updated accordingly.
-   **New people need to request access to join:** team members must request access to be able to join the Codacy organization. You can override this setting for organization owners.

The organizations that contain your personal repositories can only have the owner of the repositories as their single member.

!!! important
    **If you are using Bitbucket Cloud** the organization that contains your personal repositories can have other members, since Bitbucket Cloud doesn't have a different type of [workspace](https://support.atlassian.com/bitbucket-cloud/docs/what-is-a-workspace/){: target="_blank"} for personal use.

![Accepting new people to the organization](images/organization-plan-billing.png)

Members can remove themselves from organizations, while owners can remove themselves as well as other users, even other owners. Organizations must have at least one owner.

## Authors vs members

With the new Synced Organizations, Codacy introduced the concept of author. This article explains the main differences between an author and a member and how a user can change from one to the other.

Regarding the analysis of commits, as soon as you add an author Codacy analyzes all commits made with that email
as if for a normal member. If your usual workflow doesn't include using the Codacy UI and instead you work with the information sent to the Git provider, being an author is the perfect fit for you.

On the other hand, if you're interested on the information available on the Codacy UI, be it regarding issues detected, patterns being used, or the current settings of a repository, you will have to become a member of the organization. To do so, click **Organizations** on the top right-hand menu under your avatar and you will see a list of organizations that you can join:

![Adding an organization](images/organization-join.png)

As soon as you join the organization you will be added as a member and removed from the list of authors, if your email was there.

As a member, you will be able to see the organization's repositories on Codacy, add new ones to be analyzed, and check each the details of each repository.

## Adding and managing authors

Authors are a mechanism for inviting commit authors to your Codacy organization that aren't members of your organization. You might find yourself in a position where you want to analyze commits that were authored with redacted Git committer emails or bot-generated emails.

Under **Authors**, you will see people whose commits are being analyzed, in addition to the members of your organization. You will be charged for each author according to your plan.

![Authors](images/authors.png)

### Adding authors

You can add authors in the People section of your organization settings or directly on a pull request page.

![Adding authors](images/authors-add.png)

![Adding authors on a pull request](images/authors-add-pr.png)

### Managing authors

You can manage your existing authors in the **People** section of your organization settings.

![Removing an author](images/authors-remove.png)