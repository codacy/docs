---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Codacy no longer requests repository permissions for Administration on GitHub December DD, 2023

!!! info "This release note applies only to GitHub"

For increased security, Codacy is deprecating the usage of **repository SSH keys** for Git operations on GitHub in favour of **installation access tokens**.

This change translates into an important security improvement by reducing the liability of Codacy GitHub App, as it no longer requests [read and write repository permissions for Administration](https://docs.github.com/en/enterprise-cloud@latest/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-administration).

## What do you need to do if you have a GitHub organization?

To use installation access tokens, Codacy GitHub App requires [repository read permissions for Contents](https://docs.github.com/en/enterprise-cloud@latest/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-contents).

Codacy have been requesting updated app permissions for some time now. If you haven't done it yet, make sure you [approve Codacy GitHub App updated permissions](https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app) on your GitHub organization.

If you have any questions or need help, please contact <mailto:support@codacy.com>.

## Removal of repository permissions for Administration

To ensure you have the necessary time to [approve Codacy GitHub App updated permissions](https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app) on your GitHub organization, Codacy will keep using repository SSH keys for Git operations for now as a fallback mechanism when the Contents permission is missing.

At a later phase, Codacy will drop repository permissions for Administration and the usage of repository SSH keys, and will no longer store those SSH keys.

See the timeline below:

<table>
  <thead>
    <th>Date</th>
    <th>Event</th>
    <th>What to expect</th>
  </thead>
  <tbody>
    <tr>
      <td>December DD, 2023</td>
      <td>Codacy started using installation access tokens to clone and integrate with your repositories, and deprecated repositories SSH keys usage</td>
      <td>
        <p>From this day on, repositories SSH keys are used exclusively as a fallback mechanism when the Contents permission is missing.</p>
        <p>If you haven't done it yet, make sure you <a href="https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app">approve Codacy GitHub App updated permissions</a> on your GitHub organization.</p>
      </td>
    </tr>
    <tr>
      <td>January DD, 2024</td>
      <td>Brownout of repository permissions for Administration</td>
      <td>
        <p>On this day, Codacy won't use any fallback mechanism if the Contents permission is missing.</p>
        <p>This will help you confirm that you already approved the updated permissions for Codacy GitHub App.<br/>If on this date your Codacy quality analysis fail or you have problems adding new repositories to Codacy, make sure you <a href="https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app">approve Codacy GitHub App updated permissions</a> on your GitHub organization.</p>
      </td>
    </tr>
    <tr>
      <td>MM DD, 2024</td>
      <td>Codacy will drop repository permissions for Administration and the usage of repository SSH keys</td>
      <td>
        <p>Codacy will start using exclusively installation access tokens to clone and integrate with your repositories with no fallback mechanisms, and will no longer store repositories SSH keys.</p>
        <p>If on this date you haven't <a href="https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app">approved Codacy GitHub App updated permissions</a> on your GitHub organization, your Codacy quality analysis will fail and you'll not be able to add new repositories to Codacy.</p>
      </td>
    </tr>
  </tbody>
</table>
