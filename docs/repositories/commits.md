# Commits page

The commits page gives you an overview of the repository's commits, providing valuable information about changes and quality improvements. Click on the row of a commit to see more details.

Visualization of the commits defaults to the main branch of the repository. This can be changed by selecting another branch on the combo box.

When viewing the commits list, some commits may still not have been analyzed, either because the analysis is still running or belongs to a branch that hasn't been selected for analysis. These can be identified by the status column. Just hover the icon to get some extra info.

![Commit list](images/commit-list.png)

If any commit created or fixed any issue on the repository, that information will be displayed on the right-hand side of the list, allowing for a quick overview of the repository quality evolutions.

## Commit detail

The commit detail will show you an overview of what changed in that particular commit, showing all the differences that were introduced.

![Commit detail](images/commit-detail.png)

A detailed issue delta information is always available, showing exactly which issues were fixed or created in each commit.

![New issues](images/commit-detail-new-issues.png)

By expanding an issue, you can find information on why it's an issue, the severity level and category, how to solve the issue, and links to community sources on the problem found.
You will also find a few additional options, including **Ignore issue**, **Remove pattern**, **Ignore file**, and also integrations you may have enabled.

![Issue actions](images/commit-detail-issue-actions.png)

The changed files can also be reviewed using a diff visualizer, helping achieve a quick and easy code review.

![Commit diff](images/commit-detail-diff.png)
