output "kube_config" {
  value = azurerm_kubernetes_cluster.default.kube_config_raw
  sensitive = true
}

output "host" {
  value = azurerm_kubernetes_cluster.default.kube_config.0.host
}

output "ssh_key" {
  value = tls_private_key.ssh_key.private_key_pem
  sensitive = true
}