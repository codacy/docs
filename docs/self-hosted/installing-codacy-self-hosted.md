# Installing Codacy Self-hosted

## 1 - Prerequisites

Codacy works by using Docker in a containerized environment. Setup should take around 20 minutes to complete.

To have your setup fully functional, Codacy will need to download its plugins (e.g., its code analyzers) after running for the first time. This process can take up to an extra hour, depending on network speed.

## 1.1 - Hardware

**Recommended specifications**:

-   16 core CPU
-   32GB RAM
-   1TB+ Hard Drive

**Disk space use:**

if your boot disk has very low capacity (something we often see on customers using sophisticated volume management):

-   please mount /var/lib/docker on a volume with at least 100GB free capacity for Docker images;
-   please mount the configured Codacy "Temporary folder" directory (which defaults to "/tmp") on your larger volume. This directory actually stores application data.
    -   Do not mount directories under "/root", as Codacy will not be able to chown them to the appropriate user

Codacy's basic Docker images take around 15GB. However, with analysers, you may have over 20 GB of Docker images. We recommend larger disk capacity to accommodate upgrades with less frequent maintenance.

**Extra considerations for CPU and RAM:**

The default configuration is to run a maximum of 2 analyses in parallel.
Our general advice is to have an extra 2 CPUs and 4GB RAM per additional running analysis.

## 1.2 - Database

**Required database:**

-   PostgreSQL 9.6.x

Codacy requires a pre-installed PostgreSQL 9.6.x database, using a UTF-8 character set.

We recommend installing this database on a separate machine.

You can find setup instructions for this database [here](/hc/en-us/articles/360002902573).

It is also possible to set up a local PostgreSQL 9.6.x database, but please **note that a local database is recommended for testing purposes only**. If you would like to use a Docker-based database instance for this purpose (without data persistence between reboots), you can find
setup instructions [here](/hc/en-us/articles/207994955-Installing-postgres-for-Codacy-Enterprise-Using-a-Docker-container).

You can test the connection from the Codacy server to your database later on the setup process, just after you run the setup script the first time (which installs Docker) and before the second time (which installs the Codacy services), through PSQL running from a Docker
container:

