# Configuring GitHub Enterprise with Codacy Self-hosted

![](/images/pasted_image_at_2016_10_24_17_27_720.png)


## Location

### Endpoint/Hostname ***\[required\]***

The endpoint or hostname where the GitHub Enterprise is deployed.

Should NOT contain:

- Port (ex: 9000)

##### Correct:

- `https://my.github.enterprise.example.com`

##### Incorrect:

- `my.github.enterprise.example.com`
- `https://my.github.enterprise.example.com/`
- `https://my.github.enterprise.example.com:9000`
- `https://user@pass:my.github.enterprise.example.com`
- `my.github.enterprise.example.com:9000`
- `my.github.enterprise.example.com:9000`

### Port

The port where the application is running.

This is not required.

The default port will be used if left empty.

## Configuration

### Protocol

Choose between HTTP and HTTPS protocol for communicating with your GitHub Enterprise installation. If you have problems connecting with the instance, this may be the cause.

### Private Mode

Whether your GitHub Enterprise is configured to use private mode or not.

## GitHub Application

### Application Creation ***\[required\]***

To integrate with GitHub we use a GitHub Application.

To create the application in your GitHub Enterprise, visit `settings/applications/new` and create an application pointing to your local Codacy deployment URL.

![](/images/Screenshot_2015-04-16_13.55.59.png)


You can fill all the fields with the suggested text above or use your own text except for the field `Authorization callback URL` where you must insert your local Codacy deployment url.

The URL should contain the endpoint/ip, the protocol (HTTP or HTTPS), and, if applicable, the port where it is running.

##### Correct:

- `http://your.codacy.url.com`
- `http://your.codacy.url.com:9000`
- `http://53.43.42.12`
- `http://53.43.42.12:9000`

##### Incorrect:

- `your.codacy.url.com`
- `your.codacy.url.com:9000`
- `53.43.42.12`
- `53.43.42.12:9000`

### Token retrieval ***\[required\]***

After the application is created, you should copy both the `Client ID` and the `Client Secret` and paste them in the setup page on your Codacy Self-hosted.

![](/images/Screenshot_2015-04-16_14.02.55.png)

After this is done you will be able to use GitHub Enterprise as an authentication method to add repositories and as an integration in the repository settings.
