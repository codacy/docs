---
description: List of tools that Codacy uses to analyze over 40 supported languages. Codacy provides static analysis for all programming languages and cloud infrastructure-as-code platforms as well as code duplication, code complexity, and code coverage metrics for most programming languages.
---

# Supported languages and tools

Codacy uses industry-leading tools to perform automatic static code analysis over 40 supported languages:

-   **For programming languages**, Codacy provides static analysis as well as code duplication, code complexity, secret detection, dependency vulnerability scanning, and code coverage metrics for key languages.

-   **For cloud infrastructure-as-code platforms**, Codacy provides static analysis and secret detection to enforce security and compliance best practices.

The sections below group the tools that Codacy uses by scan type. Besides this, Codacy uses [cloc](https://github.com/kentcdodds/cloc) to calculate the source lines of code for all supported languages and supports multiple [code coverage report formats](../coverage-reporter/index.md#generating-coverage).

<!--NOTE
    When adding a new supported tool, make sure that you update the following pages:

    docs/getting-started/supported-languages-and-tools.md
    docs/repositories-configure/local-analysis/client-side-tools.md (if the tool runs client-side)
    docs/organizations/managing-security-and-risk.md  (if the tool reports security issues)
    docs/repositories-configure/configuring-code-patterns.md (supported configuration files table, or list of tools that don't support configuration files)
    docs/repositories-configure/codacy-configuration-file.md (list of tool short names to use on the Codacy configuration file)
-->

!!! important
    Codacy runs security and other analysis tools when code changes are pushed to your repositories. These tools don't scan code for issues continuously.

## File extensions

| Language | File extensions |
|---|---|
| Apex | .cls, .trigger |
| AsyncAPI | - |
| AWS CloudFormation | - |
| Azure Resource Manager Templates | - |
| C | .c, .h |
| C++ | .cpp, .hpp, .cc, .cxx, .ino |
| C# | .cs |
| CoffeeScript | .coffee |
| Crystal | .cr |
| CSS | .css |
| Dart | .dart |
| Dockerfile | .dockerfile |
| Elixir | .ex, .exs |
| GitHub Actions | - |
| Go | .go |
| Groovy | .groovy |
| Helm | - |
| Java | .java |
| JavaScript | .js, .jsx, .jsm, .vue, .mjs |
| JSON | .json |
| JSP | .jsp |
| Kotlin | .kt, .kts |
| Kubernetes | - |
| Less | .less |
| Markdown | .md, .markdown, .mdown, .mkdn, .mkd, .mdwn, .mkdown, .ron |
| Objective-C | .m |
| OpenAPI | - |
| PHP | .php |
| PL/SQL | .trg, .prc, .fnc, .pld, .pls, .plh, .plb, .pck, .pks, .pkh, .pkb, .typ, .tyb, .tps, .tpb |
| PostgreSQL | - |
| PowerShell | .ps1, .psc1, .psd1, .psm1, .ps1xml, .pssc, .cdxml, .clixml |
| Python | .py |
| Ruby | .rb, .gemspec, .podspec, .jbuilder, .rake, .opal |
| Rust | .rs, .rlib |
| Sass | .scss |
| Scala | .scala |
| Serverless Framework | - |
| Shell | .sh, .bash |
| Swift | .swift |
| SQL | .sql |
| Terraform | .tf |
| Transact-SQL | .tsql |
| TypeScript | .ts, .tsx |
| Unity | - |
| Velocity | .vm |
| Visual Basic | .vb |
| Visualforce | .component, .page |
| XML | .xml, .xsl, .wsdl, .pom |
| XSL | .xsl |
| YAML | .yaml, .yml, .env, .env.production, .env.prod, .env.staging, .env.dev, .env.development |

## Static analysis

See how Codacy calculates [static analysis issues](../faq/code-analysis/which-metrics-does-codacy-calculate.md#issues).

| Language | Tools |
|---|---|
| Apex | <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| AsyncAPI | <a href="https://stoplight.io/open-source/spectral/">Spectral</a> |
| AWS CloudFormation | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a> |
| Azure Resource Manager Templates | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a> |
| C | <a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> <a href="#client-side"><sup>3</sup></a>, <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>, <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| C++ | <a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> <a href="#client-side"><sup>3</sup></a>, <a href="http://cppcheck.sourceforge.net/">Cppcheck</a> <a href="#cppcheck-misra"><sup>4</sup></a>, <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| C# | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a>, <a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a> |
| CoffeeScript | <a href="https://github.com/clutchski/coffeelint">CoffeeLint</a> |
| Crystal | <a href="https://github.com/crystal-ameba/ameba">Ameba</a> |
| CSS | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://stylelint.io/">Stylelint</a> |
| Dart | <a href="https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli">dartanalyzer</a> <a href="#dart-limitations"><sup>5</sup></a> |
| Dockerfile | <a href="https://github.com/hadolint/hadolint">Hadolint</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Elixir | <a href="https://github.com/rrrene/credo">Credo</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| GitHub Actions | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Go | <a href="https://gitlab.com/opennota/check">aligncheck</a> <a href="#client-side"><sup>3</sup></a>, <a href="https://github.com/tsenart/deadcode">deadcode</a> <a href="#client-side"><sup>3</sup></a>, <a href="https://github.com/securego/gosec">Gosec</a> <a href="#client-side"><sup>3</sup></a>, <a href="https://github.com/mgechev/revive">Revive</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a>, <a href="https://staticcheck.io/">Staticcheck</a> <a href="#client-side"><sup>3</sup></a>, <a href="https://github.com/golangci/golangci-lint">GolangCI Lint</a><a href="#client-side"><sup>3</sup></a> |
| Groovy | <a href="https://codenarc.github.io/CodeNarc/">CodeNarc</a> |
| Java | <a href="https://checkstyle.sourceforge.io/">Checkstyle</a>, <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a>, <a href="https://spotbugs.github.io/">SpotBugs</a> <a href="#client-side"><sup>3</sup></a> |
| JavaScript | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://eslint.org/">ESLint</a>, <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| JSON | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://github.com/FasterXML/jackson-core">Jackson Linter</a> |
| JSP | <a href="https://pmd.github.io/">PMD</a> |
| Kotlin | <a href="https://github.com/detekt/detekt">detekt</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a>, <a href="https://pmd.github.io">PMD</a> |
| Kubernetes | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#yaml-only"><sup>2</sup></a> |
| Less | <a href="https://stylelint.io/">Stylelint</a> |
| Markdown | <a href="https://github.com/remarkjs/remark-lint">remark-lint</a>, <a href="https://github.com/DavidAnson/markdownlint">markdownlint</a>, <a href="https://github.com/seojoonkim/agentlinter">Agentlinter</a> |
| Objective-C | <a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> <a href="#client-side"><sup>3</sup></a> |
| OpenAPI | <a href="https://stoplight.io/open-source/spectral/">Spectral</a> |
| PHP | <a href="https://github.com/php-cs-fixer/php-cs-fixer">PHP CS Fixer</a>, <a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a>, <a href="https://phpmd.org/">PHP Mess Detector</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| PL/SQL | <a href="https://pmd.github.io/">PMD</a> |
| PostgreSQL | <a href="https://github.com/purcell/sqlint">SQLint</a> |
| PowerShell | <a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a> |
| Python | <a href="https://github.com/PyCQA/bandit">Bandit</a>, <a href="https://github.com/landscapeio/prospector">Prospector</a>, <a href="https://github.com/pylint-dev/pylint">Pylint</a>, <a href="https://github.com/astral-sh/ruff">Ruff</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Ruby | <a href="https://github.com/troessner/reek">Reek</a>, <a href="https://brakemanscanner.org/">Brakeman</a> <a href="#opengrep-brakeman"><sup>7</sup></a>, <a href="https://github.com/rubocop/rubocop">RuboCop</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Rust | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Sass | <a href="https://stylelint.io/">Stylelint</a> |
| Scala | <a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a>, <a href="http://www.scalastyle.org/">Scalastyle</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a>, <a href="https://spotbugs.github.io/">SpotBugs</a> <a href="#client-side"><sup>3</sup></a> |
| Serverless Framework | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a> |
| Shell | <a href="https://www.shellcheck.net/">ShellCheck</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Swift | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a>, <a href="https://github.com/realm/SwiftLint">SwiftLint</a>, <a href="https://pmd.github.io">PMD</a> |
| SQL | <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/purcell/sqlint">SQLint</a>, <a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a>, <a href="https://github.com/sqlfluff/sqlfluff">SQLFluff</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Terraform | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Transact-SQL | <a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a> |
| TypeScript | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://eslint.org/">ESLint</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a> |
| Unity | <a href="https://github.com/microsoft/Microsoft.Unity.Analyzers">Unity Roslyn Analyzers</a> <a href="#client-side"><sup>3</sup></a> |
| Velocity | <a href="https://pmd.github.io/">PMD</a> |
| Visual Basic | <a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a> |
| Visualforce | <a href="https://pmd.github.io/">PMD</a> |
| XML | <a href="https://pmd.github.io/">PMD</a> |
| XSL | <a href="https://pmd.github.io/">PMD</a> |

## Suggested fixes

Codacy can [suggest fixes](../repositories-configure/integrations/github-integration.md#suggest-fixes) for issues identified by these tools:

| Language | Tools |
|---|---|
| C | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| C# | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Dockerfile | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Go | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Java | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| JavaScript | <a href="https://eslint.org/docs/rules/">ESLint</a> |
| Kubernetes | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Markdown | <a href="https://github.com/DavidAnson/markdownlint">markdownlint</a> |
| Python | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Ruby | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| TypeScript | <a href="https://eslint.org/docs/rules/">ESLint</a> |

## Secret detection

| Language | Tools |
|---|---|
| Apex | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| AWS CloudFormation | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#yaml-only"><sup>2</sup></a>, <a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a> |
| C | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| C++ | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| C# | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Dart | <a href="https://trivy.dev">Trivy</a> |
| Dockerfile | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Elixir | <a href="https://trivy.dev">Trivy</a> |
| GitHub Actions | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Go | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Helm | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#yaml-only"><sup>2</sup></a>, <a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a> |
| Java | <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| JavaScript | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| JSON | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://trivy.dev">Trivy</a> |
| Kotlin | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Kubernetes | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#yaml-only"><sup>2</sup></a>, <a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a> |
| PHP | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Python | <a href="https://github.com/PyCQA/bandit">Bandit</a>, <a href="https://github.com/landscapeio/prospector">Prospector</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Ruby | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Rust | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Scala | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Shell | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Swift | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Terraform | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| TypeScript | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| XML | <a href="https://trivy.dev">Trivy</a> |
| YAML | <a href="https://trivy.dev">Trivy</a> |

## Dependency vulnerability scanning

| Language | Tools |
|---|---|
| C | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>conan.lock</code> (Conan) |
| C++ | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>conan.lock</code> (Conan) |
| C# | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>.deps.json</code> (.Net), <code>packages.lock.json</code> (NuGet) |
| Dart | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>pubspec.lock</code> |
| Elixir | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>mix.lock</code> (Mix) |
| Go | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>go.mod</code> |
| Java | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>pom.xml</code> and <code>gradle.lockfile</code> |
| JavaScript | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>package.json</code> and <code>package-lock.json</code> (npm), <br/><code>yarn.lock</code> (Yarn) |
| Kotlin | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>pom.xml</code> and <code>gradle.lockfile</code> |
| PHP | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>composer.lock</code> (Composer) |
| Python | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>requirements.txt</code> (pip), <br/><code>Pipfile.lock</code> (pipenv), <br/><code>poetry.lock</code> (Poetry), <code>uv.lock</code> (UV) |
| Ruby | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>Gemfile.lock</code> (Bundler) |
| Rust | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>Cargo.lock</code> (Cargo) |
| Scala | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>build.sbt.lock</code> (sbt) <a href="#scala-dependencies"><sup>9</sup></a> |
| Swift | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>Package.resolved</code> (SwiftPM) |
| TypeScript | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>package.json</code> and <code>package-lock.json</code> (npm), <br/><code>yarn.lock</code> (Yarn) |

## Malicious packages detection

Malicious packages identified in the [OpenSSF Malicious Packages database](https://github.com/ossf/malicious-packages).

| Language | Tools |
|---|---|
| C# | <a href="https://trivy.dev">Trivy</a>, scans <code>packages.lock.json</code> for malicious packages published in <a href="https://www.nuget.org/">NuGet</a> |
| Go | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>go.mod</code> for malicious packages published in <a href="https://github.com">github.com</a> |
| Java | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>pom.xml</code> and <code>gradle.lockfile</code> for malicious packages published in <a href="https://maven.apache.org/">maven</a> |
| JavaScript | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>package.json</code> and <code>package-lock.json</code> for malicious packages published in <a href="https://www.npmjs.com/">npm</a> |
| Kotlin | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>pom.xml</code> and <code>gradle.lockfile</code> for malicious packages published in <a href="https://maven.apache.org/">maven</a> |
| Python | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>requirements.txt</code> (pip), <br/><code>Pipfile.lock</code> (pipenv) <br/>for malicious packages published in <a href="https://pypi.org/">PyPI</a> |
| Ruby | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>Gemfile.lock</code> for malicious packages published in <a href="https://rubygems.org">rubygems.org</a> |
| Rust | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>Cargo.lock</code> for malicious packages published in <a href="https://crates.io">crates.io</a> |
| Scala | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>build.sbt.lock</code> for malicious packages published in <a href="https://maven.apache.org/">maven</a> <a href="#scala-dependencies"><sup>9</sup></a> |
| TypeScript | <a href="https://trivy.dev">Trivy</a>, scans <br/><code>package.json</code> and <code>package-lock.json</code> for malicious packages published in <a href="https://www.npmjs.com/">npm</a> |

## Duplication

See how Codacy calculates [duplication](../faq/code-analysis/which-metrics-does-codacy-calculate.md#duplication).

| Language | Tools |
|---|---|
| Apex | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| C | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| C++ | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| C# | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| CoffeeScript | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Dart | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Elixir | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Go | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| Groovy | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Java | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| JavaScript | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| JSP | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| Kotlin | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Objective-C | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| PHP | <a href="https://github.com/sebastianbergmann/phpcpd">PHPCPD</a> |
| Python | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| Ruby | <a href="https://github.com/seattlerb/flay">Flay</a> |
| Rust | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Scala | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| Swift | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |
| TypeScript | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Visual Basic | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Visualforce | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> |

## Complexity

See how Codacy calculates [complexity](../faq/code-analysis/which-metrics-does-codacy-calculate.md#complexity).

| Language | Tools |
|---|---|
| C | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| C++ | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| C# | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Go | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Java | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| JavaScript | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Kotlin | <a href="https://github.com/detekt/detekt">detekt</a> <a href="#different-tools"><sup>10</sup></a> |
| Kubernetes | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Objective-C | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| PHP | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Python | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Ruby | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Rust | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Scala | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Swift | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| TypeScript | <a href="https://github.com/terryyin/lizard">Lizard</a> |

## License scanning

| Language | Tools |
|---|---|
| C | Conan |
| C++ | Conan |
| C# | NuGet |
| Dart | Pub |
| Elixir | Hex |
| Go | Go modules |
| Java | Maven |
| JavaScript | npm |
| Kotlin | Maven |
| PHP | Composer |
| Python | PyPI |
| Ruby | Gem |
| Rust | Cargo |
| Scala | Maven |
| Swift | SwiftPM |
| TypeScript | npm |

## Docker images of supported tools

Codacy adds support for new languages and tools by using [a Docker image to run each tool](https://github.com/codacy/codacy-example-tool).

The following table lists the Codacy GitHub repositories corresponding to each supported tool. Use these repositories to check the extra plugins supported by each tool or to submit GitHub issues related to each tool. To learn more about the tool versions used by Codacy, [see the latest release notes](../release-notes/index.md).

<table>
<thead>
<tr>
<th><strong>Tool name</strong></th>
<th><strong>Codacy GitHub repository</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/seojoonkim/agentlinter">AgentLinter</a></td>
<td><a href="https://github.com/codacy/codacy-agentlinter" class="skip-vale">codacy/codacy-agentlinter</a></td>
</tr>
<tr>
<td><a href="https://gitlab.com/opennota/check">aligncheck</a> <a href="#client-side"><sup>3</sup></a></td>
<td><a href="https://github.com/codacy/codacy-aligncheck" class="skip-vale">codacy/codacy-aligncheck</a></td>
</tr>
<tr>
<td><a href="https://github.com/crystal-ameba/ameba">Ameba</a></td>
<td><a href="https://github.com/codacy/codacy-ameba" class="skip-vale">codacy/codacy-ameba</a></td>
</tr>
<tr>
<td><a href="https://github.com/PyCQA/bandit">Bandit</a></td>
<td><a href="https://github.com/codacy/codacy-bandit" class="skip-vale">codacy/codacy-bandit</a></td>
</tr>
<tr>
<td><a href="https://biomejs.dev/">BiomeJS</a></td>
<td><a href="https://github.com/codacy/codacy-biomejs" class="skip-vale">codacy/codacy-biomejs</a></td>
</tr>
<tr>
<td><a href="https://brakemanscanner.org/">Brakeman</a> <a href="#opengrep-brakeman"><sup>7</sup></a></td>
<td><a href="https://github.com/codacy/codacy-brakeman" class="skip-vale">codacy/codacy-brakeman</a></td>
</tr>
<tr>
<td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
<td><a href="https://github.com/codacy/codacy-checkov" class="skip-vale">codacy/codacy-checkov</a></td>
</tr>
<tr>
<td><a href="https://checkstyle.sourceforge.io/">Checkstyle</a></td>
<td><a href="https://github.com/codacy/codacy-checkstyle" class="skip-vale">codacy/codacy-checkstyle</a></td>
</tr>
<tr>
<td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> <a href="#client-side"><sup>3</sup></a></td>
<td><a href="https://github.com/codacy/codacy-clang-tidy" class="skip-vale">codacy/codacy-clang-tidy</a></td>
</tr>
<tr>
<td><a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a></td>
<td><a href="https://github.com/codacy/codacy-scalameta" class="skip-vale">codacy/codacy-scalameta</a></td>
</tr>
<tr>
<td><a href="https://codenarc.org/">CodeNarc</a></td>
<td><a href="https://github.com/codacy/codacy-codenarc" class="skip-vale">codacy/codacy-codenarc</a></td>
</tr>
<tr>
<td><a href="https://github.com/clutchski/coffeelint">CoffeeLint</a></td>
<td><a href="https://github.com/codacy/codacy-coffeelint" class="skip-vale">codacy/codacy-coffeelint</a></td>
</tr>
<tr>
<td><a href="http://cppcheck.sourceforge.net/">Cppcheck</a> <a href="#cppcheck-misra"><sup>4</sup></a></td>
<td><a href="https://github.com/codacy/codacy-cppcheck" class="skip-vale">codacy/codacy-cppcheck</a></td>
</tr>
<tr>
<td><a href="https://github.com/rrrene/credo">Credo</a></td>
<td><a href="https://github.com/codacy/codacy-credo" class="skip-vale">codacy/codacy-credo</a></td>
</tr>
<tr>
<td><a href="https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli">dartanalyzer</a> <a href="#dart-limitations"><sup>5</sup></a></td>
<td><a href="https://github.com/codacy/codacy-dartanalyzer" class="skip-vale">codacy/codacy-dartanalyzer</a></td>
</tr>
<tr>
<td><a href="https://github.com/tsenart/deadcode">deadcode</a> <a href="#client-side"><sup>3</sup></a></td>
<td><a href="https://github.com/codacy/codacy-deadcode" class="skip-vale">codacy/codacy-deadcode</a></td>
</tr>
<tr>
<td><a href="https://github.com/arturbosch/detekt">detekt</a></td>
<td><a href="https://github.com/codacy/codacy-detekt" class="skip-vale">codacy/codacy-detekt</a></td>
</tr>
<tr>
<td><a href="https://eslint.org/">ESLint</a> <a href="#complexity-limitations"><sup>6</sup></a></td>
<td><a href="https://github.com/codacy/codacy-eslint" class="skip-vale">codacy/codacy-eslint</a></td>
</tr>
<tr>
<td><a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
<td><a href="https://github.com/codacy/codacy-flawfinder" class="skip-vale">codacy/codacy-flawfinder</a></td>
</tr>
<tr>
<td><a href="https://github.com/securego/gosec">Gosec</a> <a href="#client-side"><sup>3</sup></a></td>
<td><a href="https://github.com/codacy/codacy-gosec" class="skip-vale">codacy/codacy-gosec</a></td>
</tr>
<tr>
<td><a href="https://github.com/hadolint/hadolint">Hadolint</a></td>
<td><a href="https://github.com/codacy/codacy-hadolint" class="skip-vale">codacy/codacy-hadolint</a></td>
</tr>
<tr>
<td><a href="https://github.com/FasterXML/jackson-core">Jackson Linter</a></td>
<td><a href="https://github.com/codacy/codacy-jackson-linter" class="skip-vale">codacy/codacy-jackson-linter</a></td>
</tr>
<tr>
<td><a href="https://github.com/terryyin/lizard">Lizard</a></td>
<td><a href="https://github.com/codacy/codacy-lizard" class="skip-vale">codacy/codacy-lizard</a></td>
</tr>
<tr>
<td><a href="https://github.com/DavidAnson/markdownlint">markdownlint</a></td>
<td><a href="https://github.com/codacy/codacy-markdownlint" class="skip-vale">codacy/codacy-markdownlint</a></td>
</tr>
<tr>
<td><a href="https://github.com/codacy/codacy-php-cs-fixer">PHP CS Fixer</a></td>
<td><a href="https://github.com/codacy/codacy-php-cs-fixer" class="skip-vale">codacy/codacy-php-cs-fixer</a></td>
</tr>
<tr>
<td><a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a></td>
<td><a href="https://github.com/codacy/codacy-codesniffer" class="skip-vale">codacy/codacy-codesniffer</a></td>
</tr>
<tr>
<td><a href="https://phpmd.org/">PHP Mess Detector</a></td>
<td><a href="https://github.com/codacy/codacy-phpmd" class="skip-vale">codacy/codacy-phpmd</a></td>
</tr>
<tr>
<td><a href="https://pmd.github.io/">PMD</a> <a href="#complexity-limitations"><sup>6</sup></a></td>
<td><a href="https://github.com/codacy/codacy-pmd7" class="skip-vale">codacy/codacy-pmd7</a></td>
</tr>
<tr>
<td><a href="https://github.com/landscapeio/prospector2">Prospector</a></td>
<td><a href="https://github.com/codacy/codacy-prospector" class="skip-vale">codacy/codacy-prospector</a></td>
</tr>
<tr>
<td><a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a></td>
<td><a href="https://github.com/codacy/codacy-psscriptanalyzer" class="skip-vale">codacy/codacy-psscriptanalyzer</a></td>
</tr>
<tr>
<td><a href="https://github.com/pylint-dev/pylint">Pylint</a></td>
<td><a href="https://github.com/codacy/codacy-pylint-python3" class="skip-vale">codacy/codacy-pylint-python3</a></td>
</tr>
<tr>
<td><a href="https://github.com/remarkjs/remark-lint">remark-lint</a></td>
<td><a href="https://github.com/codacy/codacy-remark-lint" class="skip-vale">codacy/codacy-remark-lint</a></td>
</tr>
<tr>
<td><a href="https://github.com/mgechev/revive">Revive</a></td>
<td><a href="https://github.com/codacy/codacy-gorevive" class="skip-vale">codacy/codacy-gorevive</a></td>
</tr>
<tr>
<td><a href="https://github.com/rubocop/rubocop">RuboCop</a> <a href="#complexity-limitations"><sup>6</sup></a></td>
<td><a href="https://github.com/codacy/codacy-rubocop" class="skip-vale">codacy/codacy-rubocop</a></td>
</tr>
<tr>
<td><a href="https://github.com/astral-sh/ruff">Ruff</a></td>
<td><a href="https://github.com/codacy/codacy-ruff" class="skip-vale">codacy/codacy-ruff</a></td>
</tr>
<tr>
<td><a href="http://www.scalastyle.org/">Scalastyle</a></td>
<td><a href="https://github.com/codacy/codacy-scalastyle" class="skip-vale">codacy/codacy-scalastyle</a></td>
</tr>
<tr>
<td><a href="https://github.com/opengrep/opengrep/">Opengrep</a> <a href="#opengrep"><sup>1</sup></a></td>
<td><a href="https://github.com/codacy/codacy-opengrep" class="skip-vale">codacy/codacy-opengrep</a></td>
</tr>
<tr>
<td><a href="https://www.shellcheck.net/">ShellCheck</a></td>
<td><a href="https://github.com/codacy/codacy-shellcheck" class="skip-vale">codacy/codacy-shellcheck</a></td>
</tr>
<tr>
<td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a></td>
<td><a href="https://github.com/codacy/codacy-sonar-csharp" class="skip-vale">codacy/codacy-sonar-csharp</a></td>
</tr>
<tr>
<td><a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a></td>
<td><a href="https://github.com/codacy/codacy-sonar-visual-basic" class="skip-vale">codacy/codacy-sonar-visual-basic</a></td>
</tr>
<tr>
<td><a href="https://stoplight.io/open-source/spectral/">Spectral</a></td>
<td><a href="https://github.com/codacy/codacy-spectral" class="skip-vale">codacy/codacy-spectral</a></td>
</tr>
<tr>
<td><a href="https://spotbugs.github.io/">SpotBugs</a> <a href="#client-side"><sup>3</sup></a></td>
<td><a href="https://github.com/codacy/codacy-spotbugs" class="skip-vale">codacy/codacy-spotbugs</a></td>
</tr>
<tr>
<td><a href="https://github.com/purcell/sqlint">SQLint</a></td>
<td><a href="https://github.com/codacy/codacy-sqlint" class="skip-vale">codacy/codacy-sqlint</a></td>
</tr>
<tr>
<td><a href="https://github.com/sqlfluff/sqlfluff">SQLFluff</a></td>
<td><a href="https://github.com/codacy/codacy-sqlfluff" class="skip-vale">codacy/codacy-sqlfluff</a></td>
</tr>
<tr>
<td><a href="https://staticcheck.io">Staticcheck</a> <a href="#client-side"><sup>3</sup></a></td>
<td><a href="https://github.com/codacy/codacy-staticcheck" class="skip-vale">codacy/codacy-staticcheck</a></td>
</tr>
<tr>
<td><a href="https://stylelint.io/">Stylelint</a></td>
<td><a href="https://github.com/codacy/codacy-stylelint" class="skip-vale">codacy/codacy-stylelint</a></td>
</tr>
<tr>
<td><a href="https://github.com/realm/SwiftLint">SwiftLint</a> <a href="#complexity-limitations"><sup>6</sup></a> <a href="#swiftlint-complexity"><sup>8</sup></a></td>
<td><a href="https://github.com/codacy/codacy-swiftlint" class="skip-vale">codacy/codacy-swiftlint</a></td>
</tr>
<tr>
<td><a href="https://trivy.dev">Trivy</a></td>
<td><a href="https://github.com/codacy/codacy-trivy/" class="skip-vale">codacy/codacy-trivy</a></td>
</tr>
<tr>
<td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
<td><a href="https://github.com/codacy/codacy-tsqllint" class="skip-vale">codacy/codacy-tsqllint</a></td>
</tr>
<tr>
<td><a href="https://github.com/microsoft/Microsoft.Unity.Analyzers">Unity Roslyn Analyzers</a> <a href="#client-side"><sup>3</sup></a></td>
<td><a href="https://github.com/codacy/codacy-roslyn" class="skip-vale">codacy/codacy-roslyn</a></td>
</tr>
</tbody>
</table>

<sup><span id="opengrep">1</span></sup>:  This tool doesn't support [custom file extensions](../repositories-configure/languages.md#configuring-file-extensions).  
<sup><span id="yaml-only">2</span></sup>: Currently, only YAML file scanning is supported on this platform.  
<sup><span id="client-side">3</span></sup>: Supported as a [client-side tool](../repositories-configure/local-analysis/client-side-tools.md).  
<sup><span id="cppcheck-misra">4</span></sup>: Currently, Cppcheck only supports the MISRA guidelines for C.  
<sup><span id="dart-limitations">5</span></sup>: Currently, Codacy only supports including the packages [lints](https://pub.dev/packages/lints) and [<span class="skip-vale">flutter_lints</span>](https://pub.dev/packages/flutter_lints) on dartanalyzer configuration files.  
<sup><span id="complexity-limitations">6</span></sup>: Doesn't calculate [the number of methods and the complexity per method](../repositories/files.md#file-details) for each file.  
<sup><span id="opengrep-brakeman">7</span></sup>: Due to licensing limitations, Codacy doesn't support the latest version of Brakeman. To analyze your Ruby code for the latest security vulnerabilities, use [Opengrep](https://github.com/opengrep/opengrep), which provides comprehensive and up-to-date security scanning.  
<sup><span id="swiftlint-complexity">8</span></sup>: Supports [reporting warnings or errors](https://realm.github.io/SwiftLint/cyclomatic_complexity.html) on functions above specific complexity thresholds. Enable the rule **Cyclomatic Complexity** on the [Code patterns page](../repositories-configure/configuring-code-patterns.md), or use a [configuration file](https://realm.github.io/SwiftLint/index.html#configuration) to customize the thresholds.  
<sup><span id="scala-dependencies">9</span></sup>: Requires the [sbt-dependency-lock](https://github.com/stringbean/sbt-dependency-lock) plugin for generating the lockfile.  
<sup><span id="different-tools">10</span></sup>: Codacy may use a different version of this tool for measuring complexity and duplication.  

## See also

-   [Codacy quickstart (5 min)](codacy-quickstart.md)
-   [Client-side tools](../repositories-configure/local-analysis/client-side-tools.md)
-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
