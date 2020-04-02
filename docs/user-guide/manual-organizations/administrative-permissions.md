# Administrative Permissions

Organization permissions allow fine-grained control over your organization's members and repositories.

All organizations have an Administrators team. Each member of this team is an administrator of the entire organization, and all repositories in the organization are automatically added to this team.

Any member of the Administrators team has full read/write permissions. You can view the actions available per permission level here:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td></td>
<td><strong>Organization</strong></td>
</tr>
<tr class="even">
<td><strong>Admin</strong></td>
<td><ul>
<li>Add/Remove members</li>
<li>Create/Remove teams</li>
<li>Change organization settings</li>
<li>Edit Billing information</li>
<li>Delete Organization</li>
<li>Add/Remove repositories</li>
<li>Add/Remove integrations of team repositories</li>
<li>Change code patterns</li>
<li>Define/Change quality settings</li>
<li>See repository issues and metrics</li>
</ul></td>
</tr>
</tbody>
</table>

For users that don't have Admin permissions, they will need to be added to a [team](/hc/en-us/articles/360009340553).
When adding users to a team, the Administrator can decide the level of permissions each team member should have for the repositories within that team. 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td> </td>
<td><strong>Team</strong></td>
</tr>
<tr class="even">
<td><strong>Read</strong></td>
<td><ul>
<li>See repository issues and metrics</li>
<li>Add repositories to the Administrators team (to add repo to a specific team needs to have write permissions)</li>
</ul></td>
</tr>
<tr class="odd">
<td><strong>Write</strong></td>
<td>Same as Read permissions plus: 
<ul>
<li>Add repositories to specific teams</li>
<li>Add/Remove integrations of team repositories</li>
<li>Change code patterns</li>
<li>See repository issues and metrics</li>
<li>Ignore issues / remove patterns</li>
</ul></td>
</tr>
</tbody>
</table>
