# End of support for legacy manual organizations November 2, 2021

On November 2, 2021, as part of our efforts to improve Codacy Cloud and allow all our customers to benefit from a more seamless experience, we’re removing the support for legacy manual organizations. As part of this process, we'll automatically migrate your legacy organization to a new [synced organization](../../organizations/what-are-organizations.md).

To make sure that Codacy will continue to analyze your repositories **please perform the following steps before November 2, 2021**:

1.  **If you're using GitHub** you must [install the Codacy GitHub App](https://github.com/apps/codacy-production/installations/new) on the GitHub organizations that contain your repositories so that Codacy has the [necessary permissions](../../getting-started/which-permissions-does-codacy-need-from-my-account.md) to analyze your code.

1.  Make sure that your Git provider organization owners<!-- TODO DOCS-495 Don't update, this is an old release note --> belong to the **Administrators** team of your legacy organization on Codacy.

If you already have any synced organizations on Codacy, the migration process won't overwrite any data on those synced organizations, nor copy any repositories that you have in your legacy organization.

!!! important
    After the migration process ends on December 2, 2021, we'll delete any existing legacy organizations that we couldn't migrate.

## How does this impact me?

Synced organizations have several advantages, such as keeping the repositories and team member permissions in sync with the Git provider. Besides this, Codacy is actively developing new features and improvements for synced organizations only.

However, the following scenarios may impact you:

-   **If your legacy organization is using the Open source plan** then Codacy has already stopped analyzing your repositories. Codacy will attempt to migrate your organization and restore the analysis of your repositories.

-   **If we can't automatically migrate your legacy organization** Codacy will stop analyzing your repositories, and you'll lose access to your existing repositories on Codacy. Please make sure that you follow the steps above to guarantee that the migration is successful.

Codacy appreciates your continued support through this time of growth and change. If you have any questions, please don’t hesitate to reach out by sending an email to <mailto:support@codacy.com> or by using the in-app chat.

## See also

-   **On Codacy Self-hosted,** legacy manual organizations stopped being supported on [version 5.0.0](../self-hosted/self-hosted-v5.0.0.md)
