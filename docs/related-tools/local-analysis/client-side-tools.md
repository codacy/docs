# Client-side tools

Client-side tools enable you to run analysis either locally or as part of your CI process and integrating the results into your Codacy workflow. This way, Codacy presents the analysis information reported by your local tools alongside all other code quality information on the Codacy dashboards.

Codacy supports client-side tools in two ways:

-   **Standalone tools**

    Codacy provides auxiliary converters that parse the output of third-party tools and convert to a format that you then upload to Codacy using the API. You must download, configure, and run the third-party tools yourself.

    You can't configure these tools on the Codacy UI, since you manage their configuration locally.

-   **Containerized tools**

    Codacy provides a Docker image for the tools, and you run the images using the [Codacy Analysis CLI](running-local-analysis.md).

    The Codacy Analysis CLI automatically fetches the code pattern settings that you define on the Codacy UI and applies them when running these tools.

## Running the client-side tools

!!! tip
    **If you're using GitHub** we recommend that you use the [Codacy Analysis CLI GitHub Action](https://github.com/codacy/codacy-analysis-cli-action#integration-with-codacy-for-client-side-tools) to run the client-side tools and upload the results to Codacy.

Follow the instructions on how to run the supported client-side tools:

<!--NOTE
    When adding a new client-side tool, also update:

    docs/getting-started/supported-languages-and-tools.md
    docs/related-tools/codacy-plugin-tools.md
-->

-   [aligncheck](running-aligncheck.md) (Containerized)
-   [Clang-Tidy](https://github.com/codacy/codacy-clang-tidy#usage) (Standalone)
-   [deadcode](running-deadcode.md) (Containerized)
-   [Faux Pas](https://github.com/codacy/codacy-faux-pas#usage) (Standalone)
-   [Gosec](https://github.com/codacy/codacy-gosec#usage) (Standalone)
-   [SpotBugs](running-spotbugs.md) (Containerized)
-   [Staticcheck](https://github.com/codacy/codacy-staticcheck#usage) (Standalone)

## See also

See the full list of [supported languages and tools](../../getting-started/supported-languages-and-tools.md) to check the programming languages that the client-side tools can analyze.
