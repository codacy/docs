# Self-hosted v2.0.0 for Kubernetes

These release notes are for [Codacy Self-hosted v2.0.0](https://github.com/codacy/chart/releases/tag/2.0.0) for Kubernetes. [Follow these instructions](https://docs.codacy.com/chart/maintenance/upgrade/) to upgrade Codacy.

## Breaking changes

This version of Codacy Self-hosted introduces changes to the file [`values-production.yaml`](/chart/values-files/values-production.yaml){: target="_blank"}. You must update your version of the file to match the structure of the new file:

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

## Product enhancements

-   Now, the chart for Codacy Self-hosted also [supports Helm 3.3](/v2.0/chart/#2-installing-codacy).

## Bug fixes

-    Now, Codacy provides feedback if the Country field is empty while updating the invoice details for an organization. (CY-2600)
-    Fixed an issue that prevented users from finishing the onboarding process unless they added a Git provider organization. (CY-2580)
-    Fixed an issue that prevented Codacy from loading the organization data from the Git provider during the onboarding process. (CY-2572)
-    Fixed an issue that prevented Codacy from sending commit and pull request notification emails to members of an organization. (CY-2467)
-    Fixed an issue that could cause Codacy to display an HTTP 404 error page instead of the Repositories page for an organization. (CY-2356)
-    Fixed an issue that could cause Codacy to stop syncing Bitbucket Cloud repositories and updating pull requests in those repositories. (CY-2355)
-    Fixed an issue that could prevent new users from starting the onboarding wizard. (CY-2288)
-    Now, Codacy automatically navigates to the Organizations page after deleting an organization. (CY-2278)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   **Ameba: 0.13.1 (updated from 0.12.0)**
-   Bandit: 1.6.2
-   Brakeman: 4.3.1
-   Bundler Audit: 0.6.1
-   Checkstyle: 8.34
-   **Codenarc: 1.6 (updated from 1.5)**
-   **Codesniffer: 3.5.6 (updated from 3.5.5)**
-   Coffeelint: 2.1.0
-   **Cppcheck: 2.1 (updated from 1.90)**
-   Credo: 1.3.0
-   Csslint: 1.0.5
-   **Detekt: 1.10.0 (updated from 1.8.0)**
-   **Eslint: 7.6.0 (updated from 6.8.0)**
-   Flawfinder: 2.0.11
-   Gorevive: 1.0.2
-   Gosec: v2.3.0
-   Hadolint: 1.17.5
-   Jackson Linter: 2.10.2
-   Jshint: 2.10.2
-   Phpmd: 2.8.1
-   Pmdjava: 5.8.1
-   Pmdjava: 6.25.0
-   Prospector: 1.2.0
-   Psscriptanalyzer: 1.18.3
-   Pylint Python3: 2.5.3
-   Pylint: 1.9.5
-   Remark Lint: 7.0.0
-   Rubocop: 0.82.0
-   Scalastyle: 1.0.0
-   Shellcheck: v0.7.0
-   **Sonar Csharp: 8.10 (updated from 8.9)**
-   **Sonar Visual Basic: 8.10 (updated from 8.9)**
-   **Spotbugs: 4.0.1 (updated from 4.0.0)**
-   Sqlint: 0.1.9
-   Staticcheck: 2017.2.2
-   Stylelint: 13.6.1
-   **Swiftlint: 0.39.2 (updated from 0.36.0)**
-   Tailor: 0.12.0
-   Tslint: 5.14.0
-   Tsqllint: 1.11.1
