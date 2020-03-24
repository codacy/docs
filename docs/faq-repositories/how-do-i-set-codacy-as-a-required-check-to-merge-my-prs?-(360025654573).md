# How do I set Codacy as a required check to merge my PRs?

<span style="font-weight: 400;">Codacy will check each of your Pull
Requests using </span>[<span style="font-weight: 400;">your quality
settings</span>](https://support.codacy.com/hc/en-us/articles/360009164573-Quality-Settings)<span
style="font-weight: 400;">, sending a notification to the Git provider
informing if the PR is up to standards or not.</span>

<span style="font-weight: 400;">Each of the Git providers have different
options regarding what can be done with this notification that you can
set up to make sure you get a notification if the PR fails Codacy checks
or block it from being merged. </span>

## <span style="font-weight: 400;">GitHub</span>

<span style="font-weight: 400;">GitHub allows for a specific check to be
mandatory for a PR to be merged. This allows our users to make sure that
a PR is only merged when it gets an OK from Codacy.</span>

<span style="font-weight: 400;">Official Documentation: </span>[<span
style="font-weight: 400;">https://help.github.com/en/articles/enabling-required-status-checks</span>](https://help.github.com/en/articles/enabling-required-status-checks)

## <span style="font-weight: 400;">Bitbucket</span>

<span style="font-weight: 400;">Bitbucket does not allow for a specific
check to be required before merge, but instead, for a minimum number of
checks to be performed successfully before the PR can be merged. This
number can be zero, all the checks being run in the PR or a number in
between. Some of these options are only available for certain pricing
plans in Bitbucket.  </span>

<span style="font-weight: 400;">Official Documentation: </span>[<span
style="font-weight: 400;">https://confluence.atlassian.com/bitbucket/suggest-or-require-checks-before-a-merge-856691474.html</span>](https://confluence.atlassian.com/bitbucket/suggest-or-require-checks-before-a-merge-856691474.html)

## <span style="font-weight: 400;">GitLab</span>

<span style="font-weight: 400;">GitLab allows flagging merge requests as
"Work In Progress" to block the merge requests from being merged.</span>

<span style="font-weight: 400;">Official Documentation:
<https://docs.gitlab.com/ee/user/project/merge_requests/work_in_progress_merge_requests.html></span>
