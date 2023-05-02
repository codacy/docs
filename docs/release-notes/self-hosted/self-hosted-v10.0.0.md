---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v10.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools-legacy/releases/tag/6.3.0
codacy_tools_version_new: https://github.com/codacy/codacy-tools-legacy/releases/tag/sh-1.1.0
---

# Self-hosted v10.0.0

These release notes are for [Codacy Self-hosted v10.0.0](https://github.com/codacy/chart/releases/tag/10.0.0){: target="_blank"}, released on February 3, 2023.

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v10.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v10.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the following versions:

    -   [Codacy Analysis CLI 7.7.4](https://github.com/codacy/codacy-analysis-cli/releases/tag/7.7.4)
    -   [Codacy Coverage Reporter 13.12.3](https://github.com/codacy/codacy-coverage-reporter/releases/tag/13.12.3)

## Breaking changes

This Codacy Self-hosted version requires [PostgreSQL version 11.18](https://docs.codacy.com/v10.0/chart/requirements/#postgresql-server-setup) since the previous major version [recently reached end-of-life (EOL)](https://www.postgresql.org/support/versioning/).

To upgrade PostgreSQL:

1.  Follow the instructions on [how to upgrade a PostgreSQL cluster](https://www.postgresql.org/docs/11/upgrading.html).

1.  After the upgrade, clean the Codacy databases with [vacuumdb](https://www.postgresql.org/docs/11/app-vacuumdb.html) to prevent the autovacuum feature from momentarily affecting the performance of the databases at a later time.

**If you're using GitHub Enterprise Server** this Codacy Self-hosted version requires [GitHub Enterprise Server version 3.6.2 or later](https://docs.codacy.com/v10.0/faq/general/which-version-control-systems-does-codacy-support/).

## Product enhancements

-   Added support for [Kubernetes 1.22.\* and MicroK8s 1.22.\*](https://docs.codacy.com/v10.0/chart/requirements/#kubernetes-or-microk8s-cluster-setup) (REL-992)
-   You can now configure your Codacy GitHub App to use [expiring user access tokens](https://docs.github.com/en/developers/apps/building-github-apps/refreshing-user-to-server-access-tokens). (PLUTO-133)
-   Improved the performance of applying coding standards to repositories to avoid timeouts when updating hundreds of repositories. (PLUTO-83)
-   The **Status** column of the [coverage reports list](https://docs.codacy.com/v10.0/coverage-reporter/#validating-coverage) now includes direct links to troubleshooting instructions when there are coverage errors. (IO-155)
-   Improved the performance and error handling of retrieving many open pull requests from the Git providers while populating the [**Pull requests** page](https://docs.codacy.com/v10.0/repositories/pull-requests/). (IO-133)
-   Codacy now supports the [client-side tool Unity Roslyn Analyzers](https://docs.codacy.com/v10.0/related-tools/local-analysis/client-side-tools/) for reporting error-prone and performance issues on C# projects that use the Unity framework. (IO-96)
-   Codacy now displays the coverage variation metric with a precision of two decimal places on the [Repository Dashboard](https://docs.codacy.com/v10.0/repositories/repository-dashboard/) and [Organization Overview](https://docs.codacy.com/v10.0/organizations/organization-overview/), and you can [define quality gates](https://docs.codacy.com/v10.0/repositories-configure/adjusting-quality-settings/#gates) with a coverage variation threshold using the same precision.

    The increased precision of the metric reflects the code coverage changes better by reducing issues with rounding errors. (IO-56)

    ![Coverage threshold with two decimal places on the Quality settings page](../images/io-56.png)

-   Added support for the following ESLint plugins:
    -   [<span class="skip-vale">prettier-plugin-tailwindcss</span>](https://www.npmjs.com/package/prettier-plugin-tailwindcss) (CY-6570)
    -   [<span class="skip-vale">eslint-plugin-typescript-sort-keys</span>](https://www.npmjs.com/package/eslint-plugin-typescript-sort-keys) (CY-6561)
-   Added support for the remark-lint plugin [<span class="skip-vale">remarkjs/remark-gfm</span>](https://github.com/remarkjs/remark-gfm). (CY-6513)

-   While [configuring a coding standard](https://docs.codacy.com/v10.0/organizations/using-a-coding-standard/), you can now toggle all code patterns using the new checkbox on the header. This allows you to conveniently toggle code patterns in bulk, for example, to enable all security code patterns. (CY-6255, CY-6336)

    ![Selecting all code patterns while configuring a coding standard](../images/cy-6336.png)

## Bug fixes

-   Fixed an issue that caused Codacy to display the coverage value on the wrong file in specific edge cases. (COV-25)
-   Now, Codacy asks for confirmation when you change a code pattern parameter on a repository that follows a coding standard. (PLUTO-149)
-   Fixed an issue that could cause the commit details page to display an empty **Diff** tab. (IO-129)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   Checkov 2.1.188
-   Checkstyle 10.3.1
-   Clang-Tidy 10.0.1
-   CodeNarc 2.2.0
-   CoffeeLint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   dartanalyzer 2.17.0
-   detekt 1.19.0
-   ESLint 8.23.1
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.19
-   Gosec 2.8.1
-   Hadolint 1.18.2
-   Jackson Linter 2.10.2
-   **[JSHint 2.13.5](https://github.com/jshint/jshint/releases/tag/2.13.5) (updated from 2.12.0)**
-   markdownlint 0.23.1
-   PHP Mess Detector 2.10.1
-   PHP_CodeSniffer 3.6.2
-   PMD 6.48.0
-   Prospector 1.7.7
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.14.5
-   remark-lint 7.0.1
-   Revive 1.2.3
-   **[RuboCop 1.39.0](https://github.com/rubocop/rubocop/releases/tag/v1.39.0) (updated from 1.32.0)**
-   Scalastyle 1.5.0
-   ShellCheck 0.8.0
-   Sonar C# 8.39
-   Sonar Visual Basic 8.15
-   spectral-rulesets 1.2.7
-   SpotBugs 4.5.3
-   SQLint 0.2.1
-   Staticcheck 2022.1.3
-   Stylelint 14.2.0
-   SwiftLint 0.43.1
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
-   **[Unity Roslyn Analyzers 1.14.0](https://github.com/microsoft/Microsoft.Unity.Analyzers/releases/tag/1.14.0) (new)**
