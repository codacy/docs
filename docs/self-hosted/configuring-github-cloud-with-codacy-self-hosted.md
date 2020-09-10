# Configuring GitHub Cloud with Codacy Self-hosted

<table>
  <tbody>
    <tr>
      <td style="background-color: #ffc4ad;">
        <p>
          Codacy Self-hosted running on Docker is <strong>deprecated since April 2020</strong>. Codacy provides critical bug fixes and tool updates but no more feature enhancements for this version.
        </p>
        <p>
          <a href="/chart/" target="_self">Click here for updated documentation on how to install and configure Codacy Self-hosted on Kubernetes.</a>
        </p>
        <p>
          If you are a current customer and have any questions regarding the migration process, please reach out to your CSM or <a href="mailto:success@codacy.com" target="_blank">success@codacy.com</a> for more information.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Configuring GitHub Cloud allows you to easily add GitHub repositories to your Self-hosted installation.

To get started, navigate to the **Integrations** page in the Administration view and select **GitHub Cloud**.

![Screen_Shot_2018-07-08_at_16.39.35.png](/images/Screen_Shot_2018-07-08_at_16.39.35.png)

First, you'll have to create a GitHub OAuth application. [Create an application here](https://github.com/settings/applications/new).

Fill all the fields with the text shown in the image below or use your own text except for the field _Authorization callback URL_, where you must insert your local Codacy deployment URL.

The URL should contain the endpoint/IP, the protocol (HTTP or HTTPS) and, if applicable, the port where it is running.

Correct:

-   [http://your.codacy.url.com](http://your.codacy.url.com/)
-   [http://your.codacy.url.com:9000](http://your.codacy.url.com:9000/)
-   [http://53.43.42.12](http://53.43.42.12/)
-   [http://53.43.42.12:9000](http://53.43.42.12:9000/)

Incorrect:

-   your.codacy.url.com
-   your.codacy.url.com:9000
-   53.43.42.12
-   53.43.42.12:9000

![Screen_Shot_2018-07-08_at_16.45.35.png](/images/Screen_Shot_2018-07-08_at_16.45.35.png)

After the application is created you should copy both the _Client ID_ and the _Client Secret_, paste them in the setup page of your Codacy Self-hosted, and click Test and Save.

## Login to Codacy

If you only have the GitHub cloud integration enabled the only way you will have to login in Codacy is through Username + Password.

<img src="/images/Screen_Shot_2019-08-08_at_15.36.56.png" width="479" height="231" alt="Screen_Shot_2019-08-08_at_15.36.56.png" /> 
