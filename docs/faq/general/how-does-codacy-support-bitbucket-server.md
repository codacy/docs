# How does Codacy support Bitbucket Server?

When you use Bitbucket Server to sign up or log into Codacy, the Bitbucket projects that you belong to will be available to be added as Organizations on Codacy. After adding a project:

-   Codacy displays the list of all repositories that you own in that project so that you can add them to Codacy as repositories to be analyzed
-   The members of the project will be able to [join or request to join Codacy](../../organizations/what-are-synced-organizations.md#managing-people-in-an-organization)

## Limitations

Currently, the integration between Codacy and Bitbucket Server has the following limitations:

-   **Users that are deleted from Bitbucket Server are not automatically removed from Codacy.** These users must be manually removed from Codacy, namely to ensure that Codacy only bills seats corresponding to active users.
-   **Renamed [project keys](https://confluence.atlassian.com/bitbucketserver/creating-projects-776639848.html) are not automatically renamed on Codacy, causing Codacy to stop analyzing the repositories in those projects.** You must click the button "Synchronize" in the settings of the corresponding Organization on Codacy to synchronize the project key and resume the analysis of the repositories.
-   **Deleted projects and repositories are not automatically deleted from Codacy.** However, you can manually delete the corresponding Organizations or repositories from Codacy.
-   **Repositories that are moved between teams are not automatically transferred between Organizations on Codacy.** You must manually delete these repositories from their source Organization and add them to their new Organization.
-   **Personal repositories are not supported.** You can only add repositories to Codacy if they belong to a project.
-   **Codacy only sends commit and pull request notification emails to the authors of the commits and pull requests.**
-   **The Repositories screen does not include the "last updated" timestamp for each repository.** As such, the repositories are sorted alphabetically.
-   **Codacy does not analyze pull requests submitted from forked repositories.**
