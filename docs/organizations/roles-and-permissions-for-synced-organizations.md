# Roles and permissions for synced organizations

Depending on your role on the Git provider you will have different permissions on Codacy:

<table>
  <thead>
    <tr>
      <th>Provider</th>
      <th>Role</th>
      <th>Join organization</th>
      <th>Ignore issues</th>
      <th>Add repository</th>
      <th>Configure repository</th>
      <th>View repository</th>
      <th>Invite and accept members</th>
      <th>Modify billing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="7">GitHub Cloud and GitHub Enterprise</td>
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
      <td><a href="#configure-ignore-issues">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Triage</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td><a href="#configure-ignore-issues">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Write</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td><a href="#configure-ignore-issues">Configurable</a></td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Maintain</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td><a href="#configure-ignore-issues">Configurable</a></td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Admin</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td><a href="#configure-ignore-issues">Configurable</a></td>
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
      <td rowspan="7">GitLab Cloud and GitLab Enterprise</td>
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
      <td rowspan="2">Bitbucket Cloud and Bitbucket Server</td>
      <td>Read, Write<sup><a href="#note-3">3</a></td>
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

<sup id="note-1">1</sup>: Outside Collaborators and External Users aren't supported as Members of organizations on Codacy. However, you can [add them](managing-people.md#adding-people) so that Codacy analyzes their commits to private repositories.<br/>
<sup id="note-2">2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](managing-people.md#joining).<br/>
<sup id="note-3">3</sup>: Codacy can't distinguish the Bitbucket roles Read and Write because of a limitation on the Bitbucket API.

See [managing people](managing-people.md) to list and manage the members of your organization.

## Configuring who can ignore issues {: id="configure-ignore-issues"}

!!! info "Applies only to GitHub Cloud and GitHub Enterprise"

By default, only users with Admin permission on a repository can [ignore issues](../repositories/issues.md#ignoring-an-issue), but you can change this. In your Organization's settings, you can find **Members privileges** where you can define the lowest permission required to ignore issues for your organization.

![Configuring who can ignore issues](images/ignore-issues.png)

Codacy doesn't allow changing the role of a user, as the roles on Codacy are mirrored from your Git provider and applied to each repository.
