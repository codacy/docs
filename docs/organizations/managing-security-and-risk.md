# Managing security and risk <!-- *** Concepts *** -->

The Security and Risk Management dashboard helps you identify, prioritize, track, and address security vulnerabilities across your organization by opening time-bound action items whenever Codacy detects new security issues.

Codacy opens and prioritizes a new item when it detects a new security issue on the default branch of an organization repository. Each priority level defines an [expected resolution time](#default-item-priorities-and-resolution-times) to close the associated item. For example, Codacy opens an item with Critical priority upon detecting a new Security issue of Critical severity on the default branch of an organization repository.

Codacy closes an item when it stops detecting the originating issue on the default branch of an organization repository, when [the originating issue is ignored](../repositories/issues.md#ignoring-and-managing-issues), or when the [tool that detected the originating issue is disabled](../repositories-configure/configuring-code-patterns.md).

## Detecting and monitoring items

!!! note
    To automatically open and prioritize items, [enable patterns belonging to the Security category](../repositories-configure/configuring-code-patterns.md), so that Codacy can detect Security issues.

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

1.  To further filter the list by priority or status, use the selectors above the list.

    ![Security and risk management items](images/placeholder.png)

<!-- *** Reference *** -->
## SLA item statuses and data retention

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

The following table describes how the severity of a Codacy security issue severity maps to the priority and expected resolution time of an item:

| Item priority | Severity of the detected<br/>Codacy issue | Expected resolution time<br/>from issue detection |
|---------------|-------------------------------------------|---------------------------------------------------|
| Low           | Minor                                     | 120 days                                          |
| Medium        | Medium                                    | 90 days                                           |
| Critical      | Critical                                  | 30 days                                           |
