---
description: Set up Codacy to automatically analyze your source code and identify issues as you go, helping you develop software more efficiently with fewer issues down the line. Codacy notifies you of security issues, code coverage, duplication, and complexity in every commit and pull request.
nav_step: 0
---

# Codacy quickstart (5 min)

Codacy is an automated code quality and coverage platform that analyzes your source code and identifies issues as you go, helping your team ship robust software by scanning over 40 programming languages, such as JavaScript, Python, Java, C#, and PHP.

Check out our product demo for an overview of Codacy's main features (recorded on May 13, 2024):

<div style="position: relative; padding-bottom: 61.224489795918366%; height: 0;"><iframe src="https://www.loom.com/embed/1ed27d66b659427883ddd28e57468c22" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

By integrating with your Git provider, Codacy keeps track of your team’s work, analyzes relevant commits, highlights problems, suggests improvements, and protects your codebase from unwelcome changes. From organization and repository level to individual files, pull requests, and commits, Codacy monitors the following metrics across your projects:

-   **Issues**: violations of a given rule, standard, convention, or best practice, from inconsistent code formatting to security risks
-   **Complexity**: a measure of the number of execution paths through a program's source code
-   **Duplication**: the amount of duplicated portions of code
-   **Coverage**: the percentage of lines of code covered by automated tests

## Adding your organization to Codacy

{% include-markdown "../assets/includes/nav-multistep-quickstart.md" %}

To get started, head to [<span class="skip-vale">codacy.com</span>](https://www.codacy.com/) and click **Start free**. Then, follow these steps:

1.  [Signing up](#signing-up)
1.  [Choosing an organization](#choosing-organization)

## 1. Signing up {: id="signing-up"}

Sign up with a Git provider such as GitHub, GitLab, or Bitbucket. This links your Codacy user with your Git provider user, making it easier to add repositories to Codacy and invite your teammates.

Codacy will request access to your Git provider during the authorization flow. [Check the permissions that Codacy requires and why](which-permissions-does-codacy-need-from-my-account.md).

## 2. Choosing an organization {: id="choosing-organization"}

Now, you'll need to add or join the organizations that contain your repositories. The organization with the same name as your Git provider username contains your personal repositories. Read more about [organizations on Codacy](../organizations/what-are-organizations.md).

To proceed, select one of the organizations.

!!! note
    If you can't see the organization you're looking for, [follow these troubleshooting instructions](../faq/troubleshooting/why-cant-i-see-my-organization.md).

![Choosing an organization](../organizations/images/organization-add.png)  

## Next steps

Before adding your repositories to Codacy, it's important that you [configure your organization](./configuring-your-organization.md) to align with your corporate policies and ensure consistent code quality across your repositories.
