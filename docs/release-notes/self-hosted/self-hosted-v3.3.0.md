# Self-hosted v3.3.0

These release notes are for [Codacy Self-hosted v3.3.0](https://github.com/codacy/chart/releases/tag/3.3.0){: target="_blank"}, released on February 12, 2021.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Product enhancements

-   The Codacy top navigation bar now includes a link to the recently launched [Codacy Community](https://community.codacy.com/). Join us! (CY-3462)
-   It's now possible to [import tool and pattern configurations](../../repositories-configure/code-patterns.md#import-patterns) from another repository to make it easier to set up new repositories and have consistent rules across repositories. (CY-3162)
-   Now, Codacy has an improved user experience to add and manage organizations that supports displaying an indefinite number of organizations per Git provider. (CY-1938)
-   Codacy Self-hosted now [supports Kubernetes version 1.20.\*](../../chart/requirements.md#kubernetes-or-microk8s-cluster-setup).

## Bug fixes

-   Fixed an issue while fetching groups from GitLab if the user owned more than 100 groups with similar names. (CY-3506)
-   The Codacy API endpoint getUserPermissionOnOrganization now correctly returns the permission `author` for people who have been invited to an organization. (CY-3471)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   **Bandit 1.7.0 (updated from 1.6.2)**
-   Brakeman 4.3.1
-   BundlerAudit 0.6.1
-   Checkstyle 8.37
-   Clang-tidy 10.0.1
-   CodeNarc 1.6
-   Coffeelint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   Detekt 1.14.2
-   **ESLint 7.18.0 (updated from 7.15.0)**
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   **Gosec 2.3.0 (updated from v2.3.0)**
-   Hadolint 1.18.2
-   JacksonLinter 2.10.2
-   JSHint 2.12.0
-   PHP Code Sniffer 3.5.8
-   PHP Mess Detector 2.8.1
-   PMD 6.28.0
-   PMD (Legacy) 5.8.1
-   Prospector 1.2.0
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.6.0
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   **Rubocop 1.9.1 (updated from 0.82.0)**
-   Scalastyle 1.0.0
-   ShellCheck v0.7.1
-   Sonar C# 8.15
-   Sonar Visual Basic 8.15
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2020.1.6
-   Stylelint 13.8.0
-   SwiftLint 0.39.2
-   Tailor 0.12.0
-   **TSLint 6.1.3 (updated from 5.14.0)**
-   TSQLLint 1.11.1
