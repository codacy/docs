# Codacy plugin tools

Codacy uses a system of plugin tools to extend the scope of analyses on your repositories, allowing [support for new languages and tools](../getting-started/supported-languages-and-tools.md) every day.

The Codacy GitHub repositories list the version and extra plugins supported by each plugin tool. You can also submit GitHub issues on these repositories.

<!--NOTE
    When adding a new supported tool, make sure that you update the following pages:

    docs/getting-started/supported-languages-and-tools.md
    docs/related-tools/codacy-plugin-tools.md
    docs/related-tools/local-analysis/client-side-tools.md (if the tool runs client-side)
    docs/repositories/security-monitor.md (if the tool reports security issues)
    docs/repositories-configure/configuring-code-patterns.md (supported configuration files table, or list of tools that don't support configuration files)
    docs/repositories-configure/codacy-configuration-file.md (list of tool short names to use on the Codacy configuration file)
-->

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
<td>Codacy Scalameta Pro</td>
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
<td><a href="https://github.com/tsenart/deadcode">deadcode</a></td>
<td><a href="https://github.com/codacy/codacy-deadcode" class="skip-vale">codacy/codacy-deadcode</a></td>
</tr>
<tr>
<td><a href="https://codenarc.org/">CodeNarc</a></td>
<td><a href="https://github.com/codacy/codacy-codenarc" class="skip-vale">codacy/codacy-codenarc</a></td>
</tr>
<tr>
<td><a href="http://www.coffeelint.org/">CoffeeLint</a></td>
<td><a href="https://github.com/codacy/codacy-coffeelint" class="skip-vale">codacy/codacy-coffeelint</a></td>
</tr>
<tr>
<td><a href="http://cppcheck.sourceforge.net/">Cppcheck</a></td>
<td><a href="https://github.com/codacy/codacy-cppcheck" class="skip-vale">codacy/codacy-cppcheck</a></td>
</tr>
<tr>
<td><span>Credo</span></td>
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
<td><a href="https://github.com/codacy/codacy-jackson-linter">Jackson Linter</a></td>
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
<td><a href="https://www.pylint.org/">Pylint</a></td>
<td><a href="https://github.com/codacy/codacy-pylint" class="skip-vale">codacy/codacy-pylint</a></td>
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
