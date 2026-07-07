# I moved my repository on the Git provider

If you moved a repository between organizations on **GitHub** (Cloud or Enterprise Cloud), and both the original and destination organizations are added to Codacy, Codacy automatically removes the repository from the original organization. See [Transferring a repository to another organization](../../organizations/managing-repositories.md#transferring-repository) for details.

!!! note
    Codacy only removes the repository from the original organization — it doesn't automatically add it to the destination organization. To keep analyzing the repository after the transfer, add it to the destination organization on Codacy yourself.

For GitLab and Bitbucket, or if the original organization isn't added to Codacy, Codacy doesn't automatically detect moves of repositories between two organizations.

To ensure that Codacy continues to analyze a repository that was moved to another organization on your Git provider:

1.  Delete the repository from the original organization on Codacy, taking note of the settings for this repository
1.  Add the repository to the new organization on Codacy and reconfigure the repository with the same settings as the original one

If you can't find your repository in the original Codacy organization or if you need more help with this process, please contact us at <mailto:support@codacy.com>.
