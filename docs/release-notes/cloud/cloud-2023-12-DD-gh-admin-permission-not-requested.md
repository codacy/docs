---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Codacy no longer requests repository permissions for Administration on GitHub December DD, 2023

!!! info "This release note applies only to GitHub"

We're replacing our usage of long lived, hard to track SSH Keys with trackable, short lived Installation Tokens when interacting with GitHub.

Codacy GitHub App no longer requests [read and write repository permissions for Administration](https://docs.github.com/en/enterprise-cloud@latest/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-administration).

With the deprecation of the SSH Keys usage for GitHub, we've the opportunity to improve the security, safety and reduce the liability of our GitHub App as we will no longer be requesting Repository Administration Read and Write permission.

## Removal of repository permissions for Administration

Currently, Codacy requires repository permissions for Administration exclusively as a fallback mechanism when the Contents permission is missing. In this case, Codacy creates an SSH key on the repository to allow cloning and integrating with your repository.

We will remove this permission on the following dates:

<table>
  <thead>
    <th>Date</th>
    <th>Event</th>
    <th>What to expect</th>
  </thead>
  <tbody>
    <tr>
      <td>December DD, 2023</td>
      <td>Codacy started using installation tokens to clone and integrate with your repositories. SSH keys are used exclusively as a fallback mechanism when the Contents permission is missing.</td>
      <td>
        <p>From this day on, the new checks will be the official status checks for Codacy Coverage and will no longer be marked <strong>beta</strong>. The old check will be marked <strong>deprecated</strong> but will keep working.</p>
        <p>If on this date you are still using the old check to block merging pull requests on GitHub, please <a href="#if-you-are-using-the-old-coverage-status-check-to-block-merging-pull-requests-on-github">update your Git provider settings</a>.</p>
      </td>
    </tr>
    <tr>
      <td>April 18th, 2024</td>
      <td>Brownout of repository permissions for Administration</td>
      <td>
        <p>Codacy will not send the old status check on this day.</p>
        <p>This will help you confirm that your setup has been updated correctly and lower the risk of disruptions when the old status check is removed.<br/>If on this day you can merge your pull requests using the new checks and don't encounter other issues, it means that your setup has been updated correctly. Otherwise, if on this date you are still using the old check to block merging pull requests on GitHub, please <a href="#if-you-are-using-the-old-coverage-status-check-to-block-merging-pull-requests-on-github">update your Git provider settings</a>.</p>
      </td>
    </tr>
    <tr>
      <td>June 5th, 2024</td>
      <td>Removal of repository permissions for Administration</td>
      <td>
        <p>Codacy will stop sending the old status check.</p>
        <p>If on this date you are still using the old check to block merging pull requests on GitHub, you will no longer be able to merge them. To fix this, <a href="#if-you-are-using-the-old-coverage-status-check-to-block-merging-pull-requests-on-github">follow the instructions below</a>.</p>
      </td>
    </tr>
  </tbody>
</table>

## What do you need to do if you have GitHub repositories?

For us to be able to drop this Administration permission we'll first need to make sure that our existing customers have accepted a new(ish) permission that we request: Repository Contents Read-only permission.

We'll first need to make sure that our existing customers have accepted a new(ish) permission that we request: Repository Contents Read-only permission.

If you have any questions or need help, please contact <mailto:support@codacy.com>.

## What will happen if you don't accept the new permissions request?

If we drop the Administration permission, customers that haven't accepted the Contents permission will be unable to properly use Codacy and a lot of features ranging from adding repositories to performing analysis will fail.
