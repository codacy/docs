# GitLab integration

After adding a project, navigate to your project's **Settings**, tab **Integrations** to enable the GitLab integration for merge request status and comments.

![GitLab integration](images/gitlab-integration.png)

When the option **Pull Request Status** or **Pull Request Comment** is enabled, Codacy will automatically update merge requests on GitLab with additional information when accepting merge requests:

-   **Pull Request Status** adds a report to your merge request showing whether your merge request and coverage are up to standards or not as per the [quality settings](../../repositories/quality-settings.md) configured for your project. To see the coverage status, ensure that the **Coverage** option is enabled in the quality settings. The report will only be added if the user that added the integration has at least write permissions for that project.

    ![Merge request status on GitLab](images/gitlab-integration-pr-status.png)

-   **Pull Request Comment** adds a comment on the merge request line when a new issue is found and shows the pattern raising the issue. Click on the issue link to open Codacy and see more details about the issue and how to fix it.

    ![Merge request comment on GitLab](images/gitlab-integration-pr-comment.png)
