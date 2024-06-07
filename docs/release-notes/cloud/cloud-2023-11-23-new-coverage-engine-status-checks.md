---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Rollout of new Coverage engine November 23, 2023

{%
    include-markdown "../../assets/includes/coverage-github-accept-permissions.md"
    start="<!--accept-permission-start-->"
    end="<!--accept-permission-end-->"
%}

As part of an ongoing effort to improve the speed and value of the insights provided by Codacy, we've been working on a new Coverage engine and started its deployment on November 23rd, 2023. The rollout to use the new engine across Codacy will be phased across several months and will gradually impact the coverage data you see on the Git provider, UI, and API.

Please refer to the table below for the updated status of the transition process. The table will be updated as changes are introduced.

<table>
  <thead>
    <th>Feature set</th>
    <th>Feature</th>
    <th>Status</th>
    <th>Notes</th>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Git providers</td>
      <td><a href="#status-checks">Git provider status checks</a></td>
      <td>Live</td>
      <td>The new Coverage engine now sends coverage data to your Git provider.<br>Codacy stopped sending coverage checks from the old Coverage engine on June 5th, 2024.</td>
    </tr>
    <tr>
      <td><a href="#coverage-summaries">GitHub coverage summaries</a></td>
      <td>Live</td>
      <td>The new Coverage engine now sends coverage summaries to GitHub. If you haven't done so yet, please review and update your app permissions as mentioned above.</td>
    </tr>
    <tr>
      <td rowspan="3">Codacy app UI</td>
      <td><a href="../../../repositories-coverage/pull-requests/#diff-tab">Coverage pull request Diff tab</a></td>
      <td>Live</td>
      <td>Since December 27th, 2023, this component gets data from the new Coverage engine.</td>
    </tr>
    <tr>
      <td><a href="../../../repositories-coverage/pull-requests/">Coverage Pull Requests page</a></td>
      <td>Live</td>
      <td>Since February 6th, 2024, this page gets data from the new Coverage engine.</td>
    </tr>
    <tr>
      <td>Other pages and components</td>
      <td>Planned</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

