# Self-hosted v3.4.0

These release notes are for [Codacy Self-hosted v3.4.0](https://github.com/codacy/chart/releases/tag/3.4.0){: target="_blank"}, released on March 12, 2021.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Product enhancements

-   It's now possible to [see the current Codacy Self-hosted version](https://docs.codacy.com/v3.4/chart/troubleshoot/troubleshoot/) under the avatar menu. (CY-3767)
-   Now, the **Code patterns** page allows you to [enable or disable all code patterns in a category](https://docs.codacy.com/v3.4/repositories-configure/code-patterns/#pattern-filters) with a single click. (CY-3527)
-   Added the following Codacy API endpoints:
    -   **[listFiles](https://api.codacy.com/api/api-docs#listfiles)** returns the most recent analysis information for the files in a repository as available on the [Files page](https://docs.codacy.com/v3.4/repositories/files-view/). (CY-3540)
    -   **[searchRepositoryIssues](https://api.codacy.com/api/api-docs#searchrepositoryissues)** returns information about the issues that Codacy found in a repository as available on the [Issues page](https://docs.codacy.com/repositories/issues-view/). (CY-3468)
    -   **[listRepositoryIgnoredIssues](https://api.codacy.com/api/api-docs#listrepositoryignoredissues)** returns information about the issues that Codacy found in a repository and were [ignored on the Codacy UI](https://docs.codacy.com/v3.4/repositories/issues/#restoring-ignored-issues). (CY-3498)
-   You can now activate automatic [GitHub fix suggestions](https://docs.codacy.com/repositories-configure/integrations/github-integration/#suggest-fixes) to issues identified by ESLint. This way, instead of having to do most fixes by themselves, your team members can save time by approving the suggestion to have the code automatically updated and merged. (CY-3439)
-   Improved the [onboarding flow for new users](https://docs.codacy.com/v3.4/getting-started/getting-started-with-codacy/) to simplify adding organizations and repositories and help troubleshoot common issues. (CY-3405)
-   Now, the [Repository Dashboard](https://docs.codacy.com/v3.4/repositories/repository-dashboard/) and [Issues page](https://docs.codacy.com/v3.4/repositories/issues/) include links to the corresponding documentation to help you make the most from the code quality information provided by Codacy and to assist you in configuring your repository settings. (CY-3303)
-   Now, Codacy has an improved user experience to manage people in organizations. (CY-2954)
-   Now, the Repositories list automatically suggests repositories that you haven't added to Codacy yet when you [search for a repository](https://docs.codacy.com/v3.4/organizations/managing-repositories/#adding-a-repository). (CY-2363)
-   Codacy Self-hosted now [supports MicroK8s version 1.20.\*](https://docs.codacy.com/v3.4/chart/requirements.md#kubernetes-or-microk8s-cluster-setup).

## Bug fixes

-   Fixed wrong message when disabling patterns on the Issues page. (CY-3745)
-   Fixed an issue that caused the configuration value containing the username of the metrics database to be used as the username for <span class="skip-vale">jobsdb</span>. (CY-3697)
-   Fixed an issue that caused the security dashboard to allow enabling patterns for tools using a configuration file. (CY-3684)
-   Fixed an issue that caused Sonar C# to detect issues related to patterns not enabled in the configuration. (CY-3607)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
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
-   **Prospector 1.3.1 (updated from 1.2.0)**
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.6.0
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   **Rubocop 1.11.0 (updated from 1.9.1)**
-   **ScalaStyle 1.5.0 (updated from 1.0.0)**
-   ShellCheck v0.7.1
-   **Sonar C# 8.13 (updated from 8.15)**
-   Sonar Visual Basic 8.15
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2020.1.6
-   **Stylelint 13.11.0 (updated from 13.8.0)**
-   SwiftLint 0.39.2
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
