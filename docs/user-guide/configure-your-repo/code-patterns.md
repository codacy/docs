# Code Patterns

As a wise man once said, "You can't please everyone", and that is true for code patterns. But don't you worry! You can choose from a range of patterns to fit your needs.

## 1. Pattern details and filters

Each pattern has a title and a short description. To see a detailed explanation you can click on Show Details in the top right corner (mouse over the pattern and the Show Details option will appear):

![](/images/pattern-explanation.png)

The pattern explanation shows more detail about the issues it can detect and how to fix them.

You can filter the patterns by category using the side menu:

<img src="/images/c14f895e0f57610b7fd706e27b31925e785e1a184549e765daf9f1e69ad54602.png" width="693" height="177" />

### The issues detected by Codacy belong to one of the following categories:

**Code Style** - Code formatting and syntax problems. Ex: variable name style, enforce the use of brackets and quotation marks

**Error Prone** - Code that may hide bugs and language keywords that should be used with caution. Ex: == in Javascript or Option.get in Scala

**Code Complexity** - Highly complex methods and classes that should be refactored

**Performance** - Code that could have performance problems

**Compatibility** - Used mainly for frontend code, detects compatibility problems across different browser versions

**Unused Code** - Unused variables and methods, code that can't be reached

**Security** - All security problems

**Documentation** - Detects methods and classes that do not have the correct comment annotations

## 2. Configure your repository patterns

To configure the patterns used to analyse your repository simply click on the checkbox on the left of the title:

![](/images/enabled.png)

When you change the enabled patterns you can reanalyse your repository. To do that, just enter the latest commit from your list on the **Commit** view and click to [reanalyse](/hc/en-us/articles/213840489-How-do-I-reanalyse-my-commit-).

<figure>
<img src="/images/b76fc1f9e8dab5a1db65856b0dd09ce79a156a013573cdef5a700e823dc53547.png" width="637" height="450" alt="" />
</figure>

## 3. Account vs Repository Patterns

###  Account Patterns

Here you can change the default selection of patterns by enabling / disabling  them for all future repositories added by you. Just go to **Account Settings** -> **Default Patterns:**

![Account Patterns](/images/Screen_Shot_2018-01-12_at_11.21.22.png)

### Repository Patterns

Here you can specify the patterns you want to use for each repository. When you change your account patterns it doesn't affect pattern selection for repositories already added. You can go to **Code patterns**:

![Repository Patterns](/images/Screen_Shot_2019-06-18_at_17.57.58.png)

## 4. I have my own tool configuration file

If you have configuration files for your static analysis tool of choice, just add it to the root of your repository and Codacy will pick it up automatically.

**Supported Configuration files**

Codacy currently supports configuration files for several tools. To have results accordingly to your configuration file, you need to go to the Code Patterns view and select "Configuration file" for the respective tool and select the option as shown in the example below.

![Screen_Shot_2017-10-09_at_18.54.12.png](/images/Screen_Shot_2017-10-09_at_18.54.12.png)

The known file names for each tool are the following:

