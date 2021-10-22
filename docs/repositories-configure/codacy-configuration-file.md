---
description: Use the Codacy configuration file to configure advanced features on Codacy with more control such as ignoring files for duplication or a specific tool, configuring the root directory to start the analysis, and adding custom file extensions to languages.
---

# Codacy configuration file

Codacy supports configuring certain advanced features through a configuration file:

-   Ignoring files globally, for duplication, or a specific tool

-   Configuring a specific repository directory on which to start the analysis

-   Adding custom file extensions to languages, keeping in mind that some tools might not work out of the box with those extensions

!!! note
    -   If a Codacy configuration file exists in your repository, the [Ignored files settings](ignoring-files.md) defined on the Codacy UI don't apply.
    -   To disable a tool you must use the [Code patterns page](configuring-code-patterns.md) instead.

To use a Codacy configuration file:

1.  Create a text file with the name `.codacy.yml` or `.codacy.yaml` on the root of your repository.

1.  Add your settings to the configuration file based on the example template below.

    !!! important
        The configuration file must start with a line containing a triple dash (`---`).

    ```yaml
    ---
    engines:
      rubocop:
        exclude_paths:
          - "config/test.yml"
        base_sub_dir: "test/baseDir"
      duplication:
        exclude_paths:
          - "config/test.yml"
        config:
          languages:
            - "ruby"
    languages:
      css:
        extensions:
          - "-css.resource"
    exclude_paths:
      - ".bundle/**"
      - "spec/**/*"
      - "benchmarks/**/*"
      - "**.min.js"
      - "**/tests/**"
    ```

1.  Optionally, validate the syntax of your configuration file with the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli#install) by running the following command in the same folder as the Codacy configuration file:

    ```bash
    codacy-analysis-cli validate-configuration --directory `pwd`
    ```

## Syntax for excluding files

To ignore files, you must use the [Java glob syntax](https://docs.oracle.com/javase/7/docs/api/java/nio/file/FileSystem.html#getPathMatcher%28java.lang.String%29) to define one or more `exclude_paths` patterns. For example:

| Example pattern    | Ignored files                                                |
| ------------------ | ------------------------------------------------------------ |
| `test/README.md`   | The file `test/README.md`                                    |
| `test/*`           | All files in the root of test                                |
| `test/**`          | All files and directories inside test                        |
| `test/**/*`        | All files inside sub-directories of test                     |
| `**.resource`      | All `.resource` files across all your repository             |
| `**/*.resource`    | All `.resource` files in all directories and sub-directories |

## Which tools can be configured and which name should I use?

You can use the Codacy configuration file to configure all tools supported by Codacy except the [client-side tools](../related-tools/local-analysis/client-side-tools.md).

The following are the tool names that must be used in the Codacy configuration file:

```text
ameba
bandit
brakeman
bundleraudit
checkov
checkstyle
codacy-scalameta-pro
codenarc
coffeelint
cppcheck
credo
csslint
detekt
eslint
flawfinder
hadolint
jacksonlinter
jshint
markdownlint
phpcs
phpmd
pmd
pmd-legacy
prospector
psscriptanalyzer
pylint
pylintpython3
remark-lint
revive
rubocop
scalastyle
shellcheck
sonarscharp
sonarvb
SQLint
stylelint
swiftlint
tailor
tslint
tsqllint
```

## Tool-specific configurations

By default, Codacy tries to detect which language is used on each source code file, and uses a default minimum token length for identifying duplicate blocks of code. However, some false positives may occur.

The tools below support specifying the language or language version used in the source code files that you're analyzing, or tuning the code duplication detection strategy.

### Cppcheck

If you're using Cppcheck to analyze C or C++ source code files, add the following configuration to your Codacy configuration file to define the programming language you're using. The supported languages are `c` and `c++`:

```yaml
---
engines:
  cppcheck:
    language: c++
```

### PHP_CodeSniffer

If you're using the [PHP Compatibility](https://github.com/PHPCompatibility/PHPCompatibility) coding standard for PHP_CodeSniffer, add the following configuration to your Codacy configuration file to [define the PHP version](https://github.com/PHPCompatibility/PHPCompatibility#sniffing-your-code-for-compatibility-with-specific-php-versions) you're using:

```yaml
---
engines:
  phpcs:
    php_version: 5.5
```

### Legacy Pylint 1.9.*

If you're using the legacy Pylint 1.9.* to analyze Python source code files, add the following configuration to your Codacy configuration file to define the Python language version you're using. The supported versions are `2` and `3`:

```yaml
---
engines:
  pylint:
    python_version: 2
```

!!! tip
    If you're using Python 3.4.\* or later as your programming language, we recommend that you disable the tool **Pylint** and enable the tool **Pylint (Python 3)** on your repository [Code patterns page](configuring-code-patterns.md) instead. For more information see [What's New in Pylint 2.0](http://pylint.pycqa.org/en/latest/whatsnew/2.0.html).

### PMD CPD (Duplication)

<!--NOTE
    Reference for all options:

    https://github.com/codacy/codacy-duplication-pmdcpd/blob/c799cb3a80d1f3b3a8eb9868f63abee13e3e81c4/src/main/scala/com/codacy/duplication/pmd/Cpd.scala#L128
-->

Codacy uses [PMD's Copy/Paste Detector (CPD)](https://pmd.github.io/latest/pmd_userdocs_cpd.html) to identify duplicated blocks of code.

By default, Codacy only reports duplicate code blocks that have the following minimum token length, depending on the language:

| Language   | Default minimum token length |
| ---------- | ---------------------------- |
| C#         | 50                           |
| C/C++      | 50                           |
| Go         | 40                           |
| Java       | 100                          |
| JavaScript | 40                           |
| Python     | 50                           |
| Ruby       | 50                           |
| SQL        | 100                          |
| Scala      | 50                           |
| Swift      | 50                           |

Besides this, Codacy runs PMD CPD with the following options enabled by default:

-   Skip lexical errors
-   Ignore literals
-   Ignore identifiers
-   Ignore annotations
-   Ignore <span class="skip-vale">usings</span>

To overwrite the defaults options add your settings to the Codacy configuration file based on the example template below:

```yaml
---
engines:
  duplication:
    minTokenMatch: 20
    skipLexicalErrors: false
    ignoreLiterals: false
    ignoreIdentifiers: false
    ignoreAnnotations: false
    ignoreUsings: false
```

!!! important
    If you configure `minTokenMatch` on the Codacy configuration file Codacy will use that value for all languages.
