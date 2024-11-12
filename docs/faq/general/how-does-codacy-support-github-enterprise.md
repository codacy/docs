# How does Codacy support Github Enterprise?

When you use Gihub Enterprise to sign up or log into Codacy, the Gihub Enterprise organizations, that you belong to, will be available to be added as Organizations on Codacy.

After conneting with your Enterprise account:

-  Codacy displays the list of all organizations that you have access to in that Enterprise, and you can add to start analysing its repositories or join it. 


## Limitations

Currently, the integration between Codacy and Gihub Enterprise has the following limitations:

-   **Repositories with visibility Internal** will, in Codacy, have the same behaviour as Private visavility. Although you see the repository in the provider, if you are not part of the repository in the provider, you won't be able to see it in Codacy.
-   **Same email connected to multiple Github accounts.** Codacy will not allow to connect your enterprise account if that email is already associated with a different Github account. You can manage your [associated emails in the provider Github](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account). 

