# Client-side tools

Client-side tools enable you to run analysis either locally or as part of your CI pipeline, and then integrating the results into Codacy. This way, Codacy presents the analysis information reported by your local tools alongside all other code quality information on the Codacy dashboards.

Codacy supports client-side tools in two ways:

-   **Standalone tools:** Codacy provides auxiliary converters that parse the output of third-party tools and convert to a format that you then upload to Codacy. You must download, configure, and run the third-party tools yourself.

    You can't configure these tools on the Codacy UI, since you manage their configuration locally.

-   **Containerized tools:** Codacy provides a Docker image for the tools, and you run the images using the [Codacy Analysis CLI](running-local-analysis.md).

    The Codacy Analysis CLI automatically fetches the code pattern settings that you define on the Codacy UI and applies them when running these tools.

## Running the client-side tools

!!! tip
    **If you're using GitHub** we recommend that you use the [Codacy Analysis CLI GitHub Action](https://github.com/codacy/codacy-analysis-cli-action#integration-with-codacy-for-client-side-tools) to run the client-side tools and upload the results to Codacy.

Follow the instructions on how to run the supported client-side tools:

<!--NOTE
    When adding a new supported tool, make sure that you update the following pages:

    docs/getting-started/supported-languages-and-tools.md
    docs/related-tools/codacy-plugin-tools.md
    docs/related-tools/local-analysis/client-side-tools.md (if the tool runs client-side)
    docs/repositories/security-monitor.md (if the tool reports security issues)
    docs/repositories-configure/configuring-code-patterns.md (supported configuration files table, or list of tools that don't support configuration files)
    docs/repositories-configure/codacy-configuration-file.md (list of tool short names to use on the Codacy configuration file)
-->

-   [aligncheck](running-aligncheck.md) (containerized)
-   [Clang-Tidy](https://github.com/codacy/codacy-clang-tidy#usage) (standalone)
-   [deadcode](running-deadcode.md) (containerized)
-   [Faux Pas](https://github.com/codacy/codacy-faux-pas#usage) (standalone)
-   [Gosec](https://github.com/codacy/codacy-gosec#usage) (standalone)
-   [SpotBugs](running-spotbugs.md) (containerized)
-   [Staticcheck](https://github.com/codacy/codacy-staticcheck#usage) (standalone)

## See also

See the full list of [supported languages and tools](../../getting-started/supported-languages-and-tools.md) to check the programming languages that each client-side tool can analyze.
