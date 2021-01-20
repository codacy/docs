# Roles and permissions for synced organizations

Depending on your role on the Git provider you will have different permissions on Codacy:

<table>
  <thead>
    <tr>
      <th>Provider</th>
      <th>Role</th>
      <th>Join organization</th>
      <th>Ignore issues</th>
      <th>Add repo</th>
      <th>Configure repo</th>
      <th>View repo</th>
      <th>Invite and accept members</th>
      <th>Modify billing</th>
    </tr>
  </thead>
  <tbody>
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

<sup id="note-1">1</sup>: Outside Collaborators and External Users aren't supported as Members of organizations on Codacy. However, you can [add them as Authors](adding-and-managing-authors.md) so that Codacy analyzes their commits.  
<sup id="note-2">2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](what-are-synced-organizations.md#managing-people-in-an-organization).  
<sup id="note-3">3</sup>: Depending on your setting for [configuring which users can ignore issues](configuring-which-users-can-ignore-issues.md).

See [managing people in an organization](what-are-synced-organizations.md#managing-people-in-an-organization) to list your organization members and their role.

!!! tip
    If you would like to analyze commits from authors that don't belong to your organization, [read more about Authors here](adding-and-managing-authors.md).

Please reach out to us if you have any questions.
