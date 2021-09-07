---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v2.0.0.
---

# Self-hosted v2.0.0

These release notes are for [Codacy Self-hosted v2.0.0](https://github.com/codacy/chart/releases/tag/2.0.0){: target="_blank"}, released on August 18, 2020.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Breaking changes

This version of Codacy Self-hosted introduces the following breaking changes:

-   You must manually delete the existing RabbitMQ PVCs before upgrading Codacy.

    To do this, start by removing the RabbitMQ <span class="skip-vale">statefulset</span>:

    ```bash
    kubectl delete sts/codacy-rabbitmq-ha -n codacy
    ```

    Confirm the name of the PVCs that were created by RabbitMQ:

    ```bash
    kubectl get pvc -n codacy
    ```

    Finally, delete all the PVCs related to RabbitMQ. You should have three replicas which was the default for versions older than 2.0.0:

    ```bash
    kubectl delete pvc data-codacy-rabbitmq-ha-0 -n codacy
    kubectl delete pvc data-codacy-rabbitmq-ha-1 -n codacy
    kubectl delete pvc data-codacy-rabbitmq-ha-2 -n codacy
    ```

    !!! important
        After you upgrade Codacy, our chart will install a new version of RabbitMQ with the **new default of one replica**.

-   The structure of the file [`values-production.yaml`](https://docs.codacy.com/v2.0/chart/values-files/values-production.yaml){: target="_blank"} changed. You must update your version of the file to match the structure of the new file:

    -   The following analysis workers configuration values moved from:

        ```yaml
        worker-manager:
          config:
            workers:
                [...]
            workerResources:
                [...]
            pluginResources:
                [...]
        ```

        To:

        ```yaml
        global:
          workerManager:
            workers:
              config:
                [...]
                workerResources:
                    [...]
                pluginResources:
                    [...]
        ```

    -   The following database configuration values moved from:

        ```yaml
        hotspots-api:
          hotspotsdb:
            [...]
        
        activities:
          activitiesdb:
            [...]
        
        crow:
          crowdb:
            [...]
        ```

        To:
        
        ```yaml
        global:
          hotspotsdb:
            [...]
          activitiesdb:
            [...]
          crowdb:
            [...]
        ```

    -   The following Erlang cookie configuration was added to the RabbitMQ configuration values:

        ```yaml
        rabbitmq-ha:
          rabbitmqErlangCookie:  <--- erlang-cookie --->  # Generate one with `cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1`
          [...]
        ```

        When you previously installed Codacy, this cookie was automatically set to a random value. We recommend that you keep the same cookie to help ensure that the Codacy upgrade runs smoothly.

        Run the following command to retrieve the current cookie value and define it explicitly in the new configuration:

        ```bash
        kubectl get secrets -n codacy codacy-rabbitmq-ha -o jsonpath="{.data.rabbitmq-erlang-cookie}" | base64 --decode
        ```

## Product enhancements

-   The chart for Codacy Self-hosted now [supports Helm 3.3](https://docs.codacy.com/v2.0/chart/#2-installing-codacy).
-   Updated the RabbitMQ chart to version 7.5.7 from the Bitnami Helm chart repository.
-   Updated the MinIO chart to version 5.0.33 from the stable Helm chart repository.

## Bug fixes

-   Now, Codacy provides feedback if the Country field is empty while updating the invoice details for an organization. (CY-2600)
-   Fixed an issue that prevented users from finishing the onboarding process unless they added a Git provider organization. (CY-2580)
-   Fixed an issue that prevented Codacy from loading the organization data from the Git provider during the onboarding process. (CY-2572)
-   Fixed an issue that prevented Codacy from sending commit and pull request notification emails to members of an organization. (CY-2467)
-   Fixed an issue that could cause Codacy to display an HTTP 404 error page instead of the Repositories page for an organization. (CY-2356)
-   Fixed an issue that could cause Codacy to stop syncing Bitbucket Cloud repositories and updating pull requests in those repositories. (CY-2355)
-   Fixed an issue that could prevent new users from starting the onboarding wizard. (CY-2288)
-   Now, Codacy automatically navigates to the Organizations page after deleting an organization. (CY-2278)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   **Ameba: 0.13.1 (updated from 0.12.0)**
-   Bandit: 1.6.2
-   Brakeman: 4.3.1
-   bundler-audit: 0.6.1
-   Checkstyle: 8.34
-   **CodeNarc: 1.6 (updated from 1.5)**
-   CoffeeLint: 2.1.0
-   **Cppcheck: 2.1 (updated from 1.90)**
-   Credo: 1.3.0
-   CSSLint: 1.0.5
-   **detekt: 1.10.0 (updated from 1.8.0)**
-   **ESLint: 7.6.0 (updated from 6.8.0)**
-   Flawfinder: 2.0.11
-   Gorevive: 1.0.2
-   Gosec: v2.3.0
-   Hadolint: 1.17.5
-   Jackson Linter: 2.10.2
-   JSHint: 2.10.2
-   **PHP_CodeSniffer: 3.5.6 (updated from 3.5.5)**
-   Phpmd: 2.8.1
-   PMD (Legacy): 5.8.1
-   PMD: 6.25.0
-   Prospector: 1.2.0
-   PSScriptAnalyser: 1.18.3
-   Pylint Python3: 2.5.3
-   Pylint: 1.9.5
-   Remark Lint: 7.0.0
-   RuboCop: 0.82.0
-   Scalastyle: 1.0.0
-   ShellCheck: v0.7.0
-   **Sonar C#: 8.10 (updated from 8.9)**
-   **Sonar Visual Basic: 8.10 (updated from 8.9)**
-   **SpotBugs: 4.0.1 (updated from 4.0.0)**
-   SQLint: 0.1.9
-   Staticcheck: 2017.2.2
-   Stylelint: 13.6.1
-   **SwiftLint: 0.39.2 (updated from 0.36.0)**
-   Tailor: 0.12.0
-   TSLint: 5.14.0
-   TSQLLint: 1.11.1
