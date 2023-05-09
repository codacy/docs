---
description: Configure Codacy to match the coding conventions and best practices that your team may already be following or that you want to promote.
nav_step: 1
---

# Configuring your repository

<!--TODO {--% include-markdown "../assets/includes/nav-multistep-quickstart.md" %--}-->

Once you've added your first repository, it's important that you configure Codacy's analysis tools to match the use cases of your team, such as configuring any coding conventions and best practices that your team may already be following or that you want to promote. It's also critical to review the configurations to avoid reporting false positives or any other issues that don't bring value to your team, which can introduce unwanted delays to the development process.

You can optionally add coverage reports to detail how much of your code is covered by tests and unify your quality and coverage pipelines. You can generate coverage reports and upload them to Codacy using a range of options, such as CI/CD integration, CLI, Docker, GitHub action, and more.

To configure your repository, follow these steps:

1.  [Adding coverage reports](#adding-coverage) (optional)

## 1. Adding coverage to your repository (optional) {: id="adding-coverage"}

If you want to use code coverage to block merging pull requests that don't meet your quality standards, make sure that you [add coverage to your repository](../../coverage-reporter/index.md).

It's important that you set up coverage beforehand because Codacy can only report the coverage status for pull requests after receiving reports for the last commits **on both the pull request branch and the target branch**.

![Adding coverage to your repository](../../coverage-reporter/images/coverage-codacy-ui.png)

## Next steps {: id="next-steps"}

Once you're satisfied with your setup, [integrate Codacy with your Git workflow](integrating-codacy-with-your-git-workflow.md) to flag potential issues, block problematic pull requests, and display other useful suggestions directly on your Git provider.

!!! tip
    To showcase the current code quality grade and coverage, [add a Codacy badge to your repository](../../getting-started/adding-a-codacy-badge.md).
