# How to configure which users can ignore issues

<table>
<tbody>
<tr class="odd">
<td>Applies only to GitHub Cloud and GitHub Enterprise</td>
</tr>
</tbody>
</table>

Sometimes we have patterns on our repository that haven't been
configured to be the perfect fit for a particular standard; or we do
have the correct patterns but we will not tackle some of the issues
immediately. On those and other cases the best way to proceed is to
ignore the issues, either because they are not relevant or will not be
tackled in the immediate future.

By default, [only users with Admin permission on a repository can ignore
issues](/hc/en-us/articles/360010373559-Roles-and-permissions-for-synced-organizations),
but this can be changed. In your Organization's settings, you can find
"Members privileges" where you can define the lowest permission required
to ignore issues for your organization.

![Screenshot\_2020-02-25\_at\_14.32.33.png](/hc/article_attachments/360009312100/Screenshot_2020-02-25_at_14.32.33.png)

It is not possible to change the role of a user in Codacy, as the roles
are mirrored from your Git provider and applied to each repository.

 
