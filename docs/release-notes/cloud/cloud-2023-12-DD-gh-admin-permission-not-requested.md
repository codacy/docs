---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Codacy no longer requests repository permissions for Administration on GitHub December DD, 2023

!!! info "This release note applies only to GitHub"

We're replacing our usage of long lived, hard to track SSH Keys with trackable, short lived Installation Tokens when interacting with GitHub.

Codacy GitHub App no longer requests [read and write repository permissions for Administration](https://docs.github.com/en/enterprise-cloud@latest/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-administration).

With the deprecation of the SSH Keys usage for GitHub, we've the opportunity to improve the security, safety and reduce the liability of our GitHub App as we will no longer be requesting Repository Administration Read and Write permission.

## Removal of Administration repository permission

## What do you need to do if you have GitHub repositories?

For us to be able to drop this Administration permission we'll first need to make sure that our existing customers have accepted a new(ish) permission that we request: Repository Contents Read-only permission.

We'll first need to make sure that our existing customers have accepted a new(ish) permission that we request: Repository Contents Read-only permission.

If you have any questions or need help, please contact <mailto:support@codacy.com>.

## What will happen if you don't accept the new permissions request?

If we drop the Administration permission, customers that haven't accepted the Contents permission will be unable to properly use Codacy and a lot of features ranging from adding repositories to performing analysis will fail.
