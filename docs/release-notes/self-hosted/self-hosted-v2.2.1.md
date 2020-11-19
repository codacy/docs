# Self-hosted v2.2.1

These release notes are for [Codacy Self-hosted v2.2.1](https://github.com/codacy/chart/releases/tag/2.2.1){: target="_blank"}, released on October 22, 2020.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md). After that, restart the Fluentd pods by running the following command, replacing `<namespace>` with the namespace in which Codacy was installed:

```bash
daemonset=$(kubectl get daemonsets --namespace <namespace> -o jsonpath='{.items[*].metadata.name}') && \
kubectl rollout restart daemonset $daemonset --namespace <namespace> && \
kubectl rollout status daemonset $daemonset --namespace <namespace> --watch
```

## Bug fixes

-   Fixed an issue that caused the [script that collects logs from a Codacy instance](https://docs.codacy.com/chart/troubleshoot/logs-collect/) to return an empty archive. (CY-3068)
-   Fixed a UI glitch that prevented enabling Git provider integrations in the repository settings. (CY-3049)
-   Fixed an issue that prevented Codacy from displaying repositories in Bitbucket organizations. (CY-3048)
-   Fixed an issue that prevented Codacy from displaying repositories in GitHub organizations. (CY-3002)
-   Fixed an issue that caused deployments of the `codacy-tools` pod to fail. (CY-2990)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.6.2
-   Brakeman 4.3.1
-   BundlerAudit 0.6.1
-   Checkstyle 8.34
-   Clang-Tidy 10.0.1
-   CodeNarc 1.6
-   Coffeelint 2.1.0
-   **Cppcheck 2.2 (updated from 2.1)**
-   Credo 1.4.0
-   CSSLint 1.0.5
-   Detekt 1.10.0
-   ESLint 7.10.0
-   Flawfinder 2.0.11
-   Gosec v2.3.0
-   Hadolint 1.17.5
-   JacksonLinter 2.10.2
-   JSHint 2.12.0
-   PHP Code Sniffer 3.5.6
-   PHP Mess Detector 2.8.1
-   PMD (Legacy) 5.8.1
-   PMD 6.27.0
-   Prospector 1.2.0
-   PSScriptAnalyzer 1.18.3
-   Pylint (Python 3) 2.6.0
-   Pylint 1.9.5
-   RemarkLint 7.0.1
-   Revive 1.0.2
-   Rubocop 0.82.0
-   Scalastyle 1.0.0
-   ShellCheck v0.7.1
-   Sonar C# 8.13
-   Sonar Visual Basic 8.13
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2017.2.2
-   Stylelint 13.7.2
-   SwiftLint 0.39.2
-   Tailor 0.12.0
-   TSLint 5.14.0
-   TSQLLint 1.11.1
