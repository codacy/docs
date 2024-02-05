# Managing security and risk

The Security and risk management feature helps you <span class="skip-vale">quickly</span> identify, track, and address security issues by automatically opening time-bound, prioritized action items whenever Codacy detects security issues in your organization repositories or in your [connected Jira instance](./integrations/jira-integration.md).

Under Security and risk management, you can find the following pages to help you monitor your security issues:

-   [Dashboard](#dashboard)
-   [Item list](#item-list)

## Dashboard

The **Security and risk management** dashboard provides a general overview of items, based on their status.

To access the dashboard, select an organization from the top navigation bar and select **Security and risk** on the left navigation sidebar.

The main area of the dashboard includes five panels:

-   **Total:** all open items
-   **Due soon:** open items within 15 days of their deadline
-   **Overdue:** open items with a missed deadline
-   **Closed on time:** items closed before the deadline
-   **Closed late:** items closed after the deadline

Each panel shows the total count of matching items and contains a **Review** button to view a list of matching items.

When viewing the dashboard, you can:

-   Limit the total counts in each panel to a specific set of severities, repositories, or security categories by clicking the filter drop-downs above the main area.

-   Review the [severity assignment rules](#item-severities-and-deadlines) by clicking the **See rules** button in the top right-hand corner of the page.

![Security and risk management dashboard](images/security-risk-management-dashboard.png)

## Item list

The **Security and risk management items** page displays a filtered list of items, sorted by due date ascending.

To access the item list, access the [dashboard](#dashboard) and click the **Review** button in the area of interest, based on the desired filtering.

When viewing the item list, you can:

-   Update the filtering criteria by clicking the **Severity**, **Status**, **Repository**, or **Security category** drop-downs above the list.

-   Find out more about an item by clicking its **Details** column to navigate to the item of interest on the source platform.

-   Review the [severity assignment rules](#item-severities-and-deadlines) by clicking the **See rules** button in the top right-hand corner of the page.

![Security and risk management items](images/security-risk-management-item-list.png)

## Exporting the security item list

!!! info "This feature is available only to organization admins and organization managers"

To export a list of security items as a CSV file, click the **Export CSV** button in the top right-hand corner of the page. The exported list always includes all items, ignoring any applied filters.

## How Codacy manages security items {: id="opening-and-closing-items"}

!!! important
    To open and close security items, Codacy must detect when the associated issues are introduced and fixed. The detection logic is platform-dependent and is described below.

Codacy opens a new security item whenever a source platform detects a new security issue. The new item is automatically assigned a severity and a status:

-   The priority of the issue on the source platform sets the [severity of the item](#item-severities-and-deadlines). In turn, the severity of the item defines a deadline to close the item.
-   The time to the deadline sets the [status of the item](#item-statuses). The item then moves through different statuses as the deadline is approached, met, or missed.

Codacy closes an item when the source platform stops detecting the associated security issue.

The following section details when Codacy opens and closes items for each supported platform.

### How Codacy manages items detected on Git repositories {: id="opening-and-closing-codacy-items"}

!!! note
    To make sure that Codacy detects security issues correctly:

    -   [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category. These patterns are enabled by default, but may not be on custom configurations.
    -   Alternatively, [apply a coding standard](using-coding-standards.md) that includes patterns belonging to the Security category.
    -   Confirm that the latest [commits](../repositories/commits.md) to the default branches of your repositories are analyzed.

Codacy opens a new item when it detects a new security issue on the default branch of a repository.

Codacy closes an item in either of the following cases:

-   Codacy detects that the associated issue isn't present in the most recent analyzed commit and therefore is fixed
-   You [ignore the associated issue](../repositories/issues.md#ignoring-and-managing-issues)
-   You [disable the tool](../repositories-configure/configuring-code-patterns.md) that found the associated issue

!!! important
    Deleting a repository deletes all open items belonging to that repository.

### How Codacy manages items detected on Jira {: id="opening-and-closing-jira-items"}

!!! note
    -   For Codacy to detect Jira issues, you must [integrate Jira with Security and risk management](./integrations/jira-integration.md).
    -   Codacy retrieves updates from Jira once a day. If an issue is opened and closed on the same day, Codacy may not detect it.
    -   To make sure that Codacy detects Jira issues correctly, assign the **security** label when creating the issue or immediately after.

Codacy opens a new item when it detects a new Jira issue with a **security** label (case-insensitive).

Codacy closes an item when it detects that the associated Jira issue is marked as Closed.

## Item statuses

The following table describes how item statuses map to deadlines:

<table>
    <thead>
        <tr>
            <th>Status category</th>
            <th>Item status</th>
            <th>Deadline</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">Open</td>
            <td>Overdue</td>
            <td>The deadline has been missed</td>
        </tr>
        <tr>
            <td>Due soon</td>
            <td>Fewer than 15 days to the deadline</td>
        </tr>
        <tr>
            <td>On track</td>
            <td>15 days or more to the deadline</td>
        </tr>
        <tr>
            <td rowspan="2">Closed</td>
            <td>Closed late</td>
            <td>Closed after the deadline</td>
        </tr>
        <tr>
            <td>Closed on time</td>
            <td>Closed before the deadline</td>
        </tr>
    </tbody>
</table>

## Item severities and deadlines

The following table defines item severities and days to fix the associated security issue, based on the importance of the underlying issue:

| Item<br/>severity | <br/>Days to fix | Underlying Codacy<br/>issue severity | Underlying Jira<br/>issue priority <sup>1</sup> |
|-------------------|------------------|--------------------------------------|-------------------------------------------------|
| Critical          | 30               | Critical                             | Highest                                         |
| High              | 60               | -                                    | High                                            |
| Medium            | 90               | Medium                               | Medium                                          |
| Low               | 120              | Minor                                | Low and other/custom                            |

<small><sup>1</sup> Those listed are the default Jira priority names. If you rename a default Jira priority, it keeps the correct mapping.</small>

## Languages checked for security issues

Security and risk management supports checking the languages and infrastructure-as-code platforms below for any Codacy security issues reported by the corresponding tools:

<!--NOTE
    When adding a new supported tool, make sure that you update the following pages:

    docs/getting-started/supported-languages-and-tools.md
    docs/repositories-configure/local-analysis/client-side-tools.md (if the tool runs client-side)
    docs/organizations/managing-security-and-risk.md  (if the tool reports security issues)
    docs/repositories-configure/configuring-code-patterns.md (supported configuration files table, or list of tools that don't support configuration files)
    docs/repositories-configure/codacy-configuration-file.md (list of tool short names to use on the Codacy configuration file)
-->

<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>Tools that report security issues</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apex</td>
      <td><a href="https://pmd.github.io/">PMD</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
    </tr>
    <tr>
      <td>AWS CloudFormation</td>
      <td><a href="https://github.com/bridgecrewio/checkov/">Checkov</a>,
          <a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a></td>
    </tr>
    <tr>
      <td>C</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"> <sup>3</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>C#</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarC#</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>C++</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"> <sup>3</sup></a>,
          <a href="http://cppcheck.sourceforge.net/">Cppcheck</a>,
          <a href="https://dwheeler.com/flawfinder/">Flawfinder</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Dart</td>
      <td><a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Dockerfile</td>
      <td><a href="https://github.com/hadolint/hadolint">Hadolint</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Elixir</td>
      <td><a href="https://github.com/rrrene/credo">Credo</a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>GitHub Actions</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
    </tr>
    <tr>
      <td>Go</td>
      <td><a href="https://github.com/securego/gosec">Gosec</a><a href="#client-side"> <sup>3</sup></a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Groovy</td>
      <td><a href="https://codenarc.github.io/CodeNarc/">CodeNarc</a></td>
    </tr>
    <tr>
      <td>Helm</td>
      <td><a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a></td>
    </tr>
    <tr>
      <td>Java</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"> <sup>3</sup></a><a href="#spotbugs-plugin"> <sup>4</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td><a href="https://eslint.org/">ESLint</a> <a href="#eslint-plugin"><sup>5</sup></a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>JSON</td>
      <td><a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Kotlin</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
    </tr>
    <tr>
      <td>Kubernetes</td>
      <td><a href="https://trivy.dev">Trivy</a> <a href="#yaml-only"><sup>2</sup></a></td>
    </tr>
    <tr>
      <td>Objective-C</td>
      <td><a href="https://clang.llvm.org/extra/clang-tidy/">Clang-Tidy</a><a href="#client-side"> <sup>3</sup></a></td>
    </tr>
    <tr>
      <td>PHP</td>
      <td><a href="https://github.com/squizlabs/PHP_CodeSniffer">PHP_CodeSniffer</a>,
          <a href="https://phpmd.org/">PHP Mess Detector</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>PowerShell</td>
      <td><a href="https://github.com/PowerShell/PSScriptAnalyzer">PSScriptAnalyser</a></td>
    </tr>
    <tr>
      <td>Python</td>
      <td><a href="https://github.com/PyCQA/bandit">Bandit</a>,
          <a href="https://github.com/landscapeio/prospector">Prospector</a>,
          <a href="https://github.com/pylint-dev/pylint">Pylint</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Ruby<a href="#ruby-31"> <sup>6</sup></a></td>
      <td><a href="https://brakemanscanner.org/">Brakeman</a>,
          <a href="https://github.com/rubocop/rubocop">RuboCop</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Rust</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Scala</td>
      <td><a href="https://github.com/codacy/codacy-scalameta">Codacy Scalameta Pro</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://spotbugs.github.io/">SpotBugs</a><a href="#client-side"> <sup>3</sup></a><a href="#spotbugs-plugin"> <sup>4</sup></a></td>
    </tr>
    <tr>
      <td>Swift</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
    </tr>
    <tr>
      <td>Shell</td>
      <td><a href="https://www.shellcheck.net/">ShellCheck</a>
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a></td>
    </tr>
    <tr>
      <td>Terraform</td>
      <td><a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Transact-SQL</td>
      <td><a href="https://github.com/tsqllint/tsqllint/">TSQLLint</a></td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td><a href="https://eslint.org/">ESLint</a> <a href="#eslint-plugin"><sup>5</sup></a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Visual Basic</td>
      <td><a href="https://github.com/SonarSource/sonar-dotnet">SonarVB</a></td>
    </tr>
  </tbody>
</table>

<sup><span id="semgrep">1</span></sup>: Semgrep supports additional security rules when signing up for [Semgrep Pro](https://semgrep.dev/pricing/).  
<sup><span id="yaml-only">2</span></sup>: Currently, Trivy only supports scanning YAML files on this platform.  
<sup><span id="client-side">3</span></sup>: Supported as a [client-side tool](../repositories-configure/local-analysis/client-side-tools.md).  
<sup><span id="spotbugs-plugin">4</span></sup>: Includes the plugin [Find Security Bugs](https://find-sec-bugs.github.io/).  
<sup><span id="eslint-plugin">5</sup>: Includes the shareable config [<span class="skip-vale">nodesecurity</span>](https://www.npmjs.com/package/eslint-config-nodesecurity) and the plugins [angularjs-security-rules](https://www.npmjs.com/package/eslint-plugin-angularjs-security-rules), [no-unsafe-innerhtml](https://www.npmjs.com/package/eslint-plugin-no-unsafe-innerhtml), [no-unsanitized](https://www.npmjs.com/package/eslint-plugin-no-unsanitized), [scanjs-rules](https://www.npmjs.com/package/eslint-plugin-scanjs-rules), [security](https://www.npmjs.com/package/eslint-plugin-security), and [security-node](https://www.npmjs.com/package/eslint-plugin-security-node).  
<sup><span id="ruby-31">6</span></sup>: Currently, Codacy doesn't support any static code analysis tool for [Ruby 3.1](https://www.ruby-lang.org/en/news/2021/12/25/ruby-3-1-0-released/).  

## Supported security categories

Each Codacy issue reported by Security and risk management belongs to one of the following security categories:

<!--NOTE
    Currently, this category doesn't include any security issues
    https://github.com/codacy/codacy-tools/pull/496#discussion_r892437164

|**Firefox OS**|Security issues related to sensitive APIs of Firefox OS.|
-->

| Security category                  | Description                                                                                                                                                                                                      |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Android**                        | Android-specific security issues.                                                                                                                                                                                |
| **Authentication**                 | Broken authentication and authorization attacks consist in gaining access to accounts that allow disclosing sensitive information or performing operations that could compromise the system.                     |
| **Command Injection**              | Command injection attacks aim to execute arbitrary commands on the host operating system.                                                                                                                        |
| **Cookies**                        | Security issues related to insecure cookies.                                                                                                                                                                     |
| **Cryptography**                   | Cryptography attacks exploit failures related to cryptography (or lack thereof), <span class="skip-vale">potentially</span> leading to exposure of sensitive data.                                               |
| **CSRF**                           | Cross-Site Request Forgery (CSRF) attacks force an end user to execute unwanted actions on a web application in which they're currently authenticated.                                                           |
| **Denial of Service**              | Denial of Service (DoS) attacks make a resource (site, application, server) unavailable for legitimate users, typically by flooding the resource with requests or exploiting a vulnerability to trigger a crash. |
| **File Access**                    | File access security issues may allow an attacker to access arbitrary files and directories stored on the file system such as application source code, configuration, and critical system files.                 |
| **HTTP Headers**                   | Insecure HTTP headers are a common attack vector for malicious users.                                                                                                                                            |
| **Input Validation**               | Client input should always be validated to prevent malformed or malicious data from entering the workflow of an information system.                                                                              |
| **Insecure Modules and Libraries** | Security issues related to modules or libraries that can <span class="skip-vale">potentially</span> include vulnerabilities.                                                                                     |
| **Insecure Storage**               | Security issues related to insecure storage of sensitive data.                                                                                                                                                   |
| **Malicious Code**                 | Security issues related to code patterns that are <span class="skip-vale">potentially</span> unsafe.                                                                                                             |
| **Mass Assignment**                | Unprotected mass assignments are a Rails feature that could allow an attacker to update sensitive model attributes.                                                                                              |
| **Regex**                          | Regular expressions can be used in Denial of Service attacks, exploiting the fact that in most regular expression implementations the computational load grows exponentially with input size.                    |
| **Routes**                         | Badly configured routes can give unintended access to an attacker.                                                                                                                                               |
| **SQL Injection**                  | SQL injection attacks insert or "inject" malicious SQL queries into the application via the client input data.                                                                                                   |
| **SSL**                            | Security issues related with old SSL versions or configurations that have known cryptographic weaknesses and should no longer be used.                                                                           |
| **Unexpected Behaviour**           | Security issues related to <span class="skip-vale">potentially</span> insecure system API calls.                                                                                                                 |
| **Visibility**                     | Logging should always be included for security events to better allow attack detection and help defend against vulnerabilities.                                                                                  |
| **XSS**                            | Cross-Site Scripting (XSS) attacks inject malicious client-side scripts into trusted websites that are visited by the end users.                                                                                 |
| **Other**                          | Other language-specific security issues.                                                                                                                                                                         |

