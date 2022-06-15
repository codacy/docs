# Security Monitor

{%
    include-markdown "../assets/includes/paid.md"
    start="<!--start-paid-->"
    end="<!--end-paid-->"
%}

The **Security Monitor** provides an overview of all security issues that Codacy found on your repository, and also warns you if any security code patterns are currently turned off.

By default, the page displays the overview for the main branch of your repository but if you have [more than one branch enabled](../repositories-configure/managing-branches.md) you can use the drop-down list at the top of the page to display information for other branches.

![Security Monitor](images/security-monitor.png)

The left-hand side of the dashboard lists the status for each security category that the tools that can analyze the programming languages in your repository support:

<style>
/* Center text in the first column */
#status th:first-child, #status td:first-child {
  text-align: center !important;
}
</style>

<table id="status">
  <thead>
    <tr>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="../images/security-monitor-red.png" alt="Red"></td>
      <td><strong>Codacy found security issues in this category</strong><br/><br/>
          Click the category name to see the list of security issues in this category, and click the title of the issues to see more information about the issue.</td>
    </tr>
    <tr>
      <td rowspan="2"><img src="../images/security-monitor-yellow.png" alt="Yellow"></td>
      <td><strong>There are security code patterns in this category that are turned off</strong><br/><br/>
          You should turn on the code patterns in this category so that Codacy can find the corresponding security issues. Click the category name to see the code patterns that are turned off, and click the check box next to each code pattern to turn it on.<br/><br/>
          To turn on all security code patterns on the repository regardless of their category, click the button <strong>More</strong> and select <strong>Turn on all security patterns</strong>.</td>
    </tr>
    <tr>
      <td style="display: none;"></td>
      <td><strong>Codacy can't determine if all security code patterns in this category are turned on or not</strong><br/><br/>
          This happens when you're using configuration files to control which code patterns are turned on. Ensure that you manually turn on the listed code patterns on your configuration files.</td>
    </tr>
    <tr>
      <td><img src="../images/security-monitor-green.png" alt="Green"></td>
      <td><strong>Everything is OK for this category</strong><br/><br/>
          All security code patterns in this category are turned on, and Codacy didn't find security issues in this category.</td>
    </tr>
  </tbody>
</table>

!!! tip
    You can use the **Warnings** drop-down list to display only security categories that have found issues or categories that have code patterns turned off.

## Languages checked for security issues

The Security Monitor supports checking the languages and frameworks below for any security issues reported by the corresponding tools:

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
      <th>Language or framework</th>
      <th>Tools that report security issues</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apex</td>
      <td><a href="https://pmd.github.io/">PMD</a></td>
    </tr>
    <tr>
      <td>AWS CloudFormation</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a></td>
    </tr>
    <tr>
      <td>C</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>1</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
    </tr>
    <tr>
      <td>C#</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">Sonar C#</a></td>
    </tr>
    <tr>
      <td>C++</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>1</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a></a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a></td>
    </tr>
    <tr>
      <td>Dockerfile</td>
      <td><a href="https://github.com/hadolint/hadolint">Hadolint</a></td>
    </tr>
    <tr>
      <td>Elixir</td>
      <td><a href="https://github.com/rrrene/credo">Credo</a></td>
    </tr>
    <tr>
      <td>Go</td>
      <td><a href="https://github.com/securego/gosec">Gosec</a><a href="#client-side"><sup>1</sup></a></td>
    </tr>
    <tr>
      <td>Groovy</td>
      <td><a href="https://codenarc.github.io/CodeNarc/">CodeNarc</a></td>
    </tr>
    <tr>
      <td>Java</td>
      <td><a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"><sup>1</sup></a><a href="#spotbugs-plugin"><sup>2</sup></a></td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td><a href="https://eslint.org/">ESLint</a><sup><a href="#eslint-plugin">3</a></sup></td>
    </tr>
    <tr>
      <td>Objective-C</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"><sup>1</sup></a></td>
    </tr>
      <td>PHP</td>
      <td><a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a>,
          <a href="https://phpmd.org/">PHP Mess Detector</a></td>
    </tr>
    <tr>
      <td>PowerShell</td>
      <td><a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a></td>
    </tr>
    <tr>
      <td>Python
      </td>
      <td><a href="https://github.com/PyCQA/bandit">Bandit</a>,
          <a href="https://github.com/PyCQA/prospector">Prospector</a>,
          <a href="https://www.pylint.org/">Pylint</a></td>
    </tr>
    <tr>
      <td>Ruby<a href="#ruby-31"><sup>4</sup></a>
      </td>
      <td><a href="https://brakemanscanner.org/">Brakeman</a>,
          <a href="https://github.com/rubysec/bundler-audit">bundler-audit</a>,
          <a href="https://github.com/rubocop/rubocop">RuboCop</a></td>
    </tr>
    <tr>
      <td>Scala</td>
      <td><a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"><sup>1</sup></a><a href="#spotbugs-plugin"><sup>2</sup></a></td>
    </tr>
    <tr>
      <td>Shell</td>
      <td><a href="https://www.shellcheck.net/">ShellCheck</a></td>
    </tr>
    <tr>
      <td>Transact-SQL</td>
      <td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td><a href="https://eslint.org/">ESLint</a><sup><a href="#eslint-plugin">3</a></sup></td>
    </tr>
    <tr>
      <td>Visual Basic</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">Sonar Visual Basic</a></td>
    </tr>
  </tbody>
