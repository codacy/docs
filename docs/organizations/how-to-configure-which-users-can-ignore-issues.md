# How to configure which users can ignore issues

!!! note
    Applies only to GitHub Cloud and GitHub Enterprise

Sometimes we have patterns on our repository that haven't been configured to be the perfect fit for a particular standard; or we do have the correct patterns but we won't tackle some of the issues immediately. On those and other cases the best way to proceed is to ignore the issues, either because they're not relevant or we won't tackle them in the immediate future.

By default, [only users with Admin permission on a repository can ignore issues](roles-and-permissions-for-synced-organizations.md), but you can change this. In your Organization's settings, you can find **Members privileges** where you can define the lowest permission required to ignore issues for your organization.

![Configuring who can ignore issues](images/ignore-issues.png)

It's not possible to change the role of a user in Codacy, as the roles are mirrored from your Git provider and applied to each repository.
