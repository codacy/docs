# Self-hosted v4.0.0

These release notes are for [Codacy Self-hosted v4.0.0](https://github.com/codacy/chart/releases/tag/4.0.0){: target="_blank"}, released on May 12, 2021. <!-- TODO Update release date -->

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

<!-- TODO Check these issues

Jira issues without release notes:

Epics:
-   https://codacy.atlassian.net/browse/CY-4084
-   https://codacy.atlassian.net/browse/CY-3887
-   https://codacy.atlassian.net/browse/CY-3886
-   https://codacy.atlassian.net/browse/CY-3698
-   https://codacy.atlassian.net/browse/DOCS-42

Bugs:


Jira issues with disabled release notes:

Epics:

Bugs:
-   https://codacy.atlassian.net/browse/CY-4276
-   https://codacy.atlassian.net/browse/CY-4208
-   https://codacy.atlassian.net/browse/CY-4161
-   https://codacy.atlassian.net/browse/CY-4144
-   https://codacy.atlassian.net/browse/CY-4140

-->

## Product enhancements

-   Added the following Codacy API endpoints:
    -   **[getCommitDeltaStatistics](https://api.codacy.com/api/api-docs#getcommitdeltastatistics)** returns the quality metric deltas introduced by a commit.
    -   **[listCommitDeltaIssues](https://api.codacy.com/api/api-docs#listcommitdeltaissues)** returns the list of issues that were introduced or fixed by a commit. (CY-3560)
-   It's now possible to [import tool and pattern configurations](https://docs.codacy.com/repositories-configure/code-patterns/#import-patterns) from another repository to make it easier to set up new repositories and have consistent rules across repositories. (CY-3162)

## Bug fixes

-   Fixes an issue where it could fail to show repositories for organizations with more than 1000 repositories on GitHub (Cloud and Self-hosted) (CY-4193)
-   Fixed an issue that caused some cookies to be passed plainly when accessing app.codacy.com through HTTP with Firefox (CY-4143)
-   Fixed a bug where repositories added to Codacy would have the GitHub status turned off. Now is turned on by default for newly added repositories as intended (CY-4110)
-   *.Designer.cs files are now ignored from the analysis (CY-4102)

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
-   cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   Detekt 1.14.2
-   **ESLint 7.25.0 (updated from 7.18.0)**
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   Gosec 2.3.0
-   Hadolint 1.18.2
-   JacksonLinter 2.10.2
-   JSHint 2.12.0
-   **PHP Code Sniffer 3.6.0 (updated from 3.5.8)**
-   PHP Mess Detector 2.8.1
-   **PMD 6.33.0 (updated from 6.28.0)**
-   PMD (Legacy) 5.8.1
-   Prospector 1.3.1
-   PSScriptAnalyzer 1.18.3
-   PyLint 1.9.5
-   **PyLint (Python 3) 2.7.4 (updated from 2.7.2)**
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   **Rubocop 1.14.0 (updated from 1.12.0)**
-   ScalaStyle 1.5.0
-   shellcheck v0.7.1
-   **Sonar C# 8.22 (updated from 8.15)**
-   Sonar Visual Basic 8.15
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2020.1.6
-   **Stylelint 13.13.0 (updated from 13.12.0)**
-   **SwiftLint 0.40.0 (updated from 0.39.2)**
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1