| Tool name                                                          | Language                                                   | Files detected                                                                                            | Other info                                                                                                                 |
| ------------------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Ameba                                                              | Crystal                                                    | .ameba.yml                                                                                                |                                                                                                                            |
| Bandit                                                             | Python                                                     | bandit.yml, .bandit                                                                                       | To solve flagged valid Python "assert" statements, create a bandit.yml in the root of the repo containing: skips: ['B101'] |
| Brakeman                                                           | Ruby                                                       | config/brakeman.yml                                                                                       |                                                                                                                            |
| Checkstyle                                                         | Java                                                       | checkstyle.xml                                                                                            | Supports config file in other dirs than root and can search up to 5 dirs into the repository.                              |
| Codenarc                                                           | Groovy                                                     | .codenarcrc                                                                                               |                                                                                                                            |
| credo                                                              | Elixir                                                     | .credo.exs                                                                                                |                                                                                                                            |
| CSSLint                                                            | CSS                                                        | .csslintrc                                                                                                |                                                                                                                            |
| detekt                                                             | Kotlin                                                     | default-detekt-config.yml, detekt.yml                                                                     | Supports config file in other dirs than root and can search up to 5 dirs into the repository.                              |
| ESLint                                                             | JavaScript, Typescript, JSON                               | .eslintrc.js, .eslintrc.yaml,.eslintrc.yml, .eslintrc.json,                                               |                                                                                                                            |
| .eslintrc                                                          | Plugins in the UI                                          |                                                                                                           |                                                                                                                            |
| Other Plugins                                                      |                                                            |                                                                                                           |                                                                                                                            |
| Hadolint                                                           | Docker                                                     | .hadolint.yaml                                                                                            |                                                                                                                            |
| JSHint                                                             | JavaScript                                                 | .jshintrc                                                                                                 |                                                                                                                            |
| PHP CodeSniffer                                                    | PHP                                                        | phpcs.xml, phpcs.xml.dist                                                                                 |                                                                                                                            |
| PHPMD                                                              | PHP                                                        | codesize.xml                                                                                              |                                                                                                                            |
| PMD                                                                | Apex, Java, Javascript, JSP, XML, Velocity and Visualforce | ruleset.xml, apex-ruleset.xml                                                                             | Supports config file in other dirs than root and can search up to 5 dirs into the repository.                              |
| Prospector                                                         | Python                                                     | .landscape.yml, .landscape.yaml, landscape.yml, landscape.yaml,                                           |                                                                                                                            |
| .prospector.yml, .prospector.yaml, prospector.yml, prospector.yaml |                                                            |                                                                                                           |                                                                                                                            |
| Pylint                                                             | Python                                                     | pylintrc, .pylintrc                                                                                       | Plugins                                                                                                                    |
| RemarkLint                                                         | Markdown                                                   | .remarkrc, .remarkrc.json, .remarkrc.yaml, .remarkrc.yml, .remarkrc.js                                    |                                                                                                                            |
| Rubocop                                                            | Ruby                                                       | .rubocop.yml                                                                                              |                                                                                                                            |
| ScalaStyle                                                         | Scala                                                      | scalastyle_config.xml, scalastyle-config.xml                                                              |                                                                                                                            |
| SCSSLint                                                           | SASS                                                       | .scss-lint.yml                                                                                            |                                                                                                                            |
| Sonar C#                                                           | C#                                                         | SonarLint.xml                                                                                             |                                                                                                                            |
| Spotbugs                                                           | Java, Scala                                                | findbugs.xml, findbugs-includes.xml, findbugs-excludes.xml                                                | Supports config file in other dirs than root and can search up to 5 dirs into the repository.                              |
| Stylelint                                                          | LESS, SASS, CSS                                            | .stylelintrc, stylelint.config.js, .stylelintrc.json, .stylelintrc.yaml, .stylelintrc.js, stylelintrc.yml | Supports config file in other dirs than root and can search up to 5 dirs into the repository.                              |
| SwiftLint                                                          | Swift                                                      | .swiftlint.yml                                                                                            |                                                                                                                            |
| Tailor                                                             | Swift                                                      | .tailor.yml                                                                                               |                                                                                                                            |
| TSLint                                                             | TypeScript                                                 | tslint.json                                                                                               |                                                                                                                            |
| tsqllint                                                           | SQL                                                        | .tsqllintrc                                                                                               |                                                                                                                            |

## 5. Configuring the repository root directory for analysis

By default, Codacy starts the analysis on the repository's root. However, you can set up a different repository folder on which to start the analysis using a [Codacy configuration file](/hc/en-us/articles/115002130625-Codacy-Configuration-File).
This file needs to be named **".codacy.yaml"** or **".codacy.yml"** and must be placed in the repository's root.

See example below:

```yaml
---
engines:
    rubocop:
    enabled: true
    exclude_paths:
        - config/engines.yml
    base_sub_dir: test/baseDir
```
