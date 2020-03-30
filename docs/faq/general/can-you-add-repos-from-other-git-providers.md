# Can you add repos from other Git providers?

On Codacy Cloud we support the following Git providers:

- GitHub Cloud
- GitLab Cloud
- Bitbucket Cloud

Besides these, on [Codacy self-hosted](https://www.codacy.com/self-hosted) we also support:

- GitHub Enterprise
- GitLab Enterprise
- GitLab Cloud
- Bitbucket Server

We used to support the possibility to add other Git repositories to Codacy manually, but as part of a process to improve our performance, that option is no longer available. However, repositories that were added before the 12th Feb 2019 can continue to be analyzed if you configure [post-commit hooks](/hc/en-us/articles/214085885-Post-Commit-Hooks) on your Git repositories to notify Codacy of new commits.
