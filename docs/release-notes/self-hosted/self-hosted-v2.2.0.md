---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v2.2.0.
---

# Self-hosted v2.2.0

These release notes are for [Codacy Self-hosted v2.2.0](https://github.com/codacy/chart/releases/tag/2.2.0){: target="_blank"}, released on October 8, 2020.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Product enhancements

-   You can now use the Codacy Analysis CLI [GitHub Action](https://github.com/marketplace/actions/codacy-analysis-cli) to analyze each commit and pull request. (CY-2663)
-   You can now use [personal organizations](../../organizations/what-are-synced-organizations.md#adding-an-organization) to manage your personal repositories. (CY-1802)
-   Updated the [Organization](../../organizations/organization-overview.md) and [Repository](../../repositories/repository-dashboard.md) dashboards with a cleaner user experience and better performance. (CY-1733)

## Bug fixes

-   Fixed an issue that could cause worker pods to stay alive indefinitely, consuming unneeded resources. (CY-2932)
-   Now, Codacy lists 100 organizations for each Git provider on the Organizations page. (CY-2853)
-   Fixed an issue that caused the error `No instant converter found for type: java.time.Instant` while trying to open some pages in legacy manual organizations. (CY-2852)
-   Now, the Repositories list page allows opening repositories in a new browser tab using either Ctrl + Click or right-clicking the repository names. (CY-2604)
-   Fixed an issue that caused Content Security Policy console errors while opening the Repositories list page. (CY-2494)
-   Fixed a UI glitch on the Plan and billing page that was visible when upgrading to the Pro plan. (CY-1977)
-   Now, the tab Without Owner on the page Admin / Projects correctly lists projects without an owner for synced organizations. (CY-224)
-   Fixed an issue that caused the button Load More on the page Admin / Search to load random results. (CY-220)
-   Fixed a UI glitch on the modal window asking for confirmation to ignore a file that was visible for long file names. (CY-92)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.6.2
-   Brakeman 4.3.1
-   BundlerAudit 0.6.1
-   Checkstyle 8.34
-   Clang-Tidy 10.0.1
-   CodeNarc 1.6
-   Coffeelint 2.1.0
-   Cppcheck 2.1
-   **Credo 1.4.0 (updated from 1.3.0)**
-   CSSLint 1.0.5
-   Detekt 1.10.0
-   **ESLint 7.10.0 (updated from 7.8.1)**
-   Flawfinder 2.0.11
-   Gosec v2.3.0
-   Hadolint 1.17.5
-   JacksonLinter 2.10.2
-   **JSHint 2.12.0 (updated from 2.10.2)**
-   PHP_CodeSniffer 3.5.6
-   PHP Mess Detector 2.8.1
-   PMD (Legacy) 5.8.1
-   PMD 6.27.0
-   Prospector 1.2.0
-   PSScriptAnalyzer 1.18.3
-   Pylint (Python 3) 2.6.0
-   Pylint 1.9.5
-   **RemarkLint 7.0.1 (updated from 7.0.0)**
-   Revive 1.0.2
-   Rubocop 0.82.0
-   Scalastyle 1.0.0
-   ShellCheck v0.7.1
-   **Sonar C# 8.13 (updated from 8.12)**
-   **Sonar Visual Basic 8.13 (updated from 8.12)**
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2017.2.2
-   **Stylelint 13.7.2 (updated from 13.7.0)**
-   SwiftLint 0.39.2
-   Tailor 0.12.0
-   TSLint 5.14.0
-   TSQLLint 1.11.1
