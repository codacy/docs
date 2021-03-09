# Codacy configuration file

Codacy supports configuring certain advanced features through a configuration file:

-   Ignoring files globally, for duplication, or a specific tool

-   Configuring a specific repository directory on which to start the analysis

-   Adding custom extensions to languages, keeping in mind that some tools might not work out of the box with those extensions

!!! note
    -   If a Codacy configuration file exists in your repository, the [Ignored Files](ignoring-files.md) settings in the Codacy UI don't apply.
    -   To disable a tool you must use the [Code Patterns](code-patterns.md) page instead.

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

You can configure all tools supported by Codacy using the configuration file.

The following are the tool names that must be used in the Codacy configuration file:

```text
ameba
bandit
brakeman
bundleraudit
checkstyle
codacy-scalameta-pro
codenarc
coffeelint
cppcheck
credo
csslint
detekt
eslint
findbugs
findbugssec
flawfinder
golint
govet
hadolint
jacksonlinter
jshint
nsp
phpcs
phpmd
pmd-legacy
pmd
prospector
psscriptanalyzer
pylint
pylintpython3
remark-lint
rubocop
scalastyle
scsslint
shellcheck
sonarscharp
spotbugs
SQLint
stylelint
swiftlint
tailor
tslint
tsqllint
```

### Specifying language

Although our tools try to detect which language is used on each file, some false positives may occur.

To instruct which language you want Codacy to use, you can define the following in a [Codacy configuration file](codacy-configuration-file.md) - `.codacy.yml`:

```yaml
---
engines:
  cppcheck:
    enabled: true
    language: c++
```

Supported languages: C, C++

Supported tools: [<span class="skip-vale">codacy-cppcheck</span>](https://github.com/codacy/codacy-cppcheck)

### Specifying your PHP version

If you are using the PHP Compatibility Coding Standard for PHP CodeSniffer, you can specify the PHP version you'd like to use from the [supported versions](https://github.com/PHPCompatibility/PHPCompatibility#sniffing-your-code-for-compatibility-with-specific-php-versions).

To instruct which PHP version you want Codacy to use, you can define the following in a [Codacy configuration file](codacy-configuration-file.md) - ```.codacy.yml```:

```yaml
---
engines:
  phpcs:
    enabled: true
    php_version: 5.5
```

### Specifying your Python version

Although our tools try to detect which Python version your repository uses, some false positives may occur.

To instruct which Python version you want Codacy to use, you can define the following in a [Codacy configuration file](codacy-configuration-file.md) added in the root of your repository - `.codacy.yml`:

```yaml
---
engines:
  pylint:
    enabled: true
    python_version: 2
```

Supported versions: 2, 3

Supported tools: [<span class="skip-vale">codacy-pylint</span>](https://github.com/codacy/codacy-pylint)

If you have questions about the Codacy configuration file please contact us at <mailto:support@codacy.com>.
