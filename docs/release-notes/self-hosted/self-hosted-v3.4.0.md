# Self-hosted v3.4.0

These release notes are for [Codacy Self-hosted v3.4.0](https://github.com/codacy/chart/releases/tag/3.4.0){: target="_blank"}, released on March <!-- TODO Add release date -->, 2021.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

<!-- TODO Verify the following missing release notes:

## Product enhancements

-   CY-3822
-   CY-3635
-   CY-3581
-   CY-3560
-   CY-3520

## Bug fixes

-   CY-3799
-   CY-3761

-->

## Product enhancements

-   It's now possible to [see the current Codacy Self-hosted version](https://docs.codacy.com/v3.4/chart/troubleshoot/troubleshoot/) under the avatar menu. (CY-3767)
-   [listFiles](https://api.codacy.com/api/api-docs#listfiles) returns the most recent analysis information for the files in a repository as available on the [Files page](https://docs.codacy.com/v3.4/repositories/files-view/). (CY-3540)
-   Now, the **Code patterns** page allows you to [enable or disable all code patterns in a category](https://docs.codacy.com/v3.4/repositories-configure/code-patterns/#pattern-filters) with a single click. (CY-3527)
-   [listRepositoryIgnoredIssues](https://api.codacy.com/api/api-docs#listrepositoryignoredissues) returns information about the issues that Codacy found in a repository and were ignored on the Codacy UI. (CY-3498)
-   [searchRepositoryIssues](https://api.codacy.com/api/api-docs#searchrepositoryissues) returns information about the issues that Codacy found in a repository as available on the [Issues page](https://docs.codacy.com/repositories/issues-view/). (CY-3468)
-   The Codacy top navigation bar now includes a link to the recently launched [Codacy Community](https://community.codacy.com/). Join us there! (CY-3462)
-   You can now activate automatic [GitHub fix suggestions](https://docs.codacy.com/repositories-configure/integrations/github-integration/#suggest-fixes) to issues identified by ESLint. This way, instead of having to do most fixes by themselves, your team members can save time by approving the suggestion to have the code automatically updated and merged. (CY-3439)
-   Improved the [onboarding flow for new users](https://docs.codacy.com/v3.4/getting-started/getting-started-with-codacy/) to simplify adding organizations and repositories and help troubleshoot common issues. (CY-3405)
-   Now, the Repository Dashboard and Issues page a guided tour to help you make the most from the code quality information provided by Codacy and to assist you in configuring your repository settings. (CY-3303)
-   It's now possible to [import tool and pattern configurations](https://docs.codacy.com/repositories-configure/code-patterns/#import-patterns) from another repository to make it easier to set up new repositories and have consistent rules across repositories. (CY-3162)
-   Now, Codacy suggests adding people to the organization on the commit and pull request pages. (CY-2958)
-   Now, Codacy has an improved user experience to add and manage people in organizations. (CY-2954)
-   Now, Codacy has an improved user experience to add and manage organizations that supports displaying an indefinite number of organizations per Git provider. (CY-1938)

## Bug fixes

-   New users will now be correctly redirected to the organizations page (CY-3807)
-   Fix wrong message when removing patterns from the Issues view (CY-3745)
-   Fixed an issue while fetching groups from GitLab if the user owned more than 100 groups with similar names. (CY-3506)
-   The Codacy API endpoint getUserPermissionOnOrganization now correctly returns the permission `author` for people who have been invited to an organization. (CY-3471)

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
