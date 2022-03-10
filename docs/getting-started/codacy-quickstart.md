---
description: Set up Codacy to automatically analyze your source code and identify issues as you go, helping you develop software more efficiently with fewer issues down the line. Codacy notifies you of security issues, code coverage, duplication, and complexity in every commit and pull request.
---

# Codacy quickstart (5 min)

Codacy automatically analyzes your source code and identifies issues as you go, helping you develop software more efficiently with fewer issues down the line. Through static code review analysis, Codacy notifies you of security issues, code coverage, code duplication, and code complexity in every commit and pull request.

Check out our product demo for an overview of the main Codacy features:

<div style="position: relative; padding-bottom: 61.224489795918366%; height: 0;"><iframe src="https://www.loom.com/embed/c1a408057e5c46eda4e3256eafae1f05" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

To get started, head to [<span class="skip-vale">codacy.com</span>](https://www.codacy.com/) and click **Get started**.

## 1. Sign up {: id="sign-up"}

Sign up with a Git provider such as GitHub, GitLab, or Bitbucket. This links your Codacy user with your Git provider user, making it easier to add repositories to Codacy and invite your teammates.

Codacy will request access to your Git provider during the authorization flow. [Check the permissions that Codacy requires and why](which-permissions-does-codacy-need-from-my-account.md). Codacy will also ask you to fill in a few details about your company so we know a bit more about your use case.

## 2. Choose an organization {: id="choose-organization"}

Now, you'll need to add or join the organizations that contain your repositories. The organization with the same name as your Git provider username contains your personal repositories. Read more about [organizations on Codacy](../organizations/what-are-synced-organizations.md).

![Choosing an organization](../organizations/images/organization-add.png)  

To start adding your repositories, select one of the organizations.

!!! note
    If you can't see the organization you're looking for, [follow these troubleshooting instructions](../faq/general/why-cant-i-see-my-organization.md).

## 3. Add repositories {: id="add-repositories"}

Next, add the repositories that you wish to analyze. Codacy begins an initial analysis as soon as you add a repository and sets everything up to ensure your next commits on that repository are analyzed.

![Adding repositories](../organizations/images/repositories-add.png)

!!! note
    You can only add repositories on Codacy if you have the [necessary permissions on your Git provider](../organizations/roles-and-permissions-for-synced-organizations.md).

Click the link **Go to repository** to see the [code quality overview of your repository](../repositories/repository-dashboard.md) as soon as the initial analysis is complete:

![Repository dashboard](../repositories/images/repository-dashboard.png)

## 4. Tweak your repository settings {: id="tweak-settings"}

 Check the static analysis results on the **Issues** page to [explore the initial analysis results](../repositories/issues.md).

 The first analysis is based on Codacy **default configurations**, so you should tweak and adapt the following configurations to match your preferences and specific scenario:

-   [Ignore files](../repositories-configure/ignoring-files.md) that you want to exclude from the Codacy analysis
-   [Configure the code patterns](../repositories-configure/configuring-code-patterns.md) that Codacy uses to analyze your repository
-   [Adjust the quality settings](../repositories-configure/adjusting-quality-settings.md) to control quality gate that Codacy applies to your commits and pull requests

## You're all set! 🎉 {: id="all-set"}

Congratulations, your new repository is ready!

Optionally, you can also:

-   [Add coverage reports to Codacy](../coverage-reporter/index.md)
-   [Use Codacy as a quality gate](../faq/general/how-do-i-block-merging-prs-using-codacy-as-a-quality-gate.md) to block merging pull requests that don't meet your quality standards.
-   [Add a Codacy badge to your repository](adding-a-codacy-badge.md) displaying the current code quality grade or code coverage
