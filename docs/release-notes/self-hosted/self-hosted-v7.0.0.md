---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v7.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/5.2.1
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/5.5.6
---

# Self-hosted v7.0.0

These release notes are for [Codacy Self-hosted v7.0.0](https://github.com/codacy/chart/releases/tag/7.0.0), released on April 4, 2022.

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v7.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v7.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-7.0.0`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-7.0.0)
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-7.0.0)

## Breaking changes

**If you're using GitLab** please review the roles of your team on GitLab [considering the new permissions for project Maintainers](http://docs.codacy.com/v7.0/organizations/roles-and-permissions-for-synced-organizations/#permissions-for-gitlab).

GitLab defines Maintainers as [super-developers](https://about.gitlab.com/handbook/product/gitlab-the-product/#permissions-in-gitlab):

> They're able to push to <span class="skip-vale">master</span>, deploy to production. This role is often held by maintainers and engineering managers.

However, until now the Codacy permissions for this role were limited to the same as a Developer. This change addresses customer feedback towards having a more seamless integration between Codacy and GitLab.

!!! note
    After upgrading Codacy, we recommend that you clean your browser cache and refresh the list of repositories on the **Repositories list** page to make sure that you're using the updated permissions:

    ![Refreshing the list of repositories on Codacy](../images/cy-5876.png)

## Product enhancements

-   GitLab project members with the Maintainer role can now perform the following operations on Codacy:

    -   Adding the project
    -   Configuring the project
    -   Changing the following analysis settings: ignoring issues and files, configuring code patterns, configuring file extensions, and managing branches

    [See the updated permissions](https://docs.codacy.com/v7.0/organizations/roles-and-permissions-for-synced-organizations/) for all GitLab roles. (CY-5876)

-   Included ESLint 8 as a new supported tool and deprecated ESLint 7.

    New repositories will use ESLint 7 by default, but **Codacy won't provide more updates for ESLint 7 and will remove ESLint 7 on April 4, 2023**. (CY-5848)

    !!! note
        Please [follow these troubleshooting instructions](https://docs.codacy.com/v7.0/chart/troubleshoot/troubleshoot/#missing-new-tools) if the new tool ESLint 8 doesn't appear on the **Code patterns** page of your repositories after upgrading to this Codacy Self-hosted version.

-   The [**Repositories list** page](https://docs.codacy.com/v7.0/organizations/managing-repositories/) now displays a warning icon to improve the visibility of warnings and errors affecting the repositories. (CY-5797)

    ![Repositories with warnings on the Repositories list page](../images/cy-5797.png)

-   The [**Open pull requests** area](https://docs.codacy.com/v7.0/repositories/repository-dashboard/#open-pull-requests) on the Repository Dashboard now displays more details about the open pull requests. (CY-5796)

    ![Open pull requests area on the Repository Dashboard](../images/cy-5796.png)

-   The [**Access management** page](https://docs.codacy.com/v7.0/getting-started/which-permissions-does-codacy-need-from-my-account/#revoking-access-to-integrations) under your account settings now also allows adding new Git providers. (CY-5795)

-   The **Organization Overview** and **Repositories list** pages have improved loading times using a short-lived cache in the user's browser. (CY-5793)

-   The [**Repositories list** page](https://docs.codacy.com/v7.0/organizations/managing-repositories/) now allows sorting the list of repositories using the available columns in organizations with less than 100 repositories. (CY-5695)

-   The [**Overall quality** chart](https://docs.codacy.com/v7.0/organizations/organization-overview/#overall-quality-chart) now allows drilling down on the information to understand which repositories require attention to improve the organization's code quality. (CY-5580)

    ![Drilling down on the Overall quality chart](../images/cy-5580.png)

## Bug fixes

-   Fixed an issue that caused inconsistencies on the last updated date when listing GitHub repositories. Now, the last updated date is the [date of the last push to the repositories](https://docs.codacy.com/v7.0/organizations/organization-overview/#last-updated-repositories). (CY-5784)
-   dartanalyzer now supports including the packages [lints](https://pub.dev/packages/lints) and [flutter_lints](https://pub.dev/packages/flutter_lints) in the `analysis_option.yaml` configuration file. (CY-5626)
-   Fixed an issue that blocked re-analyzing commits made by non-authors on Codacy Self-hosted. (CY-5012)
-   The re-analyze button is now hidden on repositories that are running analysis through a build server. (CY-4205)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   Checkov 2.0.399
-   Checkstyle 8.44
-   Clang-Tidy 10.0.1
-   CodeNarc 2.2.0
-   CoffeeLint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   **[dartanalyzer 2.16.1](https://github.com/dart-lang/sdk/blob/main/CHANGELOG.md#2161---2022-02-09) (updated from 2.15.1)**
-   detekt 1.19.0
-   **[ESLint 8.10.0](https://github.com/eslint/eslint/releases/tag/v8.10.0) (new)**
-   ESLint 7.32.0 (<span style="color: red;">deprecated</span>)
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   Gosec 2.8.1
-   Hadolint 1.18.2
-   Jackson Linter 2.10.2
-   JSHint 2.12.0
-   markdownlint 0.23.1
-   PHP Mess Detector 2.10.1
-   PHP_CodeSniffer 3.6.2
-   PMD 6.36.0
-   Prospector 1.3.1
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.7.4
-   remark-lint 7.0.1
-   Revive 1.0.2
-   **[RuboCop 1.26.1](https://github.com/rubocop/rubocop/releases/tag/v1.26.1) (updated from 1.25.1)**
-   Scalastyle 1.5.0
-   ShellCheck 0.7.2
-   SonarC# 8.30
-   SonarVB 8.15
-   Spectral 1.2.7
-   SpotBugs 4.5.3
-   SQLint 0.2.1
-   Staticcheck 2020.1.6
-   Stylelint 14.2.0
-   SwiftLint 0.43.1
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
