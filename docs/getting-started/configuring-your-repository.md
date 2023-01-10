---
description: Configuring your repository
---

# Configuring your repository

Once you've [added your repositories](codacy-quickstart.md), you can customize your setup to adapt the analysis tools to your use case, avoid false positives, and integrate code coverage analysis into your quality pipeline.

To customize your setup, follow these steps:

1.  [Ignoring files](#ignoring-files)
1.  [Configuring tools and code patterns](#configuring-code-patterns)
1.  [Adding coverage reports](#adding-coverage-reports) (optional)

## 1. Ignoring files {: id="ignoring-files"}

Ignoring non-essential files helps you avoid false positives, streamlines your quality pipeline, and encourages developers to adopt best practices and to keep following them.

[Configure ignore rules](../repositories-configure/ignoring-files.md) to prevent Codacy from analyzing compiled code, third-party libraries, and any collection of files and directories.

![Ignoring files](../repositories-configure/images/ignored-files.png)

## 2. Configuring code patterns {: id="configuring-code-patterns"}

Codacy uses multiple tools to analyze the source code of a program without executing it, looking for code patterns. Each of these patterns matches one or more well-known issues, from simple typos to critical security risks. This type of code inspection is called **static analysis**.

[Configure code patterns](../repositories-configure/configuring-code-patterns.md) to adapt analysis tools to your use case, leverage existing configuration files, and start delivering code that’s more secure, performant, and maintainable.

!!! tip
    To apply the same configurations to multiple repositories, [use a coding standard](../organizations/using-a-coding-standard.md).

![Configuring the tools and code patterns](../repositories-configure/images/code-patterns.png)

## 3. Adding coverage reports {: id="adding-coverage-reports"}

Code coverage reports detail how much of your code is covered by tests. High code coverage correlates with code that is well-tested, well-maintained, and reliable.

[Add coverage reports to Codacy](../coverage-reporter/index.md) to unify your coverage and static code analysis metrics. You can generate your reports using the best coverage tool for your needs and upload them to Codacy picking from a range of options: CI/CD integration, CLI, Docker, GitHub action, and more.

![Adding coverage reports to your repository](../coverage-reporter/images/coverage-codacy-ui.png)

## Next steps {: id="next-steps"}

-   Once you’re satisfied with your setup, you can [integrate Codacy with your Git workflow](integrating-codacy-with-your-git-workflow.md) to offer suggestions, flag potential issues, and block problematic pull requests.
-   You can also [add a Codacy badge to your repository](adding-a-codacy-badge.md) to display the current code quality grade or code coverage.
