# Installing postgres for Codacy Self-hosted

## Postgres Installation Guide

Codacy requires a working installation of Postgres to work. Depending on the number of repositories you are running you might need different requirements.

**Recommended specs**:
4 cores CPU
8 GB RAM
Minimum 500 GB+ Hard Drive - this will depend on the number of repositories you have. For a custom recommendation, please contact us.

If you already have a Postgres installation, jump directly to step 1.3.

### Postgres Version

Codacy officially supports Postgres version 9.4. Codacy requires 'UTF-8' encoding. Make sure that your database character set is correctly configured. For more information see
<https://www.postgresql.org/docs/9.4/static/multibyte.html>

## 1 - Postgres

Here are some quick steps to have a running Postgres installation on Ubuntu 16.04.

## 1.1 - Configure system locale to support UTF-8

Before installing postgres, you'll need to make sure your system locale is configured to use UTF-8. You can check your current locale by running:

`locale`

You can change your locale to a UTF-8 variant by running:

`update-locale LANG=en_US.UTF-8`

## 1.2 - Install postgres

First, ensure that you install **postgres 9.4** following the instructions described [here](https://www.postgresql.org/download/linux/ubuntu/).

## 1.3 - Run postgres

Installing PostgreSQL on Ubuntu should start the service by default. However, check that it's running with:

`sudo systemctl status postgresql`

If PostgreSQL is running, you'll see output that includes the text `Active: active (exited)`.

If you see `Active: inactive (dead)`, start the PostgreSQL service using the following command:

`sudo systemctl start postgresql`

PostgreSQL also needs to be enabled to start on reboot. Do that with this command:

`sudo systemctl enable postgresql`

## 1.4 - Allow external connections

In order to access PostgreSQL from a different machine, you'll need to do additional configuration to allow external connections. 

Using Nano (or vim/emacs/other), edit your `postgresql.conf` file. We're specifically looking for a line that says `listen_addresses`. We're going to modify where PostgreSQL is listening.

```conf
# /etc/postgresql/9.4/main/postgresql.conf

#---------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#---------------------------------------------------------

# - Connection Settings -

listen_addresses = '*'
max_connections = 300
```

Next we're going to edit our `pg_hba.conf` file and configure it to allow remote connections. At the very end of the file, add the following line:

```conf
# /etc/postgresql/9.4/main/pg_hba.conf

host all all  0.0.0.0/0 md5
```

This is a rule that basically tells PostgreSQL to allow anyone to access the instance as long as they have proper credentials.

If you want to whitelist your IP **only,** you can use your network/mask instead of `0.0.0.0/0` (for example: 34.240.13.75/32).

!!! note
    This is not recommended, but if you are running postgres on the same machine where Codacy is and want to whitelist just Codacy's IP address, you will have to whitelist a range of IP addresses. This is because Codacy runs inside Docker and won't have always the same IP address inside the Docker network. To do this, you should first obtain the address of the Docker network interface with an `ifconfig` and then whitelist the range ip addresses according to it (for example, `172.17.0.0/16)`.

![Screen_Shot_2018-04-24_at_15.55.58.png](/images/Screen_Shot_2018-04-24_at_15.55.58.png) 

Finally, restart postgres:

`sudo service postgresql restart`

!!! note
    Actual file locations may differ depending on what package and operating system you use. You can usually find your postgres conf file location by searching on Google.

## 1.5 - Creating a user

It is advised that you create a unique user that will only be able to access Codacy-specific databases. To do so, using the `psql` shell, create a user:

`sudo -u postgres psql`

```sql
CREATE USER codacy WITH PASSWORD 'codacy';
ALTER ROLE codacy WITH CREATEDB;
```

You can change the username/password to suit your security needs.

Make sure that you can connect to the Postgres database using the newly created user. For additional settings, follow the steps in the Postgres documentation.

## Additional topics

### Connecting psql Client Using the Google Cloud SQL Proxy Docker Image

If you are connecting to your postgres instance through a [docker container proxy](https://cloud.google.com/sql/docs/postgres/connect-docker), we recommend that you configure the following:

-   Make sure your postgres docker container is configured with --restart always
-   In the Codacy control panel, the "Database hostname" option should be set with the IP address or DNS of the Codacy instance itself.
