# cluster.tf - the AKS cluster

resource "azurerm_resource_group" "cluster" {
  name = "${var.project_slug}-cluster"
  location = "North Europe"
}

resource "azurerm_kubernetes_cluster" "default" {
  name                = "${var.project_slug}-aks-cluster"
  location = azurerm_resource_group.cluster.location
  resource_group_name = azurerm_resource_group.cluster.name
  dns_prefix          = var.project_slug

  linux_profile {
    admin_username = "ubuntu"

    ssh_key {
      key_data = tls_private_key.ssh_key.public_key_openssh
    }
  }

  default_node_pool {
    name = var.project_slug
    node_count = var.k8s_worker_desired
    vm_size = var.k8s_worker_type
    os_disk_size_gb = var.k8s_worker_disk_size
  }

  service_principal {
    client_id = azuread_application.main.application_id
    client_secret = azuread_service_principal_password.main.value
  }

  tags = {
    Environment = "${var.project_name} AKS"
  }

}

# ssh key
resource "tls_private_key" "ssh_key" {
  algorithm = "RSA"
  rsa_bits = 4096
}
