---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v5.1.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/4.0.28
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/4.0.40
---

# Self-hosted v5.1.0

These release notes are for [Codacy Self-hosted v5.1.0](https://github.com/codacy/chart/releases/tag/5.1.0){: target="_blank"}, released on January 06, 2022. <!-- TODO Update release date -->

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

!!! warning
    **Codacy Self-hosted v5.0.0 dropped the support for legacy manual organizations.** Please be sure to [review the breaking changes](self-hosted-v5.0.0.md#breaking-changes) introduced in that version before upgrading.

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

<!--TODO Check these issues manually

Jira issues without release notes

Others:
-   https://codacy.atlassian.net/browse/CY-3275
-->

## Product enhancements

-   When connecting to email servers over SMTPS, Codacy now prefers to rely on TLSv1.2 over the deprecated TLSv1 or TLSv1.1 if the SMTP server allows it. (CY-5394)
-   It's now possible to [assign a coding standard automatically to new repositories](https://docs.codacy.com/v5.1/organizations/using-a-coding-standard/#set-default). (CY-5263)
-   The Codacy API now includes endpoints that allow you to [create and manage project API tokens programmatically](https://api.codacy.com/api/api-docs#createrepositoryapitoken). This feature can be used to automate setting up coverage for either new repositories or for all your existing repositories. (CY-5090)

## Bug fixes

-   Fixed an issue that prevented merge commits from displaying any information regarding files, duplication, and complexity. (CY-5364)
-   Fixed a scenario where the number of applied repositories on a coding standard didn't update when deleting a repository. (CY-5363)
-   Fixed a popup that overlapped the list on the People page. (CY-5282)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   Checkov 2.0.399
-   Checkstyle 8.44
-   Clang-Tidy 10.0.1
-   CodeNarc 2.2.0
-   CoffeeLint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   detekt 1.19.0
-   ESLint 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   Gosec 2.8.1
-   Hadolint 1.18.2
-   Jackson Linter 2.10.2
-   JSHint 2.12.0
-   markdownlint 0.23.1
-   PHP Mess Detector 2.10.1
-   **PHP_CodeSniffer 3.6.2 (updated from 3.6.1)**
-   PMD 6.36.0
-   PMD (Legacy) 5.8.1
-   Prospector 1.3.1
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.7.4
-   remark-lint 7.0.1
-   Revive 1.0.2
-   RuboCop 1.23.0
-   Scalastyle 1.5.0
-   ShellCheck v0.7.2
-   Sonar C# 8.30
-   Sonar Visual Basic 8.15
-   spectral-rulesets 1.2.7
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2020.1.6
-   **Stylelint 14.1.0 (updated from 13.13.1)**
-   SwiftLint 0.43.1
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
