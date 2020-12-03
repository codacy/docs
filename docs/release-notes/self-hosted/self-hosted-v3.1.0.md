# Self-hosted v3.1.0

<!-- TODO Update release date -->

These release notes are for [Codacy Self-hosted v3.1.0](https://github.com/codacy/chart/releases/tag/3.1.0){: target="_blank"}, released on December ##, 2020.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Product enhancements

-   Improvements to the [supported languages and tools](../../getting-started/supported-languages-and-tools.md):
    -   Added static analysis support for **Objective-C** with the tool Faux Pas.
    -   Expanded static analysis support for **Go** with the [client-side tools](../../related-tools/local-analysis/client-side-tools.md) aligncheck, deadcode, and Staticcheck.
    -   Added duplication and complexity support for **Kotlin** with the tools jscpd and Detekt. (CY-3003)
-   You can now use [personal organizations](https://docs.codacy.com/organizations/what-are-synced-organizations/#adding-an-organization) to manage your personal repositories. (CY-1802)

## Bug fixes

-   Fixed a broken link in the commit page to the corresponding GitLab Enterprise commit. (CY-3285)
-   Now, Codacy blocks GitLab merge requests until the analysis is complete by displaying a pending pipeline. (CY-3235)
-   Fixed an issue that could cause users to receive emails about the analysis of repositories in organizations they don't belong to. (CY-3228)
-   Now, Codacy displays an error message if the command `git diff` fails to obtain the deltas for a commit because of [incompatible line endings](https://docs.codacy.com/faq/code-analysis/error-line-endings/). (CY-2799)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   **aligncheck (new)**
-   Ameba 0.13.1
-   Bandit 1.6.2
-   Brakeman 4.3.1
-   BundlerAudit 0.6.1
-   **Checkstyle 8.37 (updated from 8.34)**
-   Clang-Tidy 10.0.1
-   CodeNarc 1.6
-   Coffeelint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   **deadcode (new)**
-   **Detekt 1.14.2 (updated from 1.10.0)**
-   **ESLint 7.14.0 (updated from 7.11.0)**
-   **Faux Pas 1.7.2 (new)**
-   Flawfinder 2.0.11
-   Gosec v2.3.0
-   Hadolint 1.18.2
-   JacksonLinter 2.10.2
-   JSHint 2.12.0
-   PHP Code Sniffer 3.5.8
-   PHP Mess Detector 2.8.1
-   PMD (Legacy) 5.8.1
-   PMD 6.28.0
-   Prospector 1.2.0
-   PSScriptAnalyzer 1.18.3
-   Pylint (Python 3) 2.6.0
-   Pylint 1.9.5
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   Rubocop 0.82.0
-   Scalastyle 1.0.0
-   ShellCheck v0.7.1
-   **Sonar C# 8.15 (updated from 8.14)**
-   **Sonar Visual Basic 8.15 (updated from 8.14)**
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   **Staticcheck 2020.1.6 (updated from 2017.2.2)**
-   **Stylelint 13.8.0 (updated from 13.7.2)**
-   SwiftLint 0.39.2
-   Tailor 0.12.0
-   TSLint 5.14.0
-   TSQLLint 1.11.1
