# Engines

Codacy uses a system of plugin engines to extend the scope of analyses on your repositories, allowing support for new tools and languages every day. To create your own engine, check the [Tool Developer Guide](tool-developer-guide.md).

## Analysis engines

Here are the engines currently used on Codacy. The GitHub repositories list the version used by each engine and extra plugins supported for each tool.

<table>
<thead>
<tr>
<th><strong>Tool Name</strong></th>
<th><strong>Supported languages</strong></th>
<th><strong>Source</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/veelenga/ameba">Ameba</a></td>
<td>Crystal</td>
<td><a href="https://github.com/codacy/codacy-ameba">https://github.com/codacy/codacy-ameba</a></td>
</tr>
<tr>
<td><a href="https://github.com/openstack/bandit">Bandit</a></td>
<td>Python</td>
<td><a href="https://github.com/codacy/codacy-bandit" class="in-cell-link">https://github.com/codacy/codacy-bandit</a></td>
</tr>
<tr>
<td><a href="http://brakemanscanner.org/" class="in-cell-link">Brakeman</a></td>
<td>Ruby</td>
<td><a href="https://github.com/codacy/codacy-brakeman" class="in-cell-link">https://github.com/codacy/codacy-brakeman</a></td>
</tr>
<tr>
<td><a href="https://github.com/rubysec/bundler-audit">Bundler Audit</a></td>
<td>Ruby</td>
<td><a href="https://github.com/codacy/codacy-bundler-audit">https://github.com/codacy/codacy-bundler-audit</a></td>
</tr>
<tr>
<td><a href="http://checkstyle.sourceforge.net/" class="in-cell-link">Checkstyle</a></td>
<td>Java</td>
<td><a href="https://github.com/codacy/codacy-checkstyle/" class="in-cell-link">https://github.com/codacy/codacy-checkstyle/</a></td>
</tr>
<tr>
<td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a></td>
<td>C++</td>
<td><a href="https://github.com/codacy/codacy-clang-tidy" class="in-cell-link">https://github.com/codacy/codacy-clang-tidy</a></td>
</tr>
<tr>
<td>Codacy Scalameta Pro</td>
<td>Scala</td>
<td><a href="https://github.com/codacy/codacy-scalameta" class="in-cell-link">https://github.com/codacy/codacy-scalameta</a></td>
</tr>
<tr>
<td><a href="https://github.com/securego/gosec" class="in-cell-link">Gosec</a></td>
<td>Go</td>
<td><a href="https://github.com/codacy/codacy-gosec" class="in-cell-link">https://github.com/codacy/codacy-gosec</a></td>
</tr>
<tr>
<td><a href="https://codenarc.github.io/CodeNarc/" class="in-cell-link">CodeNarc</a></td>
<td>Groovy</td>
<td><a href="https://github.com/codacy/codacy-codenarc" class="in-cell-link">https://github.com/codacy/codacy-codenarc</a></td>
</tr>
<tr>
<td><a href="http://www.coffeelint.org/" class="in-cell-link">Coffeelint</a></td>
<td>CoffeeScript</td>
<td><a href="https://github.com/codacy/codacy-coffeelint" class="in-cell-link">https://github.com/codacy/codacy-coffeelint</a></td>
</tr>
<tr>
<td><a href="http://cppcheck.sourceforge.net/" class="in-cell-link">CPPCheck</a></td>
<td>C, C++</td>
<td><a href="https://github.com/codacy/codacy-cppcheck" class="in-cell-link">https://github.com/codacy/codacy-cppcheck</a></td>
</tr>
<tr>
<td><span>Credo</span></td>
<td>Elixir</td>
<td><a href="https://github.com/codacy/codacy-credo"><span class="wysiwyg-underline">https://github.com/codacy/codacy-credo</span></a></td>
</tr>
<tr>
<td><a href="http://csslint.net/" class="in-cell-link">CSSLint</a></td>
<td>CSS</td>
<td><a href="https://github.com/codacy/codacy-csslint" class="in-cell-link">https://github.com/codacy/codacy-csslint</a></td>
</tr>
<tr>
<td><a href="https://github.com/arturbosch/detekt">Detekt</a></td>
<td>Kotlin</td>
<td><a href="https://github.com/codacy/codacy-detekt">https://github.com/codacy/codacy-detekt</a></td>
</tr>
<tr>
<td><a href="http://eslint.org/" class="in-cell-link">ESLint</a></td>
<td>JavaScript, Typescript, JSON</td>
<td><a href="https://github.com/codacy/codacy-eslint" class="in-cell-link">https://github.com/codacy/codacy-eslint</a></td>
</tr>
<tr>
<td><a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
<td>C, C++</td>
<td><a href="https://github.com/codacy/codacy-flawfinder">https://github.com/codacy/codacy-flawfinder</a></td>
</tr>
<tr>
<td><a href="https://github.com/mgechev/revive">Revive</a></td>
<td>Go</td>
<td><a href="https://github.com/codacy/codacy-gorevive" class="c-link">https://github.com/codacy/codacy-gorevive</a></td>
</tr>
<tr>
<td><a href="https://github.com/hadolint/hadolint">Hadolint</a></td>
<td>Dockerfile</td>
<td><a href="https://github.com/codacy/codacy-hadolint">https://github.com/codacy/codacy-hadolint</a></td>
</tr>
<tr>
<td><a href="https://github.com/codacy/codacy-jackson-linter">Jackson Linter</a></td>
<td>JSON</td>
<td><a href="https://github.com/codacy/codacy-jackson-linter">https://github.com/codacy/codacy-jackson-linter</a></td>
</tr>
<tr>
<td><a href="http://jshint.com/">JSHint</a></td>
<td>JavaScript</td>
<td><a href="https://github.com/codacy/codacy-jshint">https://github.com/codacy/codacy-jshint</a></td>
</tr>
<tr>
<td><a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP Code Sniffer</a></td>
<td>PHP</td>
<td><a href="https://github.com/codacy/codacy-codesniffer" class="in-cell-link">https://github.com/codacy/codacy-codesniffer</a></td>
</tr>
<tr>
<td><a href="https://phpmd.org/" class="in-cell-link">PHP Mess Detector</a></td>
<td>PHP</td>
<td><a href="https://github.com/codacy/codacy-phpmd" class="in-cell-link">https://github.com/codacy/codacy-phpmd</a></td>
</tr>
<tr>
<td><a href="http://pmd.sourceforge.net/pmd-5.3.2/pmd-java/index.html" class="in-cell-link">PMD</a></td>
<td>Java, PLSQL, Apex, JavaScript, Velocity, XML, JSP, VisualForce</td>
<td><a href="https://github.com/codacy/codacy-pmd" class="in-cell-link">https://github.com/codacy/codacy-pmd</a></td>
</tr>
<tr>
<td><a href="https://github.com/landscapeio/prospector">Prospector</a></td>
<td>Python</td>
<td><a href="https://github.com/landscapeio/prospector">https://github.com/landscapeio/prospector</a></td>
</tr>
<tr>
<td><a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a></td>
<td>PowerShell</td>
<td><a href="https://github.com/codacy/codacy-psscriptanalyzer">https://github.com/codacy/codacy-psscriptanalyzer</a></td>
</tr>
<tr>
<td><a href="http://www.pylint.org/" class="in-cell-link">Pylint</a></td>
<td>Python</td>
<td><a href="https://github.com/codacy/codacy-pylint" class="in-cell-link">https://github.com/codacy/codacy-pylint</a></td>
</tr>
<tr>
<td><a href="https://github.com/remarkjs/remark-lint">RemarkLint</a></td>
<td>Markdown</td>
<td><a href="https://github.com/codacy/codacy-remark-lint">https://github.com/codacy/codacy-remark-lint</a></td>
</tr>
<tr>
<td><a href="https://github.com/bbatsov/rubocop" class="in-cell-link">Rubocop</a></td>
<td>Ruby</td>
<td><a href="https://github.com/codacy/codacy-rubocop">https://github.com/codacy/codacy-rubocop</a></td>
</tr>
<tr>
<td><a href="http://www.scalastyle.org/" class="in-cell-link">Scalastyle</a></td>
<td>Scala</td>
<td><a href="https://github.com/codacy/codacy-scalastyle" class="in-cell-link">https://github.com/codacy/codacy-scalastyle</a></td>
</tr>
<tr>
<td><a href="https://github.com/brigade/scss-lint">SCSSLint</a></td>
<td>CSS (SASS only)</td>
<td><a href="https://github.com/brigade/scss-lint">https://github.com/brigade/scss-lint</a></td>
</tr>
<tr>
<td><a href="https://www.shellcheck.net/" class="in-cell-link">ShellCheck</a></td>
<td>Shell</td>
<td><a href="https://github.com/codacy/codacy-shellcheck" class="in-cell-link">https://github.com/codacy/codacy-shellcheck</a></td>
</tr>
<tr>
<td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a></td>
<td>C#</td>
<td><a href="https://github.com/codacy/codacy-sonar-csharp">https://github.com/codacy/codacy-sonar-csharp</a></td>
</tr>
<tr>
<td><a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a></td>
<td>Visual Basic</td>
<td><a href="https://github.com/codacy/codacy-sonar-visual-basic">https://github.com/codacy/codacy-sonar-visual-basic</a></td>
</tr>
<tr>
<td><a href="https://spotbugs.github.io/">SpotBugs</a></td>
<td>Java, Scala</td>
<td><a href="https://github.com/codacy/codacy-spotbugs">https://github.com/codacy/codacy-spotbugs</a></td>
</tr>
<tr>
<td><a href="https://github.com/purcell/sqlint">SQLint</a></td>
<td>PSQL</td>
<td><a href="https://github.com/codacy/codacy-sqlint">https://github.com/codacy/codacy-sqlint</a></td>
</tr>
<tr>
<td><a href="https://stylelint.io/">Stylelint</a></td>
<td>CSS, LESS, SASS</td>
<td><a href="https://github.com/codacy/codacy-stylelint">https://github.com/codacy/codacy-stylelint</a></td>
</tr>
<tr>
<td><a href="https://github.com/realm/SwiftLint">SwiftLint</a></td>
<td>Swift</td>
<td><a href="https://github.com/codacy/codacy-swiftlint">https://github.com/codacy/codacy-swiftlint</a></td>
</tr>
<tr>
<td><a href="https://tailor.sh/">Tailor</a></td>
<td>Swift</td>
<td><a href="https://github.com/codacy/codacy-tailor" class="in-cell-link">https://github.com/codacy/codacy-tailor</a></td>
</tr>
<tr>
<td><a href="https://palantir.github.io/tslint/">TSLint</a></td>
<td>TypeScript</td>
<td><a href="https://github.com/codacy/codacy-tslint" class="in-cell-link">https://github.com/codacy/codacy-tslint</a></td>
</tr>
<tr>
<td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
<td>Transact-SQL</td>
<td><a href="https://github.com/codacy/codacy-tsqllint" class="in-cell-link">https://github.com/codacy/codacy-tsqllint</a></td>
</tr>
</tbody>
</table>

