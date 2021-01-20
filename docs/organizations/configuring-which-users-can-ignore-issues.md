# Configuring which users can ignore issues

<!-- TODO
     Consider moving merging this information with the page on managing people.
     See https://codacy.atlassian.net/browse/CY-3364 -->

!!! note
    Applies only to GitHub Cloud and GitHub Enterprise

Sometimes there are patterns on your repository that haven't been configured to be the perfect fit for a particular standard; or you do have the correct patterns but won't tackle some issues immediately. On those and other cases the best way to proceed is to ignore the issues, either because they're not relevant or because you won't tackle them in the immediate future.

By default, [only users with Admin permission on a repository can ignore issues](roles-and-permissions-for-synced-organizations.md), but you can change this. In your Organization's settings, you can find **Members privileges** where you can define the lowest permission required to ignore issues for your organization.

![Configuring who can ignore issues](images/ignore-issues.png)

Codacy doesn't allow changing the role of a user, as the roles on Codacy are mirrored from your Git provider and applied to each repository.
