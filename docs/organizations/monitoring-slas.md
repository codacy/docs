<!--
TODO:
- Confirm that the SLA deadline for "due soon" is <= 15 days.
- Confirm that new issues on the *default branch* create new items.
- Dashboard, total: confirm whether we're listing all items or all open items.

Concepts:
- Define SLA item
- Define other SLA terminology as needed
- Confirm if each item in the item list is clickable to reveal details
-->

# Monitoring SLAs <!-- *** Concepts *** -->

An SLA, short for service-level agreement, defines the expected time to resolve an item with a defined priority.

You define an SLA by linking a Codacy issue category and severity to an SLA priority. For example, you can link all Codacy issues belonging to the Security category and with a High severity to a Critical SLA priority. After you define an SLA:

-   Codacy opens a new SLA item when it detects a corresponding new issue on the most recent analyzed commit of the default branch. To expand on the example above, when Codacy detects a new Security issue with High severity, it opens a new Critical SLA issue.
-   Codacy closes an existing SLA item when it stops detecting the associated issue on the most recent analyzed commit of the default branch, or when the associated [issue is explicitly ignored](../repositories/issues.md#ignoring-and-managing-issues) on Codacy.

<!-- *** Tasks *** -->
## Setting up an SLA

To set up an SLA for your organization:

1.  Open your organization **SLA monitor** page.

    ![Adding a repository](images/monitoring-slas-placeholder.png)

1.  Click the button **Settings** at the top right-hand corner of the page. This opens the settings modal window.

    The settings modal window contains four tabs, one for each priority level.

1.  Click the **Add** button in the relevant priority tab to create a new SLA for that priority.

1.  Select a combination of Codacy issue category and severity that you want to link to the priority and confirm.

## Monitoring SLA items

To list and monitor SLA items:

1.  Open your organization **SLA monitor** page to display the SLA dashboard.

    The dashboard contains five panes. Each pane contains the total count of matching items and a button to access the respective filtered item list:

    -   **Total**: all open items<!-- TODO confirm if we're listing all items or all open items -->
    -   **Due soon**: open items within 15 days of missing their SLA deadline
    -   **Overdue**: open items with a missed SLA deadline
    -   **Closed on time**: items closed before the SLA deadline
    -   **Closed late**: items closed after the SLA deadline

    ![Adding a repository](images/monitoring-slas-placeholder.png)

1.  Click the **Review** button in the relevant pane to access the corresponding filtered item list.

1.  To further filter the list by priority or status, use the selectors above the list.

    ![Adding a repository](images/monitoring-slas-placeholder.png)

<!-- *** Reference *** -->
## SLA item statuses and data retention

The following table describes how item statuses map to status categories and SLA deadlines:

| Item status    | Status category | SLA deadline                       |
|----------------|-----------------|------------------------------------|
| On track       | Open            | 15 days or more to the deadline    |
| Due soon       | Open            | Fewer than 15 days to the deadline |
| Overdue        | Open            | The deadline has been missed       |
| Closed on time | Closed          | Closed before the deadline         |
| Closed late    | Closed          | Closed after the deadline          |

Open items are retained **indefinitely**. Closed items are retained for **one year**.

## SLA item priorities

The following table lists item priorities and expected resolution times for the associated SLAs:

| Item priority | SLA resolution time |
|---------------|---------------------|
| Low           | 90 days             |
| Medium        | 30 days             |
| High          | 15 days             |
| Critical      | 7 days              |
