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
<td rowspan="5">
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
<td>Read, Triage</td>
<td>Configurable<sup>2</sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Write, Maintain</td>
<td>Configurable<sup>2</sup></td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
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
<td>Organization Owner</td>
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
<td rowspan="4">Bitbucket Cloud and Bitbucket Server</td>
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
<sup>2</sup>: Depending on your [setting for accepting new people](what-are-synced-organizations.md#managing-people-in-an-organization).

See [managing people in an organization](what-are-synced-organizations.md#managing-people-in-an-organization) to list your organization members and their role.

!!! tip
    If you would like to analyze commits from authors that do not belong to your organization, [read more about Authors here](adding-and-managing-authors.md).

Please reach out to us if you have any questions.
