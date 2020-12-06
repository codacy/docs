# Which version control systems do you support?

We only support Git repositories from the providers listed below.

On Codacy Cloud we support the following Git providers:

-   GitHub Cloud
-   GitLab Cloud
-   Bitbucket Cloud

Besides these, on [Codacy self-hosted](https://www.codacy.com/self-hosted) we also support:

-   GitHub Enterprise (version 2.20.3 or later)
-   GitLab Enterprise (version 12.6.2-ee or later)
-   Bitbucket Server (version 6.6.0 or later)

!!! note
    We used to support the possibility to add other Git repositories to Codacy manually, but as part of a process to improve our performance, that option is no longer available. However, repositories that were added before the 12th Feb 2019 can continue to be analyzed if you configure [post-commit hooks](../../repositories/post-commit-hooks.md) on your Git repositories to notify Codacy of new commits.
