---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v4.1.0.
---

# Self-hosted v4.1.0

These release notes are for [Codacy Self-hosted v4.1.0](https://github.com/codacy/chart/releases/tag/4.1.0){: target="_blank"}, released on July 6, 2021. <!-- TODO Update release date -->

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Product enhancements

-   The GitLab integration now supports [merge request summaries](https://docs.codacy.com/v4.1/repositories-configure/integrations/gitlab-integration/#enabling) for both GitLab Cloud and GitLab Enterprise. (CY-4310)
-   You can now use markdownlint to provide [suggested fixes](https://docs.codacy.com/v4.1/repositories-configure/integrations/github-integration/#suggest-fixes) for Markdown issues. (CY-3717)

## Bug fixes

-   Fixed an issue that prevented Codacy from listing all available GitLab groups on the **Organizations** page. (CY-4529)
-   Fixed an issue that caused Codacy to suggest and allow people with an empty email address to join organizations. (CY-4454)
-   Fixed an issue that could allow malicious websites to read sensitive information or perform privileged actions on Codacy. CVSS v3.1 score: 3.3 (Low). (CY-4396)
-   Fixed an issue where Codacy would show "Enable all" for non-configurable client-side tools on the **Code patterns** page. (CY-4323)
-   Now, the link "View more details on Codacy Production" at the bottom of GitHub checks opens the **New Issues** tab instead of the **Fixed Issues** tab of the corresponding pull request on Codacy. (CY-4170)
-   The total time to fix all issues in a file is now correctly calculated as the sum of the time to fix all individual issues in that file. (CY-4142)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   BundlerAudit 0.6.1
-   Checkov 1.0.838
-   Checkstyle 8.37
-   Clang-tidy 10.0.1
-   CodeNarc 1.6
-   Coffeelint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   **Detekt 1.17.1 (updated from 1.14.2)**
-   **ESLint 7.29.0 (updated from 7.25.0)**
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   Gosec 2.3.0
-   Hadolint 1.18.2
-   JacksonLinter 2.10.2
-   JSHint 2.12.0
-   **markdownlint 0.23.1 (new)**
-   PHP Code Sniffer 3.6.0
-   PHP Mess Detector 2.8.1
-   PMD 6.33.0
-   PMD (Legacy) 5.8.1
-   Prospector 1.3.1
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.7.4
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   **Rubocop 1.16.0 (updated from 1.14.0)**
-   Scalastyle 1.5.0
-   ShellCheck v0.7.1
-   **Sonar C# 8.24 (updated from 8.22)**
-   Sonar Visual Basic 8.15
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2020.1.6
-   **Stylelint 13.13.1 (updated from 13.13.0)**
-   SwiftLint 0.40.0
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
