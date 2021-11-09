---
description: The Security Monitor provides an overview of all current security issues.
---

# Security Monitor

{%
    include-markdown "../assets/includes/paid.md"
    start="<!--start-paid-->"
    end="<!--end-paid-->"
%}

The **Security Monitor** provides an overview of all current security issues.

![Security Monitor](images/security-monitor.png)

## Supported languages

<!--NOTE
    When adding a new supported tool, make sure that you update the following pages:

    docs/getting-started/supported-languages-and-tools.md
    docs/related-tools/codacy-plugin-tools.md
    docs/related-tools/local-analysis/client-side-tools.md (if the tool runs client-side)
    docs/repositories/security-monitor.md (if the tool reports security issues)
    docs/repositories-configure/configuring-code-patterns.md (supported configuration files table, or list of tools that don't support configuration files)
    docs/repositories-configure/codacy-configuration-file.md (list of tool short names to use on the Codacy configuration file)
-->

The Security Monitor is available for the following languages:

-   Apex
-   C#
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

The Security Monitor displays issues using security patterns from:

-   [Bandit](https://bandit.readthedocs.io/en/latest/plugins/index.html#complete-test-plugin-listing){: target="_blank"}
-   [Brakeman](https://brakemanscanner.org/docs/warning_types/){: target="_blank"}
-   [Codacy Scalameta Pro](https://github.com/codacy/codacy-scalameta/tree/master/patterns-base/src/main/scala/codacy/patterns){: target="_blank"}
-   [ESLint](https://www.npmjs.com/package/eslint-plugin-security){: target="_blank"} (also: [1](https://www.npmjs.com/package/eslint-config-nodesecurity){: target="_blank"}, [2](https://www.npmjs.com/package/eslint-plugin-scanjs-rules){: target="_blank"}, [3](https://www.npmjs.com/package/eslint-plugin-no-unsafe-innerhtml){: target="_blank"} and [4](https://www.npmjs.com/package/eslint-config-secure){: target="_blank"})
-   [SpotBugs](https://spotbugs.readthedocs.io/en/latest/bugDescriptions.html){: target="_blank"} (includes the plugin [Find Security Bugs](https://find-sec-bugs.github.io/bugs.htm){: target="_blank"})
-   [Sonar C#](https://rules.sonarsource.com/csharp/type/Vulnerability){: target="_blank"}
-   [Sonar VB.NET](https://rules.sonarsource.com/vbnet){: target="_blank"}
-   [PMD](https://pmd.github.io/pmd-6.21.0/){: target="_blank"}
-   [PHP Mess Detector](https://phpmd.org/rules/){: target="_blank"}
-   [Pylint](http://pylint.pycqa.org/en/1.9/technical_reference/features.html){: target="_blank"} (Python 2)
-   [Pylint](http://pylint.pycqa.org/en/stable/technical_reference/features.html){: target="_blank"} (Python 3)
-   [RuboCop](https://rubocop.readthedocs.io/en/latest/cops/){: target="_blank"}
-   [Cppcheck](http://cppcheck.sourceforge.net/){: target="_blank"}
-   [ShellCheck](https://github.com/koalaman/shellcheck/wiki/Checks){: target="_blank"}
-   [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer){: target="_blank"}
-   [Hadolint](https://github.com/hadolint/hadolint#rules){: target="_blank"}
-   [Prospector](https://github.com/PyCQA/prospector){: target="_blank"}
-   [bundler-audit](https://github.com/rubysec/bundler-audit){: target="_blank"}
-   [Credo](https://github.com/rrrene/credo/){: target="_blank"}
-   [Flawfinder](https://dwheeler.com/flawfinder/){: target="_blank"}
-   [PSScriptAnalyzer](https://dwheeler.com/flawfinder/){: target="_blank"}
-   [TSQLLint](https://github.com/tsqllint/tsqllint/){: target="_blank"}
-   [CodeNarc](https://codenarc.github.io/CodeNarc/codenarc-rule-index.html){: target="_blank"}

## Supported categories

-   **XSS:** XSS enables attackers to inject client-side scripts into web pages viewed by other users.
-   **Input validation:** Input not validated may originate SQL Injection attacks for instance.
-   **File access:** An attacker may use special paths to access files that shouldn't be accessible.
-   **HTTP:** HTTP headers are a common attack vector for malign users.
-   **Cookies:** An HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the browser while the user is browsing.
-   **Unexpected behaviour:** Assigning values to private APIs might lead to unexpected behavior.
-   **Mass assignment:** Mass assignment is a feature of Rails which allows an application to create a record from the values of a hash.
-   **Insecure storage:** Storing sensitive data using these APIs isn't safe.
-   **Insecure modules/libraries:** Consider possible security implications associated with some modules.
-   **Visibility:** Fields shouldn't have public accessibility.
-   **CSRF:** Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.
-   **Android:** Android-specific issues.
-   **Malicious code:** Exposed internal APIs can be accessed or changed by malicious code or by accident from another package.
-   **Cryptography:** Cryptography is a security technique widely used and there are several cryptographic functions, but not all of them are secure.
-   **Command injection:** Command injection is an attack in which the goal is the execution of arbitrary commands on the host operating system.
-   **Firefox OS:** Sensitive APIs of Firefox OS.
-   **Auth:** Authentication is present in almost all web applications nowadays.
-   **DoS:** The Denial of Service (DoS) attack is focused on making a resource (site, application, server) unavailable for the purpose it was designed.
-   **SQL injection:** A SQL injection attack consists of insertion or "injection" of a SQL query via the input data from the client to the application.
-   **Routes:** Badly configured routes can give unintended access to an attacker.
-   **Regex:** Regex can be used in a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach heavy computation situations that cause them to work very slowly (exponentially related to input size).
-   **SSL:** Simply using SSL isn't enough to ensure the data you're sending is secure. Man in the middle attacks are well known and widely used.
-   **Other:** Other language-specific security issues.

## Category states

Each security category listed on the left-hand side of the dashboard has one of four states:

<table>
  <thead>
    <tr>
      <th>State</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="../images/security-monitor-green.png" alt="Green"></td>
      <td><p><strong>Everything is OK for this category</strong></p>
          <p>All the security patterns in this category are enabled, and no security issues have been found.</p></td>
    </tr>
    <tr>
      <td><img src="../images/security-monitor-yellow.png" alt="Yellow"></td>
      <td><p><strong>There are security patterns in this category that are disabled</strong></p>
          <p>You should enable the patterns in this category so it's verified. To enable all security patterns on the repository, click the button <strong>More</strong> and select <strong>Turn on all security patterns</strong>.</p>
    </tr>
    <tr>
      <td><img src="../images/security-monitor-red.png" alt="Red"></td>
      <td><p><strong>There are security issues identified for this category</strong></p></td>
    </tr>
    <tr>
      <td><img src="../images/security-monitor-yellow.png" alt="Yellow"></td>
      <td><p><strong>Codacy can't determine if all the security patterns in this category are enabled or not</strong></p>
          <p>This happens when you're using configuration files to control which patterns are enabled. Ensure that you manually enable the listed patterns on your configuration files.</p></td>
    </tr>
  </tbody>
</table>
