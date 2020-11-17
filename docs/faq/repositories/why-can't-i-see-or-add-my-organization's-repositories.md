# Why can't I see or add my organization's repositories?

If you can't see or add your organization's repositories, or have any problems regarding metrics (e.g. you can't see any issues and your pull requests aren't analyzed), please check if your user account has a duplicated copy of the repository on the organization.

The ideal scenario for your organization's repositories is to have a unique copy of it added to your Codacy organization, by someone with write permissions on the repo. 

In case you have a duplicated repository on your account, please delete it and use only the one available in your organization.

In the unlikely event of not seeing repositories for one/multiple organizations, please go to your GitHub settings and revoke Codacy OAuth application.

![](../../images/Screen_Shot_2018-02-12_at_18.51.06.png)

After revoking Codacy from the GitHub Authorized OAuth Apps, go back to Codacy and add a repository to see the "Authorize Codacy" menu. (Note you may have to click "GitHub" on the sidebar to request for Codacy's permission on GitHub's side)

![](../../images/Screen_Shot_2018-02-12_at_18.54.23.png)

Click "Grant" on each organization, to see their repositories on Codacy.

If this didn't solve your issue, be sure to also check out the following pages:

-   [I renamed my repository on the Git provider](/hc/en-us/articles/360012746413)
-   [I moved my repository on the Git provider](/hc/en-us/articles/360013560819)
