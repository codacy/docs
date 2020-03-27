# Bitbucket changes

We are making some changes on the 18th Feb 2019 onwards** **<span
style="font-weight: 400;">that will cause </span>**all existing
integrations with Bitbucket to stop working**<span
style="font-weight: 400;">.</span>

 

**What exactly are we doing?**

<span style="font-weight: 400;">We are reducing the permissions
requested when authenticating with Bitbucket.</span>

<span style="font-weight: 400;">While we currently ask for all
permissions, after this we will no longer require:</span>

-   <span style="font-weight: 400;">Write access for Teams</span>
-   <span style="font-weight: 400;">Write access for Projects</span>
-   <span style="font-weight: 400;">Delete access for
    Repositories</span>
-   <span style="font-weight: 400;">Full access to Wikis, Snippets and
    Pipelines</span>

 

**Why?**

<span style="font-weight: 400;">Previously, we were using OAuth 1, which
forced us to request all permissions. This level of permissions
requested to integrate with Bitbucket has been flagged as a concern by
several of our users. We have now migrated to OAuth 2, which allows us
to reduce the level of permissions required. </span>

 

**What do you need to do if you have Bitbucket repositories?**

<span style="font-weight: 400;">The original user who set up your
Bitbucket integration will need to</span> <span
style="font-weight: 400;">log in to Codacy</span> <span
style="font-weight: 400;">to confirm the new permissions.
</span>**Otherwise, Codacy will no longer be able to detect new Pull
Requests, and existing repositories will stop receiving Pull Request
status and comments on Bitbucket.**

<span style="font-weight: 400;">If the original user who set up your
Bitbucket integration is not available, someone who has Admin
permissions in both Codacy and Bitbucket to </span>[<span
style="font-weight: 400;">re-do the
integration</span>](/hc/en-us/articles/207280239-Bitbucket-Integration)<span
style="font-weight: 400;"> in Codacy.   </span> 

<span style="font-weight: 400;">You can login with Bitbucket through
</span>[<span
style="font-weight: 400;">https://www.codacy.com/login-with/bitbucket</span>](https://www.codacy.com/login-with/bitbucket)<span
style="font-weight: 400;">.![Screenshot\_2019-02-14\_at\_12.00.41.png](/images/span>
