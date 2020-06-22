# Submodules - How to enable them

[Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) allow you to keep a git repository as a subdirectory within another git repository. They are helpful in maintaining a shared configuration file for your team, which can then be applied to multiple git repositories.

Codacy supports this workflow for GitHub, Bitbucket (including Bitbucket Server) and GitLab.

!!! note
    Some tools don't search for configuration files recursively. You may need to include a configuration file in the root of your repository referencing the configuration file in the submodule.

## Enabling submodules for Codacy Self-hosted

By default we do normal git clones which will not clone submodules, this is to ensure that we only clone necessary repos. However if you're already using submodules this feature
can be enabled by contacting our [Support Team](mailto:support@codacy.com).

After the submodules have been enabled, [you will need to update the license](/hc/en-us/articles/207280529-Frequently-Asked-Questions-FAQ-#How-to-update-the-license). If your submodules are public repositories, please make sure your URL is using the HTTPS protocol. If your submodules are private, make sure your URL is using the SSH protocol.

If you already have repositories added on Codacy that have submodules:

1.  Navigate to the Repository Settings tab
2.  Click the 'Generate New User Key' button for each repository.

    **If you're using Bitbucket Cloud**, you must click the link 'Add New User Key' instead and manually copy the SSH key to Bibucket Cloud.

![](/images/Screenshot_2019-05-16_at_15.28.55.png)

Don't forget to repeat these steps every time you add new repositories containing submodules to Codacy. Alternatively, you can make this the default behavior for all new repositories by turning on 'Add repository key to the user' in the Administration Settings. **If you're using Bitbucket Cloud**, since automatically adding the user keys is not supported this setting must be disabled.

![](/images/Screenshot_2019-05-16_at_14.24.06.png)

**How does this work?**

When you add a repository to Codacy, it generates a new SSH key that is added to your repository using a GitHub/Bitbucket/GitLab integration. Every time Codacy needs to clone that repository, this key is used. If you are using submodules, Codacy needs to clone an additional repository it has no access to. Since there is no way of identifying the submodules of a repository before cloning it, Codacy adds the SSH keys to the user’s account, thus enabling access to all repositories the user has.

## Enabling submodules for Cloud

It is only possible to enable submodules for Organization accounts.

By default we do normal git clones that will not clone submodules, this is to ensure that we only clone necessary repos. However if your organization is already using submodules these can be enabled by contacting our [Support Team](mailto:support@codacy.com). If your submodules are public repositories, please make sure your URL is using the HTTPS protocol. If your submodules are private, make sure your URL is using the SSH protocol.

If you already have repositories added on Codacy that have submodules:

1.  Navigate to the Repository Settings tab
2.  Click the 'Generate New User Key' button for each repository

![](/images/Screenshot_2019-05-16_at_15.52.00.png)

**How does this work?**

When you add a repository to Codacy, it generates a new SSH key that is added to your repository using a GitHub/Bitbucket/GitLab integration. Every time Codacy needs to clone that repository, this key is used. If you are using submodules, Codacy needs to clone an additional repository it has no access to. Since there is no way of identifying the submodules of a repository before cloning it, Codacy adds the SSH keys to the user’s account, thus enabling access to all repositories the user has.
