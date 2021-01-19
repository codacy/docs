# Not a member of the organization

When you see this message, it means that a commit email address isn't from a repository collaborator, and Codacy can't analyze the commit.

There may be different reasons for this to happen:

-   That user has not been invited to join the organization. When you have multiple collaborators in a repository, the ideal scenario is to add the repository to a Codacy organization and [invite all the collaborators](../../organizations/manual-organizations/creating-and-managing-teams.md).

-   The email used to commit is not associated with the collaborator's Codacy account. Email addresses in Codacy are based on your profile with your Git provider, so if you change your address there, this will reflect in your Codacy account. Once you change the information in the Git provider, please log out and log in again from Codacy.

!!! note
    Please note that Codacy doesn't allow adding email addresses ending with `.local`. In this case, please use the email address that's associated with your Codacy account instead.
