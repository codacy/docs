# Managing security and risk

!!! info "This is a preview feature"
    This is a new Codacy feature and <span class="skip-vale">we're</span> continuing to improve it.

The Security and risk management feature helps you <span class="skip-vale">quickly</span> identify, track, and address security issues by automatically opening time-bound, prioritized action items whenever Codacy detects security issues in your organization repositories or in your [connected Jira instance](./integrations/jira-integration.md).

Under Security and risk management, you can find the following pages to help you monitor your security issues:

-   [Dashboard](#dashboard)
-   [Item list](#item-list)
-   [Configuration page](#configuration-page)

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

-   Limit the total counts in each panel to a specific set of severities or repositories by clicking the **Severity** or **Repository** drop-downs above the main area.
-   Export a list of items as a CSV file by clicking the **Export CSV** button in the top right-hand corner of the page. The exported list always includes all items, ignoring any applied filters.

![Security and risk management dashboard](images/security-risk-management-dashboard.png)

## Item list

The **Security and risk management items** page displays a filtered list of items, sorted by due date ascending.

To access the item list, access the [dashboard](#dashboard) and click the **Review** button in the area of interest, based on the desired filtering.

When viewing the item list, you can:

-   Update the filtering criteria by clicking the **Severity**, **Status**, or **Repository** drop-downs above the list.
-   Find out more about an item by clicking its **Details** column to navigate to the item of interest on the source platform.
-   Export a list of items as a CSV file by clicking the **Export CSV** button in the top right-hand corner of the page. The exported list always includes all items, ignoring any applied filters.

![Security and risk management items](images/security-risk-management-item-list.png)

## Configuration page

The **Security and risk management configuration** page lets you [assign or revoke the Security Manager role](#managing-access-to-security-and-risk-management) for organization members and review the [severity assignment rules](#item-severities-and-deadlines).

To access the configuration page, access the [dashboard](#dashboard) or the [item list](#item-list) and click the **Configure** button in the top right-hand corner of the page.

![Security and risk management configuration](images/security-risk-management-configuration.png)

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

## Managing access to Security and risk management

To better track and address security issues, organization admins can extend access to Security and risk management by assigning the Security Manager role to organization members.

The Security Manager role is independent of the Git provider role of an organization member and provides only the permissions necessary to monitor security issues, following the principle of least privilege:

| Permission                                                  | Organization Admin | Security Manager           |
|-------------------------------------------------------------|--------------------|----------------------------|
| Access Security and risk management                         | Yes                | Yes                        |
| Access associated issues (Codacy repositories, Jira issues) | Platform-dependent | Keeps original permissions |
| Manage integrations                                         | Yes                | Yes                        |
| Assign and revoke the Security Manager role                 | Yes                | No                         |
| All other Organization Admin permissions                    | Yes                | No                         |

### Assigning the Security Manager role

To assign the Security Manager role:

1.  Open your organization **Security and Risk** page and click the **Configure** button to open the configuration page.

1.  In the **Security managers** area, use the search field to find the relevant user and click the user's name.

    ![Security and risk management access management](images/security-risk-management-access-management.png)

### Revoking the Security Manager role

To revoke the Security Manager role:

1.  Open your organization **Security and Risk** page and click the **Configure** button to open the configuration page.

1.  In the **Security managers** area, scroll the list to find the relevant user.

1.  Click the **Revoke role icon** to the right of the user's name and confirm.

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

| Item<br/>severity | <br/>Days to fix | Underlying Codacy<br/>issue severity | Underlying Jira<br/>issue priority |
|-------------------|------------------|--------------------------------------|------------------------------------|
| Critical          | 30               | Critical                             | Blocker                            |
| High              | 60               | -                                    | High                               |
| Medium            | 90               | Medium                               | Medium                             |
| Low               | 120              | Minor                                | Low and other                      |

## See also

-   [Security monitor](../repositories/security-monitor.md)
