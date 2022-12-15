---
description: Tweak your repository settings
---

[//]: # (TODO)
[//]: # (  * meta description)
[//]: # (  * page links)

# Tweak Your Settings {: id="tweak-settings"}

 Check the static analysis results on the **Issues** page to [explore the initial analysis results](../repositories/issues.md).

 The first analysis is based on Codacy **default configurations**, so you should tweak and adapt the following configurations to match your preferences and specific scenario:

-   [Ignore files](../repositories-configure/ignoring-files.md) that you want to exclude from the Codacy analysis
-   [Configure the code patterns](../repositories-configure/configuring-code-patterns.md) that Codacy uses to analyze your repository
-   [Adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) to control quality gate that Codacy applies to your commits and pull requests

## You're all set! 🎉 {: id="all-set"}

Congratulations, your new repository is ready!

Optionally, you can also:

-   [Add coverage reports to Codacy](../coverage-reporter/index.md)
-   Configure Codacy to provide analysis feedback directly on [GitHub](../repositories-configure/integrations/github-integration.md#configuring), [GitLab](../repositories-configure/integrations/gitlab-integration.md#configuring), or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md#configuring) pull requests
-   [Use Codacy as a quality gate](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md) to block merging pull requests that don't meet your quality standards
-   [Add a Codacy badge to your repository](adding-a-codacy-badge.md) displaying the current code quality grade or code coverage
