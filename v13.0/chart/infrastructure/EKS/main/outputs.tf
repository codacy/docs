output "cluster_endpoint" {
  value = aws_eks_cluster.main.endpoint
}

locals {
  aws_auth_configmap = <<-EOF


  apiVersion: v1
  kind: ConfigMap
  metadata:
    name: aws-auth
    namespace: kube-system
  data:
    mapRoles: |
      - rolearn: ${aws_iam_role.eks_worker.arn}
        username: system:node:{{EC2PrivateDNSName}}
        groups:
          - system:bootstrappers
          - system:nodes
  EOF
}

output "aws_auth_configmap" {
  # Add this to your cluster by running:
  #   terraform output aws_auth_configmap | kubectl apply -f -
  #
  value = local.aws_auth_configmap
}
