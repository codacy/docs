# Why do I get a "Not a member of the organization" message?

When you see this message, it means that the email that is being used to make the commit is not from a repository collaborator, and so we cannot analyze the commit.

There may be different reasons for this to happen:

1. That user has not been invited to join the organization. When you have multiple collaborators in a repository, the ideal scenario is to add the repository to a Codacy organization and [invite all the collaborators](https://support.codacy.com/hc/en-us/articles/360009340553-Creating-and-managing-teams#h.d20ci87op3zp).
2. The email used to commit is not associated with the collaborator's Codacy account. Email addresses in Codacy are based on your profile with your code provider, so if you change your address there, this will reflect in your Codacy account. Once you change the information in the code provider, please log out and log in again from Codacy.

!!! note
    Please note that *.local* emails are not able to be added to Codacy. In this case, please use the email address that is already associated with your Codacy account. 
