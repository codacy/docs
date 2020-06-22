# Create and configure a new GitHub App for GitHub Enterprise

You must create and correctly set up a [GitHub App](https://developer.github.com/apps/about-apps/) to allow Codacy to integrate with GitHub Enterprise.

## Creating a new GitHub App

To create the GitHub App:

1.  Open `https://<github hostname>/settings/apps/new`, where `<github hostname>` is the hostname of your GitHub Enterprise instance.
2.  Configure the new GitHub App using the values listed in the table below, replacing `<codacy hostname>` with the hostname of your Codacy instance.
 
<table>
<tbody>
<tr>
<td><strong>Field</strong></td>
<td><strong>Value</strong></td>
</tr>
<tr>
<td>GitHub App name</td>
<td>Codacy</td>
</tr>
<tr>
<td>Homepage URL</td>
<td>https://codacy.example.com</td>
</tr>
<tr>
<td>User authorization callback URL</td>
<td>https://codacy.example.com</td>
</tr>
<tr>
<td>Webhook URL</td>
<td>https://codacy.example.com/2.0/events/gh/organization</td>
</tr>
<tr>
<td><strong>Repository permissions</strong></td>
<td> </td>
</tr>
<tr>
<td>Administration</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td>Checks</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td>Issues</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td>Metadata</td>
<td>Read Only</td>
</tr>
<tr>
<td>Pull requests</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td>Webhooks</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td>Commit statuses</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td><strong>Organization permissions</strong></td>
<td> </td>
</tr>
<tr>
<td>Members</td>
<td>Read Only</td>
</tr>
<tr>
<td>Webhooks</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td><strong>User permissions</strong></td>
<td> </td>
</tr>
<tr>
<td>Email addresses</td>
<td>Read Only</td>
</tr>
<tr>
<td>Git SSH keys</td>
<td>Read &amp; Write</td>
</tr>
<tr>
<td>Where can this GitHub App be installed?</td>
<td><p>Any account</p></td>
</tr>
</tbody>
</table>

## Configuring the new GitHub App

After creating the GitHub App, you must configure the name of the created app in Codacy's configuration panel available at `<codacy hostname>:9000`, where `<codacy hostname>` is the hostname of your Codacy instance.  
  
![](/images/Screenshot_2020-03-23_at_11.38.16.png)
