---
description: Use the Codacy configuration file to configure advanced features on Codacy with more control such as ignoring files for duplication or a specific tool, configuring the root directory to start the analysis, and adding custom file extensions to languages.
---

# Codacy configuration file

Codacy supports configuring certain advanced features through a configuration file, such as:

-   [Ignoring files](#ignore-files) globally, for duplication, or a specific tool

-   [Including specific ignored files](#include-files) in the analysis

-   Adjusting [tool-specific configurations](#tool-conf)

-   Configuring a specific repository directory on which to start the analysis

-   [Configuring the languages](#languages) that Codacy analyzes in your repository:

    -   [Adding custom file extensions](#file-extensions) to languages
    -   [Disabling the analysis](#disable-language) of a specific language

## Using a Codacy configuration file

!!! important
    -   If your repository has a Codacy configuration file, the [Ignored files settings](ignoring-files.md) defined on the Codacy UI don't apply and you must [ignore files using the configuration file](#syntax-for-ignoring-files) instead.
    -   Codacy always uses the configuration file **in the default branch**. New settings added to the Codacy configuration file by a pull request are also considered for the pull request analysis, but the existing configuration in the default branch takes precedence.

        For example, if a pull request removes an ignored path from the Codacy configuration file, any matching files will stay ignored until that pull request is merged into the default branch.

To use a Codacy configuration file:

1.  Create a text file with the name `.codacy.yml` or `.codacy.yaml` on the root of your repository.

    The file must start with a line containing a triple dash (`---`).

1.  Add your settings to the configuration file based on the example template below.

    If you defined any [Ignored files settings](ignoring-files.md) for the repository, make sure you [add those settings](#syntax-for-ignoring-files) to the Codacy configuration file.

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
          - ".scss"
      python:
        enabled: false
    exclude_paths:
      - ".bundle/**"
      - "spec/**/*"
      - "benchmarks/**/*"
      - "**.min.js"
      - "**/tests/**"
    include_paths:
      - "**/tests/integration/**"
    ```

1.  Optionally, validate the syntax of your configuration file with the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli#install) by running the following command in the same folder as the Codacy configuration file:

    ```bash
    codacy-analysis-cli validate-configuration --directory `pwd`
    ```

## Ignoring files using a Codacy configuration file {: id="ignore-files"}

The Codacy configuration file gives you more flexibility in [ignoring or excluding files](ignoring-files.md) from the Codacy analysis.

!!! note
    {% include-markdown "../assets/includes/coverage-ignore.md" %}

### Syntax for ignoring files

To ignore files using a Codacy configuration file, you must define one or more patterns under `exclude_paths` using the [Java glob syntax](https://docs.oracle.com/javase/7/docs/api/java/nio/file/FileSystem.html#getPathMatcher%28java.lang.String%29):

| Example pattern    | Ignored files                                                |
| ------------------ | ------------------------------------------------------------ |
| `test/README.md`   | The file `test/README.md`                                    |
| `test/*`           | All files in the root of test                                |
| `test/**`          | All files and directories inside test                        |
| `test/**/*`        | All files inside sub-directories of test                     |
| `**.resource`      | All `.resource` files across all your repository             |
| `**/*.resource`    | All `.resource` files in all directories and sub-directories |

For example:

```yaml
---
exclude_paths:
  - "test/README.md"
  - "**/*.resource"
```

## Including specific files using a Codacy configuration file {: id="include-files"}

The Codacy configuration file allows you to explicitly specify files or directories to include in the analysis. This is particularly useful for [bypassing files or directories that are ignored by default](./ignoring-files.md#default-ignored-files) or specified in `exclude_paths`.

!!! note
    If both `exclude_paths` and `include_paths` are defined, `include_paths` will specify exceptions to the exclusions defined in `exclude_paths`.

### Syntax for including files

To include specific files using a Codacy configuration file, you must define one or more patterns under `include_paths` [using the same syntax as `exclude_paths`](#syntax-for-ignoring-files).

For example:

```yaml
---
exclude_paths:
  - "lib*/**"
include_paths:
  - "lib-a/**"
  - "libs/**"
```

In this example, while all directories matching `lib*` are excluded, `lib-a` is specifically included for analysis, as well as any files within `libs`.

## Adjusting tool configurations {: id="tool-conf"}

!!! note
    The Codacy configuration file lets you [configure tools](#tool-specific-configurations), but you can't enable or disable them. A tool can only be enabled or disabled on the [Code patterns page](configuring-code-patterns.md) by users with the [necessary permissions](../organizations/roles-and-permissions-for-organizations.md).

### Which tools can be configured and which name should I use?

<!--NOTE
    When adding a new supported tool, make sure that you update the following pages:

    docs/getting-started/supported-languages-and-tools.md
    docs/repositories-configure/local-analysis/client-side-tools.md (if the tool runs client-side)
    docs/organizations/managing-security-and-risk.md  (if the tool reports security issues)
    docs/repositories-configure/configuring-code-patterns.md (supported configuration files table, or list of tools that don't support configuration files)
    docs/repositories-configure/codacy-configuration-file.md (list of tool short names to use on the Codacy configuration file)
-->

You can use the Codacy configuration file to configure all tools supported by Codacy except the [client-side tools](local-analysis/client-side-tools.md).

The following are the tool names that must be used in the Codacy configuration file:

```text
ameba
bandit
brakeman
checkov
checkstyle
codacy-scalameta-pro
codenarc
coffeelint
cppcheck
credo
dartanalyzer
detekt
eslint-8
flawfinder
hadolint
jacksonlinter
markdownlint
phpcs
phpmd
pmd
prospector
psscriptanalyzer
pylintpython3
remark-lint
revive
rubocop
scalastyle
semgrep
shellcheck
sonarscharp
sonarvb
spectral
SQLint
stylelint
swiftlint
trivy
tsqllint
```

The following names are **deprecated** and shouldn't be used, although they're still accepted in the Codacy configuration file:

-   `bundleraudit` - The tool **bundler-audit** [is deprecated](../release-notes/cloud/cloud-2023-10-13-bundler-audit-deprecation.md). If you are using **Semprep** or **Trivy** instead, use the names `trivy` or `semgrep`.
-   `csslint` - The tool **CSSLint** [is deprecated](../release-notes/cloud/cloud-2023-10-25-csslint-jshint-fauxpas-tailor-tslint-deprecation.md). If you are using **Stylelint** instead, use the name `stylelint`.
-   `eslint` - Use the name `eslint-8` for **ESLint**.
-   `jshint`, `tslint` - The tools **JSHint** and **TSLint** [are deprecated](../release-notes/cloud/cloud-2023-10-25-csslint-jshint-fauxpas-tailor-tslint-deprecation.md). If you are using **ESLint** instead, use the name `eslint-8`.
-   `pylint` - Use the name `pylintpython3` for **Pylint**.
-   `tailor` - The tool **Tailor** [is deprecated](../release-notes/cloud/cloud-2023-10-25-csslint-jshint-fauxpas-tailor-tslint-deprecation.md). If you are using **SwiftLint** instead, use the name `swiftlint`.

### Tool-specific configurations

By default, Codacy tries to detect which language is used on each source code file, and uses a set of default options for identifying duplicate blocks of code. However, some false positives may occur.

The tools below support specifying the language or language version used in the source code files that you're analyzing, or tuning the duplication detection.

#### Cppcheck

If you're using Cppcheck to analyze C or C++ source code files, add the following configuration to your Codacy configuration file to define the programming language you're using. The supported languages are `c` and `c++`:

```yaml
---
engines:
  cppcheck:
    language: c++
```

#### PHP_CodeSniffer

If you're using the [PHP Compatibility](https://github.com/PHPCompatibility/PHPCompatibility) coding standard for PHP_CodeSniffer, add the following configuration to your Codacy configuration file to [define the PHP version](https://github.com/PHPCompatibility/PHPCompatibility#sniffing-your-code-for-compatibility-with-specific-php-versions) you're using:

```yaml
---
engines:
  phpcs:
    php_version: 5.5
```

#### Legacy Pylint 1.9.*

If you're using the legacy Pylint 1.9.* to analyze Python source code files, add the following configuration to your Codacy configuration file to define the Python language version you're using. The supported versions are `2` and `3`:

```yaml
---
engines:
  pylint:
    python_version: 2
```

!!! tip
    If you're using Python 3.4.\* or later as your programming language, disable the tool **Pylint (legacy)** and enable the tool **Pylint** on your repository [Code patterns page](configuring-code-patterns.md) instead. For more information, see [What's New in Pylint 2.0](https://pylint.pycqa.org/en/latest/whatsnew/2/2.0/index.html).

#### PMD CPD (Duplication)

<!--NOTE
    Reference for all options:

    https://github.com/codacy/codacy-duplication-pmdcpd/blob/c799cb3a80d1f3b3a8eb9868f63abee13e3e81c4/src/main/scala/com/codacy/duplication/pmd/Cpd.scala#L128
-->

Codacy uses [PMD's Copy/Paste Detector (CPD)](https://docs.pmd-code.org/latest/) to identify duplicated blocks of code [on the supported languages](../getting-started/supported-languages-and-tools.md).

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

-   **Skip lexical errors:** Skip files which can't be tokenized due to invalid characters instead of aborting CPD
-   **Ignore literals:** Ignore number values and string contents when comparing text
-   **Ignore annotations:** Ignore language annotations when comparing text
-   **Ignore <span class="skip-vale">usings</span>:** Ignore `using` directives in C# when comparing text

To use a different minimum token length or change any of the default options, add your settings to the Codacy configuration file based on the example template below.

!!! important
    If you configure `minTokenMatch` on the Codacy configuration file, Codacy will use that value for all languages.

```yaml
---
engines:
  duplication:
    minTokenMatch: 20
    skipLexicalErrors: false
    ignoreLiterals: false
    ignoreIdentifiers: true
    ignoreAnnotations: false
    ignoreUsings: false
```

## Configuring languages using a Codacy configuration file {: id="languages"}

You can use a Codacy configuration file to manage the languages that Codacy analyzes in your repository.

!!! note
    Codacy applies the language settings from the Codacy configuration file as well as any settings defined [in the Codacy UI](languages.md).

### Adding custom file extensions {: id="file-extensions"}

To [add custom file extensions to languages](languages.md#configuring-file-extensions) using a Codacy configuration file, you must define one or more extensions under `languages.<LANGUAGE>.extensions`. Keep in mind that some tools might not work out of the box with those extensions.

For example:

```yaml
---
languages:
  css:
    extensions:
      - ".scss"
```

### Disabling analysis of a language {: id="disable-language"}

To [disable the analysis of a specific language](languages.md#disable-language) using a Codacy configuration file, set `languages.<LANGUAGE>.enabled` to `false`. The analysis is enabled by default for all languages.

For example:

```yaml
---
languages:
  css:
    enabled: false
```
