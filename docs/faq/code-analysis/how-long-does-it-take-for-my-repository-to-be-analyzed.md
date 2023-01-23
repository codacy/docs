# How long does it take for my repository to be analyzed?

Codacy usually takes under 5 minutes to analyze your repository. It may however take longer, depending on a number of factors:

-   The size of your repository
-   Whether it's the initial analysis of your repository
-   The priority of your analysis request, with open source projects having lower priority
-   The current load on Codacy's servers
-   The time it takes your Git provider to call the webhooks on Codacy
-   Whether Codacy is currently experiencing issues or outages

Codacy relies on post-commit hooks sent by your Git provider to trigger the analysis after each push to the repository, so if your analysis is taking a lot of time to start [check that the Post-Commit Hook integration for your repository is enabled](../../repositories-configure/integrations/post-commit-hooks.md).

Besides this, you can also [check Codacy's status page](https://status.codacy.com/) to see if there is any ongoing incident that could delay the analysis.
