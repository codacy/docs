# constants.tf - data read from provider datasources

### azure
data "azurerm_kubernetes_cluster" "main" {
  name = "${var.project_slug}-aks-cluster"
  resource_group_name = "${var.project_slug}-cluster"
}

### local files
data "template_file" "cert_manager_crds" {
  template = file("${path.module}/templates/cert-manager-crds.yaml")
}

### kubernetes
data "kubernetes_secret" "admin_secret" {
  metadata {
    namespace = var.k8s_system_namespace
    name = kubernetes_service_account.admin.default_secret_name
  }
}


### helm
data "helm_repository" "stable" {
  name = "stable"
  url  = "https://kubernetes-charts.storage.googleapis.com"
}

data "helm_repository" "jetstack" {
  name = "jetstack"
  url = "https://charts.jetstack.io"
}
