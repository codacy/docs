# Client-side tools

Client-side tools allow running any linter either locally or as part of your CI process and then integrating the results into your Codacy workflow. This way, Codacy will present the results coming from your linters alongside all the other code quality information in the dashboards.

Currently, Codacy supports the client-side tools Clang-Tidy and Spotbugs. Read the guide to [set up Clang Tidy with Codacy](https://github.com/codacy/codacy-clang-tidy#usage), or [Spotbugs](/hc/en-us/articles/360023916013-Run-SpotBugs).

Keep in mind that before you send analysis information you must enable the setting **Run analysis through build server** under your repository **Settings** > **General** > **Repository analysis**.
