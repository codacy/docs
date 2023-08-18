# Changing your plan and billing

Each organization on Codacy has a dedicated plan and associated billing. To make changes to the plan and billing of an organization, open your organization **Settings**, page **Plan and billing**.

<!--plan-caveats-start-->
!!! note
    -   If you're using GitHub Marketplace, update your billing details or cancel your plan directly on your [GitHub Billing page](https://github.com/settings/billing).

    -   If you cancel your subscription or switch to a different Enterprise plan, some repositories may show outdated information in the Codacy UI. To update this information, reanalyze the repositories or push new commits.
<!--plan-caveats-end-->

![Plan and billing for a Codacy organization](images/organization-plan-billing.png)

-   **To upgrade** to the Pro plan click **Choose plan**, choose between monthly or yearly billing, and provide your payment and invoice details

-   **To make changes** to your Pro plan or invoice details click **Edit plan details** or click **Edit invoice details**

If you have any questions or need help with your account, please contact <mailto:support@codacy.com>.

## Allowing new people to join your organization

**On Codacy Cloud**, organization admins control if team members need an approval before joining their organization. Codacy updates your seats automatically when new users join an organization.

!!! note
    -   **If you're using GitHub Marketplace,** this configuration isn't available and team members must always wait for an organization owner to manually approve their requests to join the organization.

    -   In some **Enterprise plans**, Codacy automatically adds to the organization new people that commit to your private repositories. However, they still need to join the organization on the Codacy app if they want to use the UI.

Choose one of the following options in your organization **Settings**, page **Plan and billing**:

-   **Allow new people to join immediately:** people with access to the organization on the Git provider can join the organization on the Codacy app immediately, as long as there are seats available.

-   **Review join requests from new people:** when people with access to the organization on the Git provider join the organization on Codacy app, an organization admin must manually approve their requests to join on the page **People**.

    Your teammates that have already been invited to join or were added to the organization are automatically approved, and you can also skip the approval process for organization admins.

![Accepting new people to the organization](images/organization-plan-billing-people-accept.png)
