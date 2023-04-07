# Managing security and risk <!-- *** Concepts *** -->

The Security and Risk Management dashboard helps you identify, prioritize, track, and address security vulnerabilities and other issues across your organization by automatically creating prioritized, time-bound action items linked to Codacy issues.

For Codacy to automatically create and prioritize these items, you must first [set up rules](#setting-up-rules) linking item priorities to Codacy issue types and severities. For example, you can link a Critical item priority to Codacy Security issues of High severity. After you define a rule:

-   Codacy opens a new item when it first detects a matching Codacy issue on the default branch. In the example SLA defined above, Codacy would open a new item with Critical priority when first detecting a new Codacy Security issue of High severity.
-   Codacy closes an existing item when it stops detecting the matching issue on the default branch, or when the associated [issue is explicitly ignored](../repositories/issues.md#ignoring-and-managing-issues).

<!-- *** Tasks *** -->
## Setting up rules

To set up rules for your organization:

1.  Open your organization **Security and risk management** page.

    ![Security and risk management dashboard](images/placeholder.png)

1.  Click the button **Set up rules** at the top right-hand corner of the page. This opens the rule setup modal window.

1.  Click the **Add rule** button to create a new rule.

1.  Select a combination of Codacy issue category and severity, choose a priority to link, and confirm.

1.  Repeat to add as many rules as required.

## Monitoring items

To list and monitor items:

1.  Open your organization **Security and risk management** page to display the dashboard.

    The dashboard includes five panes, each containing the total count of matching items and a button to access the matching item list:

    -   **Total**: all open items
    -   **Due soon**: open items within 15 days of missing their SLA deadline
    -   **Overdue**: open items with a missed SLA deadline
    -   **Closed on time**: items closed before the SLA deadline
    -   **Closed late**: items closed after the SLA deadline

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

## Item priorities and resolution times

The following table lists item priorities and expected resolution times:

| Item priority | Resolution time |
|---------------|-----------------|
| Low           | 90 days         |
| Medium        | 30 days         |
| High          | 15 days         |
| Critical      | 7 days          |
