---
description: Tweak your repository settings
---

[//]: # (TODO)
[//]: # (  * meta description)
[//]: # (  * remove WIP note)

!!! important
    This page is still a WIP. Don't review yet.

# Tweak Your Settings {: id="tweak-settings"}

## Tweaking your repository settings

### Configure code patterns

-   [Configure the code patterns](../repositories-configure/configuring-code-patterns.md) that Codacy uses to analyze your repository

What

-   Static analysis examines the source code of a program without executing it, looking for code patterns.
-   Each of these patterns matches one or more well-known issues that may impact your codebase, from simple typos to critical security risks.

Importance

-   Code patterns help you consistently deliver code that’s secure, performant, maintainable, and readable.

Benefits

-   Formalize your internal best practices.
-   Enable only the tools that highlight the issues that most matter to you.
-   Leverage your own tool configuration files.

### Adjust quality settings

-   [Adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) to control quality gate that Codacy applies to your commits and pull requests

What

-   Codacy’s quality settings let you configure the recommended values and goals for established quality metrics.
-   This helps you deliver reliable and maintainable code.
-   Codacy uses these settings to display the results as passing or not passing on the app dashboard.

Importance
   
-   Having control over the quality metrics of your code helps you deliver a product that exceeds expectations.

Benefits

-   Configure goals for quality, duplication, and complexity that your team can strive for.
-   The goal are not necessarily enforced, but the team members are aware of them and motivated to act.

### Ignore files

-   [Ignore files](../repositories-configure/ignoring-files.md) that you want to exclude from the Codacy analysis

Importance

-   Analyzing only the code that matters keeps your quality pipeline simple and effective, encouraging developers to follow best practices.

What
   
-   You can choose to prevent Codacy from analyzing any number of files or directories.

Benefits

-   Avoid wasting time and the cognitive load of managing unneeded analysis.
-   Avoid false positives and noisy warnings.
-   Avoid analyzing compiled files and third-party libraries

## Optional steps

### Add coverage reports

-   [Add coverage reports to Codacy](../coverage-reporter/index.md)

Importance

-   High code coverage points to well-tested code. Well-tested code suggest there are fewer bugs.

What

-   Code coverage reports detail how much of your code is covered by tests.
-   Several tools can help you generate coverage reports.
-   Choose the code coverage tool that best fits your needs, generate your reports, and send them to Codacy picking from a range of options (CI/CD integration, CLI, Docker, GitHub action, and more)

Benefits

-   Centralize coverage with static code analysis metrics.

### Configure Codacy to provide feedback to your Git provider and act as a quality gate

-   Configure Codacy to provide analysis feedback directly on [GitHub](../repositories-configure/integrations/github-integration.md#configuring), [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring) pull requests
-   [Use Codacy as a quality gate](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md) to block merging pull requests that don't meet your quality standards

What

-   Once you’re satisfied with your setup, integrating Codacy with your git provider offers suggestions, flags potential issues, and keeps your code robust as you push changes.
-   Optionally, by defining the minimum acceptable quality values for users to merge code, quality gates safeguard the reliability of your codebase.

Importance

-   Integrating feedback in the team’s existing workflow helps you deliver improvements faster and more reliably.

Benefits

-   Report to your Git provider whether your changes and code coverage are up to standard as configured on the quality settings of your repository.
-   Annotate the lines where Codacy finds new issues, linking to more details about the issues and suggestions to fix them.
-   Show a summary view of changes, including new issues and metrics such as complexity, and duplication.

### Add Codacy badge to your repository

-   [Add a Codacy badge to your repository](adding-a-codacy-badge.md) displaying the current code quality grade or code coverage
What

-   Status badges are visible on your main repo page and show statistics of interest about the repository.

Importance

-   By showing whether a workflow is currently failing or passing, status badges signal the quality of your repositories to potential users.

Benefits

-   Code quality or code coverage
-   Give your users a quick way to collect metrics
-   Improve readability of a repository

