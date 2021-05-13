# Self-hosted v4.0.0

These release notes are for [Codacy Self-hosted v4.0.0](https://github.com/codacy/chart/releases/tag/4.0.0){: target="_blank"}, released on May 12, 2021. <!-- TODO Update release date -->

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

<!-- TODO Check these issues

Check the following Jira Bugs with disabled release notes:

-   https://codacy.atlassian.net/browse/CY-4276
-   https://codacy.atlassian.net/browse/CY-4161
-   https://codacy.atlassian.net/browse/CY-4140

-->

## Breaking changes

This version of Codacy Self-hosted requires [PostgreSQL version 10.15](https://docs.codacy.com/v4.0/chart/requirements/#postgresql-server-setup) since the previous major version [will reach end-of-life (EOL) later this year](https://www.postgresql.org/support/versioning/).

To upgrade PostgreSQL:

1.  Follow the instructions on [how to upgrade a PostgreSQL cluster](https://www.postgresql.org/docs/10/upgrading.html).

1.  After the upgrade, clean the Codacy databases with [vacuumdb](https://www.postgresql.org/docs/10/app-vacuumdb.html) to prevent the <span class="skip-vale">autovacuum</a> feature from momentarily affecting the performance of the databases at a later time.

## Product enhancements

-   Improved the loading time of the [repositories list](https://docs.codacy.com/v4.0/organizations/managing-repositories/) page when an organization has many repositories. (CY-4084)
-   Now, Codacy allows [configuring who is allowed to manage file extensions and branches](https://docs.codacy.com/v4.0/organizations/roles-and-permissions-for-synced-organizations/#change-analysis-configuration). (CY-3886, CY-3887)

## Bug fixes

-   Fixed an issue where Codacy could fail to show repositories for organizations with more than 1000 repositories on GitHub. (CY-4193)
-   Fixed an issue that caused some cookies to be transmitted in plaintext when accessing `app.codacy.com` via HTTP with Firefox. (CY-4143)
-   Fixed a bug where repositories added to Codacy would have the GitHub status turned off. Now it's turned on by default for newly added repositories. (CY-4110)
-   Now, Codacy automatically ignores `*.Designer.cs` files from the analysis. (CY-4102)

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
-   Pylint 1.9.5
-   **PyLint (Python 3) 2.7.4 (updated from 2.7.2)**
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   **Rubocop 1.14.0 (updated from 1.12.0)**
-   Scalastyle 1.5.0
-   ShellCheck v0.7.1
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
