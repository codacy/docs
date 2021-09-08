# How long does it take for my repository to be analyzed?

Codacy usually takes under 5 minutes to analyze your repository, however it may take longer as this depends on the size of your repository.

Codacy relies on post-commit hooks sent by your Git provider to trigger the analysis after each push to the repository, so if your analysis is taking a lot of time to start [check that the Post-Commit Hook integration for your repository is enabled](../../repositories-configure/integrations/post-commit-hooks.md).
