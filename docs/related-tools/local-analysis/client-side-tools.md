# Client-side tools

Client-side tools enable you to run analysis either locally or as part of your CI process and integrating the results into your Codacy workflow. This way, Codacy presents the analysis information reported by your local tools alongside all other code quality information on the Codacy dashboards.

Codacy supports client-side tools in two ways:

-   **Standalone tools**

    Codacy provides auxiliary converters that parse the output of third-party tools, convert the output format, and upload the results to Codacy. You must download, configure, and run the third-party tools yourself.
    
    You can't configure these tools on the Codacy UI, since you manage their configuration locally.

-   **Containerized tools**

    Codacy provides a Docker image for the tools, and you run the images using the [Codacy Analysis CLI](running-local-analysis.md).
    
    The Codacy Analysis CLI fetches the code pattern settings that you define on the Codacy UI and applies them when running these tools.

The following table lists all the client-side tools that Codacy supports, with links to instructions on how to run them:

| Tool        | Type          | Setup instructions |
| ----------- | ------------- | ------------------ |
| Clang-Tidy  | Standalone    | [Running Clang-Tidy](https://github.com/codacy/codacy-clang-tidy#usage){: target="_blank"} |
| Gosec       | Standalone    | [Running Gosec](https://github.com/codacy/codacy-gosec#usage){: target="_blank"} |
| Staticcheck | Standalone    | [Running Staticcheck](https://github.com/codacy/codacy-staticcheck#usage){: target="_blank"} |
| aligncheck  | Containerized | [Running aligncheck](running-aligncheck.md) |
| deadcode    | Containerized | [Running deadcode](running-deadcode.md) |
| SpotBugs<br/>(Includes the plugins [FBContrib](https://github.com/mebigfatguy/fb-contrib){: target="_blank"} and [Find Security Bugs](https://find-sec-bugs.github.io/){: target="_blank"} | Containerized | [Running SpotBugs](running-spotbugs.md) |

## See also

See the full list of [supported languages and tools](../../getting-started/supported-languages-and-tools.md) to check the programming languages that the client-side tools can analyze.
