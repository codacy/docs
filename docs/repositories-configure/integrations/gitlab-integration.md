# GitLab integration

After adding a project, navigate to your project's **Settings**, tab **Integrations** to enable the GitLab integration for merge request status and comments.

![](images/gitlab-integration.png)

When **Pull Request Status** or **Pull Request Comment** is enabled, Codacy will automatically update merge requests on GitLab with additional information when accepting merge requests.

-   **Pull Request Status** will only be added if the user that added the integration has at least write permissions for that project. The status shows whether your merge request and coverage are up to standards or not as per the [quality settings](../../repositories/quality-settings.md) configured for your project. To see the coverage status, ensure that the **Coverage** option is enabled in the quality settings.

    ![](images/gitlab-integration-pr-status.png)

-   **Pull Request Comment** adds a comment on the merge request line when a new issue is found and shows the pattern raising the issue. Click on the issue link to open Codacy and see more details about the issue and how to fix it.

    ![](images/gitlab-integration-pr-comment.png)
