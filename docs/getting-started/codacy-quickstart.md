---
description: Set up Codacy to automatically analyze your source code and identify issues as you go, helping you develop software more efficiently with fewer issues down the line. Codacy notifies you of security issues, code coverage, duplication, and complexity in every commit and pull request.
---

# Codacy quickstart (5 min)

Codacy is an automated code quality and coverage platform that analyzes your source code and identifies issues as you go, helping your team ship robust software by scanning over 40 programming languages, such as JavaScript, Python, Java, C#, and PHP.

Check out our product demo for an overview of Codacy's main features (recorded on February 4, 2022):

<div style="position: relative; padding-bottom: 61.224489795918366%; height: 0;"><iframe src="https://www.loom.com/embed/c1a408057e5c46eda4e3256eafae1f05" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

By integrating with your Git provider, Codacy keeps track of your team’s work, analyzes relevant commits, highlights problems, suggests improvements, and protects your codebase from unwelcome changes. From organization and repository level to individual files, pull requests, and commits, Codacy monitors the following metrics across your projects:

-   **Issues**: violations of a given rule, standard, convention, or best practice, from inconsistent code formatting to security risks
-   **Complexity**: a measure of the number of execution paths through a program's source code
-   **Duplication**: the amount of duplicated portions of code
-   **Coverage**: the percentage of lines of code covered by automated tests

To get started, head to [<span class="skip-vale">codacy.com</span>](https://www.codacy.com/) and click **Get started**. Then, follow the instructions below.

## 1. Sign up {: id="sign-up"}

Sign up with a Git provider such as GitHub, GitLab, or Bitbucket. This links your Codacy user with your Git provider user, making it easier to add repositories to Codacy and invite your teammates.

Codacy will request access to your Git provider during the authorization flow. [Check the permissions that Codacy requires and why](which-permissions-does-codacy-need-from-my-account.md). Codacy will also ask you to fill in a few details about your company so we know a bit more about your use case.

## 2. Choose an organization {: id="choose-organization"}

Now, you'll need to add or join the organizations that contain your repositories. The organization with the same name as your Git provider username contains your personal repositories. Read more about [organizations on Codacy](../organizations/what-are-organizations.md).

To start adding your repositories, select one of the organizations.

!!! note
    If you can't see the organization you're looking for, [follow these troubleshooting instructions](../faq/troubleshooting/why-cant-i-see-my-organization.md).

![Choosing an organization](../organizations/images/organization-add.png)  

## 3. Add repositories {: id="add-repositories"}

Next, add the repositories that you wish to analyze. Codacy begins an initial analysis as soon as you add a repository and sets everything up to ensure your next commits on that repository are analyzed.

!!! note
    You can only add repositories on Codacy if you have the [necessary permissions on your Git provider](../organizations/roles-and-permissions-for-organizations.md).

![Adding repositories](../organizations/images/repositories-add.png)

Click the link **Go to repository** to see the [code quality overview of your repository](../repositories/repository-dashboard.md) as soon as the initial analysis is complete:

![Repository dashboard](../repositories/images/repository-dashboard.png)

## You're all set! 🎉 {: id="all-set"}

Congratulations, your new repository is ready! To explore the initial analysis results, [check the **Issues** page](../repositories/issues.md).

## What next?

The first analysis is based on **default configurations**. We recommend that you [tweak and adapt your settings](tweak-your-settings.md) to match your preferences and specific scenario.
