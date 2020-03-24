# Submodules - How to enable them

[<span style="font-weight: 400;">Git
Submodules</span>](https://git-scm.com/book/en/v2/Git-Tools-Submodules)<span
style="font-weight: 400;"> allow you to keep a git repository as a
subdirectory within another git repository. They are helpful in
maintaining a shared configuration file for your team, which can then be
applied to multiple git repositories.</span>

<span style="font-weight: 400;">Codacy supports this workflow for
GitHub, Bitbucket (incl. Stash/Bitbucket Server) and GitLab.</span>

***Note:****<span style="font-weight: 400;"> Some tools don’t search for
configuration files recursively. You may need to include a configuration
file in the root of your repository referencing the configuration file
in the submodule.</span>*

*<span
style="font-weight: 400;">\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_</span>*

## **Enabling submodules for Codacy Self-hosted**

<span style="font-weight: 400;">By default we do normal git clones which
will not clone submodules, this it to ensure that we only clone
necessary repos. However if you’re already using submodules this feature
can be enabled by contacting our </span>[<span
style="font-weight: 400;">Support
Team</span>](mailto:support@codacy.com)<span style="font-weight: 400;">.
After the submodules have been enabled, </span>[<span
style="font-weight: 400;">you will need to update the
license</span>](https://support.codacy.com/hc/en-us/articles/207280529-Frequently-Asked-Questions-FAQ-#How-to-update-the-license)<span
style="font-weight: 400;">. If your submodules are public repositories,
please make sure your URL is using the </span>*<span
style="font-weight: 400;">HTTPS </span>*<span
style="font-weight: 400;">protocol. If your submodules are private, make
sure your URL is using the SSH protocol. </span>

<span style="font-weight: 400;">If you already have repositories added
on Codacy that have submodules:</span>

1.  <span style="font-weight: 400;">Navigate to the Repository Settings
    tab</span>
2.  <span style="font-weight: 400;">Click the ‘Generate New User Key’
    button </span><span style="font-weight: 400;">for each
    repository</span>

 

<span
style="font-weight: 400;">![Screenshot\_2019-05-16\_at\_15.28.55.png](https://support.codacy.com/hc/article_attachments/360036767653/Screenshot_2019-05-16_at_15.28.55.png)</span>

 

<span style="font-weight: 400;">Don't forget to repeat these steps every
time you add new repositories containing submodules to Codacy.
Alternatively, you can make this the default behavior for all new
repositories by turning on ‘Add repository key to the user’ in the
Administration Settings.</span>

 

![Screenshot\_2019-05-16\_at\_14.24.06.png](https://support.codacy.com/hc/article_attachments/360035922974/Screenshot_2019-05-16_at_14.24.06.png)

**How does this work?**

<span style="font-weight: 400;">When you add a repository to Codacy, it
generates a new SSH key that is added to your repository using a
GitHub/Bitbucket/GitLab integration. Every time Codacy needs to clone
that repository, this key is used. If you are using submodules, Codacy
needs to clone an additional repository it has no access to. Since there
is no way of identifying the submodules of a repository before cloning
it, Codacy adds the SSH keys to the user’s account, thus enabling access
to all repositories the user has.</span>

## **Enabling submodules for Cloud**

<span style="font-weight: 400;">It is only possible to enable submodules
for Organization accounts.</span>

<span style="font-weight: 400;">By default we do normal git clones that
will not clone submodules, this it to ensure that we only clone
necessary repos. However if your organization is already using
submodules these can be enabled by contacting our </span>[<span
style="font-weight: 400;">Support
Team</span>](mailto:support@codacy.com)<span style="font-weight: 400;">.
If your submodules are public repositories, please make sure your URL is
using the </span>*<span style="font-weight: 400;">HTTPS </span>*<span
style="font-weight: 400;">protocol. If your submodules are private, make
sure your URL is using the SSH protocol. </span>

 

<span style="font-weight: 400;">If you already have repositories added
on Codacy that have submodules:</span>

1.  <span style="font-weight: 400;">Navigate to the Repository Settings
    tab</span>
2.  <span style="font-weight: 400;">Click the ‘Generate New User Key’
    button </span><span style="font-weight: 400;">for each
    repository</span>

 

![Screenshot\_2019-05-16\_at\_15.52.00.png](https://support.codacy.com/hc/article_attachments/360036767633/Screenshot_2019-05-16_at_15.52.00.png)

 

**How does this work?**

<span style="font-weight: 400;">When you add a repository to Codacy, it
generates a new SSH key that is added to your repository using a
GitHub/Bitbucket/GitLab integration. Every time Codacy needs to clone
that repository, this key is used. If you are using submodules, Codacy
needs to clone an additional repository it has no access to. Since there
is no way of identifying the submodules of a repository before cloning
it, Codacy adds the SSH keys to the user’s account, thus enabling access
to all repositories the user has.</span>

  
  
