# Installing postgres for Codacy Self-hosted - Using a Docker container

<table>
  <tbody>
    <tr>
      <td style="background-color: #ffc4ad;">
        <p>
          Codacy Self-hosted running on Docker is <strong>deprecated since April 2020</strong>. Codacy provides critical bug fixes and tool updates but no more feature enhancements for this version.
        </p>
        <p>
          <a href="/Chart/" target="_self">Click here for updated documentation on how to install and configure Codacy Self-hosted on Kubernetes.</a>
        </p>
        <p>
          If you are a current customer and have any questions regarding the migration process, please reach out to your CSM or <a href="mailto:success@codacy.com" target="_blank">success@codacy.com</a> for more information.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Postgres Docker Installation Guide

Codacy requires a working installation of Postgres to work. Depending on the number of repositories you are running you might need different requirements.

**Recommended specs**:
4 cores CPU
8 GB RAM
Minimum 100 GB+ Hard Drive - this will depend on the number of repositories you have. For a custom recommendation, please contact us.

If you already have a Postgres installation, jump directly to step 1.3.

### Postgres Version

Codacy officially supports Postgres versions 9.6. Codacy requires 'UTF-8' encoding. Make sure that your database character set is correctly configured. For more information see <https://www.postgresql.org/docs/9.4/static/multibyte.html>

## 1 - Postgres

Although the Postgres installation is outside the scope of this document, here are some quick steps to have a running Postgres installation using Docker. 

## 1.1 - Retrieve Postgres 9.4 image

`docker pull postgres:9.4.5`

## 1.2 - Run postgres

```sh
docker run --name application_db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres:9.4.5
```

This will run Postgres in a new docker, naming the container 'application_db'. Also, the user 'postgres' will have its password changed to 'mysecretpassword'. Feel free to change this to whatever you want.

To test the new DB, you can try to `*psql*` to it:

```sh
docker run -it --link application_db:postgres --rm postgres:9.4.5 sh -c 'exec psql -h "$POSTGRES_PORT_5432_TCP_ADDR" -p "$POSTGRES_PORT_5432_TCP_PORT" -U postgres'
```

To check for local IP and port, just run:

```sh
docker run -it --link application_db:postgres --rm postgres:9.4.5 sh -c 'echo $POSTGRES_PORT_5432_TCP_ADDR;echo "$POSTGRES_PORT_5432_TCP_PORT"'
```

This will be important to properly configure Codacy to access your local Postgres docker.

## 1.3 - Creating user

It is advised that you create a particular user that will only be able to access Codacy specific databases. To do so, using the `psql` shell, create a user:

```sql
CREATE USER codacy WITH PASSWORD 'mypassword';
ALTER ROLE codacy WITH CREATEDB;
```

You can change the username/password to suit your security needs.

Make sure that you can connect to the Postgres database using the newly created user. For additional settings, follow the steps in the Postgres documentation.

## 1.4 - Additional information

For more information about the Postgres docker, check the source page <https://registry.hub.docker.com/_/postgres/>
