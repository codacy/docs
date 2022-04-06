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

## Permissions for GitHub {: id="github"}

The table below maps the GitHub Cloud and GitHub Enterprise roles to the Codacy operations that they're allowed to perform:

<table>
  <thead>
    <tr>
      <td></td>
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
      <th>Outside Collaborator<sup>1</sup></th>
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
      <th>Repository Read</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Repository Triage</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Repository Write</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Repository Maintain</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Repository Admin</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Organization Owner</th>
      <td class="yes">Yes<sup>2</sup></td>
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

<sup>1</sup>: Outside Collaborators aren't supported as members of organizations on Codacy. However, you can [add them](managing-people.md#adding-people) so that Codacy analyzes their commits to private repositories.  
<sup>2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization).

## Permissions for GitLab {: id="gitlab"}

The table below maps the GitLab Cloud and GitLab Enterprise roles to the Codacy operations that they're allowed to perform:

<table>
  <thead>
    <tr>
      <td></td>
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
      <th>External User<sup>1</sup></th>
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
      <th>Guest</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Reporter</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Maintainer</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Owner</th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <th>Administrator</th>
      <td class="yes">Yes<sup>2</sup></td>
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

<sup>1</sup>: External Users aren't supported as members of organizations on Codacy. However, you can [add them](managing-people.md#adding-people) so that Codacy analyzes their commits to private repositories.  
<sup>2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization).

## Permissions for Bitbucket {: id="bitbucket"}

The table below maps the Bitbucket Cloud and Bitbucket Server roles to the Codacy operations that they're allowed to perform:

<table>
  <thead>
    <tr>
      <td></td>
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
      <th>Read<sup>1</sup></th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Write<sup>1</sup></th>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes</td>
      <td><a href="#change-analysis-configuration">Configurable</a></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Admin</th>
      <td class="yes">Yes<sup>2</sup></td>
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

<sup>1</sup>: Codacy can't distinguish the Bitbucket roles Read and Write because of a limitation on the Bitbucket API.  
<sup>2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization).

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
