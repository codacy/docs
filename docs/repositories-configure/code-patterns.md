# Code patterns

By default, Codacy uses a subset of the patterns that exist for each tool to analyze your repositories. These default patterns result from community feedback or existing coding standards.

However, you can create a coding standard adapted to your scenario by configuring the tool patterns that Codacy uses to analyze each repository:

1.  Open your repository **Code patterns** page and select the tool to configure:

    ![Configuring code patterns](images/code-pattern-configure.png)

1.  Enable or disable the patterns using the checkbox for each pattern.

    To see a detailed explanation about the issues that a pattern can detect and how to fix them, click **Details** on the top right-hand corner of the pattern. Some patterns also allow you to configure the rules:

    ![Code pattern details](images/code-pattern-detail.png)

1.  Optionally, [manually reanalyze your repository](../faq/repositories/how-do-i-reanalyze-my-repository.md) to immediately take the changes into account. Otherwise, Codacy will use the new configuration when it analyzes a new commit or pull request.

## Category filters

To make it easier to find relevant patterns, you can use the sidebar to filter the patterns by category:

![Filtering code patterns](images/code-pattern-category.png)

The issues detected by Codacy belong to one of the following categories:

-   **Code Style:** Code formatting and syntax problems. For example, variable names style, enforcing the use of brackets and quotation marks
-   **Error Prone:** Code that may hide bugs and language keywords that should be used with caution. For example, the operator `==` in JavaScript or `Option.get` in Scala
-   **Code Complexity:** High complexity methods and classes that should be refactored
-   **Performance:** Code that could have performance problems
-   **Compatibility:** Used mainly for frontend code, detects compatibility problems across different browser versions
-   **Unused Code:** Unused variables and methods, code that can't be reached
-   **Security:** All security problems
-   **Documentation:** Detects methods and classes that don't have the correct comment annotations

## Setting a default configuration for new repositories {: id="set-default"}

If you're adding multiple repositories to Codacy that should reuse the same pattern configuration for a tool, you can define that configuration as the default. Codacy automatically applies that default configuration to new repositories.

To apply the same pattern configuration to multiple repositories:

1.  Add the first repository and configure the patterns on that repository for the relevant tools.

1.  For each tool, expand the menu at the top of the pattern list and select **Set default**.

    This option sets the current pattern configuration as the default for your account when adding new repositories to Codacy.

    ![Setting a default pattern configuration](images/code-pattern-set-default.png)

1.  Add the remaining repositories to Codacy.

    The new repositories will automatically use the tool pattern configuration that you set as default.

To reset the pattern configuration of a tool back to the default provided by Codacy:

1.  Expand the menu at the top of the pattern list for that tool and select **Reset** to revert the configuration back to the one provided by Codacy.

1.  Select **Set default** on the same menu to reset the default configuration.

## Importing pattern configurations from another repository

<!-- TODO 

= Jira Epic =

- We want to import the patterns of the target tools
  ?? So, only the tools that exist on the target repository are imported?

= Figma =

- What happens with submodules? we think it will keep working

-->

Importing tool and pattern configurations from another repository can help you bootstrap and standardize the coding standard across your repositories.

<!-- TODO How the feature works and limitations

Permissions:
-   The user importing the configurations must have the necessary permissions (??) over the source repository to be able to see and select it on the drop-down list.

What the import feature is in practice:
-   The configuration on the target repository is independent from the one on the source repository, and therefore can be changed independently of one another. (The feature imports the configuration from one repository to another, with no "ties" to the source configuration.)

Matching of tools between source and target repositories:
-   The import only works for tools that are active (there are languages for those tools) on both the source and the target repositories.
-   Importing the configurations from another repository may override the existing configurations on the target repository for the tools that exist on the source repository.
-   Conversely, all the tools that do not exist on the source repository will be left untouched.


-   The import doesn't change the "mode" of the tool: tools using UI configurations keep using UI configurations, while tools using configuration files keep using configuration files. However, the import always copies the UI pattern configurations, independent of the mode that source and target tools are using.
    -   For example, if later on the user changes from configuration file to UI configuration, the imported configurations will be available.
    -   (Since the import does not copy the configuration files themselves and only the UI configuration, keeping the settings to use configuration files unchanged makes sense and simplifies the process.)

-   The import will copy the on/off status of the tools from the source repository to the target repository.

-->

![Importing code patterns from another repository](images/code-patterns-import.png)

## Using your own tool configuration files

