# How do I delete or migrate a repository to a synced organization?

This page includes instructions on how to delete your repository from Codacy and how to move your legacy repository to a synced organization.

!!! important
    To perform these operations you must have administrator permissions for that repository on the Git provider.

## Deleting your repository from Codacy

To stop Codacy from analyzing your repository, you must delete the repository from Codacy. This operation only deletes the data related to your repository on Codacy and does not delete the repository from your Git provider.

To delete your repository from Codacy:

1.  Open your repository **Settings**, tab **General**.

1.  Click the button **Remove repository** and confirm that you want to remove the repository.

## Migrating your repository to a synced organization

If you have legacy personal repositories or repositories in legacy manual organizations, you can migrate these repositories together with their configurations to a synced organization.

To migrate your repository to a synced organization:

1.  Open your repository **Settings**, tab **General**.

1.  In the section **Transfer repository**, select the target organization and click the button **Transfer**.

    ![Migrating your repository](images/repository-migrate.png)
