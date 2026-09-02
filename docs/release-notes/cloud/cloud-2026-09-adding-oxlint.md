---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---


# Adding Oxlint as new supported tool – September 2026

We're excited to announce support for [Oxlint](https://github.com/oxc-project/oxc), a fast Rust-based linter for JavaScript and TypeScript from the Oxc project. With this addition, Codacy can now automatically analyze your JavaScript and TypeScript projects for correctness, style, and best-practice issues (among other categories), reporting them directly in your dashboard.

**Why it matters:**

* Oxlint is built for speed, running significantly faster than traditional JS/TS linters.
* It covers a broad set of rules out of the box, including many equivalents to popular ESLint rules and plugins, so you can catch common issues without heavy configuration, like:
    *  ESLint (core rules)
    *  typescript-eslint
    *  React Ecosystem (react, react-hooks, react-refresh, react-perf)
    *  @next/eslint-plugin-next
    *  eslint-plugin-unicorn
    *  Testing (jest, vitest)
    *  eslint-plugin-vue
    *  Additional Standards: import, jsdoc, jsx-a11y, n (Node), and promise

**How it works:**

- Oxlint runs as a fully integrated Codacy engine, so there's nothing to install or configure locally.
- Simply enable the tool in your repository settings and Codacy will run it automatically as part of your regular analysis.
- You can configure rules directly through the Codacy UI, or use your repository's own configuration file (`.oxlintrc.json`, `.oxlintrc.jsonc`, `oxlint.config.json`, or `oxlint.config.jsonc`).

**To get started:**

1. Go to your repository settings in Codacy.
2. Enable Oxlint under the list of supported tools.
3. Select the patterns you'd like to enforce, or rely on your repository's existing configuration file.

Refer to our [documentation](https://github.com/codacy/codacy-oxlint) for detailed setup instructions.


If you have any questions or need help, please contact <mailto:support@codacy.com>.