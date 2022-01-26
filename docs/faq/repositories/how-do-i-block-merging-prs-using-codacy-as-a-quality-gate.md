---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# How do I block merging pull requests using Codacy as a quality gate?

You can block merging pull requests until they pass the Codacy quality gate. This ensures the quality of the changes to your codebase, such as to prevent introducing security issues or adding code that isn't covered by tests.

To configure Codacy to block merging pull requests that don't meet your quality standards:

1.  Set up your repository so that:

    -   **Codacy** reports status checks for pull requests on your Git provider
    -   **Your Git provider** blocks merging pull requests if they don't pass the Codacy status check

    To do this, follow the instructions that apply to [GitHub](../../repositories-configure/integrations/github-integration.md#configuring-the-github-integration), [GitLab](../../repositories-configure/integrations/gitlab-integration.md#configuring-the-gitlab-integration), or [Bitbucket](../../repositories-configure/integrations/bitbucket-integration.md#configuring-the-bitbucket-integration), depending on your Git provider.

1.  Optionally, if you want to block merging pull requests that don't meet your code coverage standards, make sure that you [set up coverage on your repository](../../coverage-reporter/index.md).

1.  [Review and adjust your repository quality settings](../../repositories-configure/adjusting-quality-settings.md) to decide which pull requests won't pass the Codacy quality gate.
