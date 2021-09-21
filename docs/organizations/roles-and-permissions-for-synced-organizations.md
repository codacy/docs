---
description: List of operations that users can perform on Codacy depending on their permissions on the Git provider, and how to configure who can change analysis configurations.
---

# Roles and permissions for synced organizations

Depending on your role on the Git provider you will have different permissions on Codacy:

<table>
  <thead>
    <tr>
      <th>Provider</th>
      <th>Role</th>
      <th>Join organization</th>
      <th>View repository</th>
      <th>Change analysis configurations</th>
      <th>Configure repository</th>
      <th>Add repository</th>
      <th>Invite and accept members or modify billing</th>
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
    </tr>
    <tr>
      <td>Repository Read</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Triage</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Write</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Maintain</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Repository Admin</td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
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
    </tr>
    <tr>
      <td><span>Guest</span></td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><span>Reporter</span></td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><span>Developer</span></td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><span>Maintainer</span></td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
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
    </tr>
    <tr>
      <td><span>Administrator</span></td>
      <td>Yes<sup><a href="#note-2">2</a></sup></td>
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
      <td>Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
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
    </tr>
  </tbody>
</table>

<sup id="note-1">1</sup>: Outside Collaborators and External Users aren't supported as Members of organizations on Codacy. However, you can [add them](managing-people.md#adding-people) so that Codacy analyzes their commits to private repositories.<br/>
<sup id="note-2">2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](managing-people.md#joining).<br/>
<sup id="note-3">3</sup>: Codacy can't distinguish the Bitbucket roles Read and Write because of a limitation on the Bitbucket API.

See [managing people](managing-people.md) to list and manage the members of your organization.

## Configuring who can change analysis configurations {: id="change-analysis-configuration"}

By default, only users with **Write** permission on a repository can change analysis configurations.

To change this, open your organization **Settings**, page **Plan and billing**, and  define the lowest permission required to perform the following operations on the repositories of your organization:

-   [Ignore issues](../repositories/issues.md#ignoring-and-managing-issues)
-   [Ignore files](../repositories-configure/ignoring-files.md)
-   [Configure code patterns](../repositories-configure/configuring-code-patterns.md)
-   [Configure file extensions](../repositories-configure/file-extensions.md)
-   [Manage branches](../repositories-configure/managing-branches.md)

![Configuring who can change analysis configurations](images/organization-analysis-configuration.png)

Codacy doesn't allow changing the role of a user, as the roles on Codacy are mirrored from your Git provider and applied to each repository.
