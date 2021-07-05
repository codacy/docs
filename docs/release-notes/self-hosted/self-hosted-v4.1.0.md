---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v4.1.0.
---

# Self-hosted v4.1.0

These release notes are for [Codacy Self-hosted v4.1.0](https://github.com/codacy/chart/releases/tag/4.1.0){: target="_blank"}, released on July 6, 2021. <!-- TODO Update release date -->

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

<!--TODO Check these issues

Jira issues without release notes:

Bugs:
-   https://codacy.atlassian.net/browse/CY-4545
-   https://codacy.atlassian.net/browse/CY-4494
-   https://codacy.atlassian.net/browse/CY-4396 #
-   https://codacy.atlassian.net/browse/CY-4142


Jira issues with disabled release notes:

Epics:

Bugs:
-   https://codacy.atlassian.net/browse/CY-4556
-   https://codacy.atlassian.net/browse/CY-4452
-   https://codacy.atlassian.net/browse/CY-4441
-   https://codacy.atlassian.net/browse/CY-4407
-   https://codacy.atlassian.net/browse/CY-4364
-   https://codacy.atlassian.net/browse/CY-4361
-   https://codacy.atlassian.net/browse/CY-4332
-   https://codacy.atlassian.net/browse/CY-4324
-   https://codacy.atlassian.net/browse/CY-4286
-   https://codacy.atlassian.net/browse/CY-4282
-   https://codacy.atlassian.net/browse/CY-4206
-   https://codacy.atlassian.net/browse/CY-4170
-   https://codacy.atlassian.net/browse/CY-4149
-   https://codacy.atlassian.net/browse/CY-4111


Jira issues that have already been released:

-   https://codacy.atlassian.net/browse/CY-4084
-   https://codacy.atlassian.net/browse/CY-4416

-->

## Product enhancements

-   The GitLab integration now supports [merge request summaries](https://docs.codacy.com/v4.1/repositories-configure/integrations/gitlab-integration/#enabling) for both GitLab Cloud and GitLab Enterprise. (CY-4310)
-   You can now use markdownlint to provide [suggested fixes](https://docs.codacy.com/v4.1/repositories-configure/integrations/github-integration/#suggest-fixes) for Markdown issues. (CY-3717)

## Bug fixes

-   Fixed an issue that prevented Codacy from listing all available GitLab groups on the Organizations page. (CY-4529)
-   Fixed an issue that caused people suggestions to be generated for empty emails and for people with empty emails to be able to be added to an organization. (CY-4454)
-   Fixed an issue that cause the public SSH key to not be displayed for public repositories in GitHub Enterprise with private mode enabled (CY-4442)
-   Fixed an issue where it would show "Enable All" for non configurable Client-side tools on the code patterns view (CY-4323)

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
