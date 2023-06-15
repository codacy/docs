# Managing security and risk

!!! info "This is a beta feature"
    This is a new Codacy feature and <span class="skip-vale">we're</span> continuing to improve it.

The **Security and Risk Management** feature helps you <span class="skip-vale">quickly</span> identify, track, and address security vulnerabilities by automatically opening time-bound, prioritized action items whenever Codacy detects Security issues in your organization repositories.

Under Security and Risk Management, you have the following pages to help you monitor your repositories:

-   [Dashboard](#dashboard)
-   [Item list](#item-list)

## Dashboard

The Security and Risk Management dashboard provides a general overview of security items, based on their status.

To access the dashboard, select an organization from the top navigation bar and select **Security and Risk** on the left navigation sidebar.

The dashboard includes five areas:

-   **Total:** all open items
-   **Due soon:** open items within 15 days of their deadline
-   **Overdue:** open items with a missed deadline
-   **Closed on time:** items closed before the deadline
-   **Closed late:** items closed after the deadline

Each of these areas displays a count of matching items and a **Review** button to access a filtered list displaying the matching items.

![Security and Risk Management dashboard](images/security-risk-management-dashboard.png)

## Item list

The Security and Risk Management item list displays a list of items, filtered by status and sorted by due date ascending.

To access the item list, access the [dashboard](#dashboard) and click the **Review** button under the area of interest, based on the desired filtering.

When viewing the item list:

-   To update the filtering criteria, click the **Status** drop-down above the list.
-   To find out more about an item, click its **Details** column. This redirects you to a filtered view of the **Repository issues** page, showing only the item of interest.

![Security and Risk Management item list](images/security-risk-management-item-list.png)

## Opening and closing items

!!! important
    To automatically open and close items, Codacy must detect when the underlying Security issues are introduced and fixed. To make sure that Codacy detects the Security issues correctly:

    -   [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category. These patterns are enabled by default, but may not be on custom configurations.
    -   Confirm that the latest [commits](../repositories/commits.md) to the default branches of your repositories are analyzed.

### Opening items

Codacy automatically opens a new item when it detects a new security issue on the default branch of a repository.

The severity of the issue defines the [priority of the item](#item-priorities-and-deadlines). In turn, the priority of the item defines a deadline to fix the issue.

The time to the deadline sets the [status of the item](#item-statuses). The item then transitions through different statuses as the deadline is approached, met, or missed.

### Closing items

Codacy automatically closes an item in either of the following cases:

-   Codacy detects that the underlying issue isn't present in the most recent analyzed commit and therefore has been fixed
-   [The underlying issue is ignored](../repositories/issues.md#ignoring-and-managing-issues)
-   [The tool that found the underlying issue is disabled](../repositories-configure/configuring-code-patterns.md)

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

## Item priorities and deadlines

The following table defines item priorities and days to fix the underlying Codacy security issue, based on the severity of the issue:

| Security issue severity | Item priority | Days to close |
|-------------------------|---------------|---------------|
| Critical                | Critical      | 30            |
| Medium                  | Medium        | 90            |
| Minor                   | Low           | 120           |

## Data retention

Codacy retains open items indefinitely and closed items for one year.

Deleting a repository deletes all open items belonging to that repository.
