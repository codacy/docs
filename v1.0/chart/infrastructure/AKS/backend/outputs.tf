output "resource_group" {
  value = azurerm_resource_group.tfstate.name
}

output "storage_account" {
  value = azurerm_storage_account.tfstate.name
}

output "container_name" {
  value = azurerm_storage_container.tfstate.name
}
