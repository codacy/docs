# Security Dashboard

On the security dashboard, you get an overview of all current security
alerts.

![security-dashboard.png](https://support.codacy.com/hc/article_attachments/360008854060/security-dashboard.png)

## Supported languages

The security monitor is available for the following languages:

-   Apex
-   C\#
-   Java
-   JavaScript
-   Python
-   Ruby
-   Scala
-   PHP
-   C
-   C++
-   Shell script
-   Dockerfile
-   Visual Basic
-   Elixir
-   PowerShell
-   TSQL
-   Groovy

## Tools

The security monitor is built using security patterns from:

-   [Bandit](https://bandit.readthedocs.io/en/latest/plugins/index.html#complete-test-plugin-listing)
-   [Brakeman](http://brakemanscanner.org/docs/warning_types/)
-   [Codacy Scalameta
    Pro](https://github.com/codacy/codacy-scalameta/tree/master/patterns-base/src/main/scala/codacy/patterns)
-   [ESLint](https://www.npmjs.com/package/eslint-plugin-security) (also:
    [1](https://www.npmjs.com/package/eslint-config-nodesecurity),
    [2](https://www.npmjs.com/package/eslint-plugin-scanjs-rules),
    [3](https://www.npmjs.com/package/eslint-plugin-no-unsafe-innerhtml) and [4](https://www.npmjs.com/package/eslint-config-secure))
-   [FindBugs](http://findbugs.sourceforge.net/bugDescriptions.html) (Codacy
    Self-hosted only)
-   [FindBugsSecurity](https://find-sec-bugs.github.io/bugs.htm) (Codacy
    Self-hosted only)
-   [SpotBugs](https://spotbugs.readthedocs.io/en/latest/bugDescriptions.html) (Codacy
    Self-hosted only)
-   [Sonar C\#](https://rules.sonarsource.com/csharp/type/Vulnerability)
-   [Sonar VB.NET](https://rules.sonarsource.com/vbnet)
-   [PMD](https://pmd.github.io/pmd-6.21.0/)
-   [PHP Mess Detector](https://phpmd.org/rules/)
-   [Pylint](http://pylint.pycqa.org/en/1.9/technical_reference/features.html)
    (Python 2)
-   [Pylint](http://pylint.pycqa.org/en/stable/technical_reference/features.html)
    (Python 3)
-   [RuboCop](https://rubocop.readthedocs.io/en/latest/cops/)
-   [Cppcheck](http://cppcheck.sourceforge.net/)
-   [Shellcheck](https://github.com/koalaman/shellcheck/wiki/Checks)
-   [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)
-   [Hadolint](https://github.com/hadolint/hadolint#rules)
-   [Prospector](https://github.com/PyCQA/prospector)
-   [Bundler-audit](https://rubydoc.info/gems/bundler-audit/frames)
-   [Credo](https://github.com/rrrene/credo/)
-   [FlawFinder](https://dwheeler.com/flawfinder/)
-   [PSScriptAnalyzer](https://dwheeler.com/flawfinder/)
-   [TSQLLint](https://github.com/tsqllint/tsqllint/)
-   [CodeNarc](https://codenarc.github.io/CodeNarc/codenarc-rule-index.html)

## Supported categories

-   <span style="font-weight: 400;">**XSS:** XSS enables attackers to
    inject client-side scripts into web pages viewed by other
    users.</span>
-   <span style="font-weight: 400;">**Input validation:** Input not
    validated may originate SQL Injection attacks for instance.</span>
-   <span style="font-weight: 400;">**File access:** An attacker may use
    special paths to access files that should not be accessible.</span>
-   <span style="font-weight: 400;">**HTTP:** HTTP headers are a common
    attack vector for malign users.</span>
-   <span style="font-weight: 400;">**Cookies:** An HTTP cookie is a
    small piece of data sent from a website and stored on the user's
    computer by the browser while the user is browsing.</span>
-   <span style="font-weight: 400;">**Unexpected behaviour:** Assigning
    values to private APIs might lead to unexpected behaviour.</span>
-   <span style="font-weight: 400;">**Mass assignment:** Mass assignment
    is a feature of Rails which allows an application to create a record
    from the values of a hash.</span>
-   <span style="font-weight: 400;">**Insecure storage:** Storing
    sensitive data using this APIs is not safe.</span>
-   <span style="font-weight: 400;">**Insecure
    modules/libraries:** Consider possible security implications
    associated with some modules.</span>
-   <span style="font-weight: 400;">**Visibility:** Fields should not
    have public accessibility.</span>
-   <span style="font-weight: 400;">**CSRF:** Cross-Site Request Forgery
    (CSRF) is an attack that forces an end user to execute unwanted
    actions on a web application in which they're currently
    authenticated.</span>
-   <span style="font-weight: 400;">**Android:** Android specific
    issues.</span>
-   <span style="font-weight: 400;">**Malicious code:** Exposed internal
    APIs can be accessed or change changed by malicious code or by
    accident from another package.</span>
-   <span style="font-weight: 400;">**Cryptography:** Cryptography is a
    security technique widely used and there are several cryptographic
    functions, but not all of them are secure.</span>
-   <span style="font-weight: 400;">**Command injection:** Command
    injection is an attack in which the goal is the execution of
    arbitrary commands on the host operating system.</span>
-   <span style="font-weight: 400;">**Firefox OS:** Sensitive APIs of
    Firefox OS.</span>
-   <span style="font-weight: 400;">**Auth:** Authentication is present
    in almost all web applications nowadays.</span>
-   <span style="font-weight: 400;">**DoS:** The Denial of Service (DoS)
    attack is focused on making a resource (site, application, server)
    unavailable for the purpose it was designed.</span>
-   <span style="font-weight: 400;">**SQL injection:** A SQL injection
    attack consists of insertion or 'injection' of a SQL query via the
    input data from the client to the application.</span>
-   <span style="font-weight: 400;">**Routes:** Badly configured routes
    can give unintended access to an attacker.</span>
-   <span style="font-weight: 400;">**Regex:** Regex can be used in a
    Denial of Service attack, that exploits the fact that most Regular
    Expression implementations may reach heavy computation situations
    that cause them to work very slowly (exponentially related to input
    size).</span>
-   <span style="font-weight: 400;">**SSL:** Simply using SSL isn't
    enough to ensure the data you are sending is secure. Man in the
    middle attacks are well known and widely used.</span>
-   <span style="font-weight: 400;">**Other:** Other language specific
    security issues.</span>

## Category states

Each security category listed on the left-hand side of the dashboard has
one of four states:

<table>
<tbody>
<tr class="odd">
<td><img src="https://support.codacy.com/hc/article_attachments/360008851559/green.png" alt="green.png" /></td>
<td><p>A green check mark means that <strong>everything is OK</strong> for this category: all the security patterns in this category are enabled, and no security issues have been found.</p></td>
</tr>
<tr class="even">
<td><img src="https://support.codacy.com/hc/article_attachments/360008851660/yellow.png" alt="yellow.png" /></td>
<td><p>A yellow exclamation mark means that <strong>there are security patterns in this category that are disabled</strong>. You should enable the patterns in this category so it is verified.</p></td>
</tr>
<tr class="odd">
<td><img src="https://support.codacy.com/hc/article_attachments/360008851579/red.png" alt="red.png" /></td>
<td><p>A red cross means that <strong>there are security issues identified</strong> for this category.</p></td>
</tr>
<tr class="even">
<td> </td>
<td><p>A blue info icon means that <strong>Codacy cannot be sure if you have all the security patterns in this category enabled</strong>. This happens when you are using configuration files to control which patterns are enabled.</p></td>
</tr>
</tbody>
</table>

## Additional features

On the Security dashboard view you can also:

-   Enable all the security patterns for that repository with one click 
-   Download all the patterns in a CSV file (this will give you a list
    of all the patterns considered by Codacy under the security
    category)

You just have to go to your repository's Security Tab, click
on <img src="https://support.codacy.com/hc/article_attachments/360012987454/morebutton.png" width="80" height="32" alt="morebutton.png" /> and
select the relevant option.

![downloadpatternscsv.gif](https://support.codacy.com/hc/article_attachments/360012987594/downloadpatternscsv.gif)
