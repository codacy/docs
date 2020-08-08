# Client-side tools

Client-side tools allow running any linter either locally or as part of your CI process and then integrating the results into your Codacy workflow. This way, Codacy will present the results coming from your linters alongside all the other code quality information in the dashboards.

Currently, Codacy supports the client-side tools Clang-Tidy, Gosec, and Spotbugs. Read the guides to set up these client-side tools with Codacy:

-   [Clang Tidy](https://github.com/codacy/codacy-clang-tidy#usage)
-   [Gosec](https://github.com/codacy/codacy-gosec#usage)
-   [Spotbugs](run-spotbugs.md)

Keep in mind that before you send analysis information you must enable the setting **Run analysis through build server** in your repository **Settings**, tab **General**, **Repository analysis**.
