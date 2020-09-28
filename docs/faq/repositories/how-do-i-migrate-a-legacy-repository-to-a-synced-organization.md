# How do I migrate a legacy repository to a synced organization?

If you have legacy personal repositories or repositories in manual organizations, you can migrate these repositories together with their Codacy configurations to a synced organization.

To migrate a legacy repository you must have [admin permissions](../../organizations/manual-organizations/administrative-permissions.md) for that repository.

To migrate your legacy repository to a synced organization:

1.  Click your avatar, select **Organizations**, and ensure that the target organization already exists on Codacy.

    !!! important
        **If you're migrating a legacy personal repository** you must ensure that the target personal organization for your Git provider is already added on Codacy. This personal organization has the same name as your username on your Git provider.

    If the target organization is not added to Codacy yet, [add your organization to Codacy](../../organizations/what-are-synced-organizations/#adding-an-organization) before continuing.


1.  Open your legacy repository **Settings**, tab **General**.

1.  In the section **Transfer repository**, select the target organization and click the button **Transfer**.

    ![Migrating your repository](images/repository-migrate.png)

1.  Update the Repository Dashboard URL that you were using for the legacy repository. For example, if you had shared the Repository Dashboard with your team, provide them with the new URL.

    !!! note
        Although the old URLs for the repository dashboards continue to work, they are deprecated and we recommend that you use the new URLs instead.
