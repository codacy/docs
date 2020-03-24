# Configuring GitHub Cloud with Codacy Self-hosted

Configuring GitHub Cloud allows you to easily add GitHub repositories to
your Self-hosted installation.

To get started, navigate to the **Integrations** page in the
Administration view and select **GitHub Cloud**.

![Screen\_Shot\_2018-07-08\_at\_16.39.35.png](https://support.codacy.com/hc/article_attachments/360008534093/Screen_Shot_2018-07-08_at_16.39.35.png)

First, you'll have to create a GitHub OAuth application. [Create an
application here](https://github.com/settings/applications/new).

Fill all the fields with the text shown in the image below or use your
own text except for the field *Authorization callback URL,* where you
must insert your local Codacy deployment URL.

The URL should contain the endpoint/IP, the protocol (HTTP or HTTPS)
and, if applicable, the port where it is running.

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

![Screen\_Shot\_2018-07-08\_at\_16.45.35.png](https://support.codacy.com/hc/article_attachments/360008486054/Screen_Shot_2018-07-08_at_16.45.35.png)

After the application is created you should copy both the *Client ID*
and the *Client Secret*, paste them in the setup page of your Codacy
Self-hosted, and click Test and Save.

## Login to Codacy

If you only have the Github cloud integration enabled the only way you
will have to login in Codacy is through Username + Password

<img src="https://support.codacy.com/hc/article_attachments/360043284214/Screen_Shot_2019-08-08_at_15.36.56.png" width="479" height="231" alt="Screen_Shot_2019-08-08_at_15.36.56.png" /> 
