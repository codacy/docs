---
description: Configure Codacy to block merging pull requests that don't meet your quality standards.
---

# How do I block merging pull requests using Codacy as a quality gate?

You can block merging pull requests until they pass the Codacy quality gate. This ensures the quality of the changes to your codebase, such as to prevent introducing security issues or adding code that isn't covered by tests.

To configure Codacy to block merging pull requests that don't meet your quality standards:

1.  [Review and adjust your repository quality settings](../../repositories-configure/adjusting-quality-settings.md) to decide which pull requests won't pass the Codacy quality gate.

    !!! important
        **If you want to use code coverage data** to block merging pull requests that don't meet your standards, make sure that you:

        -   [Add coverage to your repository](../../coverage-reporter/index.md)
        -   Enable the rule **Coverage variation is under** on the [pull request quality gate](../../repositories-configure/adjusting-quality-settings.md#gates)

1.  Set up your repository so that Codacy reports status checks for pull requests on your Git provider.

    To do this, follow the instructions that apply to [GitHub](../../repositories-configure/integrations/github-integration.md#configuring-the-github-integration), [GitLab](../../repositories-configure/integrations/gitlab-integration.md#configuring-the-gitlab-integration), or [Bitbucket](../../repositories-configure/integrations/bitbucket-integration.md#configuring-the-bitbucket-integration), depending on your Git provider.

1.  Finally, configure **your Git provider** to block merging pull requests if they don't pass the Codacy status check:

    | Git provider  | Instructions |
    | ------------- | ------------ |
    | **GitHub**    | [Set Codacy as a required status check](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule){: target="_blank"} |
    | **GitLab**    | [Only allow merge requests to be merged if the pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds){: target="_blank"} |
    | **Bitbucket** | [configure Bitbucket to prevent a merge with unresolved merge checks](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/){: target="_blank"} |

<!--TODO
    Add relevant pages here?
    Or add links back to this page coming from the pages mentioned here?

## See also
-->
