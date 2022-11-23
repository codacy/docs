# How does Codacy support GitLab Enterprise?

When you use GitLab Enterprise to sign up or log into Codacy, the GitLab Groups that you belong to will be available to be added as Organizations on Codacy.

After adding a Group:

-   Codacy displays the list of all repositories that you own in that Group and Subgroups so that you can add them to Codacy as repositories to be analyzed
-   The members of the Group will be able to [join or request to join Codacy](../../organizations/managing-people.md#joining)

If you have repositories that don't belong to any Group, you can still [add those on Codacy by choosing your "personal" organization](../../getting-started/codacy-quickstart.md#choose-organization).

## Limitations

Currently, the integration between Codacy and GitLab Enterprise has the following limitations:

-   **Repositories that are moved between Groups are not automatically transferred between Organizations on Codacy.** You must manually delete these repositories from their source Organization and add them to their new Organization.
-   **It is not possible to add repositories with the same name to the Codacy organization.** Repositories having the same name but belonging to different GitLab Subgroups would collide if they were added to the same Codacy organization.
-   **Codacy doesn't analyze pull requests submitted from forked repositories.**
-   **[Share projects with other groups](https://docs.gitlab.com/ee/user/project/members/share_project_with_groups.html) isn't fully supported on Codacy.** Users from the "other groups" can join the Organization that owns the project on the Codacy side, and Codacy will analyze the commits from those users. However, those users **won't** be able to access the project on the Codacy UI.

## See also

-   [What are organizations](../../organizations/what-are-organizations.md)
