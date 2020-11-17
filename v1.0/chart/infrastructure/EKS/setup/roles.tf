# roles.tf -  this creates the service accounts needed for tiller to have enough permissions to operate

# create admin service account
resource "kubernetes_service_account" "admin" {
  metadata {
    name = var.k8s_admin_name
    namespace = "kube-system"
  }

  automount_service_account_token = true
}

resource "kubernetes_cluster_role_binding" "admin" {
  metadata {
    name = "${var.k8s_admin_name}-binding"
  }

  subject {
    kind = "ServiceAccount"
    name = var.k8s_admin_name
    namespace = "kube-system"
  }

  role_ref {
    kind = "ClusterRole"
    name = "cluster-admin"
    api_group = "rbac.authorization.k8s.io"
  }
}

# create service account for tiller
resource "kubernetes_service_account" "tiller" {
  metadata {
    name = "tiller"
    namespace = "kube-system"
  }

  automount_service_account_token = true
}

resource "kubernetes_cluster_role_binding" "tiller" {
  metadata {
    name = "tiller-binding"
  }

  subject {
    kind = "ServiceAccount"
    name = "tiller"
    namespace = "kube-system"
  }

  role_ref {
    kind = "ClusterRole"
    name = "cluster-admin"
    api_group = "rbac.authorization.k8s.io"
  }
}
