---
title: Managing security and risk
---


The Security and risk management feature helps you <span class="skip-vale">quickly</span> identify, track, and address security across your organization by automatically opening time-bound, prioritized findings whenever security problems are detected in your organization repositories, in your [connected Jira instance](./integrations/jira-integration.md), or <span class="skip-vale">as a result of</span> [penetration testing](https://www.codacy.com/security).

Under Security and risk management, you can find the following pages to help you monitor the security of your repositories:

-   [Overview](#dashboard)
-   [Findings](#item-list)
-   [Dependencies](#dependencies-list)

In addition, on these pages, you can [share filtered views of findings](#sharing-filtered-view), [export findings as a CSV file](#exporting-the-security-item-list), and [review severity rules and integration settings](#reviewing-settings)

## Overview {#dashboard}
The **Security and risk management overview** page provides a high-level view of the security posture of your organization, including the number of open findings, the distribution of open findings by severity, the history of finding resolution, and a breakdown of the most high-risk repositories and most detected security categories.

Use this page to assess your organization's security posture and its progress over time, identify areas for improvement, and share findings with stakeholders.

To access the overview page, select an organization from the top navigation bar and select **Security and risk** on the left navigation sidebar.

![Security and risk management overview page](images/security-risk-management-overview.png)

The overview page includes six panels:

-   [Open findings overview](#open-findings-overview)
-   [Open findings distribution](#open-findings-distribution)
-   [Open findings history](#open-findings-history)
-   [Activity history](#activity-history)
-   [Top 10 high-risk repositories](#top-10-high-risk-repositories)
-   [Top 10 common security categories](#top-10-common-security-categories)

To limit the information displayed in each panel, use the filter drop-down above the main area, and choose the relevant repositories, or utilise [**Segments**](../segments).
:::note[Check out how to [enable and configure **Segments**](../segments/#enabling-segments)]
:::


### Open findings overview

The **Open findings overview** panel displays the total number of open security findings and the number of findings of each severity, helping you quickly assess the overall security posture of your organization and <span class="skip-vale">quickly</span> review findings that are critical or overdue.

To access the findings page with the corresponding filter applied, click on a number.

![Security and risk management open findings overview panel](images/security-risk-management-overview-open.png)

### Open findings distribution

The **Open findings distribution** panel shows the relative distribution of open findings by scan type, severity, or status, helping you evaluate the distribution of risk across different criteria and identify areas that may need immediate attention.

To select the desired distribution, use the drop-down in the top right-hand corner of the panel.

To access the findings page with the corresponding filter applied, click on a number.

![Security and risk management open findings distribution panel](images/security-risk-management-overview-distribution.png)

### Open findings history

The **Open findings history** graph shows the open findings trends over the past three months, grouped by week and severity. It details the progression of your organization's risk and security posture over time and can, for example, help you understand if the right issues are being addressed.

For a detailed view of the distribution on a specific week, hover over the graph.

![Security and risk management open findings history panel](images/security-risk-management-overview-history-open.png)

### Activity history

The **Activity history** graph shows weekly counts of open, closed, ignored and unignored findings over the past three months, overlaid on the overall open findings trend. It complements the **Open findings history** graph with more information, such as the volume of findings addressed each week and a visual representation of the new/closed ratio.

To filter the graph by finding severity, use the drop-down in the top right-hand corner of the panel.

For a detailed view of the counts on a specific week, hover over the graph.

![Security and risk management activity history panel](images/security-risk-management-overview-history-activity.png)

### Top 10 high-risk repositories

The **Top 10 high-risk repositories** list shows the repositories with the highest number of open findings, ordered by severity.

:::note
This panel may list fewer than ten repositories if there are fewer than ten repositories with open findings in the organization or if fewer than ten repositories are selected in the dropdown **Repository** filter.
:::

![Security and risk management high risk repositories panel](images/security-risk-management-overview-top-risk.png)

### Top 10 common security categories

The **Top 10 common security categories** list shows the most common security categories of open findings, ordered by count.

To access the findings page with the corresponding filter applied, click on a category.

![Security and risk management top categories panel](images/security-risk-management-overview-top-categories.png)

## Findings {#item-list}
The **Security and risk management findings** page displays a filtered list of findings. By default, you are shown the findings that are currently opened and this list is sorted by **Latest findings** found. You can click on the sort dropdown to sort the findings by detection date - latest or oldest. Use this page to review and prioritize findings and track the progress of your security efforts.

To access the findings page, access the [overview page](#dashboard) and click the **Findings** tab.

![Security and risk management findings page](images/security-risk-management-findings.png)

On the left section of the page, besides sorting, you can update the filtering criteria by clicking the  [**Segments**](../segments) , **Repositories**, **Severities**, **Statuses**,  **Security categories**, or **Scan types** dropdowns above the list.
:::note[Check out how to [enable and configure **Segments**](../segments/#enabling-segments)]
:::

On the right section, you can view the filtered list of findings. Each finding card offers a quick overview of the vulnerability found, including its title, [source platform](#opening-and-closing-items), [scan type](#scan-types), [security category](#supported-security-categories), and related information such as the repository name, Jira issue key, or affected URL targets. To find out more, click this overview to navigate to the finding details on the source platform.

![Security and risk management finding page](images/security-risk-management-finding-details.png)

The same Common Vulnerability and Exposure can be classified with different severities in different sources, like cve.org or NVD, and Trivy uses these and other sources to update their database. As such, there may be situations where the severity attributed to a Finding by Trivy is not in line with a specific source. Subsequent analysis can then close a Finding and re-open it with a different severity, if a Trivy database update occurs.

## Sharing a filtered view of findings {#sharing-filtered-view}
To share the current view of the overview or findings page, click the **Copy URL** button in the top right-hand corner of the page. This action copies the URL with the current filters applied to the clipboard.

:::caution[ [**Segments**](../segments) filter won't be considered when sharing the filtered view]
:::

## Ignoring findings {#ignoring-findings}
:::note[This feature is available only to organization admins and organization managers except for findings detected on [Git repositories](#opening-and-closing-items). For those findings, [repository permissions are respected](../repositories/issues.md#ignoring-and-managing-issues)]
:::

You can ignore a finding using the context menu both in the findings list page and the findings details page. When ignoring a finding you can optionally specify a reason for doing so.

![Security and risk management finding ignore](images/security-risk-management-finding-ignore.png)

From an organization standpoint, ignoring a finding means that you accept the risk it poses and you're not planning on addressing the issue.

From Codacy's standpoint, ignoring a finding means it will be removed from the metrics featured in the [overview page](#dashboard) page. Note that the [Open Findings history](#open-findings-history) chart will only be changed at the start of next week.

:::note[[Jira](./integrations/jira-integration.md) findings can't be ignored in Codacy. You should closed the issue directly in Jira.]
:::

:::caution[Ignoring findings detected on [Git repositories](#opening-and-closing-items) will also [ignore the issue at the repository level](../repositories/issues.md#ignoring-and-managing-issues).]
:::

You can still see **Ignored** findings in the [findings list](#item-list), by filtering for the **Ignored** status in the **Statuses** dropdown. You can assess which status a finding has at his overview, on the right top corner.

![Security and risk management finding unignore list](images/security-risk-management-finding-unignore-list.png)

An Ignored finding can be **unignored** directly from the [findings list](#item-list) or by going to the same menu in the finding details page. Note that in this page you can also find out more about who ignored the finding and why, if such a reason was provided.

Unignoring a finding reverts the effects of ignoring it.

![Security and risk management finding unignore](images/security-risk-management-finding-unignore.png)

:::caution[Unignoring findings detected on [Git repositories](#opening-and-closing-items) will also [unignore the issue at the repository level](../repositories/issues.md#ignoring-and-managing-issues).]
:::

:::note[Ignoring and unignoring findings are [auditable actions](../organizations/audit-logs-for-organizations.md#organization).]
:::

## Exporting findings {#exporting-the-security-item-list}
:::note[This feature is available only to organization admins and organization managers]
:::

To export a list of findings as a CSV file, click the options menu in the top right-hand corner of the page and select **Export findings (.csv)**. The exported list always includes all findings, ignoring any applied filters.

## Reviewing severity rules and integration settings {#reviewing-settings}
To [review the severity assignment rules](#item-severities-and-deadlines) or manage the integration with [Jira](./integrations/jira-integration.md) or [Slack](./integrations/slack-integration.md), click the options menu in the top right-hand corner of the page and select respectively **See severity rules** or **View integrations**.

## How Codacy manages findings {#opening-and-closing-items}
:::caution
To open and close findings, Codacy must detect when the associated issues are introduced and fixed. The detection logic is platform-dependent and is described below.
:::

Codacy opens a new finding whenever a source platform detects a new security issue. The new finding is automatically assigned a severity and a status:

-   The priority of the issue on the source platform sets the [severity of the finding](#item-severities-and-deadlines). In turn, the severity of the finding defines a deadline to close the finding.
-   The time to the deadline sets the [status of the finding](#item-statuses). The finding then moves through different statuses as the deadline is approached, met, or missed.

Codacy closes a finding when the source platform stops detecting the associated security issue.

The following section details when Codacy opens and closes findings for each supported platform.

### How Codacy manages findings detected on Git repositories {#opening-and-closing-codacy-items}
:::note
To make sure that Codacy detects security issues correctly:

-   [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category. These patterns are enabled by default, but may not be on custom configurations.
-   Alternatively, [apply a coding standard](using-coding-standards.md) that includes patterns belonging to the Security category.
-   Confirm that the latest [commits](../repositories/commits.mdx) to the default branches of your repositories are analyzed.

:::

Codacy opens a new finding when it detects a new security issue on the default branch of a repository.

Codacy closes a finding in either of the following cases:

-   Codacy detects that the associated issue isn't present in the most recent analyzed commit and therefore is fixed
-   You [ignore the associated issue](../repositories/issues.md#ignoring-and-managing-issues)
-   You [disable the tool](../repositories-configure/configuring-code-patterns.md) that found the associated issue

:::caution
Deleting a repository deletes all open findings belonging to that repository.
:::

### How Codacy manages findings detected during software composition analysis (SCA) {#opening-and-closing-sca-items}
:::note
To make sure that Codacy detects dependency issues correctly, [enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Trivy tool.
:::

Vulnerable dependencies are a specific GIT repository finding. Similarly to other repository findings, Codacy opens an issue whenever a commit is analyzed.

Additionally, Codacy scans your codebase every evening to see if it's affected by any newly discovered vulnerabilities.

:::caution
The proactive SCA scanning is a business tier feature. If you are a Codacy Pro customer interested in upgrading to gain access to this feature, reach out to our customer success team.
:::


### How Codacy manages findings detected on Jira {#opening-and-closing-jira-items}
:::note
-   For Codacy to detect Jira issues, you must [integrate Jira with Security and risk management](./integrations/jira-integration.md).
-   Codacy retrieves updates from Jira once a day. If an issue is opened and closed on the same day, Codacy may not detect it.
-   To make sure that Codacy detects Jira issues correctly, assign the **security** label when creating the issue or immediately after.
:::

Codacy opens a new finding when it detects a new Jira issue with a **security** label (case-insensitive).

Codacy closes a finding when it detects that the associated Jira issue is marked as Closed.

### How Codacy manages findings detected during penetration testing {#opening-and-closing-pen-testing-items}
:::note
Penetration testing is available upon request and is provided by a third-party partner. See [how to request penetration testing for your organization](https://www.codacy.com/security).
:::

Codacy opens a finding for each security issue detected during a penetration test.

Codacy closes a finding when a subsequent penetration test doesn't detect the underlying security issue.

### How Codacy manages findings detected during application scanning (DAST) {#opening-and-closing-app-scanning-items}
:::note
To view application scanning findings, also known as DAST (Dynamic Application Security Testing) findings, you must first [generate a DAST report and upload it to Codacy](../codacy-api/examples/uploading-dast-results.md).
:::

Codacy opens a finding for each security issue detected in the DAST report. If subsequent reports identify the same issue, Codacy updates the existing finding.

Codacy closes a finding when it's not detected in a subsequent DAST report. If a previously closed issue reappears in a later report, Codacy reopens the finding.

## Finding severities and deadlines {#item-severities-and-deadlines}
The following table defines finding severities and the default number of days to the deadline to fix the associated security issue, based on the importance of the underlying issue:

| Finding<br/>severity | <br/>Days to deadline | Underlying Codacy<br/>issue severity | Underlying Jira<br/>issue priority <sup>1</sup> |
|----------------------|-----------------------|--------------------------------------|-------------------------------------------------|
| Critical             | 30                    | Critical                             | Highest                                         |
| High                 | 60                    | -                                    | High                                            |
| Medium               | 90                    | Medium                               | Medium                                          |
| Low                  | 120                   | Minor                                | Low and other/custom                            |

<small><sup>1</sup> Those listed are the default Jira priority names. If you rename a default Jira priority, it keeps the correct mapping.</small>

### Customize deadlines {#item-configurable-deadlines}
:::note[This feature is available only to [organization admins and organization managers](../organizations/roles-and-permissions-for-organizations.md).]
:::

You can configure your findings deadline by clicking on the "Configure SLAs" button, on the right corner of the page.

![Security and risk management SLAs configure](images/security-risk-management-slas-configure.png)

In the open configuration modal you'll be able to input your deadline preferences for each severity. Each deadline must be between a minimum of 1 day and a maximum of 9999 days.

![Security and risk management SLAs configuration modal](images/security-risk-management-slas-modal.png)

As soon as changes are saved, your open findings statuses will be updated accordingly.
You are also able to reset to Codacy default deadline values (see table above) at any time.

## Finding statuses {#item-statuses}
The following table describes how finding statuses map to deadlines:

<table>
    <thead>
        <tr>
            <th>Status category</th>
            <th>Finding status</th>
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

## Supported security categories

:::note
Due to a recent update, some issues may be temporarily assigned the **Not yet categorized** category. To categorize these issues, you can [reanalyze the default branch of the relevant repository](../faq/repositories/how-do-i-reanalyze-my-repository.md#reanalyzing-a-branch). For a list of repositories that have issues with this category, use the **Security category** filter on the [Findings](#item-list) page.
Note that some issues just don't have a security category. These issues will remain **Not yet categorized**.
:::

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
| **Insecure Modules and Libraries** | Security issues related to modules or libraries that are malicious or can <span class="skip-vale">potentially</span> include vulnerabilities.                                                                                     |
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

## Scan types

Security and risk management classifies each finding with a **Scan type**, indicating the specific source or method used to detect the finding. This information helps you understand the origin of the finding and the context in which the underlying issue was detected.

The following table lists the available scan types and their descriptions:

| Scan type                         | Description                                                                                                                    |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Code Scanning**                 | Analysis of source code for vulnerabilities without execution. Also known as Static Application Security Testing (**SAST**).   |
| **Software Composition Analysis** | Analysis of external libraries and packages for malicious intent, vulnerabilities or outdated versions.                                          |
| **Exposed Secrets**               | Detection of sensitive information, such as passwords or API keys, inadvertently included in the code.                         |
| **Infrastructure as Code**        | Detection of configuration issues within infrastructure-as-code (IaC) files that could pose risks.                             |
| **Penetration Testing**           | Results from [penetration testing](#opening-and-closing-pen-testing-items) to find security vulnerabilities in running code.   |
| **App Scanning**                  | Simulated attacks on live applications to find vulnerabilities. Also known as Dynamic Application Security Testing (**DAST**). |

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
          <a href="https://docs.astral.sh/ruff/">Ruff</a>,
          <a href="https://semgrep.dev/">Semgrep</a> <a href="#semgrep"><sup>1</sup></a>,
          <a href="https://trivy.dev">Trivy</a></td>
    </tr>
    <tr>
      <td>Ruby</td>
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

## Dependencies {#dependencies-list}
:::caution
The dependency tab is a business-tier feature. If you are a Codacy Pro customer interested in upgrading to gain access to this feature, contact our customer success team.
:::


The **Security and risk management Dependencies** page displays a unified view of all dependencies used by your repositories. 

To access the dependencies page, access the [overview page](#dashboard) and click the **Dependencies** tab.

![Security and risk management dependencies page](images/security-risk-management-dependencies-list.png)

When viewing dependencies, you'll be presented with a list of the dependencies used by all repositories in your organization. For each dependency, you'll be able to see how many repositories are making use of it, how many different versions you are using across all repositories, and how many security findings were found due to the presence of that dependency.

You can sort the dependencies list using the sort dropdown to prioritize dependencies based on your security assessment needs:

-   **Highest vulnerability** (default) - Dependencies with the most critical security findings appear first
-   **Lowest OSSF score** - Dependencies with the lowest [OSSF Scorecard](#ossf-scorecard) security scores appear first, helping you identify dependencies that may not follow security best practices

You're also able to click any dependency to find out more information about it.

![Security and risk management dependency page](images/security-risk-management-dependencies-single.png)

 The dependency overview page offers a quick bird's-eye view of that particular dependency. You'll be able to see all different versions that are being used, including which repository is using them, the oldest and most recent versions you're leveraging, as well as the highest criticality of security issues, the license <a href="#license-scanning"><sup>6</sup></a> applied to any particular version of that dependency, and the [OSSF Scorecard](#ossf-scorecard) security assessment.

### OSSF Scorecard {#ossf-scorecard}
The **OSSF Scorecard** feature provides additional security insights for your dependencies by displaying security assessment data from the Open Source Security Foundation (OSSF) Scorecard project.

The OSSF Scorecard is an automated tool that evaluates open source repositories against a comprehensive set of security best practices. It performs various checks on a dependency's repository to assess whether the project follows security best practices and helps determine if the dependency is safe for consumption.

When available, OSSF Scorecard information appears on the dependency overview page, providing you with:

-   **Overall security score** - A numerical score indicating the overall security posture of the dependency
-   **Individual check results** - Detailed results for specific security practices such as:
    -   Code review practices
    -   Dependency update policies  
    -   Security policy documentation
    -   Vulnerability disclosure processes
    -   Branch protection configurations
    -   Binary artifact verification
    -   Token permissions and usage

This information helps you make informed decisions about the security risks associated with your dependencies and identify which dependencies may require additional scrutiny or alternative options.


![Security and risk management OSSF scorecard report](images/security-risk-management-ossf-scorecard.png)


<sup><span id="semgrep">1</span></sup>: Semgrep supports additional security rules when signing up for [Semgrep Pro](https://semgrep.dev/pricing/).  
<sup><span id="yaml-only">2</span></sup>: Currently, Trivy only supports scanning YAML files on this platform.  
<sup><span id="client-side">3</span></sup>: Supported as a [client-side tool](../repositories-configure/local-analysis/client-side-tools.md).  
<sup><span id="spotbugs-plugin">4</span></sup>: Includes the plugin [Find Security Bugs](https://find-sec-bugs.github.io/).  
<sup><span id="eslint-plugin">5</span></sup>: Includes the plugins [no-unsanitized](https://www.npmjs.com/package/eslint-plugin-no-unsanitized), [security](https://www.npmjs.com/package/eslint-plugin-security), [security-node](https://www.npmjs.com/package/eslint-plugin-security-node), and [xss](https://www.npmjs.com/package/eslint-plugin-xss).  
<sup><span id="license-scanning">6</span></sup>: Visit the [supported languages and tools](../getting-started/supported-languages-and-tools.md#supported-languages-and-tools) page for a list of supported languages.  


## App scanning {#app-scanning}
:::caution
App scanning is a business feature. If you are a Codacy Pro customer, contact our customer success team to access a short trial.
:::

The **Security and risk management > App scanning** page allows organizations to scan Web Applications and APIs for security vulnerabilities. This feature is part of Codacy's Dynamic Application Security Testing (DAST) capabilities, powered by ZAP.

To access the App scanning page, go to the [Overview page](#dashboard) and click the **App scanning** tab.

![Security and risk management app scanning page](images/security-risk-management-app-scanning.png)

App scanning analyzes applications in production or production-like environments to help identify vulnerabilities such as misconfigurations, insecure authentication, or other security issues that occur in real-world usage. Because it doesn't rely on access to source code, it’s language-agnostic and useful for validating security across your entire stack. 

Codacy supports two types of scanning:

- **Web application scans** perform baseline, non-intrusive analysis. These scans are safe for production environments and detect surface-level issues such as:
    - Missing security headers
    - Insecure cookie configurations
    - Information disclosure through HTTP response headers
    - Exposure of sensitive or misconfigured files

- **API scans** simulate real-world attacks against your API endpoints. These are more aggressive and best suited for **non-production environments**, such as staging or development. API scans provide deeper insights into runtime behavior and potential vulnerabilities, such as:
    - Broken authentication or authorization controls
    - Injection vulnerabilities (SQL or command injection)
    - Exposure of sensitive data in API responses
    - Insecure CORS or HTTP method configurations

:::note
Already using ZAP? [Upload your results via the API.](../codacy-api/examples/uploading-dast-results.md)
:::

### Creating an App Scanning target

:::caution
**Do not run API scans on production enviroments as our API scanners may cause potential downtime.**

Our DAST API scanner performs active security testing by sending a large number of requests to your application. When using authenticated API scanning, this activity can be even more intensive, as ZAP explores and probes more of your API surface.

Depending on how your target environment is configured, this may:

- Trigger rate limiting or throttling
- Appear as a high volume of traffic, similar to a load test
- Lead to incomplete scan results if key endpoints are blocked or limited

We recommend running scans in a **test or staging environment**, or coordinating with your infrastructure team to ensure that your environment can safely handle the load.

:::

When creating a scan target, you'll be able to choose between a Web App or an API. Configuring a Web App will only require a target URL, while APIs will have other requirements:

- **REST APIs**, which require a publicly accessible OpenAPI specification URL.
- **GraphQL APIs**, where the schema is inferred from the default path `{targetUrl}/graphql`.

API targets optionally support **header-based authentication**. As you create a target, keep in mind you may not be able to view or change certain fields later (to change your configurations you may need to delete and create a new target).

:::note
If exposing your API specification isn't feasible for your team, let us know via support or your account representative.
:::


### How to scan a target

You can initiate scans in two ways:
- From the **App scanning** tab in the Security and risk management dashboard
- By automating scans using [Codacy's API](../codacy-api/examples/triggering-dast-scans.md)

:::caution
Only [admins and organization managers](../organizations/roles-and-permissions-for-organizations.md) can create targets and start scans, both in-app and via the API.
:::

<div>
  <iframe width="100%" height="472" src="https://www.youtube.com/embed/qPwHlIGJYXs?autoplay=1&mute=1&showinfo=0&loop=1" title="DAST targets" frameborder="0"
allowfullscreen>
  </iframe>
</div>

Each organization can have up to **6 active scan targets**. If you need additional capacity, contact your customer success representative.

Scans are triggered manually through the UI and are queued before execution. You can queue one single scan per target — it will run sequentially. There is no limit to the number of scans you can run on a target, in order to support your deployment needs.

Once a scan completes, results will be available under the **Findings** tab. Use the **Scan types > DAST/App scanning** filter to view relevant findings.

:::caution
Depending on the complexity of the target, DAST scans can take a significant amount of time to complete. Codacy may enforce timeouts to ensure platform stability and fair resource distribution.
:::

:::caution
Failed scans are retried based on the failure reason. Retries are added back to the queue automatically and processed when capacity allows.
:::

:::note
Currently, DAST findings are only visible to admin and organization admin roles.
:::

### Findings results for your DAST scans

As previously mentioned, once a scan completes, results will be available under the **Findings** tab. Use the **Scan types > DAST/App scanning** filter to view relevant findings.
Additionaly, you can click on a configured target to expand all of that target's results.

![DAST target results](images/security-risk-management-app-scanning-see-results.png)

Follow our [roadmap](https://roadmap.codacy.com) for updates on this feature.