[shell](https://docs.codacy.com/docs/codacy-installation)

```sh
docker run -it --rm postgres:9.4.5 sh -c 'exec psql -h "<POSTGRESQL-HOST>" -p "<POSTGRESQL-PORT>" -U <POSTGRESQL-USER>'
```

## 1.3 - Software

We recommend installing Codacy on **Ubuntu 16.04**.

If you need to install Codacy on a different operating system, please [contact us first](/hc/en-us/requests/new). Although Docker aims at being environment-independent, not all Linux distributions fully support the Docker features that Codacy relies on to run. Installing Codacy on a different OS may yield unpredictable results, or it may not run at all.

## 1.4 - Other target machine prerequisites

**Before installing Codacy:**

-   There should be no pre-installed Docker;
-   There should be no user with id 2004;
-   There should be no user group with id 2004.

User id 2004 and user group id 2004 are reserved for disk access privilege management, a limitation of running everything, including code analyzers included from Docker containers.

## 1.5 - Networking

### 1.5.1 - IP addresses and DNS

To simplify maintenance, you should have a fixed IP address and/or DNS names for the Codacy server and the services it integrates with before installation.

If you only have dynamic IP addresses for the above servers, integrations will break every time the IP addresses change.

If you change the Codacy server DNS configuration, you will have to reboot it (or, at least, reboot Docker). This is caused by a limitation of the Docker service which currently only picks up DNS configurations upon start.

To check the DNS servers configured on your target machine:

`cat /etc/resolv.conf`

In order to add a new DNS server to this configuration, use the _nameserver_ command:

`nameserver <some-ip-address>`

### 1.5.2 - Ports to open for the Codacy server

For the target machine, make sure you have these ports open for **inbound** network traffic **before **setting up Codacy:

-   **80** \[TCP] - Application HTTP
-   **443** \[TCP] - Application HTTPS
-   **9000** \[TCP] - Control Panel HTTP
-   **9443** \[TCP] - Control Panel HTTPS
-   **16005** \[TCP] - Monitoring (average analysis times, analysis queues, ...)
-   **16006** \[TCP] - Application API (coverage, ...)

On the **outbound** traffic side, ensure that you can access the Internet from the Codacy server, including:

-   getenterprise.codacy.com on ports 80 and 443 \[TCP] (download application setup and update packages)
-   index.docker.io on port 443 \[TCP] (download application docker images)

### 1.5.3 - Database setup

Please make sure:

-   You can access the PostgreSQL server you installed on its configured \[TCP] port, which 5432 by default.
-   PostgreSQL is configured to accept connections from the Codacy server, as documented [here](/hc/en-us/articles/360002902573).

### 1.5.4 - Access to servers you want to integrate with

Ensure that:

-   The Codacy server can access any services you want to integrate with (e.g, Gitlab, email servers) on their respective API / service ports;
-   The services you want to integrate with can access the Codacy server. (The ports that must be open on the Codacy server are already enumerated above.)

For a source code provider such as Gitlab, Github, or Bitbucket, you must open whatever ports are used on the source code hosting for http, https, git and ssh protocols. Example:

-   For GitHub, you are required to allow TCP ports 22, 80, 443, and 9418 for applications to function, as documented [here](https://help.github.com/articles/about-github-s-ip-addresses/).

## 2 - Installation

The installation is made with a one line shell script:

```sh
bash -c "$(curl -fsSL https://get.codacy.com/)"
```

This script will update the kernel and install the required Docker version to run Codacy. If you have previously installed Docker, please [check the documentation](https://docs.docker.com/engine/installation/) on how to uninstall it before running this script.

The script will need to restart the server to apply the changes. After the server restarts, run the same bash command as before:

```sh
bash -c "$(curl -fsSL https://get.codacy.com/)"
```

The script will detect that Docker is installed (it was installed with this script so you can ignore the warning) then ask for proxy configurations and whether a database should be installed. It will then proceed to install the Codacy Control Panel.

### Database Included

Using the provided Postgres database will allow you to evaluate Codacy without having to properly install a Postgres database, but, as stated in the
[Postgres installation guide](/hc/en-us/articles/207994955-Postgres), this database is not supported for production environments.

After this, you will be ready to start the configuration process in step 3.

## 3 - Configuration

The configuration interface is web-based and can be accessed via **port 9000 over HTTP** (e.g., [http://192.168.0.1:9000](http://192.168.0.1:9000/)) of the server you have Codacy installed on (make sure that the port 9000 is accessible from your local computer).

## 3.1 - Server license

The first screen will ask you for a license to be installed to access the application web UI. This will be a file with the extension _.dlk_. This will provide you with access to download a custom-built virtual infrastructure of Codacy that run in your own infrastructure.

<img src="/images/Screen_Shot_2016-10-31_at_16.59.32.png" width="592" height="220" />

The license should be provided by a Codacy representative.

## 3.2 - Control panel

After validating the license, you will be presented with the Codacy Control Panel, used to configure and update the application.

<img src="/images/Screen_Shot_2016-10-31_at_17.01.07.png" width="722" height="220" />
Codacy Control Panel

This console provides access to configuration keys and allows Codacy to be updated. We strongly advise that this console is secured against unwanted access.

## 3.4 Application updates

For your initial application installation or future Codacy updates, click the button **Check for Updates** in the top right corner. If a new update is available, a new option will appear:

 <img src="/images/Screen_Shot_2016-10-31_at_17.07.38.png" width="655" height="234" />
New version available

Before any new version is ready to start running, a manual check of configurations is required. To configure the new version, click on the **Configure** link in the upper right hand corner. This will open a new screen with every configuration key required to run Codacy.

 <img src="/images/Screen_Shot_2016-10-31_at_17.11.35.png" width="460" height="496" />
Application configuration

Codacy will run with the default settings, so if you are just evaluating the product with the default database there is no need to change anything.

If you would like to configure an external database, change the following settings:

<img src="/images/Screen_Shot_2016-10-31_at_17.13.10.png" width="406" height="325" />
Mandatory settings to be reviewed

_Host IP_ and _Host Docker IP_ are automatically evaluated, and secret keys to cipher database contents are created randomly per installation so no change is required.

After configuring the application, hitting save will return you to the update screen. A new option to pull the version will be presented in the upper left corner:

<img src="/images/Screen_Shot_2016-10-31_at_17.07.38.png" width="669" height="239" />
PULL option available

Pressing **Pull** will start an async method that can take up to 30 minutes, depending on your internet connection. This will pull Codacy images from dockerhub, making them available in the local registry for application execution.

![Pulling dockers](/images/Screen_Shot_2015-10-29_at_16.04.41.png)

When done, a success message will show in the logs, and refreshing the page will show a new option **Run** in the toolbar:

<img src="/images/Screen_Shot_2016-10-31_at_17.15.06.png" width="584" height="297" />
Docker pulled and new RUN option

Pressing **RUN** will start the application. At any time, you can check the status of Codacy by navigating to Support:

![](/images/Screen_Shot_2017-02-22_at_16.28.13.png)
Support screen

There, all dockers will show their status. The **download logs** link will create a zip file with all container logs that can be used to debug your installation at any time.

## 3.4.1 - Updating the Control Panel

### Deprecated step

Since Control Panel version 1.0.60 (released July 2016) the client is now able to update itself.

Some updates might require the latest version of the control panel. To download the latest version, log in to the machine via SSH and execute:

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update
```

After the installation is completed, you'll be able to access your server via HTTP on port 9000. There should be a new version running.

## 3.5 Running Codacy

### Database IP

If the database IP is incorrectly configured, Codacy will try to do an initial connection and wait on this before enabling the HTTP server. If the server is inaccessible, this will render Codacy unavailable.

You can navigate to port 80 (http) or port 443 (https) of your server in order to test your installation of Codacy. Codacy will provide you with a checkup page that will scan for any missed configuration setting.

![Failed settings screen](/images/Screen_Shot_2015-07-28_at_13.02.09.png)

## 3.6 Registration

When all settings are correct, Codacy will ask you to accept the License Agreement.

![](/images/Screen_Shot_2015-07-29_at_13.23.34.png)

After accepting it, you will be redirected to the initial registration screen.

![Registration panel](/images/Screen_Shot_2015-07-29_at_13.26.11-1.png)

The first user to register will automatically be an admin and will be able to administer the platform and create additional users.

## 3.7 Initial configuration

### Internet access

At this point as the application has finished downloading all components, internet access can be removed from the machine if desired.

### Default patterns

We highly suggest you now go to 'Admin > Patterns' to select the default patterns. These defaults will be applied to new repositories.

![Code patterns](/images/Screenshot_2019-05-20_at_11.44.45.png)

Codacy is now ready to be used.

## 4.0 Additional configurations

### HTTP - Custom Port

To change the default control panel port (9000), export the environment variable "DOPLICATED_CLIENT_PORT" before invoking the control panel update command.

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update
```

### HTTPS - Control Panel

To access the control panel with HTTPS, upload your CSR file (without password) and the certificate key to the CSR file in the settings panel.
By enabling the HTTPS settings, the control panel will be accessible through HTTPS and will use the configured port (9443 by default).  

![Screen_Shot_2018-01-25_at_10.43.15.png](/images/Screen_Shot_2018-01-25_at_10.43.15.png)

### HTTPS - Codacy

To access Codacy with HTTPS, upload your CSR file (without password) and the certificate key to the CSR file in the settings panel. By enabling the HTTPS settings, the control panel will be accessible through HTTPS and will use the configured port (9443 by default).

![](/images/pasted_image_at_2017_02_22_04_16_pm_480.png)

After this is complete, make sure you "Save" and click "Reload".

### HTTPS - Using HTTPS with an external load balancer

If you would prefer to set up HTTPS via an external load balancer (for example: AWS Load balancers), there are
additional steps for setup:

-   Make sure the HTTP option is disabled in Codacy's Control Panel
-   Ensure you have a redirect from HTTP to HTTPS
-   Configure your git provider OAuth callback URL to use HTTP
