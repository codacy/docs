---
description: List of tools that Codacy uses to analyze over 40 supported languages and frameworks. Codacy provides static analysis for all programming languages and cloud infrastructure-as-code frameworks as well as code duplication, code complexity, and code coverage metrics for most programming languages.
---

# Supported languages and tools

Codacy uses industry-leading tools to perform automatic static code analysis over 40 supported languages and frameworks:

-   **For programming languages** Codacy provides static analysis as well as code duplication, code complexity, and code coverage metrics for key languages.

-   **For cloud infrastructure-as-code frameworks** Codacy provides static analysis to enforce security and compliance best practices.

## Languages and frameworks

The table below lists all languages and frameworks that Codacy supports and the corresponding tools that Codacy uses to analyze your source code. Besides this, Codacy uses [cloc](https://github.com/kentcdodds/cloc) to calculate the source lines of code for all supported languages and supports multiple [code coverage report formats](../coverage-reporter/index.md#generating-coverage).

<!--NOTE
    When adding a new supported tool, make sure that you update the following pages:

    docs/getting-started/supported-languages-and-tools.md
    docs/repositories-configure/local-analysis/client-side-tools.md (if the tool runs client-side)
    docs/repositories/security-monitor.md (if the tool reports security issues)
    docs/repositories-configure/codacy-configuration-file.md (list of tool short names to use on the Codacy configuration file)
-->

<table>
  <colgroup>
    <col width="20%"/>
    <col width="25%"/>
    <col width="15%"/>
    <col width="20%"/>
    <col width="20%"/>
  </colgroup>
  <thead>
    <tr>
      <th>Language or framework</th>
      <th><a style="color: white;" href="../../faq/code-analysis/which-metrics-does-codacy-calculate/#issues">Static analysis</a></th>
      <th><a style="color: white;" href="#suggest-fixes">Suggested fixes</a></th>
      <th><a style="color: white;" href="../../faq/code-analysis/which-metrics-does-codacy-calculate/#duplication">Duplication</a></th>
      <th><a style="color: white;" href="../../faq/code-analysis/which-metrics-does-codacy-calculate/#complexity">Complexity</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apex</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>AsyncAPI</td>
      <td><a href="https://stoplight.io/open-source/spectral/">Spectral</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>AWS CloudFormation</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Azure Resource Manager Templates</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>C</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>1</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>C++</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>1</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a><a href="#cppcheck-misra"><sup>2</sup></a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>C#</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a></td>
    </tr>
    <tr>
      <td>CoffeeScript</td>
      <td><a href="https://github.com/clutchski/coffeelint">CoffeeLint</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Crystal</td>
      <td><a href="https://github.com/crystal-ameba/ameba">Ameba</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td><a href="http://csslint.net/">CSSLint</a>,
          <a href="https://stylelint.io/">Stylelint</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Dart</td>
      <td><a href="https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli">dartanalyzer</a><a href="#dart-limitations"><sup>3</sup></a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Dockerfile</td>
      <td><a href="https://github.com/hadolint/hadolint">Hadolint</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Elixir</td>
      <td><a href="https://github.com/rrrene/credo">Credo</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Go</td>
      <td><a href="https://gitlab.com/opennota/check">aligncheck</a><a href="#client-side"><sup>1</sup></a>,
          <a href="https://github.com/tsenart/deadcode">deadcode</a><a href="#client-side"><sup>1</sup></a>,
          <a href="https://github.com/securego/gosec">Gosec</a><a href="#client-side"><sup>1</sup></a>,
          <a href="https://github.com/mgechev/revive">Revive</a>,
          <a href="https://staticcheck.io/">Staticcheck</a><a href="#client-side"><sup>1</sup></a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://github.com/fzipp/gocyclo">Gocyclo</a></td>
    </tr>
    <tr>
      <td>Groovy</td>
      <td><a href="https://codenarc.github.io/CodeNarc/">CodeNarc</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Java</td>
      <td><a href="https://checkstyle.sourceforge.io/">Checkstyle</a>,
          <a href="https://pmd.github.io/">PMD</a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"><sup>1</sup></a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td><a href="https://eslint.org/">ESLint</a>,
          <a href="https://jshint.com/">JSHint</a>,
          <a href="https://pmd.github.io/">PMD</a></td>
      <td><a href="https://eslint.org/docs/rules/">ESLint</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://eslint.org/">ESLint</a></td>
    </tr>
    <tr>
      <td>JSON</td>
      <td><a href="https://github.com/FasterXML/jackson-core">Jackson Linter</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>JSP</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Kotlin</td>
      <td><a href="https://github.com/detekt/detekt">detekt</a></td>
      <td></td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://github.com/detekt/detekt">detekt</a></td>
    </tr>
    <tr>
      <td>Kubernetes</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Less</td>
      <td><a href="https://stylelint.io/">Stylelint</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Markdown</td>
      <td><a href="https://github.com/remarkjs/remark-lint">remark-lint</a>, <a href="https://github.com/DavidAnson/markdownlint">markdownlint</a></td>
      <td><a href="https://github.com/DavidAnson/markdownlint">markdownlint</a> <a href="#suggest-fixes">🔧</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Objective-C</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>1</sup></a>, <a href="http://fauxpasapp.com/">Faux Pas</a><a href="#client-side"><sup>1</sup></a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>OpenAPI</td>
      <td><a href="https://stoplight.io/open-source/spectral/">Spectral</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PHP</td>
      <td><a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a>,
          <a href="https://phpmd.org/">PHP Mess Detector</a></td>
      <td></td>
      <td><a href="https://github.com/sebastianbergmann/phpcpd">PHPCPD</a></td>
      <td><a href="https://github.com/pdepend/pdepend">PHP Depend</a></td>
    </tr>
    <tr>
      <td>PL/SQL</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PostgreSQL</td>
      <td><a href="https://github.com/purcell/sqlint">SQLint</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PowerShell</td>
      <td><a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Python
      </td>
      <td><a href="https://github.com/PyCQA/bandit">Bandit</a>,
          <a href="https://github.com/landscapeio/prospector">Prospector</a>,
          <a href="https://github.com/pylint-dev/pylint">Pylint</a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://github.com/rubik/radon">Radon</a></td>
    </tr>
    <tr>
      <td>Ruby<a href="#ruby-31"><sup>4</sup></a>
      </td>
      <td><a href="https://brakemanscanner.org/">Brakeman</a>,
          <a href="https://github.com/rubysec/bundler-audit">bundler-audit</a>,
          <a href="https://github.com/rubocop/rubocop">RuboCop</a></td>
      <td></td>
      <td><a href="https://github.com/seattlerb/flay">Flay</a></td>
      <td><a href="https://github.com/rubocop/rubocop">RuboCop</a></td>
    </tr>
    <tr>
      <td>Sass</td>
      <td><a href="https://stylelint.io/">Stylelint</a>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Scala
      </td>
      <td><a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a>,
          <a href="http://www.scalastyle.org/">Scalastyle</a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"><sup>1</sup></a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="http://www.scalastyle.org/">Scalastyle</a>,
          <a href="https://github.com/scala/scala">Scala 2 compiler and standard library</a></td>
    </tr>
    <tr>
      <td>Serverless Framework</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Shell</td>
      <td><a href="https://www.shellcheck.net/">ShellCheck</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Swift </td>
      <td><a href="https://github.com/realm/SwiftLint">SwiftLint</a>,
          <a href="https://github.com/sleekbyte/tailor">Tailor</a></td>
      <td></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://github.com/realm/SwiftLint">SwiftLint</a><a href="#swiftlint-complexity"><sup>5</sup></a></td>
    </tr>
    <tr>
      <td>Terraform</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Transact-SQL</td>
      <td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td><a href="https://eslint.org/">ESLint</a>,
          <a href="https://palantir.github.io/tslint/">TSLint</a></td>
      <td><a href="https://eslint.org/docs/rules/">ESLint</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://eslint.org/">ESLint</a></td>
    </tr>
    <tr>
      <td>Unity</td>
      <td><a href="https://github.com/microsoft/Microsoft.Unity.Analyzers">Unity Roslyn Analyzers</a><a href="#client-side"><sup>1</sup></a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Velocity</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Visual Basic</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Visualforce</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>XML</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>XSL</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td></td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<sup><span id="client-side">1</span></sup>: Supported as a [client-side tool](../repositories-configure/local-analysis/client-side-tools.md).  
<sup><span id="cppcheck-misra">2</span></sup>: Currently, Cppcheck only supports [checking the MISRA guidelines for C](https://cppcheck.sourceforge.io/misra.php).  
<sup><span id="dart-limitations">3</span></sup>: Currently, Codacy only supports including the packages [lints](https://pub.dev/packages/lints) and [flutter_lints](https://pub.dev/packages/flutter_lints) on dartanalyzer configuration files.  
<sup><span id="ruby-31">4</span></sup>: Currently, Codacy doesn't support any static code analysis tool for [Ruby 3.1](https://www.ruby-lang.org/en/news/2021/12/25/ruby-3-1-0-released/).  
<sup><span id="swiftlint-complexity">5</span></sup>: Supports [reporting warnings or errors](https://realm.github.io/SwiftLint/cyclomatic_complexity.html) on functions above specific complexity thresholds. Enable the rule **Cyclomatic Complexity** on the [Code patterns page](../repositories-configure/configuring-code-patterns.md), or use a [configuration file](https://realm.github.io/SwiftLint/index.html#configuration) to customize the thresholds.  
<sup><span id="suggest-fixes">🔧</span></sup>: Supports [suggesting fixes](../repositories-configure/integrations/github-integration.md#suggest-fixes) for identified issues.

## Tool configuration files

To adapt the Codacy analysis settings to your scenario, you can configure the tools and code patterns used to analyze your repositories, either in the Codacy UI or by using configuration files. The table below lists the configuration files that Codacy detects and supports for each tool.

See [how to use tool configuration files](../repositories-configure/configuring-code-patterns.md#using-your-own-tool-configuration-files).

<table>
  <thead>
    <tr>
      <th>Tool name</th>
      <th>Languages</th>
      <th>Supported configuration files</th>
      <th>Additional info</th>
    <tr>
  </thead>
  <tbody>
  <tr>
    <td>aligncheck</td>
    <td>Go</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Ameba</td>
    <td>Crystal</td>
    <td><code>.ameba.yml</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://docs.openstack.org/bandit/latest/config.html">Bandit</a></td>
    <td>Python</td>
    <td><code>bandit.yml</code>, <code>.bandit</code></td>
    <td>To solve flagged valid Python "assert" statements, create a <code>bandit.yml</code> on the root of the repository containing: <code>skips: \['B101'\]</code></td>
  </tr>
  <tr>
    <td>Brakeman</td>
    <td>Ruby</td>
    <td><code>config/brakeman.yml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>bundler-audit</td>
    <td>Ruby</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Checkov</td>
    <td>AWS CloudFormation, Azure Resource Manager Templates, Kubernetes, Serverless Framework, Terraform</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Checkstyle</td>
    <td>Java</td>
    <td><code>checkstyle.xml</code></td>
    <td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
  </tr>
  <tr>
    <td>Clang-Tidy</td>
    <td>C, C++, Objective-C</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Codacy Scalameta Pro</td>
    <td>Scala</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>CodeNarc</td>
    <td>Groovy</td>
    <td><code>.codenarcrc</code></td>
    <td></td>
  </tr>
  <tr>
    <td>CoffeeLint</td>
    <td>CoffeeScript</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Cppcheck</td>
    <td>C, C++</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Credo</td>
    <td>Elixir</td>
    <td><code>.credo.exs</code>, <code>config/.credo.exs</code></td>
    <td></td>
  </tr>
  <tr>
    <td>CSSLint</td>
    <td>CSS</td>
    <td><code>.csslintrc</code></td>
    <td></td>
  </tr>
  <tr>
    <td>dartanalyzer</td>
    <td>Dart</td>
    <td><code>analysis_options.yml</code></td>
    <td><a href="https://dart.dev/guides/language/analysis-options">Customizing static analysis</a></td>
  </tr>
  <tr>
    <td>deadcode</td>
    <td>Go</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>detekt</td>
    <td>Kotlin</td>
    <td><code>default-detekt-config.yml</code>, <code>detekt.yml</code></td>
    <td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
  </tr>
  <tr>
    <td><a href="https://eslint.org/docs/user-guide/configuring">ESLint</a></td>
    <td>JavaScript, TypeScript</td>
    <td><code>.eslintrc.js</code>, <code>.eslintrc.cjs</code>, <code>.eslintrc.yaml</code>, <code>.eslintrc.yml</code>, <code>.eslintrc.json</code>, <code>.eslintrc</code>,
        <code>.prettierrc</code>, <code>.prettierrc.yaml</code>, <code>.prettierrc.yml</code>, <code>.prettierrc.json</code>, <code>prettier.config.js</code>, <code>.prettierrc.js</code></td>
    <td><a href="https://github.com/codacy/codacy-eslint/blob/master/src/eslintPlugins.ts">Plugins configurable on the Codacy UI</a><br />
        <a href="https://github.com/codacy/codacy-eslint/blob/master/package.json#L58">Other supported plugins</a><br />

        <p>If you're using <a href="https://eslint.org/docs/latest/user-guide/configuring/configuration-files#cascading-and-hierarchy">module-level ESLint configuration files</a>, you must also include a ESLint configuration file <strong>on the root of your repository</strong> for Codacy to detect that you're using configuration files. For example, add the following minimal <code>.eslintrc.json</code> configuration file:</p>

        <pre><code>{ "root": true }</code></pre>
    </td>
  </tr>
  <tr>
    <td>Faux Pas</td>
    <td>Objective-C</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Flawfinder</td>
    <td>C, C++</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Gosec</td>
    <td>Go</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Hadolint</td>
    <td>Dockerfile</td>
    <td><code>.hadolint.yaml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>Jackson Linter</td>
    <td>JSON</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>JSHint</td>
    <td>JavaScript</td>
    <td><code>.jshintrc</code></td>
    <td></td>
  </tr>
  <tr>
    <td>markdownlint</td>
    <td>Markdown</td>
    <td><code>.markdownlint.json</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage">PHP_CodeSniffer</a></td>
    <td>PHP</td>
    <td><code>phpcs.xml</code>, <code>phpcs.xml.dist</code></td>
    <td></td>
  </tr>
  <tr>
    <td>PHP Mess Detector</td>
    <td>PHP</td>
    <td><code>codesize.xml</code>, <code>phpmd.xml</code>, <code>phpmd.xml.dist</code></td>
    <td></td>
  </tr>
  <tr>
    <td>PMD</td>
    <td>Apex, Java, JavaScript, JSP, PL/SQL, XML, Velocity and Visualforce</td>
    <td><code>ruleset.xml</code>, <code>apex-ruleset.xml</code></td>
    <td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
  </tr>
  <tr>
    <td>Prospector</td>
    <td>Python</td>
    <td><code>.prospector.yml</code>, <code>.prospector.yaml</code>, <code>prospector.yml</code>, <code>prospector.yaml</code>, <code>.landscape.yml</code>, <code>.landscape.yaml</code>, <code>landscape.yml</code>, <code>landscape.yaml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>PSScriptAnalyzer</td>
    <td>PowerShell</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Pylint</td>
    <td>Python</td>
    <td><code>pylintrc</code>, <code>.pylintrc</code></td>
    <td><a href="https://github.com/codacy/codacy-pylint-python3/blob/master/requirements.txt">Plugins</a></td>
  </tr>
  <tr>
    <td>remark-lint</td>
    <td>Markdown</td>
    <td><code>.remarkrc</code>, <code>.remarkrc.json</code>, <code>.remarkrc.yaml</code>, <code>.remarkrc.yml</code>, <code>.remarkrc.js</code></td>
    <td></td>
  </tr>
  <tr>
    <td>Revive</td>
    <td>Go</td>
    <td><code>revive.toml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>RuboCop</td>
    <td>Ruby</td>
    <td><code>.rubocop.yml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>Scalastyle</td>
    <td>Scala</td>
    <td><code>scalastyle-config.xml</code>, <code>scalastyle_config.xml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>ShellCheck</td>
    <td>Shell</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>SonarC#</td>
    <td>C#</td>
    <td><code>SonarLint.xml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>SonarVB</td>
    <td>Visual Basic</td>
    <td><code>SonarLint.xml</code></td>
    <td></td>
  </tr>
 <tr>
    <td>Spectral</td>
    <td>AsyncAPI, OpenAPI</td>
    <td><code>.spectral.yaml</code>, <code>.spectral.yml</code>, <code>.spectral.json</code></td>
    <td></td>
  </tr>
  <tr>
    <td>SpotBugs</td>
    <td>Java, Scala</td>
    <td><code>findbugs.xml</code>, <code>findbugs-includes.xml</code>, <code>findbugs-excludes.xml</code>, <code>spotbugs.xml</code>, <code>spotbugs-includes.xml</code>, <code>spotbugs-excludes.xml</code></td>
    <td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
  </tr>
  <tr>
    <td>SQLint</td>
    <td>PostgreSQL</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Staticcheck</td>
    <td>Go</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>Stylelint</td>
    <td>CSS, LESS, SASS</td>
    <td><code>.stylelintrc</code>, <code>stylelint.config.js</code>, <code>.stylelintrc.json</code>, <code>.stylelintrc.yaml</code>, <code>.stylelintrc.yml</code>, <code>.stylelintrc.js</code></td>
    <td>Supports configuration file in directories other than root and can search up to 5 directories into the repository.</td>
  </tr>
  <tr>
    <td>SwiftLint</td>
    <td>Swift</td>
    <td><code>.swiftlint.yml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>Tailor</td>
    <td>Swift</td>
    <td><code>.tailor.yml</code></td>
    <td></td>
  </tr>
  <tr>
    <td>TSLint</td>
    <td>TypeScript</td>
    <td><code>tslint.json</code></td>
    <td></td>
  </tr>
  <tr>
    <td>TSQLLint</td>
    <td>Transact-SQL</td>
    <td><code>.tsqllintrc</code></td>
    <td></td>
  </tr>
  <tr>
    <td>Unity Roslyn Analyzers</td>
    <td>Unity</td>
    <td>-</td>
    <td></td>
  </tr>
  </tbody>
</table>
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
<td><a href="https://gitlab.com/opennota/check">aligncheck</a></td>
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
<td><a href="https://brakemanscanner.org/">Brakeman</a></td>
<td><a href="https://github.com/codacy/codacy-brakeman" class="skip-vale">codacy/codacy-brakeman</a></td>
</tr>
<tr>
<td><a href="https://github.com/rubysec/bundler-audit">bundler-audit</a></td>
<td><a href="https://github.com/codacy/codacy-bundler-audit" class="skip-vale">codacy/codacy-bundler-audit</a></td>
</tr>
<tr>
<td><a href="https://checkstyle.sourceforge.io/">Checkstyle</a></td>
<td><a href="https://github.com/codacy/codacy-checkstyle" class="skip-vale">codacy/codacy-checkstyle</a></td>
</tr>
<tr>
<td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
<td><a href="https://github.com/codacy/codacy-checkov" class="skip-vale">codacy/codacy-checkov</a></td>
</tr>
<tr>
<td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a></td>
<td><a href="https://github.com/codacy/codacy-clang-tidy" class="skip-vale">codacy/codacy-clang-tidy</a></td>
</tr>
<tr>
<td><a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a></td>
<td><a href="https://github.com/codacy/codacy-scalameta" class="skip-vale">codacy/codacy-scalameta</a></td>
</tr>
<tr>
<td><a href="http://fauxpasapp.com/">Faux Pas</a></td>
<td><a href="https://github.com/codacy/codacy-faux-pas" class="skip-vale">codacy/codacy-faux-pas</a></td>
</tr>
<tr>
<td><a href="https://github.com/securego/gosec">Gosec</a></td>
<td><a href="https://github.com/codacy/codacy-gosec" class="skip-vale">codacy/codacy-gosec</a></td>
</tr>
<tr>
<td><a href="https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli">dartanalyzer</a></td>
<td><a href="https://github.com/codacy/codacy-dartanalyzer" class="skip-vale">codacy/codacy-dartanalyzer</a></td>
</tr>
<tr>
<td><a href="https://github.com/tsenart/deadcode">deadcode</a></td>
<td><a href="https://github.com/codacy/codacy-deadcode" class="skip-vale">codacy/codacy-deadcode</a></td>
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
<td><a href="http://cppcheck.sourceforge.net/">Cppcheck</a></td>
<td><a href="https://github.com/codacy/codacy-cppcheck" class="skip-vale">codacy/codacy-cppcheck</a></td>
</tr>
<tr>
<td><a href="https://github.com/rrrene/credo">Credo</a></span></td>
<td><a href="https://github.com/codacy/codacy-credo" class="skip-vale">codacy/codacy-credo</a></td>
</tr>
<tr>
<td><a href="http://csslint.net/">CSSLint</a></td>
<td><a href="https://github.com/codacy/codacy-csslint" class="skip-vale">codacy/codacy-csslint</a></td>
</tr>
<tr>
<td><a href="https://github.com/arturbosch/detekt">detekt</a></td>
<td><a href="https://github.com/codacy/codacy-detekt" class="skip-vale">codacy/codacy-detekt</a></td>
</tr>
<tr>
<td><a href="https://eslint.org/">ESLint</a></td>
<td><a href="https://github.com/codacy/codacy-eslint" class="skip-vale">codacy/codacy-eslint</a></td>
</tr>
<tr>
<td><a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
<td><a href="https://github.com/codacy/codacy-flawfinder" class="skip-vale">codacy/codacy-flawfinder</a></td>
</tr>
<tr>
<td><a href="https://github.com/mgechev/revive">Revive</a></td>
<td><a href="https://github.com/codacy/codacy-gorevive" class="skip-vale">codacy/codacy-gorevive</a></td>
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
<td><a href="https://jshint.com/">JSHint</a></td>
<td><a href="https://github.com/codacy/codacy-jshint" class="skip-vale">codacy/codacy-jshint</a></td>
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
<td><a href="https://pmd.sourceforge.io/pmd-5.3.2/pmd-java/index.html">PMD</a></td>
<td><a href="https://github.com/codacy/codacy-pmd" class="skip-vale">codacy/codacy-pmd</a></td>
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
<td><a href="https://github.com/DavidAnson/markdownlint">markdownlint</a></td>
<td><a href="https://github.com/codacy/codacy-markdownlint" class="skip-vale">codacy/codacy-markdownlint</a></td>
</tr>
<tr>
<td><a href="https://github.com/remarkjs/remark-lint">remark-lint</a></td>
<td><a href="https://github.com/codacy/codacy-remark-lint" class="skip-vale">codacy/codacy-remark-lint</a></td>
</tr>
<tr>
<td><a href="https://github.com/microsoft/Microsoft.Unity.Analyzers">Unity Roslyn Analyzers</a></td>
<td><a href="https://github.com/codacy/codacy-roslyn" class="skip-vale">codacy/codacy-roslyn</a></td>
</tr>
<tr>
<td><a href="https://github.com/rubocop/rubocop">RuboCop</a></td>
<td><a href="https://github.com/codacy/codacy-rubocop" class="skip-vale">codacy/codacy-rubocop</a></td>
</tr>
<tr>
<td><a href="http://www.scalastyle.org/">Scalastyle</a></td>
<td><a href="https://github.com/codacy/codacy-scalastyle" class="skip-vale">codacy/codacy-scalastyle</a></td>
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
<td><a href="https://spotbugs.github.io/">SpotBugs</a></td>
<td><a href="https://github.com/codacy/codacy-spotbugs" class="skip-vale">codacy/codacy-spotbugs</a></td>
</tr>
<tr>
<td><a href="https://github.com/purcell/sqlint">SQLint</a></td>
<td><a href="https://github.com/codacy/codacy-sqlint" class="skip-vale">codacy/codacy-sqlint</a></td>
</tr>
<tr>
<td><a href="https://staticcheck.io">Staticcheck</a></td>
<td><a href="https://github.com/codacy/codacy-staticcheck" class="skip-vale">codacy/codacy-staticcheck</a></td>
</tr>
<tr>
<td><a href="https://stylelint.io/">Stylelint</a></td>
<td><a href="https://github.com/codacy/codacy-stylelint" class="skip-vale">codacy/codacy-stylelint</a></td>
</tr>
<tr>
<td><a href="https://github.com/realm/SwiftLint">SwiftLint</a></td>
<td><a href="https://github.com/codacy/codacy-swiftlint" class="skip-vale">codacy/codacy-swiftlint</a></td>
</tr>
<tr>
<td><a href="https://github.com/sleekbyte/tailor">Tailor</a></td>
<td><a href="https://github.com/codacy/codacy-tailor" class="skip-vale">codacy/codacy-tailor</a></td>
</tr>
<tr>
<td><a href="https://palantir.github.io/tslint/">TSLint</a></td>
<td><a href="https://github.com/codacy/codacy-tslint" class="skip-vale">codacy/codacy-tslint</a></td>
</tr>
<tr>
<td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
<td><a href="https://github.com/codacy/codacy-tsqllint" class="skip-vale">codacy/codacy-tsqllint</a></td>
</tr>
</tbody>
</table>

## See also

-   [Codacy quickstart (5 min)](codacy-quickstart.md)
-   [Client-side tools](../repositories-configure/local-analysis/client-side-tools.md)
-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