## Other tools

Although we expect all tools to run within an engine container, some tools are still supported directly as a binary in our analysis servers and aren't configurable in the UI:

<table>
<thead>
<tr>
<th><strong>Tool Name</strong></th>
<th><strong>Source</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>cloc</td>
<td><a href="https://www.npmjs.com/package/cloc" class="in-cell-link">https://www.npmjs.com/package/cloc</a></td>
</tr>
<tr>
<td><a href="https://github.com/sebastianbergmann/phpcpd" class="in-cell-link">PHPCPD</a></td>
<td><a href="https://github.com/codacy/codacy-duplication-phpcpd" class="in-cell-link">https://github.com/codacy/codacy-duplication-phpcp</a></td>
</tr>
<tr>
<td><a href="https://github.com/seattlerb/flay" class="in-cell-link">Flay</a></td>
<td><a href="https://github.com/codacy/codacy-duplication-flay" class="in-cell-link">https://github.com/codacy/codacy-duplication-flay</a></td>
</tr>
<tr>
<td>Metrics</td>
<td><a href="https://pypi.python.org/pypi/metrics">https://pypi.python.org/pypi/metrics</a></td>
</tr>
<tr>
<td>PDepend</td>
<td><a href="http://pdepend.org/" class="in-cell-link">http://pdepend.org/</a></td>
</tr>
<tr>
<td><a href="https://pmd.github.io/" class="in-cell-link">PMDCPD</a></td>
<td><a href="https://github.com/codacy/codacy-duplication-pmdcpd" class="in-cell-link">https://github.com/codacy/codacy-duplication-pmdcpd</a></td>
</tr>
<tr>
<td>Radon</td>
<td><a href="http://radon.readthedocs.org/en/latest/" class="in-cell-link">http://radon.readthedocs.org/en/latest/</a></td>
</tr>
</tbody>
</table>
