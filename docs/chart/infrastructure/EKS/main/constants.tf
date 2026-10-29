# constants.tf - AWS constants

data "aws_availability_zones" "AZs" {
  state = "available"
}

data "aws_region" "current" {}

data "aws_ssm_parameter" "eks_worker_ami" {
  name = "/aws/service/eks/optimized-ami/${var.k8s_version}/amazon-linux-2/recommended/image_id"
}

data "aws_eks_cluster_auth" "eks_cluster_auth" {
  name = aws_eks_cluster.main.name
}
