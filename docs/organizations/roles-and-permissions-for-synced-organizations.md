---
description: List of operations that users can perform on Codacy depending on their role on the Git provider, and how to configure who can change analysis configurations.
---

# Roles and permissions for synced organizations

Your team members have different permissions on Codacy depending on their role on your Git provider:

-   [GitHub](#github)
-   [GitLab](#gitlab)
-   [Bitbucket](#bitbucket)

See [managing people](managing-people.md) to list and manage the members of your Codacy organization.

<style>
.yes {
  background-color: rgb(208, 247, 229);
}
</style>

## Permissions for GitHub

The table below maps the Codacy operations to the GitHub Cloud and GitHub Enterprise roles that allow performing them:

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Join organization</th>
      <th>View private repository</th>
      <th>Ignore issues and files,<br/>configure code patterns and file extensions,<br/>manage branches</th>
      <th>Upload coverage<br/>using an account API token</th>
      <th>Configure repository</th>
      <th>Add repository</th>
      <th>Manage coding standards,<br/>Bulk copy patterns</th>
      <th>Invite and accept members,<br/>modify billing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Outside Collaborator</strong><sup><a href="#note-1">1</a></sup></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Repository Read</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Repository Triage</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Repository Write</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Repository Maintain</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Repository Admin</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Organization Owner</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
  </tbody>
</table>

<sup id="note-1">1</sup>: Outside Collaborators and External Users aren't supported as Members of organizations on Codacy. However, you can [add them](managing-people.md#adding-people) so that Codacy analyzes their commits to private repositories.<br/>
<sup id="note-2">2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](managing-people.md#joining).<br/>
<sup id="note-3">3</sup>: Codacy can't distinguish the Bitbucket roles Read and Write because of a limitation on the Bitbucket API.

## Permissions for GitLab

The table below maps the Codacy operations to the GitLab Cloud and GitLab Enterprise roles that allow performing them:

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Join organization</th>
      <th>View private repository</th>
      <th>Ignore issues and files,<br/>configure code patterns and file extensions,<br/>manage branches</th>
      <th>Upload coverage<br/>using an account API token</th>
      <th>Configure repository</th>
      <th>Add repository</th>
      <th>Manage coding standards,<br/>Bulk copy patterns</th>
      <th>Invite and accept members,<br/>modify billing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>External User</strong><sup><a href="#note-1">1</a></sup></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Guest</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Reporter</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Developer</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Maintainer</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Owner</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td><strong>Administrator</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
  </tbody>
</table>

## Permissions for Bitbucket

The table below maps the Codacy operations to the Bitbucket Cloud and Bitbucket Server roles that allow performing them:

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Join organization</th>
      <th>View private repository</th>
      <th>Ignore issues and files,<br/>configure code patterns and file extensions,<br/>manage branches</th>
      <th>Upload coverage<br/>using an account API token</th>
      <th>Configure repository</th>
      <th>Add repository</th>
      <th>Manage coding standards,<br/>Bulk copy patterns</th>
      <th>Invite and accept members,<br/>modify billing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Read</strong><sup><a href="#note-3">3</a></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Write</strong><sup><a href="#note-3">3</a></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Admin</strong></td>
      <td class="yes">Yes<sup><a href="#note-2">2</a></sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
  </tbody>
</table>

## Configuring who can change analysis configurations {: id="change-analysis-configuration"}

By default, only users with **Write** permission on a repository can change analysis configurations.

To change this, open your organization **Settings**, page **Member privileges**, and  define the lowest permission required to perform the following operations on the repositories of your organization:

-   [Ignore issues](../repositories/issues.md#ignoring-and-managing-issues)
-   [Ignore files](../repositories-configure/ignoring-files.md)
-   [Configure code patterns](../repositories-configure/configuring-code-patterns.md)
-   [Configure file extensions](../repositories-configure/file-extensions.md)
-   [Manage branches](../repositories-configure/managing-branches.md)

![Configuring who can change analysis configurations](images/organization-analysis-configuration.png)

Codacy doesn't allow changing the role of a user, as the roles on Codacy are mirrored from your Git provider and applied to each repository.
