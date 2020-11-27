# Authors vs members

With the new Synced Organizations, Codacy introduced the concept of author. This article explains the main differences between an author and a member and how a user can change from one to the other.

Regarding the analysis of commits, as soon as you [add an author](adding-and-managing-authors.md) Codacy analyzes all commits made with that email
as if for a normal member. If your usual workflow doesn't include using the Codacy UI and instead you work with the information sent to the Git provider, being an author is the perfect fit for you.

On the other hand, if you're interested on the information available on the Codacy UI, be it regarding issues detected, patterns being used, or the current settings of a repository, you will have to become a member of the organization. To do so, click **Organizations** on the top right-hand menu under your avatar and you will see a list of organizations that you can join:

![Adding an organization](images/organization-join.png)

As soon as you join the organization you will be added as a member and removed from the list of authors, if your email was there.

As a member, you will be able to see the organization's repositories on Codacy, add new ones to be analyzed, and check each the details of each repository.
