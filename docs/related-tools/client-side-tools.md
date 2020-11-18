# Client-side tools

Client-side tools enable you to run any linter either locally or as part of your CI process and integrating the results into your Codacy workflow. This way, Codacy presents the analysis information reported by your linters alongside all other code quality information on the dashboards.

Currently, Codacy supports the client-side tools below. Follow the links to set up these client-side tools with Codacy:

-   [Clang Tidy](https://github.com/codacy/codacy-clang-tidy#usage)
-   [Gosec](https://github.com/codacy/codacy-gosec#usage)
-   [SpotBugs](running-spotbugs.md)
-   [Staticcheck](https://github.com/codacy/codacy-staticcheck#usage)

!!! important
    Before sending analysis information from client-side tools you must enable the setting **Run analysis through build server** in your repository **Settings**, tab **General**, **Repository analysis**.
    
    This enables Codacy to wait for the results of the local analysis before resuming the analysis of your commits.
