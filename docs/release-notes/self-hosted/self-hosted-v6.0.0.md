---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v6.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/5.2.1
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/5.2.1
---

# Self-hosted v6.0.0

These release notes are for [Codacy Self-hosted v6.0.0](https://github.com/codacy/chart/releases/tag/6.0.0){: target="_blank"}, released on February 28, 2022. <!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

<!--TODO Check these issues manually

Jira issues without release notes

Epics:
-   https://codacy.atlassian.net/browse/CY-5761
Bugs and Community Issues:
Others:

Jira issues with disabled release notes

Epics:
Bugs and Community Issues:
-->

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v6.0.0:

1.  [Check the release notes](../index.md#self-hosted) for all Codacy Self-hosted versions between your current version and the most recent version for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](../../chart/maintenance/upgrade.md).

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-6.0.0`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-6.0.0)
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-6.0.0)

## Product enhancements


## Bug fixes

-   Updated the Git URL used to clone public repositories to comply with the recent [GitHub protocol changes](https://github.blog/2021-09-01-improving-git-protocol-security-github/){: target="_blank"}. (CY-5436)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

