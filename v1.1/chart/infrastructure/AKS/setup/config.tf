# config.tf - terraform and providers configuration

terraform {
  required_version = "~> 0.12"
  # Using a backend is recommended. See https://www.terraform.io/docs/backends/index.html
  # You may used the provided Azure Blob Storage backend configuration by
  #   1. first running `terraform apply` on the `backend/` directory,
  #   2. getting the state storage account name with `terraform output storage_account` and filling it below
  #   3. uncommenting the following lines, and (re)initializing terraform
  #      with `terraform init -reconfigure -backend=true`

  #backend "azurerm" {
  #  resource_group_name  = "codacy-tfstate"
  #  storage_account_name = "YOUR_STORAGE_ACCOUNT_NAME_HERE"
  #  container_name       = "tfstate"
  #  key = "setup.tfstate"
  #}
}

provider "azurerm" {
  version = "~> 1.37"
}


provider "helm" {
  version = "~> 0.10"

  install_tiller  = "true"
  service_account = kubernetes_service_account.tiller.metadata.0.name

  kubernetes {
    host = data.azurerm_kubernetes_cluster.main.kube_config.0.host
    username = data.azurerm_kubernetes_cluster.main.kube_config.0.username
    password = data.azurerm_kubernetes_cluster.main.kube_config.0.password
    client_certificate = base64decode(data.azurerm_kubernetes_cluster.main.kube_config.0.client_certificate)
    client_key = base64decode(data.azurerm_kubernetes_cluster.main.kube_config.0.client_key)
    cluster_ca_certificate = base64decode(data.azurerm_kubernetes_cluster.main.kube_config.0.cluster_ca_certificate)
    load_config_file = false
  }
}

provider "kubernetes" {
  version = "~> 1.9"
  host = data.azurerm_kubernetes_cluster.main.kube_config.0.host
  username = data.azurerm_kubernetes_cluster.main.kube_config.0.username
  password = data.azurerm_kubernetes_cluster.main.kube_config.0.password
  client_certificate = base64decode(data.azurerm_kubernetes_cluster.main.kube_config.0.client_certificate)
  client_key = base64decode(data.azurerm_kubernetes_cluster.main.kube_config.0.client_key)
  cluster_ca_certificate = base64decode(data.azurerm_kubernetes_cluster.main.kube_config.0.cluster_ca_certificate)
  load_config_file = false
}


provider "null" {
  version = "~> 2.1"
}

provider "template" {
  version = "~> 2.1"
}

