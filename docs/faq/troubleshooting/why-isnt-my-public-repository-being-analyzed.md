# Why isn't my public repository being analyzed?

Codacy only analyzes open source repositories on GitHub if both of the following conditions are met:

-   The admin of the repository is a committer to that repository.
-   **Status checks** is enabled in the [GitHub integration settings](../../repositories-configure/integrations/github-integration.md#status-checks) for the repository, either directly or via the [organization defaults](../../organizations/integrations/default-git-provider-integration-settings.md).

If **Status checks** is disabled, Codacy will not run analysis for open source repositories on GitHub.
