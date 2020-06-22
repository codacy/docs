# Create and configure a new GitHub App for GitHub Enterprise

You must create and correctly set up a [GitHub
App](https://developer.github.com/apps/about-apps/) to allow Codacy to
integrate with GitHub Enterprise.

## Creating a new GitHub App

To create the GitHub App:

1.   Open `https://<github hostname>/settings/apps/new`,
    where `<github hostname>` is the hostname of your GitHub Enterprise
    instance.
2.  Configure the new GitHub App using the values listed in the table
    below, replacing `<codacy hostname>` with the hostname of your
    Codacy instance.

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Field</strong></td>
<td><strong>Value</strong></td>
</tr>
<tr class="even">
<td>GitHub App name</td>
<td>Codacy</td>
</tr>
<tr class="odd">
<td>Homepage URL</td>
<td>https://codacy.example.com</td>
</tr>
<tr class="even">
<td>User authorization callback URL</td>
<td>https://codacy.example.com</td>
</tr>
<tr class="odd">
<td>Webhook URL</td>
<td>https://codacy.example.com/2.0/events/gh/organization</td>
</tr>
<tr class="even">
<td><strong>Repository permissions</strong></td>
<td> </td>
</tr>
<tr class="odd">
<td>Administration</td>
<td>Read &amp; Write</td>
</tr>
<tr class="even">
<td>Checks</td>
<td>Read &amp; Write</td>
</tr>
<tr class="odd">
<td>Issues</td>
<td>Read &amp; Write</td>
</tr>
<tr class="even">
<td>Metadata</td>
<td>Read Only</td>
</tr>
<tr class="odd">
<td>Pull requests</td>
<td>Read &amp; Write</td>
</tr>
<tr class="even">
<td>Webhooks</td>
<td>Read &amp; Write</td>
</tr>
<tr class="odd">
<td>Commit statuses</td>
<td>Read &amp; Write</td>
</tr>
<tr class="even">
<td><strong>Organization permissions</strong></td>
<td> </td>
</tr>
<tr class="odd">
<td>Members</td>
<td>Read Only</td>
</tr>
<tr class="even">
<td>Webhooks</td>
<td>Read &amp; Write</td>
</tr>
<tr class="odd">
<td><strong>User permissions</strong></td>
<td> </td>
</tr>
<tr class="even">
<td>Email addresses</td>
<td>Read Only</td>
</tr>
<tr class="odd">
<td>Git SSH keys</td>
<td>Read &amp; Write</td>
</tr>
<tr class="even">
<td>Where can this GitHub App be installed?</td>
<td><p>Any account</p></td>
</tr>
</tbody>
</table>

 

## Configuring the new GitHub App

After creating the GitHub App, you must configure the name of the
created app in Codacy's configuration panel available at
`<codacy hostname>:9000`, where `<codacy hostname>` is the hostname of
your Codacy instance.  
  
![Screenshot\_2020-03-23\_at\_11.38.16.png](/hc/article_attachments/360010185440/Screenshot_2020-03-23_at_11.38.16.png)
