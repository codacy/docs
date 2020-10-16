# Self-hosted v2.2.1

These release notes are for [Codacy Self-hosted v2.2.1](https://github.com/codacy/chart/releases/tag/2.2.1){: target="_blank"}, released on October ###, 2020.

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

This version of Codacy Self-hosted includes the tool versions below.

