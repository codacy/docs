# state_and_lock.tf - setup azure blob state storage. For more info see:
#                       https://www.terraform.io/docs/backends/types/azurerm.html
#                       https://docs.microsoft.com/en-us/azure/terraform/terraform-backend

resource "azurerm_resource_group" "tfstate" {
  name = "${var.project_tag}-tfstate"
  location = "North Europe"
}

resource "azurerm_storage_account" "tfstate" {
  name = "${var.project_tag}tf${random_string.rand.result}"
  account_replication_type = "LRS"
  account_tier = "Standard"
  enable_blob_encryption = true

  resource_group_name = azurerm_resource_group.tfstate.name
  location = azurerm_resource_group.tfstate.location
}

resource "azurerm_storage_container" "tfstate" {
  name = "tfstate"
  storage_account_name = azurerm_storage_account.tfstate.name
}

resource "random_string" "rand" {
  length = 24 - length(var.project_tag) - 2
  special = false
  upper = false
}
