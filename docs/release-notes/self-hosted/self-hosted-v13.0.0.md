---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v13.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.6
codacy_tools_version_new: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.7
---

# Self-hosted v13.0.0

These release notes are for [Codacy Self-hosted v13.0.0](https://github.com/codacy/chart/releases/tag/13.0.0){: target="_blank"}, released on November 23, 2023.

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v13.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v13.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the following versions:

    -   [Codacy Analysis CLI 7.9.5](https://github.com/codacy/codacy-analysis-cli/releases/tag/7.9.5)
    -   [Codacy Coverage Reporter 13.10.15](https://github.com/codacy/codacy-coverage-reporter/releases/tag/13.10.15)

## Support for ingress-nginx chart 4.8.3

This version of Codacy Self-hosted adds support for [ingress-nginx chart 4.8.3](https://github.com/kubernetes/ingress-nginx/releases/tag/helm-chart-4.8.3), which fixes the following vulnerabilities:

-   [CVE-2022\-4886](https://github.com/kubernetes/ingress-nginx/issues/10570)
-   [CVE-2023\-5043](https://github.com/kubernetes/ingress-nginx/issues/10571)
-   [CVE-2023\-5044](https://github.com/kubernetes/ingress-nginx/issues/10572)

!!! note
    Although [ingress-nginx chart 4.8.3 officially supports](https://github.com/kubernetes/ingress-nginx/tree/helm-chart-4.8.3#supported-versions-table) Kubernetes **version 1.25** to **1.28**, we tested this version of Codacy Self-hosted using [ingress-nginx chart 4.8.3](https://github.com/kubernetes/ingress-nginx/releases/tag/helm-chart-4.8.3) on all the [supported Kubernetes versions](https://docs.codacy.com/v13.0/chart/requirements/#kubernetes-or-microk8s-cluster-setup), **1.22.\*** to **1.26.\***. All tests were successful in accordance with our quality assurance standards.

### Upgrading ingress-nginx chart to version 4.8.3

!!! warning
    -   If you applied **custom configurations** to ingress-nginx different from the Codacy's `values-nginx.yaml` file, follow the [ingress-nginx documentation](https://artifacthub.io/packages/helm/ingress-nginx/ingress-nginx/4.8.3) to upgrade your installation.
    -   If your NGINX Ingress Controller is shared by other components out of Codacy's installation scope, check those components documentation to evaluate the impact of this upgrade.

    If you have any questions regarding the above scenarios or need help, please contact <mailto:support@codacy.com>.

If your Codacy Self-hosted setup uses a **dedicated NGINX Ingress Controller** that follows [Codacy's installation instructions](https://docs.codacy.com/v13.0/chart/infrastructure/eks-quickstart/) with **no custom configurations**, you can upgrade ingress-nginx chart to version 4.8.3 by executing the steps below:

1.  Download the updated configuration file [`values-nginx.yaml`](https://docs.codacy.com/v13.0/chart/values-files/values-nginx.yaml) for the NGINX Ingress Controller, which enables `enableAnnotationValidations`.

1.  Run the following script:

    ```
    kubectl create namespace codacy
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    helm upgrade --install --namespace codacy --version 4.8.3 nginx-ingress ingress-nginx/ingress-nginx -f values-nginx.yaml
    ```

!!! note
    This ingress-nginx chart upgrade can be applied to Codacy Self-hosted v10.0 and later.

## Product enhancements

-   Added support for [Kubernetes 1.26](https://docs.codacy.com/v13.0/chart/requirements/#kubernetes-or-microk8s-cluster-setup). (REL-1389)
-   Added support for [PostgreSQL server 12](https://docs.codacy.com/v13.0/chart/requirements/#postgresql-server-setup). (REL-1347)
-   Pylint now supports Python 3.11 syntax. (TS-467)
-   Added support for the ESLint plugin [<span class="skip-vale">vue-scoped-css</span>](https://www.npmjs.com/package/eslint-plugin-vue-scoped-css). (TS-356)
-   Added support for the ESLint plugin [<span class="skip-vale">eslint-plugin-rxjs</span>](https://www.npmjs.com/package/eslint-plugin-rxjs). (TS-346)
-   Added support for the ESLint plugins [<span class="skip-vale">eslint-plugin-markdown</span>](https://www.npmjs.com/package/eslint-plugin-markdown) and [<span class="skip-vale">eslint-plugin-yml</span>](https://www.npmjs.com/package/eslint-plugin-yml). (TS-121)
-   Added support for [ingress-nginx chart 4.8.3](https://github.com/kubernetes/ingress-nginx/releases/tag/helm-chart-4.8.3). (REL-1416)

## Bug fixes

-   Fixed an incorrect popup being shown when loading the repository Code patterns page. (PLUTO-717)

## Tool deprecations

This version of Codacy Self-hosted deprecates the following tools: **CSSLint**, **Faux Pas**, **JSHint**, **Tailor**, and **TSLint**.

These tools have become deprecated or stopped being updated by their maintainers and started providing a bad experience to Codacy users either by reporting false positives or causing other unexpected issues.

To continue analyzing your repositories, enable the replacement tool for the corresponding deprecated tool listed below on the [code patterns page](https://docs.codacy.com/v13.0/repositories-configure/configuring-code-patterns/) of each affected repository or in your [organization coding standard](https://docs.codacy.com/v13.0/organizations/using-a-coding-standard/), if you are using one:

| Deprecated tool | Replacement tool |
|-----------------|------------------|
| CSSLint         | Stylelint        |
| Faux Pas        | Clang-Tidy       |
| JSHint          | ESLint           |
| Tailor          | SwiftLint        |
| TSLint          | ESLint           |

The suggested replacement tools are enabled by default for new repositories, except for Clang Tidy, which is a [client-side tool](https://docs.codacy.com/v13.0/related-tools/local-analysis/client-side-tools/).

If you have any questions or need help, please contact <mailto:support@codacy.com>.

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 1.4.3
-   **[Bandit 1.7.5](https://github.com/PyCQA/bandit/releases/tag/1.7.5) (updated from 1.7.0)**
-   Brakeman 4.3.1
-   **[bundler-audit 0.9.1](https://github.com/rubysec/bundler-audit/releases/tag/v0.9.1) (updated from 0.6.1)**
-   Checkov 2.3.187
-   **[Checkstyle 10.12.3](https://checkstyle.sourceforge.io/releasenotes.html#Release_10.12.3) (updated from 10.3.1)**
-   Clang-Tidy 10.0.1
-   **[CodeNarc 3.3.0](https://github.com/CodeNarc/CodeNarc/blob/master/CHANGELOG.md) (updated from 3.2.0)**
-   **[CoffeeLint 5.2.11](https://github.com/coffeelint/coffeelint/releases/tag/v5.2.11) (updated from 2.1.0)**
-   **[Cppcheck 2.12.0](https://github.com/danmar/cppcheck/releases/tag/2.12.0) (updated from 2.10.3)**
-   Credo 1.4.0
-   **CSSLint (deprecated) 1.0.5**
-   dartanalyzer 2.17.0
-   detekt 1.22.0
-   **[ESLint 8.51.0](https://github.com/eslint/eslint/releases/tag/v8.51.0) (updated from 8.34.0)**
-   ESLint (deprecated) 7.32.0
-   **Faux-Pas (deprecated) 1.7.2**
-   Flawfinder 2.0.19
-   Gosec 2.15.0
-   Hadolint 1.18.2
-   **[Jackson Linter 2.15.2](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.15.2) (updated from 2.14.2)**
-   **[JSHint (deprecated) 2.13.6](https://github.com/jshint/jshint/releases/tag/2.13.6) (updated from 2.13.5)**
-   markdownlint 0.26.2
-   PHP Mess Detector 2.13.0
-   PHP_CodeSniffer 3.7.2
-   PMD 6.55.0
-   Prospector 1.10.2
-   **[PSScriptAnalyzer 1.21.0](https://github.com/PowerShell/PSScriptAnalyzer/releases/tag/1.21.0) (updated from 1.18.3)**
-   **[Pylint 2.17.5](https://github.com/pylint-dev/pylint/releases/tag/v2.17.5) (updated from 2.17.3)**
-   Pylint (deprecated) 1.9.5
-   **[remark-lint 9.1.2](https://github.com/remarkjs/remark-lint/releases/tag/9.1.2) (updated from 7.0.1)**
-   **[Revive 1.3.3](https://github.com/mgechev/revive/releases/tag/v1.3.3) (updated from 1.3.2)**
-   **[RuboCop 1.56.1](https://github.com/rubocop/rubocop/releases/tag/v1.56.1) (updated from 1.52.1)**
-   **[Scalastyle 1.5.1](https://github.com/beautiful-scala/scalastyle/releases/tag/v1.5.1) (updated from 1.5.0)**
-   ShellCheck v0.9.0
-   SonarC# 8.40
-   SonarVB 8.15
-   Spectral 1.16.0
-   SpotBugs 4.7.3
-   SQLint 0.2.1
-   **[Staticcheck 2023.1.5](https://staticcheck.io/changes/2023.1.5/#2023.1.5) (updated from 2022.1.3)**
-   **[Stylelint 15.10.3](https://github.com/stylelint/stylelint/releases/tag/15.10.3) (updated from 15.9.0)**
-   SwiftLint 0.50.3
-   **Tailor (deprecated) 0.12.0**
-   **TSLint (deprecated) 6.1.3**
-   TSQLLint 1.11.1
-   **[Unity Roslyn Analyzers 1.17.0](https://github.com/microsoft/Microsoft.Unity.Analyzers/releases/tag/1.17.0) (updated from 1.14.0)**
