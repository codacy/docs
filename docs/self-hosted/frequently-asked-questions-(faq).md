# Frequently Asked Questions (FAQ)

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

## How can I update the Codacy control panel?

To update the control panel, simply run on your server terminal:

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update
```

Note that for **legacy systems (Docker 1.9.1) ONLY**, you may need to remove and install the legacy control panel. To do this, stop Codacy, go to the server terminal and type:

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s install $HOME "legacy"
```

## How can I reinstall the Codacy Control Panel?

If you configured your proxy after the installation you will need to reinstall the control panel. To that run the below command on your server terminal:

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s rm

bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s install
```

## Can I run Codacy behind a proxy?

Yes, Codacy can run behind a proxy. The installer will configure the application to be able to run behind a proxy.  After installation and engine downloads, you will be able to remove internet access from the machine running Codacy, as all analysis will be performed offline. 

## What are the network requirements for Codacy for inbound and outbound traffic ports? 

-   You can find our network requirements [here](installing-codacy-self-hosted.md#152-ports-to-open-for-the-codacy-server)

## Logs show issues on DB connection: "Cannot connect to DB \[results]"

The most common cause for this is that the new DB is not created:

_Error in custom provider, Configuration error: Configuration error:
Cannot connect to database \[results]
while locating play.api.db.DBApiProvider
while locating play.api.db.DBApiWhile_

To fix this:
1 - Restart server
2 - Update the control panel:

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update
```

3 - Reload the application. It should show in the logs that it is running init scripts, and trying to create new DBs.

As a workaround, you can do the exact same thing the scripts are doing:

1 - Get a psql connection to the server:

```sh
docker run -it --rm postgres:9.4.5 sh -c 'exec psql -h "172.17.0.1" -p "5432" -U postgres'
```

2 - We should have several DBs created for Codacy:

![](https://www.filepicker.io/api/file/IGHS4kXQBOVIePJf5Cek)

In the PSQL shell, run:

```sql
    CREATE DATABASE codacy_results WITH OWNER=codacy;
```

## Our machine was restarted, and our DB IP changed. What now?

_Please be aware that a Postgres installation using Docker is not advised or supported. We strongly advise using a separate Postgres outside the Codacy machine in order to be able to upgrade/downgrade Docker and Codacy without losing data in the DB. The server should be considered stateless at all times._

If you are using Postgres on Docker, the DB IP may change upon server restart. Although running Postgres in Docker is not supported for a production environment, you can have the system find the new database IP automatically by updating the IP of the DB in the config by setting it to:

`{{ conf.doplicated.var.internalhostip }}`

![&lt;span class="wysiwyg-font-size-small">Configuration key&lt;/span>](/images/unnamed-1.png)

If you are not using DNS, you should set Host and Host Docker Ip to:

`{{ conf.doplicated.var.hostip }}`

`{{ conf.doplicated.var.internalhostip }}`

<img src="/images/Pasted_image_at_2016_05_19_11_21.png" width="822" height="181" />

The changes will be applied after you save and reload the application.

## Our machine was restarted, and now our configuration checks fail. 

Check the database IP settings and make sure they are all still valid.
If the database is running on a Docker, its IP may have changed.

If the problem is the "Application Secret" or "Cache Secret," the values presented on the "Configuration Check" page should be applied on the Control Panel configuration tab.

The changes will be applied after you save and reload the application.

## I get a "Page not found" error after uploading the application license. 

Currently, Codacy requires 2 different licenses: one is a .dlk file used in the installer, and another is .key file used in Codacy. If the dlk file is imported, it will fail to parse and throw an exception.

Please navigate to URL [http://YOUR_SERVER/license](http://your_server/license), where you should be able to introduce the correct file.

## My analyses are taking too long. Why?

### Docker version

Please make sure you are running a supported version of Docker. Codacy currently supports versions 1.7.0 to 1.9.1. Version 1.10 is currently not supported and thus will not perform any analysis.

Initial analysis on a repository may take a bit longer than usual. For a large repository, this may take up to 1 hour, depending on your server hardware. Even so, we find that over 90% of repositories are analysed in less than 5 minutes. If you find your repository taking longer than what would be expected for its size, there may be some issues with the Docker engine.

If you find your analyses taking longer than expected, please reach out to us with your logs at [support@codacy.com](mailto:support@codacy.com).

## Codacy doesn't seem to be analysing, and the container count is increasing.

Please check for any engine updates in the Codacy Control Panel. If a new release is available, update Codacy and restart your server.

## The Codacy configuration panel shows an error related to my application secret. 

When the installer first runs on a server, it generates a random key and uses it to cipher all data stored in the DB, making sure that if partial table contents are shared, all information will be rendered useless. If you install a new server, you will need to use the same key as before.
The configuration panel will then notify you of missed configurations and provide you with a usable key to be used in the configuration panel.

## Can we set up Codacy in a high availability or disaster recovery topology? 

For this, only the database needs to be high availability. The server has no state and can be replaced at any time. (If the machine dies, a new installation can be made and put up very quickly.)

If your requirement is to have the app machine in high availability, you can have two or more installations
hidden behind a load balancer.

## How do I update Codacy to the latest version? 

1.  In the Codacy Control panel, click the option to "update to the latest version"

![image003.png](/images/image003.png)

2.  Pull Dockers (do not leave this page until this task is completed)

3.  Run 

## How do I update my license?

**Please be aware that unless you are running the latest version of Codacy, you will not be able to update the license successfully.**
Please see the section above for how to update to the latest version.

1.  Go to control panel home -> Check for updates

![Screen_Shot_2018-07-13_at_15.27.23.png](/images/Screen_Shot_2018-07-13_at_15.27.23.png)

2.  Go to control panel home -> Configure -> click Save at the bottom of the page (no need to change any details)

3.  Go to control panel home -> Reload

## I updated my Docker version and Codacy stopped working. 

**Note: This does not apply for Swarms.**
We currently support Docker versions 1.7.0 to 1.9.1 To remove an unsupported version and install a supported version:

-   Stop the current Codacy application from the control panel

-   SSH to the instance where you have Codacy installed and do the following steps:

-   Remove previous docker installation

```sh
sudo apt-get remove docker docker-engine docker.io
```

-   Remove docker data folder

```sh
sudo mv /var/lib/docker/ /tmp
sudo rm -rf /tmp/docker/
```

-   Run the Codacy script to reinstall Docker and Codacy

```sh
bash -c "$(curl -fsSL https://get.codacy.com/)"
```

-   Go back to the control panel and hit "Configure." **Make sure that your configuration is correct** (you shouldn't have lost any configurations like DB host URL or https certificates), scroll to the bottom, and press "Save"

-   Hit Start to make Codacy run again

## My question still isn't answered. What do I do?

Please download your logs by navigating to Support on the Codacy Control Panel, and email us this file and a detailed explanation of what is currently happening at [support@codacy.com](mailto:support@codacy.com).
