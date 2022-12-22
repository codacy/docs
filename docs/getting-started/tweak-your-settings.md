---
description: Tweak your repository settings
---

[//]: # (TODO)
[//]: # (  - Add a meta description)
[//]: # (  - Promote the quality badge section elsewhere. We removed it here to avoid redundancy)
[//]: # (  - The instructions to set up a PR quality gate are missing. Integrate them:)
[//]: # (     - [Use Codacy as a quality gate]&#40;../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md&#41; to block merging pull requests that don't meet your quality standards)
[//]: # (     - The gist: Optionally, by defining the minimum acceptable quality values for users to merge code, PR quality gates safeguard the reliability of your codebase.)

# Tweak Your Settings {: id="tweak-settings"}

1.  [Ignoring files](#ignoring-files)
1.  [Configuring code patterns](#configuring-code-patterns)
1.  [Adjusting quality settings](#adjusting-quality-settings)
1.  [Adding coverage reports](#adding-coverage-reports)
1.  [Providing feedback to your Git provider](#git-provider-feedback)

## 1. Ignoring files {: id="ignoring-files"}

Analyzing only the code that matters keeps your quality pipeline simple and effective, encourages developers to follow best practices, and avoids false positives and noisy warnings.

[Ignore non-essential files](../repositories-configure/ignoring-files.md) to prevent Codacy from analyzing compiled code, third-party libraries, or any arbitrary collection of files and directories.

## 2. Configuring code patterns {: id="configuring-code-patterns"}

Codacy examines the source code of a program without executing it, looking for code patterns. Each of these patterns matches one or more well-known issues that may impact your codebase, from simple typos to critical security risks.

[Configure code patterns](../repositories-configure/configuring-code-patterns.md) to enable only the tools that most matter to you, leverage existing configuration files, formalize internal best practices, and consistently deliver code that’s more secure, performant, maintainable, and readable.

## 3. Adjusting quality settings {: id="adjusting-quality-settings"}

Codacy’s settings let you configure the recommended values and goals for quality, duplication, and complexity metrics. They are always visible on Codacy's dashboard and can be enforced when [integrating with your Git provider](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md).

[Adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) to control the quality metrics of your code and deliver features that exceeds expectations.

## 4. Adding coverage reports {: id="adding-coverage-reports"}

High code coverage points to well-tested code. Well-tested code suggest there are fewer bugs. Code coverage reports detail how much of your code is covered by tests.

[Add coverage reports to Codacy](../coverage-reporter/index.md) and unify your coverage and static code analysis metrics. Generate your reports using the best coverage tool for your needs and upload them to Codacy picking from a range of options (CI/CD integration, CLI, Docker, GitHub action, and more)

## 5. Providing feedback to your Git provider {: id="git-provider-feedback"}

Once you’re satisfied with your setup, integrating Codacy with your team's existing workflow in your Git provider offers suggestions, flags potential issues, and helps keep your code robust as you push changes.

Configure Codacy to provide feedback directly on [GitHub](../repositories-configure/integrations/github-integration.md#configuring), [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring) pull requests by annotating the lines with new issues, displaying a summary view of changes, and reporting when your changes and code coverage are up to standard.
