---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Adding SQLFluff and Reek as new supported tools June, 2025

## SQLFluff

We’re excited to announce support for SQLFluff, a powerful SQL linter and formatter for a wide variety of SQL dialects. With SQLFluff, Codacy can now analyze your SQL queries for both formatting and best practice issues.

SQLFluff supports dialects like PostgreSQL, BigQuery, Snowflake, MySQL, and more. Key features include:

-  Detection of syntax and formatting inconsistencies
-  Enforcing common SQL conventions (indentation, casing, spacing)
-  Identification of potential logic errors in queries

## Reek

We’ve also added support for Reek, a static code analysis tool for Ruby that detects code smells. Reek helps you keep your codebase clean by identifying potential design problems and maintenance risks.

With Reek, Codacy will now:

-  Highlight methods and classes that are too complex or long
-  Detect duplicated code logic and unused parameters
-  Report on design smells like long parameter lists or feature envy

This makes it easier to maintain high-quality Ruby code and improve overall design.

### Important Note

None of these tools will be enabled by default: Due to the potential volume of new issues reported, SQLFluff or Reek are not enabled by default on existing repositories. You can enable them manually in your repository settings.

If you have any questions or need help, please contact <mailto:support@codacy.com>.
