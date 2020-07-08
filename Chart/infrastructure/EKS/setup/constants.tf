# constants.tf - data read from provider datasources

### aws
data "aws_eks_cluster" "main" {
  name = "${var.project_slug}-cluster"
}

data "aws_eks_cluster_auth" "main" {
  name = "${var.project_slug}-cluster"
}

data "aws_iam_role" "worker" {
  name = "${var.project_slug}-worker-role"
}

data "kubernetes_secret" "admin_secret" {
  metadata {
    namespace = var.k8s_system_namespace
    name = kubernetes_service_account.admin.default_secret_name
  }
}

### local files
data "template_file" "cert_manager_crds" {
  template = file("${path.module}/templates/cert-manager-crds.yaml")
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
