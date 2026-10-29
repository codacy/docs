---
description: Instructions on how to migrate your Codacy Self-hosted database.
---

# Database migration guide

Migrating databases between pods is a straightforward process with 3 steps:

1.  Dump the databases to a dump file.
2.  Apply the dump file.
3.  Delete the dump file.

You will have to dump all the following databases:

1.  accounts
2.  analysis
3.  filestore
4.  jobs
5.  metrics
6.  results

## Requirements

The following operations must be executed by a user which has elevated access (`SUPERUSER`) in the Postgres databases.

## Dumping your current data out of a running Postgres

You will need to know the following:

-   `$HOSTNAME` - the hostname where the database is located.
-   `$DB_USER` - the username with privileged access to the database that will perform the dump.
-   `$DB` - the database that you would like to export.
-   `$DB_PASSWORD` - the database password.

### pg_dump

The following command lets you extract a given database into a dump file:

```bash
PGPASSWORD=$DB_PASSWORD pg_dump -h $SRC_HOSTNAME -p $SRC_HOSTPORT -U $DB_USER --clean -Fc $db > /tmp/$db.dump
```

This will dump the file with the `.dump` extension into the `/tmp` folder.

[For more information and additional options, please check the official documentation.](https://www.postgresql.org/docs/12/app-pgdump.html)

### pg_restore

To restore a database, you can run a `pg_restore` command to consume the dump file and replicate the data onto Postgres:

```bash
PGPASSWORD=$DB_PASSWORD pg_restore -h $DEST_HOSTNAME -p $DEST_HOSTPORT -U $DB_USER -j 8 -d $db -n public --clean $db.dump
```

With the custom format from `pg_dump` (by using `-Fc`) we can now invoke `pg_restore` with multiple parallel jobs. This should make the restoration of the databases quicker, depending on which value you provide for the number of parallel jobs to execute. We provide a value of 8 parallel jobs in the example above (`-j 8`).

!!! note
    If you run into any problems while restoring, make sure that you have the database created in that Postgres instance (e.g. before restoring the jobs database the Postgres instance should have an empty database called `jobs` created there).

For more information and additional options, please check the [official documentation](https://www.postgresql.org/docs/12/app-pgrestore.html).

## Sample script

Assuming you have the same `$DB_USER` and `$DB_PASSWORD`, and that you want to migrate all the databases from the same hostname to the same destination hostname, you could migrate your databases with the following sample script:

```bash
SRC_HOSTNAME=$1
SRC_HOSTPORT=$2
DEST_HOSTNAME=$3
DEST_HOSTPORT=$4
DB_USER=$5
DB_PASSWORD=$6

declare -a dbs=(accounts analysis filestore jobs metrics results)
for db in ${dbs[@]}
do
  PGPASSWORD=$DB_PASSWORD pg_dump -h $SRC_HOSTNAME -p $SRC_HOSTPORT -U $DB_USER --clean -Fc $db > /tmp/$db.dump
  PGPASSWORD=$DB_PASSWORD pg_restore -h $DEST_HOSTNAME -p $DEST_HOSTPORT -U $DB_USER -d $db -n public --clean $db.dump
done
```

As an example, you could run the script as follows:

```bash
migrateDBs.sh postgres–instance1.us-east-1.rds.amazonaws.com 25060 postgres–instance1.eu-west-1.rds.amazonaws.com 25060 super_user secret_password
```
