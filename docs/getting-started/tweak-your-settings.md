---
description: Tweak your repository settings
---

# Tweak your settings

1.  [Ignoring files](#ignoring-files)
1.  [Configuring code patterns](#configuring-code-patterns)
1.  [Adjusting quality settings](#adjusting-quality-settings)
1.  [Adding coverage reports](#adding-coverage-reports)
1.  [Providing feedback to your Git provider](#git-provider-feedback)

## 1. Ignoring files {: id="ignoring-files"}

Ignoring non-essential files helps you avoid false positives, streamlines your quality pipeline, and encourages developers to adopt and keep following best practices.

[Configure ignore rules](../repositories-configure/ignoring-files.md) to prevent Codacy from analyzing compiled code, third-party libraries, and any collection of files and directories.

[//]: # (![Ignoring files]&#40;../repositories-configure/images/ignored-files.png&#41;)

## 2. Configuring code patterns {: id="configuring-code-patterns"}

Codacy uses multiple tools to analyze the source code of a program without executing it, looking for code patterns. Each of these patterns matches one or more well-known issues, from simple typos to critical security risks. This method of inspecting code is called static analysis.

[Configure code patterns](../repositories-configure/configuring-code-patterns.md) to adapt analysis tools to your use case, leverage existing configuration files, and start delivering code that’s more secure, performant, and maintainable.

!!! tip
    To apply the same configurations to multiple repositories, [use a coding standard](../organizations/using-a-coding-standard.md).

[//]: # (![Configuring the tools and code patterns]&#40;../repositories-configure/images/code-patterns.png&#41;)

## 3. Adjusting quality settings {: id="adjusting-quality-settings"}

Codacy’s settings let you configure the recommended values and goals for quality, duplication, and complexity metrics. They are always visible on Codacy's dashboard and [can even be enforced](setting-up-codacy-as-a-quality-gate.md) when integrating with your Git provider.

[Adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) to control the quality metrics of your code and deliver features that exceed expectations.

## 4. Adding coverage reports {: id="adding-coverage-reports"}

Code coverage reports detail how much of your code is covered by tests. High code coverage correlates with code that is well-tested, well-maintained, and reliable.

[Add coverage reports to Codacy](../coverage-reporter/index.md) to unify your coverage and static code analysis metrics. You can generate your reports using the best coverage tool for your needs and upload them to Codacy picking from a range of options: CI/CD integration, CLI, Docker, GitHub action, and more.

[//]: # (![Adding coverage reports to your repository]&#40;../coverage-reporter/images/coverage-codacy-ui.png&#41;)

## 5. Providing feedback to your Git provider {: id="git-provider-feedback"}

Once you’re satisfied with your setup, you can integrate Codacy into your team's Git workflow to offer suggestions, flag potential issues, and keep your code robust as you push changes.

Configure Codacy to provide feedback directly on [GitHub](../repositories-configure/integrations/github-integration.md), [GitLab](../repositories-configure/integrations/gitlab-integration.md), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md) pull requests by annotating the lines with new issues, displaying a summary view of changes, and reporting when your changes and code coverage are up to standard.
