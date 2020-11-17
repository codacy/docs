# Roles and permissions for synced organizations

Depending on your role on the Git provider you will have different permissions on Codacy:

<table>
<tbody>
<tr>
<td><strong>Provider</strong></td>
<td><strong>Role</strong></td>
<td><strong>Join organization</strong></td>
<td><strong>Ignore issues</strong></td>
<td><strong>Add repo</strong></td>
<td><strong>Configure repo</strong></td>
<td><strong>View repo</strong></td>
<td><strong>Invite and accept members</strong></td>
<td><strong>Modify billing</strong></td>
</tr>
<tr>
<td rowspan="4">
<p>GitHub Cloud</p>
</td>
<td>Outside Collaborator<sup>1</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Member</td>
<td>Configurable<sup>2</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Repository Admin</td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Owner</td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td rowspan="7">GitLab Cloud</td>
<td>External User<sup>1</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Guest</span></td>
<td>Configurable<sup>2</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Reporter</span></td>
<td>Configurable<sup>2</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Developer</span></td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Maintainer</span></td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Owner</span></td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td><span>Administrator</span></td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td rowspan="4">Bitbucket Server</td>
<td>Read</td>
<td>Configurable<sup>2</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Write</td>
<td>Configurable<sup>2</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Admin</td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>

<sup>1</sup>: Outside Collaborators and External Users are not supported as Members of organizations on Codacy. However, you can [add them as Authors](adding-and-managing-authors.md) so that their commits are analyzed by Codacy.  
<sup>2</sup>: Depending on your [setting for accepting new people](/hc/en-us/articles/360010263720).

![](../images/screencapture-app-dev-codacy-org-gh-organizations-mugiwara-nakama-settings-people-2019-11-04-19_02_28.png)

You can check who joined your organization and their role in the People page on Codacy.

💡 If you would like to analyze commits from authors that do not belong to your organization, [read more about Authors here](/hc/en-us/articles/360010922420).

Please reach out to us if you have any questions.
