# Upcoming changes to GitHub integration for Codacy Self-hosted

We are changing the way you authenticate to Codacy with GitHub: Starting with the next version, you'll be prompted to configure GitHub Apps.

GitHub Apps are the new preferred way of building products that work with GitHub repositories. Unlike right now, where you must grant access to everything in your account, with Apps you'll be able to select which accounts, organizations and repositories Codacy has access to. You can also grant access to more later. If you previously wanted to grant access to only one of your organizations or only a specific repository, Apps will have you covered.

Using Apps also unlocks access to new APIs, like GitHub Checks for creating better pull request reviews.

Despite the integration with existing repositories continuing to work, the following steps will be required:

1.  Codacy Admin: [Create and configure a new GitHub App](../../../chart/configuration/integrations/github-app-create/)
2.  GitHub organization Admin: Install the new App in the organization
3.  All GitHub users: When signing in, grant access with the new App
