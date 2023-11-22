---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# New Coverage engine status checks December 1st, 2023<!-- TODO ALA-695 Update to launch date. Search and replace this. Don't forget to also update the file name -->

!!! note
    This release note applies if you are using Codacy to send code quality information to your Git provider (see how on [GitHub](../../repositories-configure/integrations/github-integration.md#status-checks), [GitLab](../../repositories-configure/integrations/gitlab-integration.md#pull-request-status), and [Bitbucket](../../repositories-configure/integrations/bitbucket-integration.md#pull-request-status)).

On December 1st 2023 we activated the new, faster Coverage engine and set it to send coverage information to your Git provider.

As a consequence, you can now see two additional checks on your pull requests, marked **beta**, alongside the preexisting Codacy Coverage check.

![New Coverage status report](../images/ala-593.png)<!-- TODO ALA-695 Update screenshot and add for all providers -->

This is part of an ongoing effort to improve the speed and <span class="skip-vale">actionability</span> of the insights provided by Codacy.

## Deprecation and removal of the Coverage engine

Currently, Codacy sends coverage information to your Git provider from both the old and new Coverage engines. We will deprecate and eventually retire the old engine on the following dates:

<table>
  <thead>
    <th>Date</th>
    <th>Event</th>
    <th>What to expect</th>
  </thead>
  <tbody>
    <tr>
      <td>February 14th, 2024</td>
      <td>Deprecation of the old Coverage status check</td>
      <td>
        <p>From this day on, the new checks will no longer be marked <strong>beta</strong> and will be considered the de facto status checks for Codacy Coverage. The old check will be marked <strong>deprecated</strong> but will keep working.</p>
        <p>If on this date you are still using the old check to block merging pull requests, you should update your Git provider settings.</p>
      </td>
    </tr>
    <tr>
      <td>April 18th, 2024</td>
      <td>Brownout of the old Coverage status check</td>
      <td>
        <p>Codacy will not send the old status check on this day.</p>
        <p>This will help you confirm that your setup has been updated correctly and lower the risk of disruptions when the old status check is retired.</p>
      </td>
    </tr>
    <tr>
      <td>June 5th, 2024</td>
      <td>Retirement of the old Coverage status check</td>
      <td>
        <p>Codacy will stop sending the old status check.</p>
        <p>If on this date you are still using the old check to block merging pull requests, you will no longer be able to merge them. To fix this, <a href="#if-you-are-using-the-old-status-check-to-block-merging-pull-requests">follow the instructions below</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Differences in coverage metrics between the old and new Coverage engines

You may notice some differences in the coverage metrics reported by the old and new Coverage engines. This may happen because the new Coverage engine calculates coverage metrics considering all the files included in the coverage report, while the old Coverage engine ignores some files:

-   The old Coverage engine ignores any files on a coverage report that aren't modified by the associated pull request.
-   The old Coverage engine may ignore some additional files since it shares [ignore rules](../../repositories-configure/ignoring-files.md) with the Codacy analysis engine.

## If you are using the old status check to block merging pull requests

<!-- TODO ALA-695 Clarify what to do in the first paragraph and add screenshots -->
To avoid disruptions in your Git provider workflows, follow the instructions from your Git provider to block merging pull requests using the new Codacy engine:

-   **GitHub:** [set Codacy as a required status check](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)
-   **GitLab:** [only allow merge requests to be merged if the pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html#only-allow-merge-requests-to-be-merged-if-the-pipeline-succeeds)
-   **Bitbucket:** [configure Bitbucket to prevent a merge with unresolved merge checks](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/)

If you have any questions or need help, please contact <mailto:support@codacy.com>.
