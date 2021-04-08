---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Self-hosted v3.5.0

These release notes are for [Codacy Self-hosted v3.5.0](https://github.com/codacy/chart/releases/tag/3.5.0){: target="_blank"}, released on March 31, 2021.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Product enhancements

-   Now, Codacy allows [configuring who is allowed to manage patterns and ignore files](https://docs.codacy.com/v3.5/organizations/roles-and-permissions-for-synced-organizations/#change-analysis-configuration) on all supported Git providers. (CY-3883)
-   Codacy now runs [Checkov](https://github.com/bridgecrewio/checkov), extending the analysis support for infrastructure-as-code: Terraform, Terraform Plan, Cloudformation, Kubernetes, Serverless framework, and ARM Templates. This new type of analysis contains more than 500 rules, covering compliance and security best practices for AWS, Azure, and Google Cloud. (CY-3830)
-   Improved visibility of the tool that reports each issue, bringing that information to the top of the issue details. (CY-3768)
-   Added the following Codacy API endpoints:
    -   **[getCommitDeltaStatistics](https://api.codacy.com/api/api-docs#getcommitdeltastatistics)** returns the quality metric deltas introduced by a commit. (CY-3560)
    -   **[listCommitDeltaIssues](https://api.codacy.com/api/api-docs#listcommitdeltaissues)** returns the list of issues that were introduced or fixed by a commit. (CY-3560)
-   Continuous improvements on the [Codacy API documentation](https://docs.codacy.com/v3.5/codacy-api/using-the-codacy-api/). (DOCS-42)

## Bug fixes

-   Fixed an issue that caused the default page size to be 10 instead of 100 when calling the [listOrganizationRepositories](https://api.codacy.com/api/api-docs#listorganizationrepositories) API endpoint for a Bitbucket organization. (CY-3976)
-   Fixed an issue where Cppcheck wasn't respecting the minimum timeout provided by the Codacy application. (CY-3790)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   BundlerAudit 0.6.1
-   **Checkov 1.0.838 (new)**
-   Checkstyle 8.37
-   Clang-tidy 10.0.1
-   CodeNarc 1.6
-   Coffeelint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   Detekt 1.14.2
-   ESLint 7.18.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   Gosec 2.3.0
-   Hadolint 1.18.2
-   JacksonLinter 2.10.2
-   JSHint 2.12.0
-   PHP_CodeSniffer 3.5.8
-   PHP Mess Detector 2.8.1
-   PMD 6.28.0
-   PMD (Legacy) 5.8.1
-   Prospector 1.3.1
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   **Pylint (Python 3) 2.7.2 (updated from 2.6.0)**
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   **Rubocop 1.12.0 (updated from 1.11.0)**
-   Scalastyle 1.5.0
-   ShellCheck v0.7.1
-   **Sonar C# 8.15 (updated from 8.13)**
-   Sonar Visual Basic 8.15
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2020.1.6
-   **Stylelint 13.12.0 (updated from 13.11.0)**
-   SwiftLint 0.39.2
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
