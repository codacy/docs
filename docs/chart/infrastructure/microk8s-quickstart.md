---
descriptions: Set up a MicroK8s instance to run Codacy Self-hosted, including all the necessary dependencies and configurations.
---

# Creating a MicroK8s cluster

Follow the instructions below to set up a MicroK8s instance from scratch, including all the necessary dependencies and configurations.

[MicroK8s](https://microk8s.io/) is a lightweight, fully conformant, single-package Kubernetes developed by Canonical. The project is [publicly available on GitHub](https://github.com/ubuntu/microk8s).

## 1. Prepare your environment

Prepare your environment to set up the MicroK8s instance.

-   You will need a machine running [Ubuntu Server 20.04 LTS](https://ubuntu.com/download/server) that:

    -   Is correctly provisioned with the resources described for MicroK8s in the [system requirements](../requirements.md#kubernetes-or-microk8s-cluster-setup)
    -   Is able to establish a connection to the PostgreSQL instance described in the [system requirements](../requirements.md#postgresql-server-setup)

-   Make sure that you have [Helm](https://helm.sh/docs/intro/install/) version 3.8.1 installed.

The next steps assume that you're starting from a clean install of Ubuntu Server and require that you run commands on a local or remote command line session on the machine.

## 2. Installing MicroK8s

Install MicroK8s on the machine:

1.  Make sure that the package `nfs-common` is installed:

    ```bash
    sudo apt update && sudo apt install nfs-common -y
    ```

2.  Install MicroK8s from the `1.19/stable` channel:

    ```bash
    sudo snap install microk8s --classic --channel=1.19/stable
    sudo usermod -a -G microk8s $USER
    sudo su - $USER
    ```

3.  Check that MicroK8s is running:

    ```bash
    microk8s.status --wait-ready
    ```

4.  If you're running MicroK8s using a single node, disable high-availability clustering for improved performance:

    ```bash
    microk8s.disable ha-cluster
    ```

## 3. Configuring MicroK8s

Now that MicroK8s is running on the machine we can proceed to enabling the necessary addons:

1.  Configure MicroK8s to allow privileged containers:

    ```bash
    sudo mkdir -p /var/snap/microk8s/current/args
    sudo echo "--allow-privileged=true" >> /var/snap/microk8s/current/args/kube-apiserver
    microk8s.status --wait-ready
    ```

2.  Enable the following MicroK8s addons:

    ```bash
    microk8s.enable dns
    microk8s.status --wait-ready
    microk8s.enable storage
    microk8s.status --wait-ready
    microk8s.enable ingress
    microk8s.status --wait-ready
    ```

    !!! important
        Check the output of the commands to make sure that all the addons are enabled correctly.

        If by chance any of the addons fails to be enabled, re-execute the `microk8s.enable` command for that addon.

3.  Restart MicroK8s and its services to make sure that all configurations are working:

    ```bash
    microk8s.stop
    microk8s.start
    microk8s.status --wait-ready
    ```

4.  Export your kubeconfig so that Helm knows on which cluster to install the charts:

    ```bash
    microk8s.config > ~/.kube/config
    ```

5.  The addons are now enabled and the MicroK8s instance bootstrapped. However, we must wait for some MicroK8s pods to be ready, as failing to do so can result in the pods entering a `CrashLoopBackoff` state:

    ```bash
    microk8s.kubectl wait -n kube-system --for=condition=Ready pod -l k8s-app=kube-dns
    microk8s.kubectl wait -n kube-system --for=condition=Ready pod -l k8s-app=hostpath-provisioner
    # If the following command fails, you probably installed the wrong MicroK8s version
    microk8s.kubectl wait --all-namespaces --for=condition=Ready pod -l name=nginx-ingress-microk8s
    ```

6.  Verify that the MicroK8s configuration was successful:

    ```bash
    microk8s.status --wait-ready
    ```

    The output of the command should be the following:

    ```text
    microk8s is running
    addons:
    knative: disabled
    jaeger: disabled
    fluentd: disabled
    gpu: disabled
    cilium: disabled
    storage: enabled
    registry: disabled
    rbac: disabled
    ingress: enabled
    dns: enabled
    metrics-server: disabled
    linkerd: disabled
    prometheus: disabled
    istio: disabled
    dashboard: disabled
    ```

After these steps you have ensured that DNS, HTTP, and NGINX Ingress are enabled and working properly inside the MicroK8s instance.

## Notes on installing Codacy

You can now follow the generic [Codacy installation instructions](../index.md#2-installing-codacy) but please note the following:

-   You must execute all `kubectl` commands as `microk8s.kubectl` commands instead.

    To simplify this, we suggest that you create an alias so that you can run the commands directly as provided on the instructions:

    ```bash
    alias kubectl=microk8s.kubectl
    ```

-   When running the `helm upgrade` command that installs the Codacy chart, you will be instructed to also use the file [`values-microk8s.yaml`](../values-files/values-microk8s.yaml) that downsizes some component limits, making it easier to fit Codacy in the lightweight MicroK8s solution.
