---
description: Configuring your repository
---

# Configuring your repository

Once you've [added your first repository](codacy-quickstart.md), **it's important that you configure it** for your use case. A well-tuned setup seamlessly integrates code analysis into your development pipeline while avoiding false positives. This encourages your team to adopt and commit to best practices.

To customize your setup, follow these steps:

1.  [Ignoring files](#ignoring-files)
1.  [Configuring tools and code patterns](#configuring-code-patterns)
1.  [Adding coverage reports](#adding-coverage-reports) (optional)

## 1. Ignoring files {: id="ignoring-files"}

[Ignore files](../repositories-configure/ignoring-files.md) to prevent Codacy from analyzing compiled code, third-party libraries, and any arbitrary collection of files and directories.

![Ignoring files](../repositories-configure/images/ignored-files.png)

## 2. Configuring code patterns {: id="configuring-code-patterns"}

[Configure code patterns](../repositories-configure/configuring-code-patterns.md) to adapt analysis tools to your use case, leverage existing configuration files, and tackle issues from simple typos to critical security risks.

!!! tip
    To apply the same configurations to multiple repositories, [set up a coding standard](../organizations/using-a-coding-standard.md).

![Configuring the tools and code patterns](../repositories-configure/images/code-patterns.png)

## 3. Adding coverage reports {: id="adding-coverage-reports"}

[Add coverage reports to Codacy](../coverage-reporter/index.md) to detail how much of your code is covered by tests and unify your quality and coverage pipelines.

You can generate coverage reports using the best tool for your needs and upload them to Codacy picking from a range of options: CI/CD integration, CLI, Docker, GitHub action, and more.

!!! tip
    High code coverage correlates with code that is well-tested, well-maintained, and reliable.

![Adding coverage reports to your repository](../coverage-reporter/images/coverage-codacy-ui.png)

## Next steps {: id="next-steps"}

Once you’re satisfied with your setup, [integrate Codacy with your Git workflow](integrating-codacy-with-your-git-workflow.md) to flag potential issues, block problematic pull requests, and display other useful suggestions directly on your Git provider.

!!! tip
    To showcase the current code quality grade and coverage, [add a Codacy badge to your repository](adding-a-codacy-badge.md) 
