---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v1.0.0.
---

# Self-hosted v1.0.0

These release notes are for [Codacy Self-hosted v1.0.0](https://github.com/codacy/chart/releases/tag/1.0.0){: target="_blank"}, released on May 18, 2020.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Product enhancements

-   Streamlined the configuration of Git providers and improved the onboarding flow that guides the user while performing the initial Codacy setup. (CY-468)

## Bug fixes

-   Fixed an issue that could cause pull requests to not be analyzed by improving the robustness of how Codacy fetches Git repositories. (CY-1542)
-   Fixed an issue that caused Codacy to fail to display the information for the pull request tabs **Hotspots** and **Diff**. (CY-1690)
-   Fixed an issue that prevented Codacy from analyzing repositories in synced organizations if the repositories had the state `OwnerNotCommiter`. (CY-1611)
-   Fixed an issue that prevented using the Codacy configuration file to exclude files from the coverage analysis. (CY-229)
