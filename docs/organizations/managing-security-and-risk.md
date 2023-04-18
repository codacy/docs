# Managing security and risk <!-- *** Concepts *** -->

The Security and Risk Management dashboard helps you identify, prioritize, track, and address security vulnerabilities across your organization by opening time-bound action items whenever Codacy finds new security issues in your organization's repositories.

Codacy automatically **opens and prioritizes** a new item when it finds a new security issue on the default branch of a repository. The priority of each item defines an [expected resolution time](#default-item-priorities-and-resolution-times) to fix the underlying security issue.

For example, Codacy opens an item with Critical priority upon finding a new Security issue of Critical severity on the default branch of an organization repository. If the underlying issue isn't fixed within the expected resolution time of 30 days, the [status of the item](#item-statuses-and-data-retention) transitions to Overdue and then to Closed late if the item is closed.

Codacy automatically **closes** an item when it stops detecting the underlying issue, when [the underlying issue is ignored](../repositories/issues.md#ignoring-and-managing-issues), or when the [tool that found the underlying issue is disabled](../repositories-configure/configuring-code-patterns.md).

## Opening and closing items

Codacy automatically opens and closes items when it starts and stops detecting security issues on the default branches of your organization repositories. To make sure that items are open and closed correctly:

1.  [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category on your repositories.

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

Once you're on the item list page:

1.  To further filter the list by priority or status, use the selectors above the list.

    ![Security and risk management items](images/placeholder.png)

1.  Click the Details column of an item to navigate to a filtered view of the Repository issues page.

<!-- *** Reference *** -->
## Item statuses and data retention

The following table describes how item statuses map to status categories and deadlines:

| Item status    | Status category | Deadline                           |
|----------------|-----------------|------------------------------------|
| On track       | Open            | 15 days or more to the deadline    |
| Due soon       | Open            | Fewer than 15 days to the deadline |
| Overdue        | Open            | The deadline has been missed       |
| Closed on time | Closed          | Closed before the deadline         |
| Closed late    | Closed          | Closed after the deadline          |

Open items are retained **indefinitely**. Closed items are retained for **one year**.

## Default item priorities and resolution times

The following table defines the priority and days to close an item, based on the severity of the underlying Codacy security issue:

| Item priority | Days to fix the underlying issue | Severity of the underlying<br/>Codacy security issue |
|---------------|----------------------------------|------------------------------------------------------|
| Low           | 120                              | Minor                                                |
| Medium        | 90                               | Medium                                               |
| Critical      | 30                               | Critical                                             |
