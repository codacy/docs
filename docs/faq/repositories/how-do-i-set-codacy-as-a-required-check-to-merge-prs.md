---
description: Configure your Git provider to block merging pull requests until they pass the Codacy analysis check.
---

# How do I set Codacy as a required check to merge pull requests?

Codacy checks each pull request using your [quality settings](../../repositories-configure/quality-settings.md) and sends a notification to the Git provider informing if the pull request is up to standards or not.

Each Git provider has different options to set up notifications or block merging pull requests until they pass the Codacy check:

## GitHub

GitHub allows [setting a status check as mandatory](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/enabling-required-status-checks){: target="_blank"} before merging pull requests.

!!! important
    Make sure that you [enable the option Pull Request Status](../../repositories-configure/integrations/github-integration.md) on the GitHub integration.

## GitLab

GitLab allows [setting that all pipelines must succeed](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds){: target="_blank"} before merging merge requests.

!!! important
    Make sure that you [enable the option Pull Request Status](../../repositories-configure/integrations/gitlab-integration.md) on the GitLab integration.

## Bitbucket

Bitbucket allows [setting a minimum number of merge checks that must pass](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/){: target="_blank"} before merging pull requests.

!!! important
    Make sure that you [enable the option Pull Request Status](../../repositories-configure/integrations/bitbucket-integration.md) on the Bitbucket integration.
