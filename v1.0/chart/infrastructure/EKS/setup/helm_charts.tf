resource "helm_release" "dashboard" {
  name = "kubernetes-dashboard"
  chart = "stable/kubernetes-dashboard"
  repository = data.helm_repository.stable.name
  namespace = var.k8s_system_namespace

  values = [
    <<-YAML
    enabled: true
    fullnameOverride: kubernetes-dashboard
    service:
      externalPort: 8001
    rbac:
      create: true
    serviceAccount:
      create: false
      name: ${var.k8s_admin_name}
    YAML
  ]

  # This prevents the destruction of tiller's role before removing
  # the chart, which ensures a cleaner terraform destroy.
  depends_on = [
    kubernetes_cluster_role_binding.tiller,
    kubernetes_service_account.tiller
  ]
}

resource "helm_release" "nginx_ingress" {
  name = "nginx-ingress"
  chart = "stable/nginx-ingress"
  version = "1.17.1"
  repository = data.helm_repository.jetstack.name
  namespace = var.k8s_system_namespace

  values = [
    <<-YAML
    controller:
      publishService:
        enabled: true
    YAML
  ]

  depends_on = [
    kubernetes_cluster_role_binding.tiller,
    kubernetes_service_account.tiller,
    null_resource.cert_manager_crds
  ]
}


resource "helm_release" "cert_manager" {
  name = "cert-manager"
  chart = "cert-manager"
  version = "v0.9.1"
  repository = data.helm_repository.jetstack.name
  namespace = var.k8s_system_namespace

  values = [
    <<-YAML
    webhook:
      enabled: true
    ingressShim:
      defaultIssuerName: letsencrypt-prod
      defaultIssuerKind: ClusterIssuer
      defaultACMEChallengeType: dns01
      defaultACMEDNS01ChallengeProvider: route53
      podDnsPolicy: "None"
      podDnsConfig:
        nameservers:
          - "1.1.1.1"
          - "8.8.8.8"
    YAML
  ]

  depends_on = [
    kubernetes_cluster_role_binding.tiller,
    kubernetes_service_account.tiller,
    null_resource.cert_manager_crds,
    helm_release.nginx_ingress
  ]
}
