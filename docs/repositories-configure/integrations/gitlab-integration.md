# GitLab integration

<!-- TODO Improve intro -->

## Enabling the GitLab integration

<!-- TODO Improve and complete section -->
Open your project **Settings**, tab **Integrations** to enable and configure the GitLab integration for merge request status and comments.

![GitLab integration](images/gitlab-integration.png)

## Configuring the GitLab integration

When **Pull Request Status** or **Pull Request Comment** are enabled, Codacy will automatically update merge requests on GitLab with extra information when accepting merge requests:

-   **Pull Request Status** adds a report to your merge requests showing whether your merge requests and coverage are up to standards or not as per the [quality settings](../../repositories/quality-settings.md) configured for your project. To see the coverage status, ensure that you enable the option **Coverage** in the quality settings. The report will only be added if the user that added the integration has at least write permissions for that project.

    ![Merge request status on GitLab](images/gitlab-integration-pr-status.png)

-   **Pull Request Comment** adds comments on the lines of the merge request where Codacy finds new issues. Click on the issue links to open Codacy and see more details about the issues and how to fix them.

    ![Merge request comment on GitLab](images/gitlab-integration-pr-comment.png)
