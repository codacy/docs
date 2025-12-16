---
title: How to customize the analysis rules for Codacy Guardrails
---

By default, if no API token is provided in the [MCP Server setup](codacy-guardrails-getting-started.md/#3-install-mcp-server), Codacy uses a predefined configuration that includes all recommended rules (or [code patterns](../repositories-configure/configuring-code-patterns.md) that you can find on many parts of our product) from the supported built-in scanners.

However, when an API token is used, Codacy automatically retrieves the current rule configuration directly from your repository.

You can configure your rules in one of two ways:


-  Using [built-in scanner configuration files](#using-configuration-files)–for version-controlled setups.

-  Using the [Codacy UI](#using-the-codacy-ui)–for quick, manual adjustments.

:::note
If you're already using a configuration file, please we recommend you can follow the first way. Otherwise, the second way is the best for you, so you can configure directly in the Codacy platform.
:::

## Using configuration files

The table below lists the configuration file names that Codacy detects and supports for each built-in scanner:

<table>
  <thead>
    <tr>
      <th>Scanner name</th>
      <th>Languages</th>
      <th>Files detected</th>
      <th>Other info</th>
    <tr>
  </thead>
  <tbody>
  <tr>
    <td>dartanalyzer</td>
    <td>Dart</td>
    <td><code>analysis_options.yaml</code></td>
    <td><a href="https://dart.dev/guides/language/analysis-options">Customizing static analysis</a></td>
  </tr>
  <tr>
    <td>ESLint v8</td>
    <td>JavaScript, TypeScript</td>
    <td><code>.eslintrc.js</code>, <code>.eslintrc.cjs</code>, <code>.eslintrc.yaml</code>, <code>.eslintrc.yml</code>, <code>.eslintrc.json</code></td>
    <td></td>
  </tr>
  <tr>
    <td>PMD</td>
    <td>Apex, Java, JavaScript, JSP, PL/SQL, XML, Velocity and Visualforce</td>
    <td><code>ruleset.xml</code>, <code>apex-ruleset.xml</code></td>
    <td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
  </tr>
  <tr>
    <td>Pylint</td>
    <td>Python</td>
    <td><code>pylintrc</code>, <code>.pylintrc</code></td>
    <td><a href="https://github.com/codacy/codacy-pylint-python3/blob/master/requirements.txt">Plugins</a></td>
  </tr>
  <tr>
    <td>Semgrep</td>
    <td>Apex, C++, C#, Dockerfile, Elixir, GitHub Actions, Go, Java, JavaScript, Kotlin, PHP, Python, Ruby, Rust, Scala, Shell, Swift, Terraform, TypeScript</td>
    <td><code>.semgrep.yaml</code></td>
    <td></td>
  </tr>
  </tbody>
</table>


To use a configuration file for a static analysis tool:

1.  Make sure the configuration file is located in the root of the [default Codacy branch](../repositories-configure/managing-branches.md).

2.  Open the repository **Code patterns** page, select the tool of interest, and activate the toggle to use a configuration file.

:::note
-   After activating a configuration file for a tool, Codacy uses that configuration file even if you [exclude it from Codacy analysis](../repositories-configure/ignoring-files.md).
-   When [using a tool configuration file alongside a coding standard](../organizations/using-coding-standards.md#using-with-tool-configuration), the configuration file controls the code patterns, while the coding standard controls whether the tool is enabled or disabled.
-   Codacy uses the version of the configuration file **in the branch being analyzed**. For example, if you open a pull request that includes changes to the configuration file, the analysis results take those changes into account.
-   If Codacy analyzes a branch that doesn't include the configuration file, Codacy reverts to using the code patterns configured for the tool before you selected the option **Configuration file** on the Code patterns page.
-   For performance reasons, when you update pattern settings using a configuration file, Codacy may display outdated messages for issues identified previously by those patterns.
:::


![Using a configuration file](images/code-patterns-config-file.png)



## Using the Codacy UI

If you want to use Codacy UI, there are two ways you can follow to configure the built-in scanner rules:

-  Using the [Code Patterns](../repositories-configure/configuring-code-patterns.md) configuration, if you want to configure the rules per repository or
-  Using [Coding Standards](../organizations/using-coding-standards.md), if you want to configure the rules for multiple repositories

### Code Patterns

By default, Codacy analyzes your repositories using a subset of the supported analysis scanners and rules. These defaults are based on current best practices and community feedback, and you can adapt them to your needs. This feature is available in every repository you have on Codacy.

In order to set up your rules, please follow the next steps:


1.  Open your repository **Code patterns** page.

    ![Code patterns page](images/code-patterns.png)

2.  Enable or disable the tools that Codacy will use to analyze the repository.

    ![Toggling tools](images/code-patterns-toggle-tools.png)

3.  Select a tool to enable or disable its code patterns. To make it easier to find relevant patterns, use the filters above the pattern list. You can filter by [issue category](../faq/code-analysis/which-metrics-does-codacy-calculate.md#issues), status, severity level, or display only recommended code patterns.

    To see an explanation of the issues that a pattern detects and how to fix them, click the respective dropdown arrow.

    !!! tip
        -   To enable a group of code patterns, use the filter to select the relevant group of patterns and click the checkbox in the header of the patterns list.

        -   Codacy displays the tag **New** for one month next to the name of newly added code patterns.

    ![Configuring code patterns](images/code-patterns-configure.png)

### Coding Standards

Coding standards enable the analysis of multiple repositories with the same scanner and rules configurations, ensuring consistent code quality across your organization. Multiple coding standards can be applied to the same repository. For example, you can use coding standards to ensure that a group of repositories follow the same security rules or coding conventions.

To apply or edit a repository's [coding standards](../organizations/using-coding-standards.md), click **Customize** in the **Following ...** section at the top of the **Code patterns** page.

![Customize applied coding standards](images/code-patterns-cs-customize.png)

Select the coding standards that you want to follow or stop following and click **Apply**.

![Customize applied coding standards](images/code-patterns-cs-customize-modal.png)

:::note
-  Scanners and rules enabled by a coding standard are enforced and can't be disabled.
-  You can add extra scanners and rules, if these aren't enabled by any applied coding standard.
:::