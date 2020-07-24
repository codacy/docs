# How does Codacy support GitLab Enterprise?

When you use GitLab Enterprise to sign up or log into Codacy, the GitLab Groups that you belong to will be available to be added as Organizations on Codacy. After adding a Group:

-   Codacy displays the list of all repositories that you own in that Group and Subgroups so that you can add them to Codacy as repositories to be analyzed
-   The members of the Group will be able to [join or request to join Codacy](/hc/en-us/articles/360010263720#settings-to-add-people)

If you have repositories that do not belong to any Group, you can still [add those on Codacy directly under My Repositories](/hc/en-us/articles/207278449-Setting-up-your-repository).

## Limitations

Currently, the integration between Codacy and GitLab Enterprise has the following limitations:

-   **Repositories that are moved between Groups are not automatically transferred between Organizations on Codacy.** You must manually delete these repositories from their source Organization and add them to their new Organization.
-   **It is not possible to add repositories with the same name to the Codacy organization.** Repositories having the same name but belonging to different GitLab Subgroups would collide if they were added to the same Codacy organization.
