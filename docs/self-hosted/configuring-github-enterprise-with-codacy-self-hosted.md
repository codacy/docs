# Configuring GitHub Enterprise with Codacy Self-hosted

Configuring GitHub Enterprise allows you to easily add GitHub repositories to your Codacy Self-hosted installation.

Follow the instructions below to set up the Codacy integration with GitHub Enterprise:

1.  Follow the instructions on [creating and configuring a GitHub App](/hc/en-us/articles/360012665460).
2.  On Codacy, open **Admin**, **Integrations**, and select GitHub Enterprise.

    ![GitHub Enterprise integration](/images/screenshot-github-enterprise.png)

3.  Configure the GitHub Enterprise integration as follows:

    <table>
    <tbody>
    <tr>
    <td><strong>Endpoint</strong></td>
    <td><p>URL of the GitHub Enterprise instance, specifying the HTTP protocol:</p>
    <ul>
    <li>https://&lt;github enterprise hostname&gt;</li>
    <li>http://&lt;github enterprise hostname&gt;</li>
    </ul>
    </td>
    </tr>
    <tr>
    <td><strong>Port</strong></td>
    <td><p>Port of the GitHub Enterprise instance.</p>
    <p>If empty, Codacy will use the default port.</p></td>
    </tr>
    <tr>
    <td><strong>Using private mode?</strong></td>
    <td>Enable the check box if your GitHub Enterprise is configured to use private mode.</td>
    </tr>
    <tr>
    <td><strong>Client ID</strong></td>
    <td>Client ID generated when you created the GitHub App.</td>
    </tr>
    <tr>
    <td><strong>Client Secret</strong></td>
    <td>Client Secret generated when you created the GitHub App.</td>
    </tr>
    </tbody>
    </table>

4.  Click **Test & Save** to validate and save the integration with GitHub Enterprise.
