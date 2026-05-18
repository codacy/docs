# GitHub Enterprise Cloud

Use your GitHub Enterprise credentials when signing up or logging in to Codacy and all your GitHub Enterprise organizations that you belong to, will be available to be added as Organizations on Codacy.

Codacy also has a dedicated Enterprise area where GitHub Enterprise admins and owners of the enterprise will be able to manage their respective organizations.

### GitHub Enterprise types
Codacy supports both [GitHub Enterprise types](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud), Managed Users and Personal Accounts.

## Access cloud Enterprises 
Access your Enterprises in Codacy by setting up its integration:

1. In Codacy, click on your avatar, in the top right corner
2. Navigate through "My account" and "Access management"
1. There, you'll be able to add a **GitHub Enterprise Cloud** access token. 

Once generated and added in Codacy you will start seeing all the information you have access to regarding your Cloud Enterprises. 
You can revoke the Cloud Enterpises' access at any time in the same place.
![Enterprise cloud manage enterprises access](images/Codacy-Access-Management.png)


## Manage Enterprises 
- [Enterprise organizations list](#enterprise-organizations-list)
- [Seats management](#seats)
- [Enterprise limitations](#limitations)

Once you sign up or log in with your GitHub Enterprise credentials and, [set up access to Cloud Enterprise](#access-cloud-enterprises), navigate to your Enterprise area to manage your Enterprises in Codacy, as well as its organizations and seats management. 

!!! note 
    If you only have one Enterprise, Codacy will skip this screen and directs you to the [enterprise organizations list](#enterprise-organizations-list). 

![Enterprise cloud manage enterprises](images/Codacy-Enterprises.png)

### Enterprise organizations list
Select an Enterprise and access its list of existing organizations that you have access to.
![Enterprise cloud manage organizations](images/Codacy-Enterprise-Organizations.png)

### Seats
View and export your Enterprise seats and its activity by:

1. Choose and view an Enterprise organization
1. Navigate to **People** on the left-hand side navigation
1. View, search and export the list of author seats

!!! note 
    - Codacy members won't be part of this list; only authors and users that have committed. 
    - In some Enterprise plans, **Members** are people that signed up and joined an Organization in Codacy, and **Authors** are people that contribute to code changes. It can happen that Authors aren't Codacy Members. 
    - Only Enterprise **Owners** or **Admins** will be able to view and export the list of authors. 

### Limitations
Currently, the integration between Codacy and GitHub Enterprise has the following limitations:

-   **Repositories with visibility set to Internal** will, in Codacy, have the same behavior as those with Private visibility. Although you see the repository in the provider, if you aren't part of the repository in the provider, you won't be able to see it in Codacy.
-   **Same email connected to multiple GitHub accounts.** Codacy won't allow you to connect your enterprise account if that email is already associated with a different GitHub account. You can manage your [associated emails in the provider GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).
-   **GitHub Cloud data residency is not supported.** Codacy is incompatible with GitHub Enterprise Cloud's data residency features. If your GitHub Enterprise Cloud has data residency enabled, Codacy won't be able to access or process your repositories. 



## See also

-   [How does Codacy support GitLab Cloud?](../faq/general/how-does-codacy-support-gitlab-cloud.md)
-   [How does Codacy support GitLab Enterprise?](../faq/general/how-does-codacy-support-gitlab-enterprise.md)
-   [How does Codacy support Bitbucket Cloud?](../faq/general/how-does-codacy-support-bitbucket-cloud.md)
-   [How does Codacy support Bitbucket Server?](../faq/general/how-does-codacy-support-bitbucket-server.md)

<br><br>
