---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# How do I set Codacy as a required check to merge pull requests?

You can block merging pull requests until they pass the Codacy quality gates:

1.  Set up your repository so that:
    
    -   **Codacy** reports status checks for pull requests on your Git provider
    -   **Your Git provider** blocks merging pull requests if they don't pass the Codacy status check

    To do this, follow the instructions that apply to your Git provider:

    -   [GitHub](../../repositories-configure/integrations/github-integration.md#configuring-the-github-integration)
    -   [GitLab](../../repositories-configure/integrations/gitlab-integration.md#configuring-the-gitlab-integration)
    -   [Bitbucket](../../repositories-configure/integrations/bitbucket-integration.md#configuring-the-bitbucket-integration)

2.  [Review and adjust your repository quality settings](../../repositories-configure/adjusting-quality-settings.md) to decide which pull requests don't pass the Codacy quality gate.
