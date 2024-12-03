# How does Codacy support GitHub Enterprise Cloud?

When you use GitHub Enterprise to sign up or log into Codacy, the GitHub Enterprise organizations, that you belong to, will be available to be added as Organizations on Codacy.

After connecting with your Enterprise account Codacy displays the list of all organizations that you have access to in that Enterprise, and you can add to start analysing its repositories or join it. 


## Limitations

Currently, the integration between Codacy and GitHub Enterprise has the following limitations:

-   **Repositories with visibility Internal** will, in Codacy, have the same behavior as Private visibility. Although you see the repository in the provider, if you are not part of the repository in the provider, you will not be able to see it in Codacy.
-   **Same email connected to multiple GitHub accounts.** Codacy will not allow you to connect your enterprise account if that email is already associated with a different GitHub account. You can manage your [associated emails in the provider GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account). 


## See also

-   [How to manage your Github Enterprise organization](../enterprise-cloud/github-enterprise-cloud.md)