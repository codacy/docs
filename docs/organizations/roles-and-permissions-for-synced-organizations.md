---
description: List of operations that users can perform on Codacy depending on their role on the Git provider, and how to configure who can change analysis configurations.
---

# Roles and permissions for synced organizations

Your team members have different permission levels on Codacy depending on their role on your Git provider. To change the permission level of a user on Codacy, you must adjust their role directly on your Git provider so that Codacy will use the corresponding permission level on the next time that the user logs in to Codacy.

See the Codacy permission levels that correspond to each role on your Git provider:

-   [GitHub](#permissions-for-github)
-   [GitLab](#permissions-for-gitlab)
-   [Bitbucket](#permissions-for-bitbucket)

See [managing people](managing-people.md) to list and manage the members of your Codacy organization.

<style>
td:not(:first-child), th:not(:first-child) {
  text-align: center !important;
}

tr:nth-child(1) {
  background-color: #EBF1FF;
}

.yes {
  background-color: #E6F4EA;
}
</style>

## Permissions for GitHub

The table below maps the GitHub Cloud and GitHub Enterprise roles to the corresponding Codacy permission levels and the operations that they're allowed to perform:

<table>
  <thead>
    <tr>
      <th>Git provider role</th>
      <th>Outside<br/>Collaborator<sup>1</sup></th>
      <th>Repository<br/>Read</th>
      <th>Repository<br/>Triage</th>
      <th>Repository<br/>Write</th>
      <th>Repository<br/>Maintain</th>
      <th>Repository<br/>Admin</th>
      <th>Organization<br/>Owner</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Codacy permission level</td>
      <td>-</td>
      <td colspan="2">Repository<br/>Read</td>
      <td colspan="2">Repository<br/>Write</td>
      <td>Repository<br/>Admin</td>
      <td>Organization<br/>Admin</td>
    </tr>
    <tr>
      <td>Join organization</td>
      <td>No</td>
      <td colspan="2" class="yes">Yes<sup>2</sup></td>
      <td colspan="2" class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes<sup>2</sup></td>
    </tr>
    <tr>
      <td>View private repository</td>
      <td>No</td>
      <td colspan="2" class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Ignore issues and files,<br/>configure code patterns and file extensions,<br/>manage branches</td>
      <td>No</td>
      <td colspan="2" class="yes"><a href="#change-analysis-configuration">Configurable</a></td>
      <td colspan="2" class="yes"><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Upload coverage<br/>using an account API token</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td colspan="2" class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Configure repository</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Add and remove repository</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Manage coding standards,<br/>bulk copy patterns</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td colspan="2">No</td>
      <td>No</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Invite and accept members,<br/>modify billing"</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td colspan="2">No</td>
      <td>No</td>
      <td class="yes">Yes</td>
    </tr>
  </tbody>
</table>

<sup>1</sup>: Outside Collaborators aren't supported as members of organizations on Codacy. However, you can [add them](managing-people.md#adding-people) so that Codacy analyzes their commits to private repositories.  
<sup>2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization).

## Permissions for GitLab

The table below maps the GitLab Cloud and GitLab Enterprise roles to the corresponding Codacy permission levels and the operations that they're allowed to perform:

<table>
  <thead>
    <tr>
      <th>Git provider role</th>
      <th>External<br/>User<sup>1</sup></th>
      <th>Project<br/>Guest</th>
      <th>Project<br/>Reporter</th>
      <th>Project<br/>Developer</th>
      <th>Project<br/>Maintainer</th>
      <th>Project<br/>Owner</th>
      <th>Group<br/>Owner</th>
      <th>Administrator</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Codacy permission level</td>
      <td>-</td>
      <td colspan="2">Repository<br/>Read</td>
      <td>Repository<br/>Write</td>
      <td colspan="2">Repository<br/>Admin</td>
      <td colspan="2">Organization<br/>Admin</td>
    </tr>
    <tr>
      <td>Join organization</td>
      <td>No</td>
      <td colspan="2" class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes<sup>2</sup></td>
      <td colspan="2" class="yes">Yes<sup>2</sup></td>
      <td colspan="2" class="yes">Yes<sup>2</sup></td>
    </tr>
    <tr>
      <td>View private repository</td>
      <td>No</td>
      <td colspan="2" class="yes">Yes</td>
      <td class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
    </tr>
    <tr>
      <td>Ignore issues and files,<br/>configure code patterns and file extensions,<br/>manage branches</td>
      <td>No</td>
      <td colspan="2" class="yes"><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes"><a href="#change-analysis-configuration">Configurable</a></td>
      <td colspan="2" class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
    </tr>
    <tr>
      <td>Upload coverage<br/>using an account API token</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
    </tr>
    <tr>
      <td>Configure repository</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td>No</td>
      <td colspan="2" class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
    </tr>
    <tr>
      <td>Add and remove repository</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td>No</td>
      <td colspan="2" class="yes">Yes</td>
      <td colspan="2" class="yes">Yes</td>
    </tr>
    <tr>
      <td>Manage coding standards,<br/>bulk copy patterns</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td colspan="2" class="yes">Yes</td>
    </tr>
    <tr>
      <td>Invite and accept members,<br/>modify billing</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td>No</td>
      <td colspan="2">No</td>
      <td colspan="2" class="yes">Yes</td>
    </tr>
  </tbody>
</table>

<sup>1</sup>: External Users aren't supported as members of organizations on Codacy. However, you can [add them](managing-people.md#adding-people) so that Codacy analyzes their commits to private repositories.  
<sup>2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization).

## Permissions for Bitbucket

The table below maps the Bitbucket Cloud and Bitbucket Server roles to the corresponding Codacy permission levels and the operations that they're allowed to perform:

<table>
  <thead>
    <tr>
      <th>Git provider role</th>
      <th>Read</th>
      <th>Write<sup>1</sup></th>
      <th>Admin</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Codacy permission level</td>
      <td colspan="2">Repository<br/>Read</td>
      <td>Organization<br/>Admin</td>
    </tr>
    <tr>
      <td>Join organization</td>
      <td colspan="2" class="yes">Yes<sup>2</sup></td>
      <td class="yes">Yes<sup>2</sup></td>
    </tr>
    <tr>
      <td>View private repository</td>
      <td colspan="2" class="yes">Yes</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Ignore issues and files,<br/>configure code patterns and file extensions,<br/>manage branches</td>
      <td colspan="2" class="yes"><a href="#change-analysis-configuration">Configurable</a></td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Upload coverage<br/>using an account API token</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Configure repository</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Add and remove repository</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Manage coding standards,<br/>bulk copy patterns</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
    </tr>
    <tr>
      <td>Invite and accept members,<br/>modify billing</td>
      <td colspan="2">No</td>
      <td class="yes">Yes</td>
    </tr>
  </tbody>
</table>

<sup>1</sup>: Codacy can't distinguish the Bitbucket roles Read and Write because of a limitation on the Bitbucket API.  
<sup>2</sup>: Joining an organization may need an approval depending on your setting for [accepting new people](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization).

## Configuring who can change the analysis configuration {: id="change-analysis-configuration"}

By default, only users with the Codacy permission level **Repository Write** can change analysis configurations.

To change this, open your organization **Settings**, page **Member privileges**, and define the lowest Codacy permission level required to perform the following operations on the repositories of your organization:

-   [Ignore issues](../repositories/issues.md#ignoring-and-managing-issues)
-   [Ignore files](../repositories-configure/ignoring-files.md)
-   [Configure code patterns](../repositories-configure/configuring-code-patterns.md)
-   [Configure file extensions](../repositories-configure/file-extensions.md)
-   [Manage branches](../repositories-configure/managing-branches.md)

![Configuring who can change analysis configurations](images/organization-analysis-configuration.png)

!!! note
    Codacy determines the permission level of each user from the role that each user has on your Git provider:

    -   [GitHub](#permissions-for-github)
    -   [GitLab](#permissions-for-gitlab)
    -   [Bitbucket](#permissions-for-bitbucket)

## See also

-   [Managing people](managing-people.md)
-   [Accepting new people to your organization](changing-your-plan-and-billing.md#accepting-new-people-to-your-organization)
