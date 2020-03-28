# GitLab Integration

After adding a repository, navigate to your repository's **Settings
-&gt; Integrations** tab to enable GitLab integration for comments on
pull requests, issue creation, and more.

![gitlab-integration.png](/images/gitlab-integration.png)

When **Pull Request Status** or **Pull Request Comment** is enabled,
Codacy will automatically update pull requests on GitLab with additional
information when accepting pull requests.

**Pull Request Status** will only be added if the user that added the
integration has at least write permissions for that repository. The
status shows whether your pull request and coverage are up to standards
or not as per the [Pull Request Quality
Settings](/hc/en-us/articles/360009164573-Quality-Settings)
set up for your repository. To see the coverage status, please make sure
the Coverage option is enabled in the Pull Request Quality settings.

![gitlab-integration-pr-status.png](/images/gitlab-integration-pr-status.png)

**Pull Request Comment** makes a comment on the Pull Request line when a
new issue is found and shows the pattern raising the issue. Click on the
issue link to go to Codacy to see more details about the issue and how
to fix it.

![gitlab-integration-pr-comment.png](/images/gitlab-integration-pr-comment.png)
