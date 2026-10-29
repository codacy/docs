---
descriptions: Set up an Amazon EKS cluster to run Codacy Self-hosted, including the necessary underlying infrastructure, using Terraform.
---

# Creating an Amazon EKS cluster

Follow the instructions below to set up an Amazon EKS cluster from scratch, including the necessary underlying infrastructure, using Terraform.

The following diagram is a non-exhaustive overview of what you can expect to have deployed in your AWS account by using this quickstart guide.

![Codacy Amazon EKS quickstart](images/codacy-chart-eks-quickstart.jpg){: width="1024"}

## 1. Prepare your environment

Prepare your environment to set up the Amazon EKS cluster:

1.  Make sure that you have the following tools installed on your machine:

    -   [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) version >= 2.0.0
    -   [AWS CLI](https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-install.html) version 1
    -   [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli) version >= 0.12
    -   [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) version >= 1.14

2.  Set up the AWS CLI credentials for your AWS account using the [AWS CLI](https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html) and [Terraform](https://www.terraform.io/docs/providers/aws/index.html) documentation as reference.

    Note that, as stated on the [Terraform documentation](https://registry.terraform.io/providers/hashicorp/aws/2.70.1/docs#shared-credentials-file), if your `.aws/credentials` are more complex you might need to set `AWS_SDK_LOAD_CONFIG=1` for Terraform to work correctly:

    ```bash
    export AWS_SDK_LOAD_CONFIG=1
    ```

3.  Clone the Codacy chart repository and change to the directory that includes the provided Terraform configuration files:

    ```bash
    git clone https://github.com/codacy/chart.git
    cd chart/docs/infrastructure/EKS/
    ```

    This folder includes the following infrastructure stacks:

    -   **backend:** Optional S3 bucket for storing the Terraform state and a DynamoDB table for state locking
    -   **main:** Amazon EKS cluster, including the setup of all network and node infrastructure to go from zero to a fully functional cluster

    You must have administration privileges on AWS to deploy (and eventually destroy) this infrastructure. The policy file [aws-terraform-minimum-admin-policy.json](./EKS/aws-terraform-minimum-admin-policy.json) lists the minimum privileges that are required.

## 2. Set up the Terraform state storage backend

The [backend](https://www.terraform.io/docs/backends/index.html) stores the current and historical state of your infrastructure.

Although using the backend is optional, we recommend that you deploy it, particularly if you're planning to use these Terraform templates to make modifications to the cluster in the future:

1.  Initialize Terraform and deploy the infrastructure described in the `backend/` directory, then follow Terraform's instructions:

    ```bash
    cd backend/
    terraform init && terraform apply
    ```

    This creates an Amazon S3 bucket with a unique name to save the infrastructure state.

2.  Take note of the value of `state_bucket_name` in the output of the command.

3.  Edit the `main/config.tf` file and follow the instructions included in the comments to set the name of the Amazon S3 bucket created above and enable the use of the backend in those infrastructure stacks.

## 3. Create a vanilla Amazon EKS cluster

Create a cluster that includes all the required network and node setup:

1.  Initialize Terraform and deploy the infrastructure described in the `main/` directory, then follow Terraform's instructions:

    ```bash
    cd ../main/
    terraform init && terraform apply
    ```

    This process takes around 10 minutes.

2.  Consider if you want to tailor the cluster to your needs by customizing the cluster configuration.

    The cluster configuration (such as the type and number of nodes, network CIDRs, etc.) is exposed as variables in the `main/variables.tf` file.

    To customize the defaults of that file we recommend that you use a [variable definitions file](https://www.terraform.io/docs/configuration/variables.html#variable-definitions-tfvars-files) and set the variables in a file named `terraform.tfvars` in the directory `main/`. The following is an example `terraform.tfvars`:

    ```text
    some_key = "a_string_value"
    another_key = 3
    someting_else = true
    ```

    Subsequently running `terraform apply` loads the variables in the `terraform.tfvars` file by default:

    ```bash
    terraform apply
    ```

3.  Set up the kubeconfig file that stores the information needed by `kubectl` to connect to the new cluster by default:

    ```bash
    aws eks update-kubeconfig --name codacy-cluster --alias codacy-cluster
    ```

4.  Get information about the pods in the cluster to test that the cluster was created and that `kubectl` can successfully connect to the cluster:

    ```bash
    kubectl get pods -A
    ```

## 4. Prepare to set up the Ingress Controller

Prepare your infrastructure for the Ingress Controller setup, which is performed later during the installation process:

1.  Make sure that your network resources are correctly tagged, and create the following required tags if they are missing:

    | Resource Type    | Key = Value                                                                                   |
    | ---------------- | --------------------------------------------------------------------------------------------- |
    | VPC              | `kubernetes.io/cluster/codacy-cluster` = `shared`                                             |
    | Subnet (public)  | `kubernetes.io/cluster/codacy-cluster` = `shared`<br/>`kubernetes.io/role/elb` = `1`          |
    | Subnet (private) | `kubernetes.io/cluster/codacy-cluster` = `shared`<br/>`kubernetes.io/role/internal-elb` = `1` |

    For more information refer to the [AWS documentation](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html).

2.  Add the following chart repositories to Helm:

    ```bash
    helm repo add stable https://charts.helm.sh/stable
    helm repo update
    ```

## 5. Install the NGINX Ingress Controller

Install the NGINX Ingress Controller:

1.  Download the configuration file [`values-nginx.yaml`](../values-files/values-nginx.yaml) for the NGINX Ingress Controller.

    If you wish to use a private load balancer or restrict the IP range for the provisioned load balancer edit the file and enable the required annotation and/or the corresponding setting where indicated.

2.  Install the NGINX Ingress Controller.

    **If you're using Kubernetes version <=1.21**, run:

    ```bash
    kubectl create namespace codacy
    helm upgrade --install --namespace codacy --version 1.39.0 codacy-nginx-ingress stable/nginx-ingress -f values-nginx.yaml
    ```

    **If you're using Kubernetes version 1.22 or later**, run:

    ```
    kubectl create namespace codacy
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    helm upgrade --install --namespace codacy --version 4.8.3 nginx-ingress ingress-nginx/ingress-nginx -f values-nginx.yaml
    ```

## Uninstalling the Amazon EKS cluster

!!! warning
    If you proceed beyond this point you'll permanently delete and break things.

1.  Delete the Kubernetes cluster.

    Run the following command in the `main/` directory:

    ```bash
    terraform destroy
    ```

    This process takes around 10 minutes.

2.  Remove the Terraform backend.

    If you created the Terraform backend with the provided stack you can now safely delete it.

    The backend is purposely created with extra settings to prevent its accidental destruction. To destroy it cleanly you must first disable these settings by editing the file `backend/state_and_lock.tf` and following the instructions included in the comments.

    Afterwards, run the following command in the `backend/` directory:

    ```bash
    terraform apply && terraform destroy
    ```

    Note that you first have to run `terraform apply` to update the settings, and only
    then will `terraform destroy` be able to destroy the backend.