<!-- TODO Consider including the configuration file names reference somewhere else (see https://github.com/codacy/docs/issues/43) -->

Codacy supports configuration files for several tools. To use a configuration file for your static analysis tool:

1.  Add the configuration file to the root of your repository.

1.  Open your repository **Code patterns** page and select **Configuration file** for the respective tool:

    ![Using a configuration file](images/code-pattern-config-file.png)

The known file names for each tool are the following:

<table>
<tbody>
<tr>
<td>Tool name</td>
<td>Language</td>
<td>Files detected</td>
<td>Other info</td>
</tr>
<tr>
<td>Ameba</td>
<td>Crystal</td>
<td>.ameba.yml</td>
<td></td>
</tr>
<tr>
<td><a href="https://docs.openstack.org/bandit/latest/config.html">Bandit</a></td>
<td>Python</td>
<td>bandit.yml, .bandit</td>
<td>To solve flagged valid Python "assert" statements, create a bandit.yml in the root of the repository containing: <code>skips: \['B101'\]</code></td>
</tr>
<tr>
<td>Brakeman</td>
<td>Ruby</td>
<td>config/brakeman.yml</td>
<td></td>
</tr>
<tr>
<td>Checkstyle</td>
<td>Java</td>
<td>checkstyle.xml</td>
<td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
</tr>
<tr>
<td>CodeNarc</td>
<td>Groovy</td>
<td>.codenarcrc</td>
<td></td>
</tr>
<tr>
<td>Credo</td>
<td>Elixir</td>
<td>.credo.exs</td>
<td></td>
</tr>
<tr>
<td>CSSLint</td>
<td>CSS</td>
<td>.csslintrc</td>
<td></td>
</tr>
<tr>
<td>Detekt</td>
<td>Kotlin</td>
<td>default-detekt-config.yml, detekt.yml</td>
<td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
</tr>
<tr>
<td><a href="https://eslint.org/docs/user-guide/configuring">ESLint</a></td>
<td>JavaScript, Typescript, JSON</td>
<td>.eslintrc.js, .eslintrc.yaml,.eslintrc.yml, .eslintrc.json,<br />
.eslintrc</td>
<td><a href="https://github.com/codacy/codacy-eslint/blob/master/src/eslintDefaultOptions.ts#L26">Plugins in the UI</a><br />
 <a href="https://github.com/codacy/codacy-eslint/blob/master/package.json#L119">Other Plugins</a></td>
</tr>
<tr>
<td>Hadolint</td>
<td>Docker</td>
<td>.hadolint.yaml</td>
<td></td>
</tr>
<tr>
<td>JSHint</td>
<td>JavaScript</td>
<td>.jshintrc</td>
<td></td>
</tr>
<tr>
<td><a href="https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage">PHP CodeSniffer</a></td>
<td>PHP</td>
<td>phpcs.xml, phpcs.xml.dist</td>
<td></td>
</tr>
<tr>
<td>PHPMD</td>
<td>PHP</td>
<td>codesize.xml</td>
<td></td>
</tr>
<tr>
<td>PMD</td>
<td>Apex, Java, JavaScript, JSP, XML, Velocity and Visualforce</td>
<td>ruleset.xml, apex-ruleset.xml</td>
<td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
</tr>
<tr>
<td>Prospector</td>
<td>Python</td>
<td>.landscape.yml, .landscape.yaml, landscape.yml, landscape.yaml,<br />
.prospector.yml, .prospector.yaml, prospector.yml, prospector.yaml</td>
<td></td>
</tr>
<tr>
<td>Pylint</td>
<td>Python</td>
<td>pylintrc, .pylintrc</td>
<td><a href="https://github.com/codacy/codacy-pylint/blob/master/requirements.txt">Plugins</a></td>
</tr>
<tr>
<td>RemarkLint</td>
<td>Markdown</td>
<td>.remarkrc, .remarkrc.json, .remarkrc.yaml, .remarkrc.yml, .remarkrc.js</td>
<td></td>
</tr>
<tr>
<td>Rubocop</td>
<td>Ruby</td>
<td>.rubocop.yml</td>
<td></td>
</tr>
<tr>
<td>Scalastyle</td>
<td>Scala</td>
<td>scalastyle_config.xml, scalastyle-config.xml</td>
<td></td>
</tr>
<tr>
<td>SCSSLint</td>
<td>SASS</td>
<td>.scss-lint.yml</td>
<td></td>
</tr>
<tr>
<td>Sonar C#</td>
<td>C#</td>
<td>SonarLint.xml</td>
<td></td>
</tr>
<tr>
<td>SpotBugs</td>
<td>Java, Scala</td>
<td>findbugs.xml, findbugs-includes.xml, findbugs-excludes.xml</td>
<td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
</tr>
<tr>
<td>Stylelint</td>
<td>LESS, SASS, CSS</td>
<td>.stylelintrc, stylelint.config.js, .stylelintrc.json, .stylelintrc.yaml, .stylelintrc.js, stylelintrc.yml</td>
<td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
</tr>
<tr>
<td>SwiftLint</td>
<td>Swift</td>
<td>.swiftlint.yml</td>
<td></td>
</tr>
<tr>
<td>Tailor</td>
<td>Swift</td>
<td> .tailor.yml</td>
<td></td>
</tr>
<tr>
<td>TSLint</td>
<td>TypeScript</td>
<td>tslint.json</td>
<td></td>
</tr>
<tr>
<td>tsqllint</td>
<td>SQL</td>
<td>.tsqllintrc</td>
<td></td>
</tr>
<tr>
<td>Revive</td>
<td>Go</td>
<td>revive.toml</td>
<td></td>
</tr>
</tbody>
</table>

!!! note
    For performance reasons, if you make changes to pattern settings using configuration files, Codacy may display outdated messages for issues that have already been identified by those patterns.
