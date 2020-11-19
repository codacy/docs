# Client-side tools

Client-side tools enable you to run any linter either locally or as part of your CI process and integrating the results into your Codacy workflow. This way, Codacy presents the analysis information reported by your linters alongside all other code quality information on the dashboards.

Codacy supports client-side tools in two ways:

-   **Standalone tools**

    Codacy provides converters that parse the output of third-party tools and upload the results to Codacy. You must download, configure, and run the third-party tools yourself.
    
    You can't configure these tools on the Codacy UI, since you manage their configuration locally.

-   **"Wrapped" tools**

    Codacy provides a wrapper for the tools, that you run using the Codacy Analysis CLI.
    
    The Codacy Analysis CLI runs these tools in a Docker container and applies the code pattern settings that you define on the Codacy UI together with the Codacy Analysis CLI command-line options.

The following table lists all the client-side tools that Codacy supports, with links to instructions on how to run them:

| Tool        | Type       | Setup instructions |
| ----------- | ---------- | ------------------ |
| Clang-Tidy  | Standalone | [Running Clang-Tidy](https://github.com/codacy/codacy-clang-tidy#usage){: target="_blank"} |
| Gosec       | Standalone | [Running Gosec](https://github.com/codacy/codacy-gosec#usage){: target="_blank"} |
| Staticcheck | Standalone | [Running Staticcheck](https://github.com/codacy/codacy-staticcheck#usage){: target="_blank"} |
| aligncheck  | "Wrapped"  | [Running aligncheck](running-aligncheck.md) |
| deadcode    | "Wrapped"  | [Running deadcode](running-deadcode.md) |
| SpotBugs<br/>(Includes the plugins [FBContrib](https://github.com/mebigfatguy/fb-contrib){: target="_blank"} and [Find Security Bugs](https://find-sec-bugs.github.io/){: target="_blank"} | "Wrapped" | [Running SpotBugs](running-spotbugs.md) |

## See also

See the full list of [supported languages and tools](../../getting-started/supported-languages-and-tools.md).
