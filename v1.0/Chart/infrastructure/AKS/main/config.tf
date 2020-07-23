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
  #  key = "cluster.tfstate"
  #}
}

provider "azurerm" {
  version = "~> 1.37"
}

provider "azuread" {
  version = "~> 0.7"
}

provider "random" {
  version = "~> 2.2"
}

provider "tls" {
  version = "~> 2.1"
}
