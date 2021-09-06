---
description: Enable the GitLab integration to have merge request status, comments, and analysis summaries from Codacy directly on merge requests.
---

# GitLab integration

The GitLab integration incorporates Codacy on your existing Git provider workflows.

Depending on the configuration of the GitLab integration, Codacy can report and notify you about issues directly on your merge requests.

## Enabling the GitLab integration {: id="enabling"}

To enable the GitLab integration, open your repository **Settings**, tab **Integrations**. When you add a new repository, the integration is already enabled by default.

![GitLab integration](images/gitlab-integration.png)

If you remove the integration, you can enable it again as follows:

1.  Click the button **Add integration** and select **GitLab** on the list.
1.  Click the button **Enable** and follow the instructions.

    !!! important
        The user that enables the integration must have administrator access to the repository. Codacy uses this GitLab user to create comments on merge requests.

    {% include-markdown "../../assets/includes/service-account-integration.md" %}

## Configuring the GitLab integration

To configure the GitLab integration, open your repository **Settings**, tab **Integrations**.

Depending on the options that you enable, Codacy will automatically update merge requests on GitLab with extra information when accepting merge requests:

### Pull Request Status

Adds a report to your merge requests showing whether your merge requests and coverage are up to standards or not as configured on the [quality settings](../../repositories-configure/adjusting-quality-settings.md) of your project. To see the coverage status, ensure that you enable the option **Coverage** in the quality settings.

![Merge request status on GitLab](images/gitlab-integration-pr-status.png)

### Pull Request Comment

Adds comments on the lines of the merge request where Codacy finds new issues. Click on the links to open Codacy and see more details about the issues and how to fix them.

![Merge request comment on GitLab](images/gitlab-integration-pr-comment.png)

### Pull Request Summary

Shows an overall view of the changes in the merge request, including new issues and metrics such as complexity and duplication.

![Merge request summary on Bitbucket](images/gitlab-integration-pr-summary.png)
