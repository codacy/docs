---
description: Install and configure Codacy Self-hosted on Kubernetes or MicroK8s.
---

# Installing Codacy Self-hosted

This documentation guides you on how to install Codacy Self-hosted on Kubernetes or MicroK8s.

!!! important
    **If you're running the legacy Codacy Self-hosted solution running on Docker** please contact <mailto:support@codacy.com> so that we can assist you with the migration to Codacy Self-hosted running on Kubernetes or MicroK8s.

To install Codacy you must complete these main steps:

1.  **Setting up the system requirements**

    Ensure that your infrastructure meets the hardware and system requirements to run Codacy.

2.  **Installing Codacy**

    Install Codacy on the cluster using our [Helm chart](https://github.com/codacy/chart/) that includes all the necessary components and dependencies.

3.  **Configuring Codacy**

    Configure integrations with Git providers and set up monitoring.

The next sections include detailed instructions on how to complete each step of the installation process. Make sure that you complete each step before advancing to the next one.

## 1. Setting up the system requirements

Before you start, you must prepare and provision the database server and Kubernetes or MicroK8s cluster that will host Codacy.

Carefully review and set up the system requirements to run Codacy by following the instructions on the page below:

-   [System requirements](requirements.md)

Optionally, you can follow one of the guides below to quickly create a new Kubernetes or MicroK8s cluster that satisfies the characteristics described in the system requirements:

-   [Creating an Amazon EKS cluster](infrastructure/eks-quickstart.md)
-   [Creating a MicroK8s cluster](infrastructure/microk8s-quickstart.md)

## 2. Installing Codacy

Install Codacy on an existing cluster using our Helm chart:

1.  Make sure that you have the following tools installed on your machine:

    -   [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) within one minor version difference of your cluster

        !!! important
            **If you're using MicroK8s** you don't need to install kubectl because you will execute all `kubectl` commands as `microk8s.kubectl` commands instead. To simplify this, [check how to create an alias](infrastructure/microk8s-quickstart.md#notes-on-installing-codacy) for `kubectl`.

    -   [Helm](https://helm.sh/docs/intro/install/) version >= 3.9

2.  Create a cluster namespace called `codacy` that will group all resources related to Codacy.

    ```bash
    kubectl create namespace codacy
    ```

3.  Add the Docker registry credentials provided by Codacy together with your license to a cluster Secret. This is necessary because some Codacy Docker images are currently private.

    Substitute `<docker_username>` and `<docker_password>` with the Docker registry username and password and run the following command:

    ```bash
    kubectl create secret docker-registry docker-credentials \
        --docker-username=<docker_username> \
        --docker-password=<docker_password> \
        --namespace codacy
    ```

4.  Download the template file [`values-production.yaml`](./values-files/values-production.yaml) and use a text editor of your choice to edit the value placeholders as described in the comments.

5.  Create an address record on your DNS provider mapping the hostname you used in the previous step to the IP address of your Ingress controller.

    !!! important
        **If you're using MicroK8s** you must map the hostname to the public IP address of the machine running MicroK8s.

6.  <span id="helm-upgrade">Add Codacy's chart repository to your Helm client and install the Codacy chart using the file `values-production.yaml` created previously.</span>

    !!! important
        **If you're using MicroK8s** you must download and use the file [`values-microk8s.yaml`](./values-files/values-microk8s.yaml) together with the file `values-production.yaml` by uncommenting the last line in the `helm upgrade` command below.

    ```bash
    helm repo add codacy-stable https://charts.codacy.com/stable/
    helm repo update
    helm upgrade --install codacy codacy-stable/codacy \
                 --namespace codacy \
                 --version {{ extra.codacy_self_hosted_version }} \
                 --values values-production.yaml
                 # --values values-microk8s.yaml
    ```

7.  By now all the Codacy pods should be starting in the cluster. Run the following command **and wait for all the pods to have the status Running**, which can take several minutes:

    ```bash
    $ kubectl get pods -n codacy
    NAME                                            READY   STATUS    RESTARTS   AGE
    codacy-api-f7897b965-fgn67                      1/1     Running   0          8m57s
    codacy-api-f7897b965-kkqsx                      1/1     Running   0          8m57s
    codacy-crow-7c957d45f6-b8zp2                    1/1     Running   2          8m57s
    codacy-crowdb-0                                 1/1     Running   0          8m57s
    codacy-engine-549bcb69d9-cgrqf                  1/1     Running   1          8m57s
    codacy-engine-549bcb69d9-sh5f4                  1/1     Running   1          8m57s
    codacy-fluentdoperator-x5vr2                    2/2     Running   0          8m57s
    codacy-listener-868b784dcf-npdfh                1/1     Running   0          8m57s
    codacy-listenerdb-0                             1/1     Running   0          8m57s
    codacy-minio-7cfdc7b4f4-254gz                   1/1     Running   0          8m57s
    codacy-nfsserverprovisioner-0                   1/1     Running   0          8m57s
    codacy-portal-774d9fc596-rwqj5                  1/1     Running   2          8m56s
    codacy-rabbitmq-ha-0                            1/1     Running   0          8m57s
    codacy-ragnaros-69459775b5-hmj4d                1/1     Running   3          8m57s
    codacy-remote-provider-service-8fb8556b-rr4ws   1/1     Running   0          8m56s
    codacy-worker-manager-656dbf8d6d-n4j7c          1/1     Running   0          8m57s
    ```

## 3. Configuring Codacy

After successfully installing Codacy on your cluster, you're now ready to perform the post-install configuration steps:

1.  Use a browser to navigate to the Codacy hostname previously configured on the file `values-production.yaml`.

2.  Log in using your Git provider account. This automatically creates a Codacy administrator account with your credentials.

3.  Follow Codacy's onboarding process, which will guide you through the following steps:

    -   Configuring one or more of the following supported integrations:
        -   [GitHub Cloud](configuration/integrations/github-cloud.md)
        -   [GitHub Enterprise](configuration/integrations/github-enterprise.md)
        -   [GitLab Cloud](configuration/integrations/gitlab-cloud.md)
        -   [GitLab Enterprise](configuration/integrations/gitlab-enterprise.md)
        -   [Bitbucket Cloud](configuration/integrations/bitbucket-cloud.md)
        -   [Bitbucket Server](configuration/integrations/bitbucket-server.md)
        -   [Email](configuration/integrations/email.md)
    -   Creating an initial organization
    -   Inviting users to Codacy

4.  As a last step we recommend that you [set up monitoring](configuration/monitoring.md) on your Codacy instance.

If you run into any issues while configuring Codacy, be sure to [check our troubleshooting guide](troubleshoot/troubleshoot.md) for more help.
