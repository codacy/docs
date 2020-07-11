# auth.tf - Create application and service pricipal (this is +/- the same as `az ad sp create-for-rbac`)
#           See:  https://github.com/terraform-providers/terraform-provider-azuread/issues/40
#
#           WARNING: your credentials will be persisted to tfstate.
#             * Don't push it to a repo
#             * Don't distribute it to others
#             * Using an Azure Blob Storage backend is recomended. (see config.tf)
#

data "azurerm_subscription" "main" {}

# Create Azure AD App
resource "azuread_application" "main" {
  name = "${var.project_slug}-app"
  available_to_other_tenants = false
}

# Create Service Principal associated with the Azure AD App
resource "azuread_service_principal" "main" {
  application_id = azuread_application.main.application_id
}

# Generate random string to be used for Service Principal password
resource "random_string" "password" {
  length  = 32
  special = true
}

# Create Service Principal password
resource "azuread_service_principal_password" "main" {
  service_principal_id = azuread_service_principal.main.id
  value = random_string.password.result
  end_date_relative = var.azuread_password_validity
}

# Create role assignment for service principal
resource "azurerm_role_assignment" "main" {
  scope = data.azurerm_subscription.main.id
  role_definition_name = "Contributor"
  principal_id = azuread_service_principal.main.id
}

