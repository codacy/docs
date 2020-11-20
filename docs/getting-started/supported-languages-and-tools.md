# Supported languages and tools

For each supported programming language, Codacy generally provides Static Analysis, Code Duplication, Code Complexity, and Test Coverage.

The table below lists all programming languages currently supported by Codacy and the corresponding tools that Codacy uses to analyze your source code. For Test Coverage, see the [coverage report formats](../coverage-reporter/adding-coverage-to-your-repository.md) that Codacy supports.

<table>
  <colgroup>
    <col width="20%"/>
    <col width="30%"/>
    <col width="25%"/>
    <col width="25%"/>
  </colgroup>
  <thead>
    <tr>
      <th>Language</th>
      <th>Static Analysis</th>
      <th>Duplication</th>
      <th>Complexity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apex</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>C</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>*</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>C#</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a></td>
    </tr>
    <tr>
      <td>C++</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>*</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>CoffeeScript</td>
      <td><a href="http://www.coffeelint.org/">Coffeelint</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Crystal</td>
      <td><a href="https://github.com/veelenga/ameba">Ameba</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td><a href="http://csslint.net/">CSSLint</a>,
          <a href="https://stylelint.io/">Stylelint</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Dockerfile</td>
      <td><a href="https://github.com/hadolint/hadolint">Hadolint</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Elixir</td>
      <td><a href="https://github.com/rrrene/credo">Credo</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Go</td>
      <td><a href="https://gitlab.com/opennota/check">aligncheck</a><a href="#client-side"><sup>*</sup></a>,
          <a href="https://github.com/tsenart/deadcode">deadcode</a><a href="#client-side"><sup>*</sup></a>,
          <a href="https://github.com/securego/gosec">Gosec</a><a href="#client-side"><sup>*</sup></a>,
          <a href="https://github.com/mgechev/revive">Revive</a>,
          <a href="https://staticcheck.io/">Staticcheck</a><a href="#client-side"><sup>*</sup></a>
      </td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://github.com/fzipp/gocyclo">Gocyclo</a></td>
    </tr>
    <tr>
      <td>Groovy</td>
      <td><a href="https://codenarc.github.io/CodeNarc/">CodeNarc</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Java</td>
      <td><a href="https://checkstyle.sourceforge.io/">Checkstyle</a>,
          <a href="https://pmd.github.io/">PMD</a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"><sup>*</sup></a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td><a href="https://eslint.org/">ESLint</a>,
          <a href="https://jshint.com/">JSHint</a>,
          <a href="https://pmd.github.io/">PMD</a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://eslint.org/">ESLint</a></td>
    </tr>
    <tr>
      <td>JSON</td>
      <td><a href="https://eslint.org/">ESLint</a>,
          <a href="https://github.com/codacy/codacy-jackson-linter">Jackson Linter</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>JSP</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Kotlin</td>
      <td><a href="https://github.com/detekt/detekt">Detekt</a></td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://github.com/detekt/detekt">Detekt</a></td>
    </tr>
    <tr>
      <td>Less</td>
      <td><a href="https://stylelint.io/">Stylelint</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Markdown</td>
      <td><a href="https://github.com/remarkjs/remark-lint">RemarkLint</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PHP</td>
      <td><a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP Code Sniffer</a>,
          <a href="https://phpmd.org/">PHP Mess Detector</a></td>
      <td><a href="https://github.com/sebastianbergmann/phpcpd">PHPCPD</a></td>
      <td><a href="https://github.com/pdepend/pdepend">PHP Depend</a></td>
    </tr>
    <tr>
      <td>PL/SQL</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PostgreSQL</td>
      <td><a href="https://github.com/purcell/sqlint">SQLint</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>PowerShell</td>
      <td><a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Python
      </td>
      <td><a href="https://github.com/openstack/bandit">Bandit</a>,
          <a href="https://github.com/landscapeio/prospector">Prospector</a>,
          <a href="https://www.pylint.org/">Pylint</a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="https://github.com/rubik/radon">Radon</a></td>
    </tr>
    <tr>
      <td>Ruby
      </td>
      <td><a href="https://brakemanscanner.org/">Brakeman</a>,
          <a href="https://github.com/rubysec/bundler-audit">Bundler Audit</a>,
          <a href="https://github.com/bbatsov/rubocop">Rubocop</a></td>
      <td><a href="https://github.com/seattlerb/flay">Flay</a></td>
      <td><a href="https://github.com/bbatsov/rubocop">Rubocop</a></td>
    </tr>
    <tr>
      <td>Sass</td>
      <td><a href="https://stylelint.io/">Stylelint</a>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Scala
      </td>
      <td><a href="https://scalameta.org/">Scalameta</a>,
          <a href="http://www.scalastyle.org/">Scalastyle</a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"><sup>*</sup></a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td><a href="http://www.scalastyle.org/">Scalastyle</a>,
          <a href="https://github.com/scala/scala">Scala 2 compiler and standard library</a></td>
    </tr>
    <tr>
      <td>Shell</td>
      <td><a href="https://www.shellcheck.net/">ShellCheck</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Swift </td>
      <td><a href="https://github.com/realm/SwiftLint">SwiftLint</a>,
          <a href="https://github.com/sleekbyte/tailor">Tailor</a></td>
      <td><a href="https://pmd.github.io/pmd/pmd_userdocs_cpd.html">PMD CPD</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Transact-SQL</td>
      <td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td><a href="https://eslint.org/">ESLint</a>,
          <a href="https://palantir.github.io/tslint/">TSLint</a></td>
      <td><a href="https://github.com/kucherenko/jscpd">jscpd</a></td>
      <td><a href="https://eslint.org/">ESLint</a></td>
    </tr>
    <tr>
      <td>Velocity</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Visual Basic</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Visualforce</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>XML</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>XSL</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<sup>*</sup>: Supported as a [client-side tool](../related-tools/local-analysis/client-side-tools.md).
{: id="client-side"}

Codacy also uses [cloc](https://github.com/kentcdodds/cloc) to calculate the source lines of code for all supported languages.

## See also

-   [Getting started with Codacy](getting-started-with-codacy.md)
-   [Client-side tools](../related-tools/local-analysis/client-side-tools.md)
-   [Codacy plugin tools](../related-tools/codacy-plugin-tools.md)
