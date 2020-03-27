# How does Codacy support Bitbucket Server?

When you use Bitbucket Server to sign up or log into Codacy, the Bitbucket projects that you belong to will be available to be added as Organizations on Codacy. After adding a project:

-   Codacy displays the list of all repositories that you own in that project so that you can add them to Codacy as repositories to be analyzed
-   The members of the project will be able to [join or request to join Codacy](/hc/en-us/articles/360010263720#settings-to-add-people)

## Limitations

Currently, the integration between Codacy and Bitbucket Server has the following limitations:

-   **Users that are deleted from Bitbucket Server are not automatically removed from Codacy.** These users must be manually removed from Codacy, namely to ensure that Codacy only bills seats corresponding to active users.
-   **Renamed projects are not automatically renamed on Codacy, causing Codacy to stop analyzing the repositories in those projects.** You must manually rename the corresponding Organization on Codacy to resume the analysis of the repositories.
-   **Deleted projects and repositories are not automatically deleted from Codacy.** However, you can manually delete the corresponding Organizations or repositories from Codacy.
-   **Personal repositories are not supported.** You can only add repositories to Codacy if they belong to a project.
-   **The Repositories screen does not include the “last updated” timestamp for each repository.** As such, the repositories are sorted alphabetically.
