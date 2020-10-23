# GitLab integration

<!-- TODO Improve intro -->
The GitLab integration for merge request status and comments.

## Enabling the GitLab integration

To enable the GitLab integration, open your project **Settings**, tab **Integrations**. When you add a new repository, the integration is already enabled by default.

![GitLab integration](images/gitlab-integration.png)

If you remove the integration, you can enable it again as follows:

1.  Click the button **Add integration** and select **GitLab** on the list.
1.  Follow the instructions to install the integration.
1.  Click the button **Enable**.

## Configuring the GitLab integration

To configure the GitLab integration, open your project **Settings**, tab **Integrations**.

Depending on the options that you enable, Codacy will automatically update merge requests on GitLab with extra information when accepting merge requests:

-   **Pull Request Status** adds a report to your merge requests showing whether your merge requests and coverage are up to standards or not as configured on the [quality settings](../../repositories/quality-settings.md) of your project. To see the coverage status, ensure that you enable the option **Coverage** in the quality settings.

    ![Merge request status on GitLab](images/gitlab-integration-pr-status.png)

    !!! important
        Codacy can only add the report if the user that added the integration has at least write permissions for that repository.

-   **Pull Request Comment** adds comments on the lines of the merge request where Codacy finds new issues. Click on the links to open Codacy and see more details about the issues and how to fix them.

    ![Merge request comment on GitLab](images/gitlab-integration-pr-comment.png)
