# Client-side tools

Client-side tools enable you to run analysis either locally or as part of your CI pipeline, and then integrating the results into Codacy. This way, Codacy presents the analysis information reported by your local tools alongside all other code quality information on the Codacy dashboards.

Codacy supports client-side tools in two ways:

-   **Containerized tools:** Codacy provides a Docker image for the tools, and you run the images using the [Codacy Analysis CLI](running-local-analysis.md).

    The Codacy Analysis CLI automatically fetches the code pattern settings that you define on the Codacy UI and applies them when running these tools.

-   **Standalone tools:** Codacy provides auxiliary converters that parse the output of third-party tools and convert to a format that you then upload to Codacy. You must download, configure, and run the third-party tools yourself.

    You can't configure these tools on the Codacy UI, since you manage their configuration locally.

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

<table>
<thead>
    <tr>
        <th>Language</th>
        <th>Client-side tools</th>
        <th>Usage instructions</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>C, C++</td>
        <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a></td>
        <td><a href="https://github.com/codacy/codacy-clang-tidy#usage">Running Clang-Tidy</a> (standalone)</td>
    </tr>
    <tr>
        <td rowspan="4">Go</td>
        <td><a href="https://gitlab.com/opennota/check">aligncheck</a></td>
        <td><a href="../running-aligncheck/">Running aligncheck</a> (containerized)</td>
    </tr>
    <tr>
        <td><a href="https://github.com/tsenart/deadcode">deadcode</a></td>
        <td><a href="../running-deadcode/">Running deadcode</a> (containerized)</td>
    </tr>
    <tr>
        <td><a href="https://github.com/securego/gosec">Gosec</a></td>
        <td><a href="https://github.com/codacy/codacy-gosec#usage">Running Gosec</a> (standalone)</td>
    </tr>
    <tr>
        <td><a href="https://staticcheck.io/">Staticcheck</a></td>
        <td><a href="https://github.com/codacy/codacy-staticcheck#usage">Running Staticcheck</a> (standalone)</td>
    </tr>
    <tr>
        <td>Java, Scala</td>
        <td><a href="https://spotbugs.github.io/">SpotBugs</a></td>
        <td><a href="../running-spotbugs/">Running SpotBugs</a> (containerized)</td>
    </tr>
    <tr>
        <td rowspan="2">Objective-C</td>
        <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a></td>
        <td><a href="https://github.com/codacy/codacy-clang-tidy#usage">Running Clang-Tidy</a> (standalone)</td>
    </tr>
    <tr>
        <td><a href="http://fauxpasapp.com/">Faux Pas</a></td>
        <td><a href="https://github.com/codacy/codacy-faux-pas#usage">Running Faux Pas</a> (standalone)</td>
    </tr>
</table>

## See also

See the full list of [supported languages and tools](../../getting-started/supported-languages-and-tools.md) to check the programming languages that each client-side tool can analyze.
