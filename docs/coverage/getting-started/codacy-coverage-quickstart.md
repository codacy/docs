---
description: Set up Codacy Coverage to automatically analyze your code coverage reports and calculate coverage metrics for every commit and pull request.
nav_step: 0
---

# Codacy Coverage quickstart<!--TODO Remove? (5 min)-->

Codacy Coverage is an automated code quality and coverage platform that analyzes your source code and identifies issues as you go, helping your team ship robust software by scanning over 40 programming languages, such as JavaScript, Python, Java, C#, and PHP.

By integrating with your Git provider, Codacy keeps track of your team’s work, analyzes relevant commits, highlights problems, suggests improvements, and protects your codebase from unwelcome changes. From organization and repository level to individual files, pull requests, and commits, Codacy monitors the following metrics across your projects:

-   **Coverage**: the percentage of lines of code covered by automated tests

## Adding your first repository

<!--TODO {--% include-markdown "../assets/includes/nav-multistep-quickstart.md" %--}-->

To get started, head to [<span class="skip-vale">codacy.com</span>](https://www.codacy.com/)<!--TODO Review link--> and click **Get started**. Then, follow these steps:

1.  [Signing up](#signing-up)
1.  [Choosing an organization](#choosing-organization)
1.  [Adding repositories](#adding-repositories)

## 1. Signing up {: id="signing-up"}

Sign up with a Git provider such as GitHub, GitLab, or Bitbucket. This links your Codacy user with your Git provider user, making it easier to add repositories to Codacy and invite your teammates.

Codacy will request access to your Git provider during the authorization flow. [Check the permissions that Codacy requires and why](../../getting-started/which-permissions-does-codacy-need-from-my-account.md). Codacy will also ask you to fill in a few details about your company so we know a bit more about your use case.

## 2. Choosing an organization {: id="choosing-organization"}

Now, you'll need to add or join the organizations that contain your repositories. The organization with the same name as your Git provider username contains your personal repositories. Read more about [organizations on Codacy](../../organizations/what-are-organizations.md).

To start adding your repositories, select one of the organizations.

!!! note
    If you can't see the organization you're looking for, [follow these troubleshooting instructions](../../faq/troubleshooting/why-cant-i-see-my-organization.md).

![Choosing an organization](../../organizations/images/organization-add.png)  

## 3. Adding repositories {: id="adding-repositories"}

Next, add the repositories that you wish to analyze. Codacy begins an initial analysis as soon as you add a repository and sets everything up to ensure your next commits on that repository are analyzed.<!--TODO Review-->

!!! note
    You can only add repositories on Codacy if you have the [necessary permissions on your Git provider](../../organizations/roles-and-permissions-for-organizations.md).

![Adding repositories](../../organizations/images/repositories-add.png)

Click the link **Go to repository** to see the [code quality overview of your repository](../repositories/repository-dashboard.md) as soon as the initial analysis is complete:

![Repository dashboard](../repositories/images/repository-dashboard.png)

<!--TODO Review
**Congratulations, your new repository is ready!** To explore the initial analysis results, [check the **Issues** page](../repositories/issues.md).
-->

## Next steps

The first analysis is based on default tool and pattern configurations. It's now important that you configure your repository to integrate code analysis seamlessly into your existing pipeline. See how to [configure your repository to match the use cases of your team](configuring-your-repository.md).
