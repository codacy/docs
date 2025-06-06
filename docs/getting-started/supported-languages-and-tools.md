---
description: List of tools that Codacy uses to analyze over 40 supported languages. Codacy provides static analysis for all programming languages and cloud infrastructure-as-code platforms as well as code duplication, code complexity, and code coverage metrics for most programming languages.
---

# Supported languages and tools

Codacy uses industry-leading tools to perform automatic static code analysis over 40 supported languages:

-   **For programming languages**, Codacy provides static analysis as well as code duplication, code complexity, secret detection, dependency vulnerability scanning, and code coverage metrics for key languages.

-   **For cloud infrastructure-as-code platforms**, Codacy provides static analysis and secret detection to enforce security and compliance best practices.

The table below lists all languages that Codacy supports and the corresponding tools that Codacy uses to analyze your source code. Besides this, Codacy uses [cloc](https://github.com/kentcdodds/cloc) to calculate the source lines of code for all supported languages and supports multiple [code coverage report formats](../coverage-reporter/index.md#generating-coverage).

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

<table>
  <colgroup>
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 10%;">
    <col width="20%"/>
  </colgroup>
  <thead>
    <tr>
      <th>Language</th>
      <th>File extensions</th>
      <th><a style="color: white;" href="../../faq/code-analysis/which-metrics-does-codacy-calculate/#issues">Static analysis</a></th>
      <th><a style="color: white;" href="#suggest-fixes">Suggested fixes</a></th>
      <th>Secret detection</th>
      <th>Dependency vulnerability scanning</th>
      <th><a style="color: white;" href="../../faq/code-analysis/which-metrics-does-codacy-calculate/#duplication">Duplication</a></th>
      <th><a style="color: white;" href="../../faq/code-analysis/which-metrics-does-codacy-calculate/#complexity">Complexity</a></th>
      <th>License scanning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apex</td>
      <td>.cls, .trigger</td>
      <td><a href="https://pmd.github.io/">PMD</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a></td>
      <td>-</td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>AsyncAPI</td>
      <td>-</td>
      <td><a href="https://stoplight.io/open-source/spectral/">Spectral</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>AWS CloudFormation</td>
      <td>-</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td>-</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#yaml-only"><sup>2</sup></a>,
          <a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Azure Resource Manager Templates</td>
      <td>-</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>C</td>
      <td>.c, .h</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> <a href="#client-side"><sup>3</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>conan.lock</code> (Conan) </td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>C++</td>
      <td>.cpp, .hpp, .cc, .cxx, .ino</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> <a href="#client-side"><sup>3</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a> <a href="#cppcheck-misra"><sup>4</sup></a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>conan.lock</code> (Conan) </td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>C#</td>
      <td>.cs</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>.deps.json</code> (.Net), <code>packages.lock.json</code> (NuGet) </td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a> <a href="#different-tools"><sup>10</sup></a> <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>CoffeeScript</td>
      <td>.coffee</td>
      <td><a href="https://github.com/clutchski/coffeelint">CoffeeLint</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Crystal</td>
      <td>.cr</td>
      <td><a href="https://github.com/crystal-ameba/ameba">Ameba</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>.css</td>
      <td><a href="https://stylelint.io/">Stylelint</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Dart</td>
      <td>.dart</td>
      <td><a href="https://github.com/dart-lang/sdk/tree/main/pkg/analyzer_cli">dartanalyzer</a> <a href="#dart-limitations"><sup>5</sup></a></td>
      <td>-</td>
      <td><a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>pubspec.lock</code></td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Dockerfile</td>
      <td>.dockerfile</td>
      <td><a href="https://github.com/hadolint/hadolint">Hadolint</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Elixir</td>
      <td>.ex, .exs</td>
      <td><a href="https://github.com/rrrene/credo">Credo</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>mix.lock</code> (Mix) </td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>GitHub Actions</td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Go</td>
      <td>.go</td>
      <td><a href="https://gitlab.com/opennota/check">aligncheck</a> <a href="#client-side"><sup>3</sup></a>,
          <a href="https://github.com/tsenart/deadcode">deadcode</a> <a href="#client-side"><sup>3</sup></a>,
          <a href="https://github.com/securego/gosec">Gosec</a> <a href="#client-side"><sup>3</sup></a>,
          <a href="https://github.com/mgechev/revive">Revive</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://staticcheck.io/">Staticcheck</a> <a href="#client-side"><sup>3</sup></a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>go.mod</code></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="https://github.com/fzipp/gocyclo">Gocyclo</a> <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Groovy</td>
      <td>.groovy</td>
      <td><a href="https://codenarc.github.io/CodeNarc/">CodeNarc</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Helm</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#yaml-only"><sup>2</sup></a>,
          <a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Java</td>
      <td>.java</td>
      <td><a href="https://checkstyle.sourceforge.io/">Checkstyle</a>,
          <a href="https://pmd.github.io/">PMD</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a> <a href="#client-side"><sup>3</sup></a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://pmd.github.io/">PMD</a>,
          <a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>pom.xml</code> and <code>gradle.lockfile</code></td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://pmd.github.io/">PMD</a> <a href="#complexity-limitations"><sup>6</sup></a> <a href="#different-tools"><sup>10</sup></a> <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>.js, .jsx, .jsm, .vue, .mjs</td>
      <td><a href="https://eslint.org/">ESLint</a>,
          <a href="https://pmd.github.io/">PMD</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td><a href="https://eslint.org/docs/rules/">ESLint</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>package.json</code> and <code>package-lock.json</code> (npm), <br><code>yarn.lock</code> (Yarn) </td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="https://eslint.org/">ESLint</a> <a href="#complexity-limitations"><sup>6</sup></a> <a href="#different-tools"><sup>10</sup></a> <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>JSON</td>
      <td>.json</td>
      <td><a href="https://github.com/FasterXML/jackson-core">Jackson Linter</a></td>
      <td>-</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>JSP</td>
      <td>.jsp</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Kotlin</td>
      <td>.kt, .kts</td>
      <td>
          <a href="https://github.com/detekt/detekt">detekt</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://pmd.github.io">PMD</a>
      </td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>pom.xml</code> and <code>gradle.lockfile</code></td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://github.com/detekt/detekt">detekt</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td>-</td>
    </tr>
    <tr>
      <td>Kubernetes</td>
      <td>-</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#yaml-only"><sup>2</sup></a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#yaml-only"><sup>2</sup></a>,
          <a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a></td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Less</td>
      <td>.less</td>
      <td><a href="https://stylelint.io/">Stylelint</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Markdown</td>
      <td>.md, .markdown, .mdown, .mkdn, .mkd, .mdwn, .mkdown, .ron</td>
      <td><a href="https://github.com/remarkjs/remark-lint">remark-lint</a>, <a href="https://github.com/DavidAnson/markdownlint">markdownlint</a></td>
      <td><a href="https://github.com/DavidAnson/markdownlint">markdownlint</a> <a href="#suggest-fixes">🔧</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Objective-C</td>
      <td>.m</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a> <a href="#client-side"><sup>3</sup></a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>OpenAPI</td>
      <td>-</td>
      <td><a href="https://stoplight.io/open-source/spectral/">Spectral</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PHP</td>
      <td>.php</td>
      <td><a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a>,
          <a href="https://phpmd.org/">PHP Mess Detector</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>composer.lock</code> (Composer) </td>
      <td><a href="https://github.com/sebastianbergmann/phpcpd">PHPCPD</a></td>
      <td><a href="https://github.com/pdepend/pdepend">PHP Depend</a>  <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>composer.lock</code> (Composer) </td>
    </tr>
    <tr>
      <td>PL/SQL</td>
      <td>.trg, .prc, .fnc, .pld, .pls, .plh, .plb, .pck, .pks, .pkh, .pkb, .typ, .tyb, .tps, .tpb</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PostgreSQL</td>
      <td>-</td>
      <td><a href="https://github.com/purcell/sqlint">SQLint</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PowerShell</td>
      <td>.ps1, .psc1, .psd1, .psm1, .ps1xml, .pssc, .cdxml, .clixml</td>
      <td><a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Python</td>
      <td>.py</td>
      <td><a href="https://github.com/PyCQA/bandit">Bandit</a>,
          <a href="https://github.com/landscapeio/prospector">Prospector</a>,
          <a href="https://github.com/pylint-dev/pylint">Pylint</a>,
          <a href="https://github.com/astral-sh/ruff">Ruff</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://github.com/PyCQA/bandit">Bandit</a>,
          <a href="https://github.com/landscapeio/prospector">Prospector</a>,
          <a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>requirements.txt</code> (pip), <br><code>Pipfile.lock</code> (pipenv), <br><code>poetry.lock</code> (Poetry), <code>uv.lock</code> (UV)</td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="https://github.com/rubik/radon">Radon</a>  <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Ruby</td>
      <td>.rb, .gemspec, .podspec, .jbuilder, .rake, .opal</td>
      <td><a href="https://brakemanscanner.org/">Brakeman</a> <a href="#semgrep-brakeman"><sup>7</sup></a>,
          <a href="https://github.com/rubocop/rubocop">RuboCop</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>Gemfile.lock</code> (Bundler) </td>
      <td><a href="https://github.com/seattlerb/flay">Flay</a></td>
      <td><a href="https://github.com/rubocop/rubocop">RuboCop</a> <a href="#complexity-limitations"><sup>6</sup></a> <a href="#different-tools"><sup>10</sup></a> <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Rust</td>
      <td>.rs, .rlib</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>Cargo.lock</code> (Cargo) </td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Sass</td>
      <td>.scss</td>
      <td><a href="https://stylelint.io/">Stylelint</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Scala</td>
      <td>.scala</td>
      <td><a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a>,
          <a href="http://www.scalastyle.org/">Scalastyle</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a> <a href="#client-side"><sup>3</sup></a></td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>build.sbt.lock</code> (sbt) <a href="#scala-dependencies"><sup>9</sup></a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="http://www.scalastyle.org/">Scalastyle</a>,
          <a href="https://github.com/scala/scala">Scala 2 compiler and standard library</a>  <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Serverless Framework</td>
      <td>-</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Shell</td>
      <td>.sh, .bash</td>
      <td><a href="https://www.shellcheck.net/">ShellCheck</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Swift</td>
      <td>.swift</td>
      <td>
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://github.com/realm/SwiftLint">SwiftLint</a>,
          <a href="https://pmd.github.io">PMD</a>
      </td>
      <td>-</td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>Package.resolved</code> (SwiftPM) </td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td><a href="https://github.com/realm/SwiftLint">SwiftLint</a><a href="#complexity-limitations"><sup>6</sup></a> <a href="#swiftlint-complexity"><sup>8</sup></a> <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Terraform</td>
      <td>.tf</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td>-</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a>,
          <a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Transact-SQL</td>
      <td>.tsql</td>
      <td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td>.ts, .tsx</td>
      <td><a href="https://eslint.org/">ESLint</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
      <td><a href="https://eslint.org/docs/rules/">ESLint</a> <a href="#suggest-fixes">🔧</a></td>
      <td><a href="https://semgrep.dev/">Semgrep</a>,
          <a href="https://trivy.dev">Trivy</a></td>
      <td><a href="https://trivy.dev">Trivy</a>, scans <br><code>package.json</code> and <code>package-lock.json</code> (npm), <br><code>yarn.lock</code> (Yarn) </td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://eslint.org/">ESLint</a> <a href="#complexity-limitations"><sup>6</sup></a> <a href="#different-tools"><sup>10</sup></a>  <a href="https://github.com/terryyin/lizard">Lizard</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Unity</td>
      <td>-</td>
      <td><a href="https://github.com/microsoft/Microsoft.Unity.Analyzers">Unity Roslyn Analyzers</a> <a href="#client-side"><sup>3</sup></a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Velocity</td>
      <td>.vm</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Visual Basic</td>
      <td>.vb</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Visualforce</td>
      <td>.component, .page</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a> <a href="#different-tools"><sup>10</sup></a> </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>XML</td>
      <td>.xml, .xsl, .wsdl, .pom</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td><a href="https://trivy.dev">Trivy</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>XSL</td>
      <td>.xsl</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>YAML</td>
      <td>.yaml, .yml, .env, .env.production, .env.prod, .env.staging, .env.dev, .env.development</td>
      <td>-</td>
      <td>-</td>
      <td><a href="https://trivy.dev">Trivy</a></td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
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
<td><a href="https://brakemanscanner.org/">Brakeman</a> <a href="#semgrep-brakeman"><sup>7</sup></a></td>
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
<td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
<td><a href="https://github.com/codacy/codacy-semgrep" class="skip-vale">codacy/codacy-semgrep</a></td>
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

<sup><span id="semgrep">1</span></sup>: Semgrep supports additional security rules when signing up for [Semgrep Pro](https://semgrep.dev/pricing/). This tool doesn't support [custom file extensions](../repositories-configure/languages.md#configuring-file-extensions).  
<sup><span id="yaml-only">2</span></sup>: Currently, only YAML file scanning is supported on this platform.  
<sup><span id="client-side">3</span></sup>: Supported as a [client-side tool](../repositories-configure/local-analysis/client-side-tools.md).  
<sup><span id="cppcheck-misra">4</span></sup>: Currently, Cppcheck only supports the MISRA guidelines for C.  
<sup><span id="dart-limitations">5</span></sup>: Currently, Codacy only supports including the packages [lints](https://pub.dev/packages/lints) and [<span class="skip-vale">flutter_lints</span>](https://pub.dev/packages/flutter_lints) on dartanalyzer configuration files.  
<sup><span id="complexity-limitations">6</span></sup>: Doesn't calculate [the number of methods and the complexity per method](../repositories/files.md#file-details) for each file.  
<sup><span id="semgrep-brakeman">7</span></sup>: Due to licensing limitations, Codacy doesn't support the latest version of Brakeman. To analyze your Ruby code for the latest security vulnerabilities, use [Semgrep](https://semgrep.dev/), which provides comprehensive and up-to-date security scanning.  
<sup><span id="swiftlint-complexity">8</span></sup>: Supports [reporting warnings or errors](https://realm.github.io/SwiftLint/cyclomatic_complexity.html) on functions above specific complexity thresholds. Enable the rule **Cyclomatic Complexity** on the [Code patterns page](../repositories-configure/configuring-code-patterns.md), or use a [configuration file](https://realm.github.io/SwiftLint/index.html#configuration) to customize the thresholds.  
<sup><span id="scala-dependencies">9</span></sup>: Requires the [sbt-dependency-lock](https://github.com/stringbean/sbt-dependency-lock) plugin for generating the lockfile.  
<sup><span id="different-tools">10</span></sup>: Codacy may use a different version of this tool for measuring complexity and duplication.  
<sup><span id="suggest-fixes">🔧</span></sup>: Supports [suggesting fixes](../repositories-configure/integrations/github-integration.md#suggest-fixes) for identified issues.

## See also

-   [Codacy quickstart (5 min)](codacy-quickstart.md)
-   [Client-side tools](../repositories-configure/local-analysis/client-side-tools.md)
-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
