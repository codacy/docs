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

-   To update the filtering criteria, click the **Status** or **Priority** drop-downs above the list.
-   To find out more about an item, click its **Details** column. This redirects you to a filtered view of the **Repository issues** page, showing only the item of interest.<!-- TODO Depending on which feature is released first, this may need to change to take into account items coming from other integrations such as Jira -->

![Security and Risk Management item list](images/security-risk-management-item-list.png)

## Opening and closing items

!!! important
    To automatically open and close items, Codacy must detect when the underlying Security issues are introduced and fixed. To make sure that Codacy detects the Security issues correctly:

    -   [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category. These patterns are enabled by default, but may not be on custom configurations.
    -   Confirm that the latest [commits](../repositories/commits.md) to the default branches of your repositories are analyzed.

Codacy automatically opens a new item when it detects a new Security issue on the default branch of a repository:

-   [Every new item is assigned a priority](#item-priorities-and-deadlines) based on the severity of the underlying issue. Each priority also defines a deadline to fix the underlying issue.

-   [Every new item is assigned a status](#item-statuses) based on the number of days left before the deadline to fix the underlying issue. As deadlines are approached, met, or missed, items transition through different statuses.

Codacy automatically closes an item when it stops detecting the underlying issue, when [the underlying issue is ignored](../repositories/issues.md#ignoring-and-managing-issues), or when the [tool that found the underlying issue is disabled](../repositories-configure/configuring-code-patterns.md).

For example, Codacy automatically opens an item with Critical priority upon detecting a new Security issue of Critical severity on the default branch of a repository. If the Security issue is fixed before the deadline, the status of the item changes to Closed on time. If the issue isn't fixed before the deadline, the status of the item changes to Overdue.

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
