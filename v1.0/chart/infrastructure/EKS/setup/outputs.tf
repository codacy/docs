output "admin_token" {
  # Use this token to connect to the cluster. For instance, after installing the dashboard
  # you can run:
  #
  #   kubectl proxy
  #
  # and then connect to the dashboard using the url:
  #
  #   http://127.0.0.1:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:https/proxy
  #
  value = data.kubernetes_secret.admin_secret.data.token
  sensitive = true
}
