---
description: Configuring your repository
---

# Configuring your repository

Once you've [added your first repository](codacy-quickstart.md), it's important that you configure the analysis tools to match the use cases of your team and avoid any distracting false positives. In particular, you should configure any coding conventions and best practices that your team may already be following or that you want to enforce.

To configure your repository, follow these steps:

1.  [Ignoring files](#ignoring-files)
1.  [Configuring code patterns](#configuring-code-patterns)
1.  [Adding coverage reports](#adding-coverage-reports) (optional)

## 1. Ignoring files {: id="ignoring-files"}

[Ignore files](../repositories-configure/ignoring-files.md) to prevent Codacy from analyzing compiled code, third-party libraries, and any arbitrary collection of files and directories.

![Ignoring files](../repositories-configure/images/ignored-files.png)

## 2. Configuring code patterns {: id="configuring-code-patterns"}

[//]: # (TODO polish intro)

Codacy uses multiple tools to analyze the source code of a program without executing it, looking for code patterns. Each of these patterns matches one or more well-known issues, from simple typos to critical security risks. This type of code inspection is called static analysis.

[Configure code patterns](../repositories-configure/configuring-code-patterns.md) to adapt the analysis tools to your use case, leverage existing configuration files, and filter flagged issues.

!!! tip
    To ensure that multiple repositories consistently follow the same global tool and code pattern configurations, [use an organization coding standard](../organizations/using-a-coding-standard.md) instead.

![Configuring the tools and code patterns](../repositories-configure/images/code-patterns.png)

## 3. Adding coverage reports (optional) {: id="adding-coverage-reports"}

[Add coverage reports to Codacy](../coverage-reporter/index.md) to detail how much of your code is covered by tests and unify your quality and coverage pipelines. You can generate coverage reports locally using the best tool for your project and upload them to Codacy picking from a range of options: CI/CD integration, CLI, Docker, GitHub action, and more.

!!! important
    Setting up the coverage pipeline is a prerequisite for Codacy to act as a quality gate and block merging pull requests.

![Adding coverage reports to your repository](../coverage-reporter/images/coverage-codacy-ui.png)

## Next steps {: id="next-steps"}

Once you’re satisfied with your setup, [integrate Codacy with your Git workflow](integrating-codacy-with-your-git-workflow.md) to flag potential issues, block problematic pull requests, and display other useful suggestions directly on your Git provider.

!!! tip
    To showcase the current code quality grade and coverage, [add a Codacy badge to your repository](adding-a-codacy-badge.md).
