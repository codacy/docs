# How does Codacy support Bitbucket Cloud?

When you use Bitbucket Cloud to sign up or log into Codacy, the Bitbucket teams that you belong to will be available to be added as Organizations on Codacy. After adding a team:

-   Codacy displays the list of all repositories in that team so that you can add them to Codacy as repositories to be analyzed
-   The members of the team will be able to join or request to join Codacy

If you have repositories that don't belong to any team, you can still add those on Codacy directly under **My Repositories**.

## Limitations

Currently, the integration between Codacy and Bitbucket Cloud has the following limitations:

-   **Users that are deleted from Bitbucket Cloud are not automatically removed from Codacy.** These users must be manually removed from Codacy, namely to ensure that Codacy only bills seats corresponding to active users.
-   **Deleted teams and repositories are not automatically deleted from Codacy.** However, you can manually delete the corresponding Organizations or repositories from Codacy.
-   **Renamed Team [workspace IDs](https://support.atlassian.com/bitbucket-cloud/docs/what-is-a-workspace/#How-to-change-a-workspace-ID) aren't automatically renamed on Codacy, causing Codacy to stop analyzing the repositories in those teams.** You must click the button **Synchronize** in the settings of the corresponding Organization on Codacy to synchronize the workspace ID and resume the analysis of the repositories.
-   **Repositories that are moved between teams are not automatically transferred between Organizations on Codacy.** You must manually delete these repositories from their source Organization and add them to their new Organization.
-   **Codacy only sends commit and pull request notification emails to the authors of the commits and pull requests.**
-   **Codacy doesn't analyze pull requests submitted from forked repositories.**

## See also

-   [What are synced organizations](../../organizations/what-are-synced-organizations.md)
