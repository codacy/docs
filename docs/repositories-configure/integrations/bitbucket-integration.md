---
description: Enable the Bitbucket integration to have pull request status, comments, and analysis summaries from Codacy directly on pull requests.
---

# Bitbucket integration

The Bitbucket integration incorporates Codacy on your existing Git provider workflows by reporting issues and the analysis status directly on your pull requests.

When this integration is enabled, you can also create pull request comments directly from Codacy when browsing the existing repository issues on the [commit issue tabs](../../repositories/commits.md#issues-tabs), [pull request issue tabs](../../repositories/pull-requests.md#issues-tabs), or the [Security monitor](../../repositories/security-monitor.md):<!--TODO CY-6642 Check if this is still true-->

![Bitbucket integration for issues](images/bitbucket-integration-issues.png)

## Enabling the Bitbucket integration {: id="enabling"}

<!--TODO CY-6642 Review this section considering the new behaviour to refresh/re-assign integration-->

To enable the Bitbucket integration, open your repository **Settings**, tab **Integrations**. When you add a new repository, Codacy enables the integration using the [default settings for your organization](../../organizations/integrations/default-git-provider-integration-settings.md).

![Bitbucket integration](images/bitbucket-integration.png)<!--TODO CY-6642 Update screenshot-->

If you remove the integration, you can enable it again as follows:<!--TODO CY-6642 This will change, as we won't allow users to delete the integration-->

1.  Click the button **Add integration** and select **Bitbucket** on the list.
1.  Click the button **Enable** and follow the instructions.

    !!! important
        The user that enables the integration [must have administrator access to the repository](../../organizations/roles-and-permissions-for-organizations.md#permissions-for-bitbucket). Codacy uses this Bitbucket user to create comments on pull requests.

    {% include-markdown "../../assets/includes/service-account-integration.md" %}

## Configuring the Bitbucket integration {: id="configuring"}

To configure the Bitbucket integration, open your repository **Settings**, tab **Integrations**.

Depending on the options that you enable, Codacy will automatically update pull requests on Bitbucket with extra information when accepting pull requests.

{%
    include-markdown "../../assets/includes/default-git-provider-settings-tip.md"
    start="<!--default-settings-apply-all-start-->"
    end="<!--default-settings-apply-all-end-->"
%}

### Pull Request Status

Adds a report to your pull requests showing whether your pull requests and coverage are up to standards or not as configured on the [quality gate rules](../../repositories-configure/adjusting-quality-gates.md) for your repository. You can then optionally [block merging pull requests that aren't up to standards](../../getting-started/integrating-codacy-with-your-git-workflow.md#blocking-pull-requests).

{% include-markdown "../../assets/includes/status-checks-important.md" %}

![Pull request status on Bitbucket](images/bitbucket-integration-pr-status.png)

### Pull Request Comment

Adds comments on the lines of the pull request where Codacy finds new issues. Click on the links to open Codacy and see more details about the issues and how to fix them.

![Pull request comment on Bitbucket](images/bitbucket-integration-pr-comment.png)

### AI-Enhanced Comments

Adds AI-enhanced comments with insights to help you fix identified issues.

{% include-markdown "../../assets/includes/ai-info.md" %}

![AI-enhanced comment on GitLab](images/bitbucket-integration-ai-comment.png)

### Pull Request Summary

!!! note "This feature isn't available for Bitbucket Server"

Shows an overall view of the changes in the pull request, including new issues and metrics such as complexity and duplication.

![Pull request summary on Bitbucket](images/bitbucket-integration-pr-summary.png)

## See also

-   [Integrating Codacy with your Git workflow](../../getting-started/integrating-codacy-with-your-git-workflow.md)
