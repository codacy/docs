---
description: Configure Codacy Self-hosted to use an external NFS server to improve the performance of the cloned repository cache.
---

# Caching

Codacy Self-hosted includes a built-in NFS server provisioner that deploys a shared volume to cache the cloned repository files while they're being analyzed by each tool. However, if you're dealing with big repositories or a high volume of analysis, using an NFS server external to the cluster will improve the performance of the cache.

To use your own external NFS server:

1.  Edit the file `values-production.yaml` that you [used to install Codacy](../index.md#helm-upgrade).

1.  Set `listener.nfsserverprovisioner.enabled: "false"` and define the remaining `listener.cache.*` values as described below:

    ```yaml
    listener:
      nfsserverprovisioner:
        enabled: false
      cache:
        name: listener-cache
        path: /data
        nfs:
          server: <NFS_SERVER_IP> # IP address of the external NFS server
          path: /var/nfs/data/ # External NFS server directory or file system to be mounted
    ```

1.  Apply the new configuration by performing a Helm upgrade. To do so execute the command [used to install Codacy](../index.md#helm-upgrade):

    !!! important
        **If you're using MicroK8s** you must use the file `values-microk8s.yaml` together with the file `values-production.yaml`.
        
        To do this, uncomment the last line before running the `helm upgrade` command below.

    ```bash
    helm upgrade (...options used to install Codacy...) \
                 --version {{ extra.codacy_self_hosted_version }} \
                 --values values-production.yaml \
                 # --values values-microk8s.yaml
    ```

1.  Validate that the `repository-listener` pod  is now using the external NFS server:

    ```bash
    $ kubectl describe pod -n codacy codacy-listener-<...>

    [...]

    Volumes:
    listener-cache:
        Type:      NFS (an NFS mount that lasts the lifetime of a pod)
        Server:    <NFS_SERVER_IP>
        Path:      /var/nfs/data/
        ReadOnly:  false
    ```
