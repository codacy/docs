# Failed to clone the repository, generate a new SSH key

SSH keys are exclusively used for repository cloning.

Depending on the level of access that the user configuring the repository on Codacy has on the remote Git provider, the key can be added either:

-   Directly to the repository itself, if the user has permissions to add keys to the repository
-   To the user account, if the user only has permissions to read or commit to the repository

For this reason, some changes on the remote Git provider can prevent Codacy from cloning the repository.

![Failed to clone the repository](images/failed-to-clone-the-repository.png)

## The repository was renamed or moved

If you renamed the repository or moved it to a different account on the Git provider:

1.  On Codacy, open your **Repository Settings**, tab **General**.
2.  Click the button **Update name**.

## The user that configured the repository no longer has access

If the user that initially configured the repository on Codacy was using a user account key but no longer has access to the repository on the Git provider:

1.  On Codacy, open your **Repository Settings**, tab **General**.
2.  Click the button **Generate New Repository Key** (recommended) or **Generate New User Key**:

    **Generate New Repository Key** is the recommended option. It will add a new SSH key to your repository deployment keys. However, this is only possible if the user configuring the integration with the remote Git provider has permissions to add keys to the repository. Otherwise, this operation will fail. Alternatively, you can also do this process manually by copying the SSH key.

    **Generate New User Key** should only be used if [your repository is using submodules on Codacy](../../repositories-configure/using-submodules.md). When you are using submodules, Codacy needs to clone additional repositories it has no access to. Since there is no way of identifying the submodules of a repository before cloning the repository, Codacy adds the SSH keys to the user account so that it has access to the same repositories as the user.
   
    !!! important
        **If you're using Bitbucket Cloud**, you must manually add the SSH key on your [user account](https://bitbucket.org/account/settings/ssh-keys/).

    ![Generate new key](images/failed-to-clone-the-repository-new-key.png)

3.  Open the tab **Integrations**. If you have an integration with your Git provider enabled, remove and re-create the integration.
