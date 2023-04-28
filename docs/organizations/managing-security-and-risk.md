# Managing security and risk

To <span class="skip-vale">quickly</span> identify, prioritize, track, and address security vulnerabilities, open the **Security and risk management** page from the organization-level navigation menu. On this page, you can monitor and act on time-bound, prioritized action items that Codacy creates automatically when finding Security issues:

-   Codacy opens a new item when it finds a new Security issue on the default branch of a repository.

    [Every new item is assigned a priority](#item-priorities-and-deadlines) based on the severity of the underlying issue. Each priority also defines a deadline to fix the underlying issue.

    [Every new item is assigned a status](#item-statuses) based on the number of days left before the deadline to fix the underlying issue. As deadlines are approached, met, or missed, items transition through different statuses.

-   Codacy closes an item when it stops detecting the underlying issue, when [the underlying issue is ignored](../repositories/issues.md#ignoring-and-managing-issues), or when the [tool that found the underlying issue is disabled](../repositories-configure/configuring-code-patterns.md).

For example, Codacy automatically opens an item with Critical priority upon finding a new Security issue of Critical severity on the default branch of a repository. If the Security issue is fixed before the deadline, the status of the item changes to Closed on time. If the issue isn't fixed before the deadline, the status of the item changes to Overdue.

<!-- TODO reword -->
Security and Risk Management includes two pages:

-   [Dashboard](#dashboard)
-   [Item list](#item-list)

## Dashboard

To access the dashboard, open your organization **Security and Risk management** page. The dashboard provides a general overview of your security items and includes five panes:

-   **Total**: all open items
-   **Due soon**: open items within 15 days of their deadline
-   **Overdue**: open items with a missed deadline
-   **Closed on time**: items closed before the deadline
-   **Closed late**: items closed after the deadline

Each of these panes displays a count of matching items and a **Review** button to access the list of matching items.

![Security and risk management dashboard](images/placeholder.png)

## Item list

The item list page contains a filtered view of items, with overdue items shown first, followed by items closest to the deadline.

To find out more about an item, click its Details column. This redirects you to a filtered view of the Repository issues page, showing only the item of interest.<!-- TODO confirm this is part of the MVP -->

![Security and risk management item list](images/placeholder.png)

## Opening and closing items

To automatically open and close items, Codacy must start and stop detecting the underlying Security issues. To make sure that these Security issues are detected correctly:

1.  [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category.

    These patterns are enabled by default, but may not be on custom configurations.

1.  Confirm that the latest [commits](../repositories/commits.md) to the default branches of your repositories are analyzed.

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
            <td>On track</td>
            <td>15 days or more to the deadline</td>
        </tr>
        <tr>
            <td>Due soon</td>
            <td>Fewer than 15 days to the deadline</td>
        </tr>
        <tr>
            <td>Overdue</td>
            <td>The deadline has been missed</td>
        </tr>
        <tr>
            <td rowspan="2">Closed</td>
            <td>Closed on time</td>
            <td>Closed before the deadline</td>
        </tr>
        <tr>
            <td>Closed late</td>
            <td>Closed after the deadline</td>
        </tr>
    </tbody>
</table>

## Item priorities and deadlines

The following table defines item priorities and days to fix the underlying Codacy security issue, based on the severity of the issue:

| Security issue severity | Item priority | Days to close |
|-------------------------|---------------|---------------|
| Minor                   | Low           | 120           |
| Medium                  | Medium        | 90            |
| Critical                | Critical      | 30            |

## Data retention

Open items are retained indefinitely. Closed items are retained for one year.

Deleting a repository deletes all the associated items.
