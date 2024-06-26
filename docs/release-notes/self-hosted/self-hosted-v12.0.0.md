---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v12.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.1.6
codacy_tools_version_new: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.2
---

# Self-hosted v12.0.0

These release notes are for [Codacy Self-hosted v12.0.0](https://github.com/codacy/chart/releases/tag/12.0.0){: target="_blank"}, released on July 20, 2023.

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v12.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v12.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the following versions:

    -   [Codacy Analysis CLI 7.8.3](https://github.com/codacy/codacy-analysis-cli/releases/tag/7.8.3)
    -   [Codacy Coverage Reporter 13.10.15](https://github.com/codacy/codacy-coverage-reporter/releases/tag/13.10.15)

## Breaking changes

-   If you have set `scheduler.enable: "true"` in `values-production.yaml` (or `values-microk8s.yaml` if using MicroK8s), do the following before updating Kubernetes.

    Assuming you're using the default `codacy` namespace:

    1.  Remove all `scheduler.*` settings from `values-production.yaml` (or `values-microk8s.yaml` if using MicroK8s)

    1.  Update the ConfigMap of `codacy-worker-manager`:

        ```bash
        kubectl patch configmap/codacy-worker-manager --namespace codacy --type merge --patch '{"data":{"CONFIG_FORCE_codacy_kubernetes_scheduler_enable": "false","CONFIG_FORCE_codacy_kubernetes_scheduler_name":"default-scheduler"}}'
        ```

    1.  Restart the `codacy-worker-manager` Deployment:

        ```bash
        kubectl rollout restart deployment/codacy-worker-manager -n codacy
        ```

    1.  List any pending `worker` Pods:

        ```bash
        kubectl get pods -l app=worker --field-selector=status.phase=Pending -n codacy
        ```

    1.  If there are any pending `worker` Pods, remove them:

        !!! warning
            This is a destructive action. Make sure you understand the consequences.

        ```bash
        kubectl delete pods -l app=worker --field-selector=status.phase=Pending -n codacy
        ```

-   If you're upgrading your Kubernetes installation to v1.25, make sure to do the following in the recommended order to avoid service outages:

    1.  Upgrade to Codacy Self-hosted v12.0.0

    1.  If using the monitoring functionality [Grafana + Prometheus + Loki](https://docs.codacy.com/v12.0/chart/configuration/monitoring/#setting-up-monitoring-using-grafana-prometheus-and-loki), update Loki and Promtail by following the latest respective installation instructions ([Loki](https://docs.codacy.com/v12.0/chart/configuration/monitoring/#2-installing-loki), [Promtail](https://docs.codacy.com/v12.0/chart/configuration/monitoring/#3-installing-promtail)).

    1.  Upgrade Kubernetes to v1.25

## Product enhancements

-   Added support for [Kubernetes 1.24.\* and 1.25.\*](https://docs.codacy.com/v12.0/chart/requirements/#kubernetes-or-microk8s-cluster-setup) (REL-1304, REL-1306)
-   Added support for the Stylelint plugin [<span class="skip-vale">stylelint-no-px</span>](https://www.npmjs.com/package/stylelint-no-px). (TS-455)
-   Improved the performance of the tool Stylelint by reviewing and refactoring the tool configurations and supported packages. (TS-438)
-   Updated and refactored the tool Ameba. [Thanks to <span class="skip-vale">Sija</span> for the contribution!](https://github.com/codacy/codacy-ameba/pull/25) (TS-417)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   **[Ameba 1.4.3](https://github.com/crystal-ameba/ameba/releases/tag/v1.4.3) (updated from 0.13.1)**
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   **[Checkov 2.3.187](https://github.com/bridgecrewio/checkov/releases/tag/2.3.187) (updated from 2.1.188)**
-   Checkstyle 10.3.1
-   Clang-Tidy 10.0.1
-   CodeNarc 3.2.0
-   CoffeeLint 2.1.0
-   **[Cppcheck 2.10.3](https://github.com/danmar/cppcheck/releases/tag/2.10.3) (updated from 2.10)**
-   Credo 1.4.0
-   CSSLint 1.0.5
-   dartanalyzer 2.17.0
-   **[detekt 1.22.0](https://github.com/detekt/detekt/releases/tag/v1.22.0) (updated from 1.19.0)**
-   ESLint 8.34.0
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.19
-   **[Gosec 2.15.0](https://github.com/securego/gosec/releases/tag/v2.15.0) (updated from 2.8.1)**
-   Hadolint 1.18.2
-   Jackson Linter 2.14.2
-   JSHint 2.13.5
-   markdownlint 0.26.2
-   PHP Mess Detector 2.13.0
-   PHP_CodeSniffer 3.7.2
-   PMD 6.55.0
-   **[Prospector 1.10.2](https://github.com/landscapeio/prospector/releases/tag/1.10.2) (updated from 1.7.7)**
-   PSScriptAnalyzer 1.18.3
-   **[Pylint 2.17.3](https://github.com/PyCQA/pylint/releases/tag/v2.17.3) (updated from 2.17.0)**
-   Pylint (deprecated) 1.9.5
-   remark-lint 7.0.1
-   **[Revive 1.3.2](https://github.com/mgechev/revive/releases/tag/v1.3.2) (updated from 1.2.3)**
-   **[RuboCop 1.52.1](https://github.com/rubocop/rubocop/releases/tag/v1.52.1) (updated from 1.39.0)**
-   Scalastyle 1.5.0
-   ShellCheck v0.9.0
-   SonarC# 8.40
-   SonarVB 8.15
-   **[Spectral 1.16.0](https://github.com/stoplightio/spectral/releases/tag/%40stoplight%2Fspectral-rulesets-v1.16.0) (updated from 1.2.7)**
-   SpotBugs 4.7.3
-   SQLint 0.2.1
-   Staticcheck 2022.1.3
-   **[Stylelint 15.9.0](https://github.com/stylelint/stylelint/releases/tag/15.9.0) (updated from 14.16.1)**
-   SwiftLint 0.50.3
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
-   Unity Roslyn Analyzers 1.14.0
