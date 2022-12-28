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

Analyzing only the code that matters avoids false positives and keeps your quality pipeline simple and effective, encouraging developers to follow best practices.

[Ignore non-essential files](../repositories-configure/ignoring-files.md) to prevent Codacy from analyzing compiled code, third-party libraries, and any arbitrary collection of files and directories.

## 2. Configuring code patterns {: id="configuring-code-patterns"}

Codacy leverages multiple tools to examine the source code of a program without executing it, looking for code patterns. Each of these patterns matches one or more well-known issues that may impact your codebase, from simple typos to critical security risks.

[Configure code patterns](../repositories-configure/configuring-code-patterns.md) to enable only the analysis tools that most matter to you, leverage existing tool configuration files, formalize internal best practices, and consistently deliver code that’s more secure, performant, maintainable, and readable.

## 3. Adjusting quality settings {: id="adjusting-quality-settings"}

Codacy’s settings let you configure the recommended values and goals for quality, duplication, and complexity metrics. They are always visible on Codacy's dashboard and can even be enforced when [integrating with your Git provider](setting-up-codacy-as-a-quality-gate.md).

[Adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) to control the quality metrics of your code and deliver features that exceed expectations.

## 4. Adding coverage reports {: id="adding-coverage-reports"}

Code coverage reports detail how much of your code is covered by tests. High code coverage in turn correlates with code that is well-tested, well-maintained, and reliable.

[Add coverage reports to Codacy](../coverage-reporter/index.md) and unify your coverage and static code analysis metrics. You can generate your reports using the best coverage tool for your needs and upload them to Codacy picking from a range of options (CI/CD integration, CLI, Docker, GitHub action, and more)

## 5. Providing feedback to your Git provider {: id="git-provider-feedback"}

Once you’re satisfied with your setup, integrating Codacy with your team's existing workflow in your Git provider offers suggestions, flags potential issues, and helps keep your code robust as you push changes.

Configure Codacy to provide feedback directly on [GitHub](../repositories-configure/integrations/github-integration.md#configuring), [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring) pull requests by annotating the lines with new issues, displaying a summary view of changes, and reporting when your changes and code coverage are up to standard.
