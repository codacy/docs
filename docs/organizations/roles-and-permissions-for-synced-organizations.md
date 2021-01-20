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
<td rowspan="7">GitHub Cloud and<br/>GitHub Enterprise</td>
<td>Outside Collaborator<sup><a href="#note-1">1</a></sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Repository Read</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Configurable<sup><a href="#note-3">3</a></sup></td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Repository Triage</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Configurable<sup><a href="#note-3">3</a></sup></td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Repository Write</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Configurable<sup><a href="#note-3">3</a></sup></td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Repository Maintain</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Configurable<sup><a href="#note-3">3</a></sup></td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Repository Admin</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Configurable<sup><a href="#note-3">3</a></sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Organization Owner</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td rowspan="7">GitLab Cloud and<br/>GitLab Enterprise</td>
<td>External User<sup><a href="#note-1">1</a></sup></td>
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
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Reporter</span></td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Developer</span></td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Maintainer</span></td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><span>Owner</span></td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td><span>Administrator</span></td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td rowspan="4">Bitbucket Cloud and<br/>Bitbucket Server</td>
<td>Read</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Write</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Admin</td>
<td>Yes<sup><a href="#note-2">2</a></sup></td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody>
</table>

<sup id="note-1">1</sup>: Outside Collaborators and External Users aren't supported as Members of organizations on Codacy. However, you can [add them as Authors](managing-people.md#adding-and-managing-authors) so that Codacy analyzes their commits.  
<sup id="note-2">2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](managing-people.md).  
<sup id="note-3">3</sup>: Depending on your setting for [configuring which users can ignore issues](how-to-configure-which-users-can-ignore-issues.md).

See [managing people in an organization](managing-people.md) to list your organization members and their role.

!!! tip
    If you would like to analyze commits from authors that don't belong to your organization, [read more about Authors here](managing-people.md#adding-and-managing-authors).

Please reach out to us if you have any questions.
