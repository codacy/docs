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

## Overview

| Language | File extensions | Supported scans |
|---|---|---|
| Apex | `.cls`<br>`.trigger` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Duplication](#duplication) |
| AsyncAPI | - | [Static analysis](#static-analysis) |
| AWS CloudFormation | - | [Static analysis](#static-analysis), [Secret detection](#secret-detection) |
| Azure Resource Manager Templates | - | [Static analysis](#static-analysis) |
| C | `.c`<br>`.h` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| C++ | `.cpp`<br>`.hpp`<br>`.cc`<br>`.cxx`<br>`.ino` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| C# | `.cs` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| CoffeeScript | `.coffee` | [Static analysis](#static-analysis), [Duplication](#duplication) |
| Crystal | `.cr` | [Static analysis](#static-analysis) |
| CSS | `.css` | [Static analysis](#static-analysis) |
| Dart | `.dart` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Duplication](#duplication), [License scanning](#license-scanning) |
| Dockerfile | `.dockerfile` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection) |
| Elixir | `.ex`<br>`.exs` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Duplication](#duplication), [License scanning](#license-scanning) |
| GitHub Actions | - | [Static analysis](#static-analysis), [Secret detection](#secret-detection) |
| Go | `.go` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| Groovy | `.groovy` | [Static analysis](#static-analysis), [Duplication](#duplication) |
| Helm | - | [Secret detection](#secret-detection) |
| Java | `.java` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| JavaScript | `.js`<br>`.jsx`<br>`.jsm`<br>`.vue`<br>`.mjs` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| JSON | `.json` | [Static analysis](#static-analysis), [Secret detection](#secret-detection) |
| JSP | `.jsp` | [Static analysis](#static-analysis), [Duplication](#duplication) |
| Kotlin | `.kt`<br>`.kts` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| Kubernetes | - | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Complexity](#complexity) |
| Less | `.less` | [Static analysis](#static-analysis) |
| Markdown | `.md`<br>`.markdown`<br>`.mdown`<br>`.mkdn`<br>`.mkd`<br>`.mdwn`<br>`.mkdown`<br>`.ron` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes) |
| Objective-C | `.m` | [Static analysis](#static-analysis), [Duplication](#duplication), [Complexity](#complexity) |
| OpenAPI | - | [Static analysis](#static-analysis) |
| PHP | `.php` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| PL/SQL | `.trg`<br>`.prc`<br>`.fnc`<br>`.pld`<br>`.pls`<br>`.plh`<br>`.plb`<br>`.pck`<br>`.pks`<br>`.pkh`<br>`.pkb`<br>`.typ`<br>`.tyb`<br>`.tps`<br>`.tpb` | [Static analysis](#static-analysis) |
| PostgreSQL | - | [Static analysis](#static-analysis) |
| PowerShell | `.ps1`<br>`.psc1`<br>`.psd1`<br>`.psm1`<br>`.ps1xml`<br>`.pssc`<br>`.cdxml`<br>`.clixml` | [Static analysis](#static-analysis) |
| Python | `.py` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| Ruby | `.rb`<br>`.gemspec`<br>`.podspec`<br>`.jbuilder`<br>`.rake`<br>`.opal` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| Rust | `.rs`<br>`.rlib` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| Sass | `.scss` | [Static analysis](#static-analysis) |
| Scala | `.scala` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| Serverless Framework | - | [Static analysis](#static-analysis) |
| Shell | `.sh`<br>`.bash` | [Static analysis](#static-analysis), [Secret detection](#secret-detection) |
| Swift | `.swift` | [Static analysis](#static-analysis), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| SQL | `.sql` | [Static analysis](#static-analysis) |
| Terraform | `.tf` | [Static analysis](#static-analysis), [Secret detection](#secret-detection) |
| Transact-SQL | `.tsql` | [Static analysis](#static-analysis) |
| TypeScript | `.ts`<br>`.tsx` | [Static analysis](#static-analysis), [Suggested fixes](#suggested-fixes), [Secret detection](#secret-detection), [Dependency vulnerability scanning](#dependency-vulnerability-scanning), [Malicious packages detection](#malicious-packages-detection), [Duplication](#duplication), [Complexity](#complexity), [License scanning](#license-scanning) |
| Unity | - | [Static analysis](#static-analysis) |
| Velocity | `.vm` | [Static analysis](#static-analysis) |
| Visual Basic | `.vb` | [Static analysis](#static-analysis), [Duplication](#duplication) |
| Visualforce | `.component`<br>`.page` | [Static analysis](#static-analysis), [Duplication](#duplication) |
| XML | `.xml`<br>`.xsl`<br>`.wsdl`<br>`.pom` | [Static analysis](#static-analysis), [Secret detection](#secret-detection) |
| XSL | `.xsl` | [Static analysis](#static-analysis) |
| YAML | `.yaml`<br>`.yml`<br>`.env`<br>`.env.production`<br>`.env.prod`<br>`.env.staging`<br>`.env.dev`<br>`.env.development` | [Secret detection](#secret-detection) |

## Static analysis

See how Codacy calculates [static analysis issues](../faq/code-analysis/which-metrics-does-codacy-calculate.md#issues).

| Language | Tools |
|---|---|
| Apex | <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| AsyncAPI | <a href="https://stoplight.io/open-source/spectral/">Spectral</a> |
| AWS CloudFormation | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a> |
| Azure Resource Manager Templates | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a> |
| C | <a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> [^client-side], <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>, <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| C++ | <a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> [^client-side], <a href="http://cppcheck.sourceforge.net/">Cppcheck</a> [^cppcheck-misra], <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| C# | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep], <a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a> |
| CoffeeScript | <a href="https://github.com/clutchski/coffeelint">CoffeeLint</a> |
| Crystal | <a href="https://github.com/crystal-ameba/ameba">Ameba</a> |
| CSS | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://stylelint.io/">Stylelint</a> |
| Dart | <a href="https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli">dartanalyzer</a> [^dart-limitations] |
| Dockerfile | <a href="https://github.com/hadolint/hadolint">Hadolint</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Elixir | <a href="https://github.com/rrrene/credo">Credo</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| GitHub Actions | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Go | <a href="https://gitlab.com/opennota/check">aligncheck</a> [^client-side], <a href="https://github.com/tsenart/deadcode">deadcode</a> [^client-side], <a href="https://github.com/securego/gosec">Gosec</a> [^client-side], <a href="https://github.com/mgechev/revive">Revive</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep], <a href="https://staticcheck.io/">Staticcheck</a> [^client-side], <a href="https://github.com/golangci/golangci-lint">GolangCI Lint</a>[^client-side] |
| Groovy | <a href="https://codenarc.github.io/CodeNarc/">CodeNarc</a> |
| Java | <a href="https://checkstyle.sourceforge.io/">Checkstyle</a>, <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep], <a href="https://spotbugs.github.io/">SpotBugs</a> [^client-side] |
| JavaScript | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://eslint.org/">ESLint</a>, <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| JSON | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://github.com/FasterXML/jackson-core">Jackson Linter</a> |
| JSP | <a href="https://pmd.github.io/">PMD</a> |
| Kotlin | <a href="https://github.com/detekt/detekt">detekt</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep], <a href="https://pmd.github.io">PMD</a> |
| Kubernetes | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^yaml-only] |
| Less | <a href="https://stylelint.io/">Stylelint</a> |
| Markdown | <a href="https://github.com/remarkjs/remark-lint">remark-lint</a>, <a href="https://github.com/DavidAnson/markdownlint">markdownlint</a>, <a href="https://github.com/seojoonkim/agentlinter">AgentLinter</a> |
| Objective-C | <a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> [^client-side] |
| OpenAPI | <a href="https://stoplight.io/open-source/spectral/">Spectral</a> |
| PHP | <a href="https://github.com/php-cs-fixer/php-cs-fixer">PHP CS Fixer</a>, <a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a>, <a href="https://phpmd.org/">PHP Mess Detector</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| PL/SQL | <a href="https://pmd.github.io/">PMD</a> |
| PostgreSQL | <a href="https://github.com/purcell/sqlint">SQLint</a> |
| PowerShell | <a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a> |
| Python | <a href="https://github.com/PyCQA/bandit">Bandit</a>, <a href="https://github.com/landscapeio/prospector">Prospector</a>, <a href="https://github.com/pylint-dev/pylint">Pylint</a>, <a href="https://github.com/astral-sh/ruff">Ruff</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Ruby | <a href="https://github.com/troessner/reek">Reek</a>, <a href="https://brakemanscanner.org/">Brakeman</a> [^opengrep-brakeman], <a href="https://github.com/rubocop/rubocop">RuboCop</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Rust | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Sass | <a href="https://stylelint.io/">Stylelint</a> |
| Scala | <a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a>, <a href="http://www.scalastyle.org/">Scalastyle</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep], <a href="https://spotbugs.github.io/">SpotBugs</a> [^client-side] |
| Serverless Framework | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a> |
| Shell | <a href="https://www.shellcheck.net/">ShellCheck</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Swift | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep], <a href="https://github.com/realm/SwiftLint">SwiftLint</a>, <a href="https://pmd.github.io">PMD</a> |
| SQL | <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/purcell/sqlint">SQLint</a>, <a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a>, <a href="https://github.com/sqlfluff/sqlfluff">SQLFluff</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Terraform | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Transact-SQL | <a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a> |
| TypeScript | <a href="https://biomejs.dev/">BiomeJS</a>, <a href="https://eslint.org/">ESLint</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] |
| Unity | <a href="https://github.com/microsoft/Microsoft.Unity.Analyzers">Unity Roslyn Analyzers</a> [^client-side] |
| Velocity | <a href="https://pmd.github.io/">PMD</a> |
| Visual Basic | <a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a> |
| Visualforce | <a href="https://pmd.github.io/">PMD</a> |
| XML | <a href="https://pmd.github.io/">PMD</a> |
| XSL | <a href="https://pmd.github.io/">PMD</a> |

## Secret detection

| Language | Tools |
|---|---|
| Apex | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| AWS CloudFormation | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^yaml-only], <a href="https://trivy.dev">Trivy</a> [^yaml-only] |
| C | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| C++ | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| C# | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Dart | <a href="https://trivy.dev">Trivy</a> |
| Dockerfile | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Elixir | <a href="https://trivy.dev">Trivy</a> |
| GitHub Actions | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Go | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| Helm | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^yaml-only], <a href="https://trivy.dev">Trivy</a> [^yaml-only] |
| Java | <a href="https://pmd.github.io/">PMD</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| JavaScript | <a href="https://github.com/opengrep/opengrep/">Opengrep</a>, <a href="https://trivy.dev">Trivy</a> |
| JSON | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://trivy.dev">Trivy</a> |
| Kotlin | <a href="https://github.com/opengrep/opengrep/">Opengrep</a> |
| Kubernetes | <a href="https://github.com/bridgecrewio/checkov/">Checkov</a>, <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^yaml-only], <a href="https://trivy.dev">Trivy</a> [^yaml-only] |
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
| C | <a href="https://trivy.dev">Trivy</a>, scans <code>conan.lock</code> (Conan) |
| C++ | <a href="https://trivy.dev">Trivy</a>, scans <code>conan.lock</code> (Conan) |
| C# | <a href="https://trivy.dev">Trivy</a>, scans <code>.deps.json</code> (.Net), <code>packages.lock.json</code> (NuGet) |
| Dart | <a href="https://trivy.dev">Trivy</a>, scans <code>pubspec.lock</code> |
| Elixir | <a href="https://trivy.dev">Trivy</a>, scans <code>mix.lock</code> (Mix) |
| Go | <a href="https://trivy.dev">Trivy</a>, scans <code>go.mod</code> |
| Java | <a href="https://trivy.dev">Trivy</a>, scans <code>pom.xml</code> and <code>gradle.lockfile</code> |
| JavaScript | <a href="https://trivy.dev">Trivy</a>, scans <code>package.json</code> and <code>package-lock.json</code> (npm), <code>yarn.lock</code> (Yarn) |
| Kotlin | <a href="https://trivy.dev">Trivy</a>, scans <code>pom.xml</code> and <code>gradle.lockfile</code> |
| PHP | <a href="https://trivy.dev">Trivy</a>, scans <code>composer.lock</code> (Composer) |
| Python | <a href="https://trivy.dev">Trivy</a>, scans <code>requirements.txt</code> (pip), <code>Pipfile.lock</code> (pipenv), <code>poetry.lock</code> (Poetry), <code>uv.lock</code> (UV) |
| Ruby | <a href="https://trivy.dev">Trivy</a>, scans <code>Gemfile.lock</code> (Bundler) |
| Rust | <a href="https://trivy.dev">Trivy</a>, scans <code>Cargo.lock</code> (Cargo) |
| Scala | <a href="https://trivy.dev">Trivy</a>, scans <code>build.sbt.lock</code> (sbt) [^scala-dependencies] |
| Swift | <a href="https://trivy.dev">Trivy</a>, scans <code>Package.resolved</code> (SwiftPM) |
| TypeScript | <a href="https://trivy.dev">Trivy</a>, scans <code>package.json</code> and <code>package-lock.json</code> (npm), <code>yarn.lock</code> (Yarn) |

## Malicious packages detection

Malicious packages identified in the [OpenSSF Malicious Packages database](https://github.com/ossf/malicious-packages).

| Language | Tools |
|---|---|
| C# | <a href="https://trivy.dev">Trivy</a>, scans <code>packages.lock.json</code> for malicious packages published in <a href="https://www.nuget.org/">NuGet</a> |
| Go | <a href="https://trivy.dev">Trivy</a>, scans <code>go.mod</code> for malicious packages published in <a href="https://github.com"><code>github.com</code></a> |
| Java | <a href="https://trivy.dev">Trivy</a>, scans <code>pom.xml</code> and <code>gradle.lockfile</code> for malicious packages published in <a href="https://maven.apache.org/">maven</a> |
| JavaScript | <a href="https://trivy.dev">Trivy</a>, scans <code>package.json</code> and <code>package-lock.json</code> for malicious packages published in <a href="https://www.npmjs.com/">npm</a> |
| Kotlin | <a href="https://trivy.dev">Trivy</a>, scans <code>pom.xml</code> and <code>gradle.lockfile</code> for malicious packages published in <a href="https://maven.apache.org/">maven</a> |
| Python | <a href="https://trivy.dev">Trivy</a>, scans <code>requirements.txt</code> (pip), <code>Pipfile.lock</code> (pipenv) for malicious packages published in <a href="https://pypi.org/">PyPI</a> |
| Ruby | <a href="https://trivy.dev">Trivy</a>, scans <code>Gemfile.lock</code> for malicious packages published in <a href="https://rubygems.org">rubygems.org</a> |
| Rust | <a href="https://trivy.dev">Trivy</a>, scans <code>Cargo.lock</code> for malicious packages published in <a href="https://crates.io">crates.io</a> |
| Scala | <a href="https://trivy.dev">Trivy</a>, scans <code>build.sbt.lock</code> for malicious packages published in <a href="https://maven.apache.org/">maven</a> [^scala-dependencies] |
| TypeScript | <a href="https://trivy.dev">Trivy</a>, scans <code>package.json</code> and <code>package-lock.json</code> for malicious packages published in <a href="https://www.npmjs.com/">npm</a> |

## License scanning

| Language | Package managers |
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

## Duplication

See how Codacy calculates [duplication](../faq/code-analysis/which-metrics-does-codacy-calculate.md#duplication).

| Language | Tools |
|---|---|
| Apex | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| C | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| C++ | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| C# | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| CoffeeScript | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Dart | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Elixir | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Go | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| Groovy | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Java | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| JavaScript | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| JSP | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| Kotlin | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Objective-C | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| PHP | <a href="https://github.com/sebastianbergmann/phpcpd">PHPCPD</a> |
| Python | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| Ruby | <a href="https://github.com/seattlerb/flay">Flay</a> |
| Rust | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Scala | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| Swift | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |
| TypeScript | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Visual Basic | <a href="https://github.com/kucherenko/jscpd">jscpd</a> |
| Visualforce | <a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> [^different-tools] |

<!-- TODO: verify whether "Complexity" here should instead describe Codacy's file-level
     complexity metric (see which-metrics-does-codacy-calculate.md#complexity), which is
     calculated per file rather than reported as an issue by the tool below, and whether
     that metric is supported for a different set of languages than this tool list. -->
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
| Kotlin | <a href="https://github.com/detekt/detekt">detekt</a> [^different-tools] |
| Kubernetes | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Objective-C | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| PHP | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Python | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Ruby | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Rust | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Scala | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| Swift | <a href="https://github.com/terryyin/lizard">Lizard</a> |
| TypeScript | <a href="https://github.com/terryyin/lizard">Lizard</a> |

## Docker images of supported tools

Codacy adds support for new languages and tools by using [a Docker image to run each tool](https://github.com/codacy/codacy-example-tool).

The following table lists the Codacy GitHub repositories corresponding to each supported tool. Use these repositories to check the extra plugins supported by each tool or to submit GitHub issues related to each tool. To learn more about the tool versions used by Codacy, [see the latest release notes](../release-notes/index.md).

| Tool name | Codacy GitHub repository |
|---|---|
| <a href="https://github.com/seojoonkim/agentlinter">AgentLinter</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-agentlinter">codacy/codacy-agentlinter</a> |
| <a href="https://gitlab.com/opennota/check">aligncheck</a> [^client-side] | <a class="skip-vale" href="https://github.com/codacy/codacy-aligncheck">codacy/codacy-aligncheck</a> |
| <a href="https://github.com/crystal-ameba/ameba">Ameba</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-ameba">codacy/codacy-ameba</a> |
| <a href="https://github.com/PyCQA/bandit">Bandit</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-bandit">codacy/codacy-bandit</a> |
| <a href="https://biomejs.dev/">BiomeJS</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-biomejs">codacy/codacy-biomejs</a> |
| <a href="https://brakemanscanner.org/">Brakeman</a> [^opengrep-brakeman] | <a class="skip-vale" href="https://github.com/codacy/codacy-brakeman">codacy/codacy-brakeman</a> |
| <a href="https://github.com/bridgecrewio/checkov/">Checkov</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-checkov">codacy/codacy-checkov</a> |
| <a href="https://checkstyle.sourceforge.io/">Checkstyle</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-checkstyle">codacy/codacy-checkstyle</a> |
| <a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> [^client-side] | <a class="skip-vale" href="https://github.com/codacy/codacy-clang-tidy">codacy/codacy-clang-tidy</a> |
| <a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-scalameta">codacy/codacy-scalameta</a> |
| <a href="https://codenarc.org/">CodeNarc</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-codenarc">codacy/codacy-codenarc</a> |
| <a href="https://github.com/clutchski/coffeelint">CoffeeLint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-coffeelint">codacy/codacy-coffeelint</a> |
| <a href="http://cppcheck.sourceforge.net/">Cppcheck</a> [^cppcheck-misra] | <a class="skip-vale" href="https://github.com/codacy/codacy-cppcheck">codacy/codacy-cppcheck</a> |
| <a href="https://github.com/rrrene/credo">Credo</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-credo">codacy/codacy-credo</a> |
| <a href="https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli">dartanalyzer</a> [^dart-limitations] | <a class="skip-vale" href="https://github.com/codacy/codacy-dartanalyzer">codacy/codacy-dartanalyzer</a> |
| <a href="https://github.com/tsenart/deadcode">deadcode</a> [^client-side] | <a class="skip-vale" href="https://github.com/codacy/codacy-deadcode">codacy/codacy-deadcode</a> |
| <a href="https://github.com/arturbosch/detekt">detekt</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-detekt">codacy/codacy-detekt</a> |
| <a href="https://eslint.org/">ESLint</a> [^complexity-limitations] | <a class="skip-vale" href="https://github.com/codacy/codacy-eslint">codacy/codacy-eslint</a> |
| <a href="https://dwheeler.com/flawfinder/">Flawfinder</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-flawfinder">codacy/codacy-flawfinder</a> |
| <a href="https://github.com/securego/gosec">Gosec</a> [^client-side] | <a class="skip-vale" href="https://github.com/codacy/codacy-gosec">codacy/codacy-gosec</a> |
| <a href="https://github.com/hadolint/hadolint">Hadolint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-hadolint">codacy/codacy-hadolint</a> |
| <a href="https://github.com/FasterXML/jackson-core">Jackson Linter</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-jackson-linter">codacy/codacy-jackson-linter</a> |
| <a href="https://github.com/terryyin/lizard">Lizard</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-lizard">codacy/codacy-lizard</a> |
| <a href="https://github.com/DavidAnson/markdownlint">markdownlint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-markdownlint">codacy/codacy-markdownlint</a> |
| <a href="https://github.com/codacy/codacy-php-cs-fixer">PHP CS Fixer</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-php-cs-fixer">codacy/codacy-php-cs-fixer</a> |
| <a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-codesniffer">codacy/codacy-codesniffer</a> |
| <a href="https://phpmd.org/">PHP Mess Detector</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-phpmd">codacy/codacy-phpmd</a> |
| <a href="https://pmd.github.io/">PMD</a> [^complexity-limitations] | <a class="skip-vale" href="https://github.com/codacy/codacy-pmd7">codacy/codacy-pmd7</a> |
| <a href="https://github.com/landscapeio/prospector">Prospector</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-prospector">codacy/codacy-prospector</a> |
| <a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-psscriptanalyzer">codacy/codacy-psscriptanalyzer</a> |
| <a href="https://github.com/pylint-dev/pylint">Pylint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-pylint-python3">codacy/codacy-pylint-python3</a> |
| <a href="https://github.com/remarkjs/remark-lint">remark-lint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-remark-lint">codacy/codacy-remark-lint</a> |
| <a href="https://github.com/mgechev/revive">Revive</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-gorevive">codacy/codacy-gorevive</a> |
| <a href="https://github.com/rubocop/rubocop">RuboCop</a> [^complexity-limitations] | <a class="skip-vale" href="https://github.com/codacy/codacy-rubocop">codacy/codacy-rubocop</a> |
| <a href="https://github.com/astral-sh/ruff">Ruff</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-ruff">codacy/codacy-ruff</a> |
| <a href="http://www.scalastyle.org/">Scalastyle</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-scalastyle">codacy/codacy-scalastyle</a> |
| <a href="https://github.com/opengrep/opengrep/">Opengrep</a> [^opengrep] | <a class="skip-vale" href="https://github.com/codacy/codacy-opengrep">codacy/codacy-opengrep</a> |
| <a href="https://www.shellcheck.net/">ShellCheck</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-shellcheck">codacy/codacy-shellcheck</a> |
| <a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-sonar-csharp">codacy/codacy-sonar-csharp</a> |
| <a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-sonar-visual-basic">codacy/codacy-sonar-visual-basic</a> |
| <a href="https://stoplight.io/open-source/spectral/">Spectral</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-spectral">codacy/codacy-spectral</a> |
| <a href="https://spotbugs.github.io/">SpotBugs</a> [^client-side] | <a class="skip-vale" href="https://github.com/codacy/codacy-spotbugs">codacy/codacy-spotbugs</a> |
| <a href="https://github.com/purcell/sqlint">SQLint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-sqlint">codacy/codacy-sqlint</a> |
| <a href="https://github.com/sqlfluff/sqlfluff">SQLFluff</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-sqlfluff">codacy/codacy-sqlfluff</a> |
| <a href="https://staticcheck.io">Staticcheck</a> [^client-side] | <a class="skip-vale" href="https://github.com/codacy/codacy-staticcheck">codacy/codacy-staticcheck</a> |
| <a href="https://stylelint.io/">Stylelint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-stylelint">codacy/codacy-stylelint</a> |
| <a href="https://github.com/realm/SwiftLint">SwiftLint</a> [^complexity-limitations] [^swiftlint-complexity] | <a class="skip-vale" href="https://github.com/codacy/codacy-swiftlint">codacy/codacy-swiftlint</a> |
| <a href="https://trivy.dev">Trivy</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-trivy/">codacy/codacy-trivy</a> |
| <a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a> | <a class="skip-vale" href="https://github.com/codacy/codacy-tsqllint">codacy/codacy-tsqllint</a> |
| <a href="https://github.com/microsoft/Microsoft.Unity.Analyzers">Unity Roslyn Analyzers</a> [^client-side] | <a class="skip-vale" href="https://github.com/codacy/codacy-roslyn">codacy/codacy-roslyn</a> |

[^opengrep]: This tool doesn't support [custom file extensions](../repositories-configure/languages.md#configuring-file-extensions).
[^yaml-only]: Currently, only YAML file scanning is supported on this platform.
[^client-side]: Supported as a [client-side tool](../repositories-configure/local-analysis/client-side-tools.md).
[^cppcheck-misra]: Currently, Cppcheck only supports the MISRA guidelines for C.
[^dart-limitations]: Currently, Codacy only supports including the packages [lints](https://pub.dev/packages/lints) and [<span class="skip-vale">flutter_lints</span>](https://pub.dev/packages/flutter_lints) on dartanalyzer configuration files.
[^complexity-limitations]: Doesn't calculate [the number of methods and the complexity per method](../repositories/files.md#file-details) for each file.
[^opengrep-brakeman]: Due to licensing limitations, Codacy doesn't support the latest version of Brakeman. To analyze your Ruby code for the latest security vulnerabilities, use [Opengrep](https://github.com/opengrep/opengrep), which provides comprehensive and up-to-date security scanning.
[^swiftlint-complexity]: Supports [reporting warnings or errors](https://realm.github.io/SwiftLint/cyclomatic_complexity.html) on functions above specific complexity thresholds. Enable the rule **Cyclomatic Complexity** on the [Code patterns page](../repositories-configure/configuring-code-patterns.md), or use a [configuration file](https://realm.github.io/SwiftLint/index.html#configuration) to customize the thresholds.
[^scala-dependencies]: Requires the [sbt-dependency-lock](https://github.com/stringbean/sbt-dependency-lock) plugin for generating the lockfile.
[^different-tools]: Codacy may use a different version of this tool for measuring complexity and duplication.

## See also

-   [Codacy quickstart (5 min)](codacy-quickstart.md)
-   [Client-side tools](../repositories-configure/local-analysis/client-side-tools.md)
-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
