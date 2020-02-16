# Which permissions does Codacy need from my account?

Codacy cloud uses [OAuth](https://oauth.net/) to handle logins. We support the following providers:

* GitHub Cloud
* Bitbucket Cloud
* Google Sign-In

Depending on the Git provider, we may request different permissions due to different OAuth implementations. We strive to request only the necessary permissions.

## GitHub Cloud

If you log in with GitHub, Codacy requires the following [permissions/scopes](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/):

* 'user' permissions to access GitHub user info
* 'public\_repo' permissions to set PR status on public repositories
* 'repo' access to access private repositories
* 'write: public\_key' to add SSH keys to the repositories, so that Codacy can have access to the repository 
* 'write:repo\_hook' access to add post-commit hooks
* 'read:org': read-only access to organization membership, organization repositories, and team membership
* 'admin:org\_hook' to access organization hooks

## Bitbucket Cloud

If you log in with Bitbucket, Codacy requires the following [permissions/scopes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-cloud-rest-api-scopes/):

* Read and modify your account information 
* Read and modify your repositories' issues
* Read your team's repository settings and read repositories contained within your team's repositories
* Read and modify your repositories and their pull requests
* Administer your repositories
* Read your team membership information
* Read and modify your repositories' webhooks

## Google Sign-In

If you log in with Google, Codacy requires the following [permissions/scopes](https://developers.google.com/identity/protocols/googlescopes#google_sign-in):

* Email permission
