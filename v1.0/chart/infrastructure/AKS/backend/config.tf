# config.tf - terraform and providers configuration

terraform {
  required_version = "~> 0.12"
}

provider "azurerm" {
  version = "~> 1.37"
}

provider "random" {
  version = "~> 2.2"
}
