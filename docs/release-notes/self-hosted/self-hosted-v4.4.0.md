---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v4.4.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/3.8.3
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/3.9.16
---

# Self-hosted v4.4.0

These release notes are for [Codacy Self-hosted v4.4.0](https://github.com/codacy/chart/releases/tag/4.4.0){: target="_blank"}, released on October 12, 2021. <!-- TODO Update release date -->

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

<!--TODO Check these issues

Jira issues without release notes

Epics:
-   https://codacy.atlassian.net/browse/CY-4617
-   https://codacy.atlassian.net/browse/CY-4408
-   https://codacy.atlassian.net/browse/DOCS-209
-   https://codacy.atlassian.net/browse/DOCS-42

Bugs and Community Issues:

Jira issues with disabled release notes

Epics:
-   https://codacy.atlassian.net/browse/CY-4844
-   https://codacy.atlassian.net/browse/CY-4654
-   https://codacy.atlassian.net/browse/CY-4082

Bugs and Community Issues:
-   https://codacy.atlassian.net/browse/CY-3810
-->

## Product enhancements


## Bug fixes

-   Fix an issue on Cloud that made some features that depended on the payment plan miss-behave on rare cases. Like GitHub suggestions not being available after start paying for an organization (CY-5107)
-   Added @next/eslint-plugin-next to ESLint when using configuration file (CY-5071)
-   Fixed an issue that caused a redirect to different repository settings when enabling the GitHub integration for a repository. (CY-5056)
-   Added the plugin eslint-plugin-i18n-json to ESLint. (CY-5029)
-   Fixed an issue that caused the error `Failed to analyze file` when CodeNarc identified issues using code patterns that had no associated message. (CY-4974)
-   Allow users to re-analyze a commit or PR according to our analysis limitations. They can re-analyze  (CY-4336)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

