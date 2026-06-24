---
title: Adding Lizard and Ruff as new supported tools February, 2025
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
slug: /release-notes/cloud/cloud-2025-02-adding-ruff-lizard
---


## Lizard

With Lizard, Codacy can now detect and report code complexity issues across 15 different languages, helping developers write cleaner, more maintainable code. Specifically, it will:

-   Flag methods with cyclomatic complexity above the set threshold
-   Report functions that have too many parameters
-   Identify methods that exceed a reasonable number of lines (excluding comments)

These insights will be available at the commit, PR, and file levels, integrated into GitHub and IDE, just like the issues reported by the other static analysis tools.

### Important Notes

Not enabled by default (for now): Since Lizard may introduce a significant number of new issues, we’ve opted not to activate it by default (though this may change in the future)

### Tool vs. Metric

Currently, Lizard operates as a tool, meaning it does not impact:

-   File-level complexity scores
-   Complexity Quality gates
-   Dashboard complexity metrics

However, we plan to integrate it as a metric soon—stay tuned!

## Ruff

We've increased our offering in Python tools and we added Ruff as our new tool for Quality.
Ruff is a fast Python linter designed to be a drop-in replacement for tools like Flake8, isort, and Black. This tool significantly outperforms traditional Python linters, making it ideal for large codebases. Ruff supports over 500 linting rules and type-aware linting.

Currently it's compatible with **Python up to 3.13**

If you have any questions or need help, please contact [support@codacy.com](mailto:support@codacy.com).