!!! note
    Because of this transition, both old and new data will coexist during this period, <span class="skip-vale">potentially</span> leading to [differences in reported metrics](#differences-in-coverage-metrics-between-the-old-and-new-coverage-engines).

## Git provider status checks from the new Coverage engine {: id="status-checks"}

!!! info "This section applies to the repositories for which you set Codacy to send pull request coverage status data to your Git provider (see how on [GitHub](../../repositories-configure/integrations/github-integration.md#status-checks), [GitLab](../../repositories-configure/integrations/gitlab-integration.md#pull-request-status), and [Bitbucket](../../repositories-configure/integrations/bitbucket-integration.md#pull-request-status))."

On June 5th 2024, Codacy stopped sending coverage checks from the old Coverage engine. As a consequence of this, you will only see the new checks from the new Coverage engine, **Codacy Diff Coverage** and **Codacy Coverage Variation**, and will no longer see the old **Codacy Coverage Report** check on your pull requests.

!!! important
    GitHub only: If you are using the Codacy Coverage Report status check to block merging pull requests, please [update your GitHub setup](#if-you-are-using-the-old-coverage-status-check-to-block-merging-pull-requests-on-github) to fix any disruptions.

This is what the new checks look like on each provider:

-   On GitHub:

    ![New Coverage status checks GitHub](../images/ala-695-status-checks-github.png)

-   On GitLab:

    ![New Coverage status checks GitLab](../images/ala-695-status-checks-gitlab.png)

-   On Bitbucket:

    ![New Coverage status checks Bitbucket](../images/ala-695-status-checks-bitbucket.png)

### Deprecation and removal calendar for the old Coverage engine status checks

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
        <p>From this day on, the new checks will be the official status checks for Codacy Coverage and will no longer be marked <strong>beta</strong>. The old check will be marked <strong>deprecated</strong> but will keep working.</p>
        <p>If on this date you are still using the old check to block merging pull requests on GitHub, please <a href="#if-you-are-using-the-old-coverage-status-check-to-block-merging-pull-requests-on-github">update your Git provider settings</a>.</p>
      </td>
    </tr>
    <tr>
      <td>April 18th, 2024</td>
      <td>Brownout of the old Coverage status check</td>
      <td>
        <p>Codacy will not send the old status check on this day.</p>
        <p>This will help you confirm that your setup has been updated correctly and lower the risk of disruptions when the old status check is removed.<br/>If on this day you can merge your pull requests using the new checks and don't encounter other issues, it means that your setup has been updated correctly. Otherwise, if on this date you are still using the old check to block merging pull requests on GitHub, please <a href="#if-you-are-using-the-old-coverage-status-check-to-block-merging-pull-requests-on-github">update your Git provider settings</a>.</p>
      </td>
    </tr>
    <tr>
      <td>June 5th, 2024</td>
      <td>Removal of the old Coverage status check</td>
      <td>
        <p>Codacy will stop sending the old status check.</p>
        <p>If on this date you are still using the old check to block merging pull requests on GitHub, you will no longer be able to merge them. To fix this, <a href="#if-you-are-using-the-old-coverage-status-check-to-block-merging-pull-requests-on-github">follow the instructions below</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

### If you are using the old Coverage status check to block merging pull requests on GitHub

If you are using the old status check to block merging pull requests on GitHub, remove the old Codacy Coverage Report as a required check of your pull requests' target branch:

1.  [Edit the branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#editing-a-branch-protection-rule) of your pull requests' target branch.
1.  Remove the old **Codacy Coverage Report** under the section **Require status checks to pass before merging** and save your changes:

![New Coverage status checks GitHub](../images/ala-695-update-status-checks-github.png)

## GitHub coverage summaries from the new Coverage engine {: id="coverage-summaries"}

!!! info "This section applies to the repositories for which you set Codacy to post [coverage summaries](../../repositories-configure/integrations/github-integration.md#coverage-summaries) to your GitHub pull requests"

{%
    include-markdown "../../assets/includes/coverage-github-accept-permissions.md"
    start="<!--accept-permission-start-->"
    end="<!--accept-permission-end-->"
%}

On December 7th 2023, the new Coverage engine started posting coverage summaries to GitHub, replacing the old Coverage engine.

## New Coverage engine side effects

### Missing data on the Coverage Pull request page {: id="differences-in-coverage-metrics-between-the-coverage-and-quality-pull-request-pages" }

You may notice missing coverage data on the [Coverage Pull requests page](../../repositories-coverage/pull-requests.md) for older pull requests when compared to the coverage data shown on the [Quality Pull requests page](../../repositories/pull-requests.md). This may happen due to a number of reasons:

-   GitHub only: The new Coverage service requires updated app permissions to calculate coverage data. If you haven't done so yet, [review and accept the updated Codacy app permissions](https://docs.github.com/en/enterprise-cloud@latest/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#reviewing-permissions) on GitHub and re-analyze the pull request by pushing an empty commit.

-   The data may be missing because the latest commit to the pull request was pushed before the new Coverage engine was enabled. To resolve this, re-analyze the pull request by pushing an empty commit:

    ```bash
    git commit --allow-empty -m "Trigger analysis"
    git push
    ```

### Differences in coverage metrics between the old and new Coverage engines {: id="differences-in-coverage-metrics-between-the-old-and-new-coverage-engines"}

You may notice some differences in the coverage metrics reported by the old and new Coverage engines and may need to update your [coverage gate rules](../../repositories-configure/adjusting-quality-gates.md) accordingly. This may happen because the new Coverage engine calculates coverage metrics considering all the files included in the coverage report, while the old Coverage engine ignores some files:

-   The old Coverage engine ignores any files on a coverage report that aren't present on the repository on that given commit.
-   The old Coverage engine may ignore additional files since it shares [ignore rules](../../repositories-configure/ignoring-files.md) with the Codacy analysis engine.
