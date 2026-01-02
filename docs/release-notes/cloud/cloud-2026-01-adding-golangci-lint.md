---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---


# Adding Golangci-lint as new supported tool – January 2026


## golangci-lint (Client-side Go tool)

We’re excited to announce support for [golangci-lint](https://golangci-lint.run/), a fast Go linters aggregator. With this addition, you can now run golangci-lint locally on your Go projects and upload the results to Codacy for analysis and reporting.

**How it works:**

- golangci-lint is a client-side tool: you install and run it locally in your environment.
- Codacy acts as an uploader, collecting and displaying the results in your dashboard.
- This approach gives you full control over the linter configuration and execution.

**To get started:**

1. [Install golangci-lint](https://golangci-lint.run/usage/install/) on your machine or CI environment.
2. Run golangci-lint on your Go codebase to generate a report.
3. Use Codacy’s uploader to send the results to your Codacy project.

Refer to our documentation for detailed setup instructions.


### Important Note

This tool will not be enabled by default: Due to the potential volume of new issues reported, golangci-lint, is not enabled by default on existing repositories. You can enable them manually in your repository settings.

If you have any questions or need help, please contact <mailto:support@codacy.com>.
