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
-   Fixed an issue that blocked re-analyzing commits made by non-authors on Codacy Self-hosted. (CY-5012)
-   Fixed an issue that caused the error `Failed to analyze file` when CodeNarc identified issues using code patterns that had no associated message. (CY-4974)
-   Allow users to re-analyze a commit or PR according to our analysis limitations. They can re-analyze  (CY-4336)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   Checkov 2.0.399
-   Checkstyle 8.44
-   Clang-Tidy 10.0.1
-   **CodeNarc 2.2.0 (updated from 1.6)**
-   CoffeeLint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   **detekt 1.18.1 (updated from 1.17.1)**
-   ESLint 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   **Gosec 2.8.1 (updated from 2.3.0)**
-   Hadolint 1.18.2
-   Jackson Linter 2.10.2
-   JSHint 2.12.0
-   markdownlint 0.23.1
-   PHP Mess Detector 2.10.1
-   PHP_CodeSniffer 3.6.0
-   PMD 6.36.0
-   PMD (Legacy) 5.8.1
-   Prospector 1.3.1
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.7.4
-   remark-lint 7.0.1
-   Revive 1.0.2
-   **RuboCop 1.21.0 (updated from 1.20.0)**
-   Scalastyle 1.5.0
-   ShellCheck v0.7.1
-   Sonar C# 8.25
-   Sonar Visual Basic 8.15
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2020.1.6
-   Stylelint 13.13.1
-   SwiftLint 0.40.0
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
