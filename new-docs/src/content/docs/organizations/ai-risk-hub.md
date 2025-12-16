---
title: AI Risk Hub
description: The organization's AI Risk Hub dashboard provides an overview of all the AI issues detected in the repositories applied to the organization's AI Policy standard and your organization's risk level based on your AI practices.
---

# AI Risk Hub

The **AI Risk Hub** dashboard provides an overview of all the AI issues detected in the repositories applied to the organization's AI Policy standard and your organization's risk level based on your AI practices. Here, you can navigate through the issues detected in your repositories and filter them by severity and category. You can also filter the issues by selecting specific repositories or using [the segments that you have set up](segments.md).

:::caution
Currently this tab is a preview of a Business tier feature.
:::

![AI Risk Hub dashboard](images/ai-risk-hub-dashboard.png)

To access the AI Risk Hub dashboard, select an organization from the top navigation bar and click on the **AI Risk Hub** tab at the top of the page.

The AI Risk Hub dashboard includes the following sections to help you monitor AI risk in your organization:

- [AI Policy Compliance](#ai-policy-compliance)
- [Repositories with most AI issues](#repositories-with-most-ai-issues)
- [Risk Level](#risk-level)
- [AI Risk Checklist](#ai-risk-checklist)
## AI Policy Compliance

Our AI Policy is a pre-defined, curated ruleset designed to prevent risks and vulnerabilities that are inherent to AI code from entering the codebase – which can be enforced immediately across all repositories and pull request checks.
You can enable Codacy's AI Policy by clicking on the button on the right side of the section. This creates a coding standard that applies AI related patterns to your repositories, safeguarding them from AI risks.
When the policy is enabled, you are able to view a real distribution of the AI issues found distributed by severity and AI category.
When you already have the AI Policy enabled, you can see an edit button which allows you to edit the repositories that have this policy applied.

![AI Policy Compliance](images/ai-policy-compliance.png)

The AI Policy covers four groups of AI-specific risks:

### Unapproved model calls

Ensure no disallowed models are used in production and get visibility around any compliance misuses.

### AI Safety

Ensures safety practices are enforced and applied with the use of these new technologies.

### Hardcoded Secrets

Ensures anything created or used by AI is protected from misusage.

### Vulnerabilities (Insecure dependencies / SCA)

Ensures protection on all fronts, by integrating vulnerability detection through your entire organization.


## Repositories with most AI issues

This list displays repositories in descending order based on the number of AI issues. Depending on the filters applied, the list will show repositories with the most AI open issues, grouped by severity or AI category.


![Repositories with most AI issues](images/repositories-with-most-ai-issues.png)

## Risk Level

This panel shows the organizational AI Risk Level based on the implementation (or lack) of a range of essential AI safeguards that can be enabled in Codacy.
The possible risk levels are: High, Medium, and Low, considering special control factors you can enable in Codacy.
These control factors are specified in the **AI Risk Checklist**.

![Risk Level](images/risk-level.png)

## AI Risk Checklist

With most repositories today being subject to GenAI code contributions, the checklist covers essential source code controls that we recommend to enable across all projects within your organization:

- AI Policy enabled: Enable the AI Policy inside the AI Risk Hub tab.
- Coverage enabled: Set up code coverage for your repositories. See how to [upload coverage data](../coverage-reporter/index.md) to Codacy.
- Enforced gates: Add [gates to your repositories](../repositories-configure/adjusting-quality-gates.md), and preferentially [apply repositories to gate policies](./using-gate-policies.md). 
- Protected pull requests: Protect your pull requests by [enforcing quality gates](../getting-started/integrating-codacy-with-your-git-workflow.md#blocking-pull-requests).
- Daily vulnerability scans: [Enable Proactive SCA](./managing-security-and-risk.md#dependencies-list) to protect your repositories from dependencies vulnerabilities.
- Applications scanned: [Enable App scanning](./managing-security-and-risk.md#app-scanning) to scan Web Applications and APIs for security vulnerabilities.

![AI Risk Checklist](images/ai-risk-checklist.png)
