# Configuring GitHub Enterprise with Codacy Self-hosted

Configuring GitHub Enterprise allows you to easily add GitHub
repositories to your Codacy Self-hosted installation.

Follow the instructions below to set up the Codacy integration with
GitHub Enterprise:

1.  <span style="font-weight: 400;">Follow the instructions on
    </span>[<span style="font-weight: 400;">creating and configuring a
    GitHub
    App</span>](/hc/en-us/articles/360012665460)<span
    style="font-weight: 400;">.</span>
2.  <span style="font-weight: 400;">On Codacy, open **Admin**,
    **Integrations**, and select GitHub Enterprise.</span>![GitHub
    Enterprise
    integration](/hc/article_attachments/360011391880/screenshot-github-enterprise.png)
3.  <span style="font-weight: 400;">Configure the GitHub Enterprise
    integration as follows:</span>
    <table>
    <colgroup>
    <col width="50%" />
    <col width="50%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td><p><strong>Endpoint</strong></p></td>
    <td><p><span style="font-weight: 400;">URL of the GitHub Enterprise instance, specifying the HTTP protocol:</span></p>
    <ul>
    <li><span style="font-weight: 400;">https://&lt;github enterprise hostname&gt;</span></li>
    <li><span style="font-weight: 400;">http://&lt;github enterprise hostname&gt;</span></li>
    </ul></td>
    </tr>
    <tr class="even">
    <td><p><strong>Port</strong></p></td>
    <td><p><span style="font-weight: 400;">Port of the GitHub Enterprise instance.</span></p>
    <p><span style="font-weight: 400;">If empty, Codacy will use the default port.</span></p></td>
    </tr>
    <tr class="odd">
    <td><p><strong>Using private mode?</strong></p></td>
    <td><p><span style="font-weight: 400;">Enable the check box if your GitHub Enterprise is configured to use private mode.</span></p></td>
    </tr>
    <tr class="even">
    <td><p><strong>Client ID</strong></p></td>
    <td><p><span style="font-weight: 400;">Client ID generated when you created the GitHub App.</span></p></td>
    </tr>
    <tr class="odd">
    <td><p><strong>Client Secret</strong></p></td>
    <td><p><span style="font-weight: 400;">Client Secret generated when you created the GitHub App.</span></p></td>
    </tr>
    </tbody>
    </table>

4.  <span style="font-weight: 400;">Click </span>**Test & Save**<span
    style="font-weight: 400;"> to validate and save the integration with
    GitHub Enterprise.</span>

