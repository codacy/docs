# Managing security and risk

The Security and Risk Management dashboard helps you identify, prioritize, track, and address security vulnerabilities across your organization by opening time-bound action items whenever Codacy finds new Security issues in your organization's repositories.

Codacy **automatically opens and prioritizes** a new item when it finds a new Security issue on the default branch of a repository. The priority of each item defines an expected resolution time to fix the underlying Security issue.

For example, when finding a new Security issue of Critical severity on the default branch of a repository, Codacy automatically opens an item with Critical priority. If the Security issue is fixed within the [expected resolution time](#item-priorities-and-resolution-times), the [status of the item](#item-statuses) changes to Closed on time. If the issue isn't fixed within the expected resolution time, the status of the item changes to Overdue.

Codacy **automatically closes** an item when it stops detecting the underlying issue, when [the underlying issue is ignored](../repositories/issues.md#ignoring-and-managing-issues), or when the [tool that found the underlying issue is disabled](../repositories-configure/configuring-code-patterns.md).

## Opening and closing items

To automatically open and close items, Codacy must start and stop detecting the underlying Security issues. To make sure that Security issues are detected:

1.  [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category. These are enabled by default, but may not be on a custom configuration.

1.  Confirm that all [commits](../repositories/commits.md) to the default branches of your repositories are analyzed.

## Monitoring items

To list and monitor items:

1.  Open your organization **Security and risk management** page to display the dashboard.

    The dashboard includes five panes, each containing the number of matching items and a button to access the matching item list:

    -   **Total**: all open items
    -   **Due soon**: open items within 15 days of missing their deadline
    -   **Overdue**: open items with a missed deadline
    -   **Closed on time**: items closed before the deadline
    -   **Closed late**: items closed after the deadline

    ![Security and risk management dashboard](images/placeholder.png)

1.  Click the **Review** button in the relevant pane to access the matching item list.

    By default, items are sorted by days to deadline, with overdue items shown first, followed by items closest to the deadline.

1.  To further filter the list by priority or status, use the selectors above the list.

    ![Security and risk management items](images/placeholder.png)

1.  To find out more about an item, click its Details entry. This redirects you to a filtered view of the Repository issues page, showing only the item of interest.<!-- TODO confirm this is part of the MVP -->

## Item statuses

The following table describes how item statuses map to deadlines:

| Item status    | Status category | Deadline                           |
|----------------|-----------------|------------------------------------|
| On track       | Open            | 15 days or more to the deadline    |
| Due soon       | Open            | Fewer than 15 days to the deadline |
| Overdue        | Open            | The deadline has been missed       |
| Closed on time | Closed          | Closed before the deadline         |
| Closed late    | Closed          | Closed after the deadline          |

## Item priorities and resolution times

The following table defines the priorities and days to close an item by fixing the underlying Codacy security issue, based on the severity of the issue:

| Item priority | Days to fix the underlying<br>Security issue | Severity of the underlying<br>Security issue |
|---------------|----------------------------------------------|----------------------------------------------|
| Low           | 120                                          | Minor                                        |
| Medium        | 90                                           | Medium                                       |
| Critical      | 30                                           | Critical                                     |

## Data retention

Open items are retained indefinitely. Closed items are retained for one year.

Deleting a repository deletes all the associated items.
