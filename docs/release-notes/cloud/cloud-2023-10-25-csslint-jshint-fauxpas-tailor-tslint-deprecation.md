---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Deprecation of CSSLint, JSHint, Faux Pas, Tailor, TSLint October 25, 2023

On October 25th 2023 we deprecated the following tools: **CSSLint**, **Faux Pas**, **JSHint**, **Tailor**, and **TSLint**.

These tools have become deprecated or stopped being updated by their maintainers and started providing a bad experience to Codacy users either by reporting false positives or causing other unexpected issues.

We've been working on alternatives for each deprecated tool. See [what to do if you are using one of the deprecated tools](#if-you-are-using-one-of-these-tools).

## Removal of CSSLint and TSLint January 1, 2024

On January 1st, 2024 we'll be removing the following tools from Codacy: **CSSLint** and **TSLint**.

The remaining deprecated tools (Faux Pas, JSHint, and Tailor) will be removed later. You can follow the [Codacy release notes](https://docs.codacy.com/release-notes/) for further updates.

## If you are using one of these tools

To continue analyzing your repositories, enable the replacement tool for the corresponding deprecated tool listed below in your [organization coding standards](../../organizations/using-coding-standards.md) (recommended) or on the [code patterns page](../../repositories-configure/configuring-code-patterns.md) of each affected repository:

| Deprecated tool | Replacement tool |
|-----------------|------------------|
| CSSLint         | Stylelint        |
| Faux Pas        | Clang-Tidy       |
| JSHint          | ESLint           |
| Tailor          | SwiftLint        |
| TSLint          | ESLint           |

The suggested replacement tools are enabled by default for new repositories, except for Clang Tidy, which is a [client-side tool](../../repositories-configure/local-analysis/client-side-tools.md).

If you have any questions or need help, please contact <mailto:support@codacy.com>.