</table>

<sup><span id="client-side">1</span></sup>: Supported as a [client-side tool](../related-tools/local-analysis/client-side-tools.md).  
<sup><span id="spotbugs-plugin">2</span></sup>: Includes the plugin [Find Security Bugs](https://find-sec-bugs.github.io/){: target="_blank"}.  
<sup><span id="eslint-plugin">3</sup>: Includes the shareable config [nodesecurity](https://www.npmjs.com/package/eslint-config-nodesecurity){: target="_blank"} and the plugins [angularjs-security-rules](https://www.npmjs.com/package/eslint-plugin-angularjs-security-rules){: target="_blank"}, [no-unsafe-innerhtml](https://www.npmjs.com/package/eslint-plugin-no-unsafe-innerhtml){: target="_blank"}, [no-unsanitized](https://www.npmjs.com/package/eslint-plugin-no-unsanitized){: target="_blank"}, [scanjs-rules](https://www.npmjs.com/package/eslint-plugin-scanjs-rules){: target="_blank"}, [security](https://www.npmjs.com/package/eslint-plugin-security){: target="_blank"}, and [security-node](https://www.npmjs.com/package/eslint-plugin-security-node){: target="_blank"}.  
<sup><span id="ruby-31">4</span></sup>: Currently, Codacy doesn't support any static code analysis tool for [Ruby 3.1](https://www.ruby-lang.org/en/news/2021/12/25/ruby-3-1-0-released/){: target="_blank"}.  

## Supported security categories

Each issue reported on the Security Monitor belongs to one of the following security categories:

<!--TODO
    - Review description of each category, and also update the Codacy UI copy-->

|Security category|Description|
|-----------------|-----------|
|**Android**|Android-specific issues.|
|**Auth**|Authentication is present in almost all web applications nowadays.|
|**Command injection**|Command injection is an attack in which the goal is the execution of arbitrary commands on the host operating system.|
|**Cookies**|An HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the browser while the user is browsing.|
|**Cryptography**|Cryptography is a security technique widely used and there are several cryptographic functions, but not all of them are secure.|
|**CSRF**|Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.|
|**DoS**|The Denial of Service (DoS) attack is focused on making a resource (site, application, server) unavailable for the purpose it was designed.|
|**File access**|An attacker may use special paths to access files that shouldn't be accessible.|
|**Firefox OS**|Sensitive APIs of Firefox OS.|
|**HTTP**|HTTP headers are a common attack vector for malign users.|
|**Input validation**|Input not validated may originate SQL Injection attacks for instance.|
|**Insecure modules/libraries**|Consider possible security implications associated with some modules.|
|**Insecure storage**|Storing sensitive data using these APIs isn't safe.|
|**Malicious code**|Exposed internal APIs can be accessed or changed by malicious code or by accident from another package.|
|**Mass assignment**|Mass assignment is a feature of Rails which allows an application to create a record from the values of a hash.|
|**Regex**|Regex can be used in a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach heavy computation situations that cause them to work very slowly (exponentially related to input size).|
|**Routes**|Badly configured routes can give unintended access to an attacker.|
|**SQL injection**|A SQL injection attack consists of insertion or "injection" of a SQL query via the input data from the client to the application.|
|**SSL**|Simply using SSL isn't enough to ensure the data you're sending is secure. Man in the middle attacks are well known and widely used.|
|**Unexpected behaviour**|Assigning values to private APIs might lead to unexpected behavior.|
|**Visibility**|Fields shouldn't have public accessibility.|
|**XSS**|XSS enables attackers to inject client-side scripts into web pages viewed by other users.|
|**Other**|Other language-specific security issues.|

## See also

-   [Issues page](issues.md)
-   [Configuring code patterns](../repositories-configure/configuring-code-patterns.md)
