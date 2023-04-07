<!--
TODO

- Tweak page title. Options
  - Managing security vulnerabilities and risk
-->

# Managing security and risk <!-- *** Concepts *** -->

The Security and Risk Management dashboard helps you identify, prioritize, track, and address security vulnerabilities and other issues across your organization by automatically opening prioritized, time-bound action items whenever Codacy detects specific new issues.

To let Codacy automatically open and prioritize an item, you must first [set up rules](#setting-up-rules) to assign the item a priority based on the type and severity of the originating issue. To help you address important items first, each priority defines an [expected resolution time](#item-priorities-and-resolution-times) to close the associated item.

After you set up the rules:

-   Codacy opens a new item when it detects on the default branch a new Codacy issue that matches one of the rules.

    For example, you can set up a rule to open an item with Critical priority whenever Codacy detects on the default branch a new Security issue of High severity.

-   Codacy closes an item when it stops detecting the originating issue on the default branch, or when the originating [issue is explicitly ignored](../repositories/issues.md#ignoring-and-managing-issues).

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

## Item priorities and resolution times

The following table lists item priorities and expected resolution times:

| Item priority | Expected resolution time from first detection |
|---------------|-----------------------------------------------|
| Low           | 90 days                                       |
| Medium        | 30 days                                       |
| High          | 15 days                                       |
| Critical      | 7 days                                        |
