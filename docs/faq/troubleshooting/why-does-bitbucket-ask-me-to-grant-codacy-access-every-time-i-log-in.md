---
description: Atlassian shows its permissions page every time you log in to Codacy with Bitbucket. Learn why, and how to tell Atlassian it affects your team.
---

# Why does Bitbucket ask me to grant Codacy access every time I log in?

When you log in to Codacy with Bitbucket, Atlassian shows a page asking you to grant Codacy access to your account. Since late July 2026, this page appears on every login, even if you granted access before.

This is a change on Atlassian's side, and Codacy can't turn it off. Atlassian now handles Bitbucket logins through its own identity platform, which asks for consent on every authorization. Other apps that log in with Bitbucket show the same behavior.

To keep using Codacy, and to help get this fixed:

1.  Review the permissions and accept them to continue. Codacy requests the same permissions on every login. See [which permissions Codacy needs from Bitbucket](../../getting-started/which-permissions-does-codacy-need-from-my-account.md#bitbucket-cloud).

1.  Let Atlassian know this affects your team. Reports from affected customers show Atlassian how widespread the problem is:

    -   Reply to the [report on the Atlassian Developer Community](https://community.developer.atlassian.com/t/bitbucket-cloud-oauth-consent-screen-shown-on-every-authorization-consent-no-longer-remembered/102357).
    -   If your company has an Atlassian subscription, [contact Atlassian Support](https://support.atlassian.com/contact/) and say that the Bitbucket Cloud OAuth consent screen is shown on every authorization since late July 2026.

<!-- TODO: verify — once Codacy's ticket with Atlassian (OD-991) is sent, say so here, and link the public Atlassian issue if Atlassian opens one. -->

If you have other problems logging in to Codacy with Bitbucket, please contact us at <mailto:support@codacy.com>.
