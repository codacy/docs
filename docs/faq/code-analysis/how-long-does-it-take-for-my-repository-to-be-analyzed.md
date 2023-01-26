# How long does it take for my repository to be analyzed?

Codacy usually takes under 5 minutes to analyze your repository. It may however take longer, depending on a number of factors:

-   **Whether it's the initial analysis of your repository**

    The initial analysis examines all files in the repository, while each subsequent commit triggers an analysis only on files changed in that commit.

-   **Whether tool configurations have been updated**

    Updates to tool configurations trigger a reanalysis on all files in the repository at the next commit and may impact analysis duration.

-   **The size of your repository**

    To speed up the analysis, [ignore any files and directories](../../repositories-configure/ignoring-files.md) that aren't relevant to your project, such as generated code or any third-party libraries included in your repositories.

-   **The time it takes your Git provider to trigger the analysis**

    Codacy relies on post-commit hooks sent by your Git provider to trigger the analysis after each push to the repository, so if your analysis is taking a lot of time to start [check that the Post-Commit Hook integration for your repository is enabled](../../repositories-configure/integrations/post-commit-hooks.md).

-   **The priority of your analysis request**

    Open-source projects have lower priority in Codacy's analysis queues.

-   **Whether Codacy or your Git provider is currently experiencing issues or outages**

    Check [Codacy's status page](https://status.codacy.com/) and the status page of your Git provider ([GitHub](https://www.githubstatus.com/), [GitLab](https://status.gitlab.com/), [Bitbucket](https://bitbucket.status.atlassian.com/)) to see if there is any ongoing incident that could delay the analysis.

-   **The current load on Codacy's servers**
