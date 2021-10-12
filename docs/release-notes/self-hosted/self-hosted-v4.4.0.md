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

## Product enhancements

-   Added the following plugins to [<span class="skip-vale">codacy-eslint</span>](https://github.com/codacy/codacy-eslint):
    -   [<span class="skip-vale">@next/eslint-plugin-next</span>](https://www.npmjs.com/package/@next/eslint-plugin-next) (CY-5071)
    -   [<span class="skip-vale">eslint-plugin-i18n-json</span>](https://www.npmjs.com/package/eslint-plugin-i18n-json) (CY-5029)

## Bug fixes

-   Fixed an issue that caused a redirect to different repository settings when enabling the GitHub integration for a repository. (CY-5056)
-   Fixed an issue that caused the error `Failed to analyze file` when CodeNarc identified issues using code patterns that had no associated message. (CY-4974)
-   Allow users to re-analyze a commit or PR according to our analysis limitations. They can re-analyze  (CY-4336)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

