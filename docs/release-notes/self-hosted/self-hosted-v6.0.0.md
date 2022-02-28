---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v6.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/5.2.1
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/5.2.1
---

# Self-hosted v6.0.0

These release notes are for [Codacy Self-hosted v6.0.0](https://github.com/codacy/chart/releases/tag/6.0.0){: target="_blank"}, released on February 28, 2022. <!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

<!--TODO Check these issues manually

Jira issues without release notes

Epics:
-   https://codacy.atlassian.net/browse/CY-5761
-   https://codacy.atlassian.net/browse/CY-5747
-   https://codacy.atlassian.net/browse/CY-5560
-   https://codacy.atlassian.net/browse/CY-5534
-   https://codacy.atlassian.net/browse/CY-5533
-   https://codacy.atlassian.net/browse/CY-5522
-   https://codacy.atlassian.net/browse/CY-5399
-   https://codacy.atlassian.net/browse/DOCS-42
Bugs and Community Issues:
Others:
-   https://codacy.atlassian.net/browse/CY-5702
-   https://codacy.atlassian.net/browse/CY-5695
-   https://codacy.atlassian.net/browse/CY-5649
-   https://codacy.atlassian.net/browse/CY-5554
-   https://codacy.atlassian.net/browse/CY-5464
-   https://codacy.atlassian.net/browse/CY-5440
-   https://codacy.atlassian.net/browse/CY-5203
-   https://codacy.atlassian.net/browse/CY-4374
-   https://codacy.atlassian.net/browse/CY-3957
-   https://codacy.atlassian.net/browse/CY-1462

Jira issues with disabled release notes

Epics:
-   https://codacy.atlassian.net/browse/CY-5391
-   https://codacy.atlassian.net/browse/CY-4844
Bugs and Community Issues:
-   https://codacy.atlassian.net/browse/CY-5678
-   https://codacy.atlassian.net/browse/CY-5657
-   https://codacy.atlassian.net/browse/CY-5567
-   https://codacy.atlassian.net/browse/CY-5498
-   https://codacy.atlassian.net/browse/CY-5474
-   https://codacy.atlassian.net/browse/CY-5427
-   https://codacy.atlassian.net/browse/CY-5390
-   https://codacy.atlassian.net/browse/CY-5292
-   https://codacy.atlassian.net/browse/CY-5144
-->

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v6.0.0:

1.  [Check the release notes](../index.md#self-hosted) for all Codacy Self-hosted versions between your current version and the most recent version for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](../../chart/maintenance/upgrade.md).

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-6.0.0`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-6.0.0)
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-6.0.0)

## Breaking changes

This version of Codacy Self-hosted introduces the following breaking changes:

-   [Dropped support for Kubernetes 1.14 and MicroK8s 1.14](https://docs.codacy.com/v6.0/chart/requirements/)

    Kubernetes 1.14 is an [old version first released in 2019](https://kubernetes.io/blog/2019/03/25/kubernetes-1-14-release-announcement/){: target="_blank"} that's no longer being maintained.

-   [Removed the tool **PMD (Legacy)**](../cloud/cloud-2022-02-16-pmd-legacy-removal.md)

    This Codacy Self-hosted version no longer includes the tool **PMD (Legacy)**. If you're currently using **PMD (Legacy)** to analyze your repositories, we recommend that you follow the next steps **before upgrading to this Codacy Self-hosted version**:

    1.  Take note of the code patterns that you have enabled on **PMD (Legacy)** and enable the corresponding code patterns on the new tool PMD.

        The new version of the tool includes different code patterns, so it's possible that not all code patterns will have a direct match on the new tool.

    1.  Disable **PMD (Legacy)** and enable **PMD**.

## Product enhancements


-   Updated the [<span class="skip-vale">codacy-rubocop</span>](https://github.com/codacy/codacy-rubocop) plugins listed below. (CY-5550)

    -   [<span class="skip-vale">rubocop-shopify 2.4.0</span>](https://rubygems.org/gems/rubocop-shopify/versions/2.4.0)
    -   [<span class="skip-vale">rubocop-sorbet 0.6.5</span>](https://rubygems.org/gems/rubocop-sorbet/versions/0.6.5)
    -   [<span class="skip-vale">rubocop-rails 2.13.2</span>](https://rubygems.org/gems/rubocop-rails/versions/2.13.2)
    -   [<span class="skip-vale">rubocop-performance 1.13.2</span>](https://rubygems.org/gems/rubocop-performance/versions/1.13.2)
    -   [<span class="skip-vale">rubocop-graphql 0.12.3</span>](https://rubygems.org/gems/rubocop-graphql/versions/0.12.3)
    -   [<span class="skip-vale">rubocop-ast 1.15.1</span>](https://rubygems.org/gems/rubocop-ast/versions/1.15.1)

-   Now, Codacy supports static code analysis for Dart/Flutter projects using [dartanalyzer](https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli){: target="_blank"}. The new tool checks your code for errors and warnings that are specified in the [Dart language specification](https://dart.dev/guides/language/spec){: target="_blank"}. (CY-4314)

## Bug fixes

-   Fixed an issue where applying a coding standard to more than 100 repositories using either the Codacy UI or API was failing. (CY-5654)
-   CNow, the **Coverage** column always appears on the Files page even when there's no coverage data, avoiding a jump in the view. (CY-5518)
<!--TODO Continue reviewing here-->
-   Disabled custom rules in PHP Mess Detector
Now the custom rules are filtered out from the configuration file before analysis (CY-5509)
-   Updated the Git URL used to clone public repositories to comply with the recent [GitHub protocol changes](https://github.blog/2021-09-01-improving-git-protocol-security-github/){: target="_blank"}. (CY-5436)
-   Fixed an issue that could prevent users from using the Codacy app website temporarily if they were exposed to a phishing attack. CVSS v3.1 score: 3.1 (Low) (CY-5420)
-   Fixed a security issue that, under rare circumstances, could allow an attacker to run arbitrary code on the **Ignored files** settings page. CVSS v3.1 score: 3.8 (Low) (CY-5419)
-   Added the plugin [<span class="skip-vale">eslint-plugin-storybook</span>](https://www.npmjs.com/package/eslint-plugin-storybook) to [<span class="skip-vale">codacy-eslint</span>](https://github.com/codacy/codacy-eslint). (CY-5406)
-   You can now use the Codacy configuration file to [adjust how PMD CPD detects duplicated code](https://docs.codacy.com/v6.0/repositories-configure/codacy-configuration-file/#pmd-cpd-duplication), giving you more flexibility to eliminate false positives. (CY-5184)
-   Fixed an issue that could allow triggering requests from the Codacy instance servers by injecting a URL into the cursor parameter of the API endpoint to list organization repositories. (CY-5139)
-   Fixed an issue that prevented administrators from removing users from Bitbucket Server organizations on Codacy. Besides this, Codacy Self-hosted administrators can now remove users from Codacy even if they're the last administrator in an organization. (CY-4724)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

