# GitHub Enterprise Cloud

When you use GitHub Enterprise to sign up or log into Codacy, the GitHub Enterprise organizations, that you belong to, will be available to be added as Organizations on Codacy.

After connecting with your Enterprise account Codacy displays the list of all organizations that you have access to in that Enterprise, and you can add to start analysing its repositories or join it. 

### GitHub Enterprise types
Codacy supports both [GitHub Enterprises types](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud), Managed Users and Personal Accounts.


## Manage your Enterprises 
Once signed up or log with your GitHub enterprise account, navigate to your Enterprises area. There you can manage the git Enterprises that are in Codacy, as well its organizations and seats management. 

## Manage Enterprise organizations
Once you select the Enterprise organization, you will see its list of organizations. 

## Manage Seats
View seats and its activity in your Codacy Enterprise.


## Limitations
Currently, the integration between Codacy and GitHub Enterprise has the following limitations:

-   **Repositories with visibility Internal** will, in Codacy, have the same behavior as Private visibility. Although you see the repository in the provider, if you aren't part of the repository in the provider, you won't be able to see it in Codacy.
-   **Same email connected to multiple GitHub accounts.** Codacy won't allow you to connect your enterprise account if that email is already associated with a different GitHub account. You can manage your [associated emails in the provider GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account). 


## See also

-   [How does Codacy support GitLab Cloud?](../faq/general/how-does-codacy-support-gitlab-cloud.md)
-   [How does Codacy support GitLab Enterprise?](../faq/general/how-does-codacy-support-gitlab-enterprise.md)
-   [How does Codacy support Bitbucket Cloud?](../faq/general/how-does-codacy-support-bitbucket-cloud.md)
-   [How does Codacy support Bitbucket Server?](../faq/general/how-does-codacy-support-bitbucket-server.md)