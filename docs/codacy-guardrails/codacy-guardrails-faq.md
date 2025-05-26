# FAQs

## Is Guardrails only for AI-generated code?
No — while it's AI-aware, it scans all code in real-time, regardless of how it was written.

## How is Guardrails different from Codacy’s traditional analysis?
Guardrails is IDE-first and real-time. It complements Codacy’s platform analysis by catching issues earlier in the development cycle.

## Does Guardrails work offline?
Yes, local scanning via Codacy CLI works offline. API-based features (like querying metrics) require connectivity.

## What sort of security and quality standards can I enforce with Codacy Guardrails?
Codacy Guardrails detects and auto-remediates security risks and quality issues in JavaScript, TypeScript, Python, and Java, including:

SAST vulnerabilities
Hardcoded secrets
Insecure dependencies
Error prone code
Performance issues
Best practices
Complex code
Code duplications
Styling violations
Configuring and enforcing coding standards at scale across all IDEs in your organization requires a Codacy Team or Business subscription.

## Is my data secure?
Codacy Guardrails is not a large language model, but an IDE extension that uses an MCP Server to communicate with existing AI coding agents owned by the user.

## When I change some analysis configuration in the UI, is it automatically applied to Guardrails?
We're still working on this feature but in order to update the new tool configuration. you should run the command in your repository:

``` bash
codacy-cli init
```

This way Codacy will run the latest configuration.

## Does guardrails generate code for me?
Yes. When you ask to fix an issue or change your current code, for example, it generates the code but then you'll need to accept the changes.