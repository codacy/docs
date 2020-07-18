# cluster_masters.tf - this creates the kubernetes cluster masters

resource "aws_eks_cluster" "main" {
  name    = "${var.project_slug}-cluster"
  version = var.k8s_version

  role_arn = aws_iam_role.eks_master.arn

  vpc_config {
    security_group_ids = [aws_security_group.eks_master.id]
    subnet_ids         = var.create_network_stack ? [aws_subnet.private1[0].id, aws_subnet.private2[0].id] : [var.subnet1_id, var.subnet2_id]
  }

  # for more info see: https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html
  enabled_cluster_log_types = [
    "api",
    "audit",
    "authenticator",
    "controllerManager",
    "scheduler",
  ]

  depends_on = [
    aws_cloudwatch_log_group.eks,
    aws_iam_role.eks_master,
    aws_security_group.eks_master
  ]

  tags = var.custom_tags

}

### security group
resource "aws_security_group" "eks_master" {
  name        = "${var.project_slug}-cluster-master"
  description = "${var.project_name} master SG"
  vpc_id      = var.create_network_stack ? aws_vpc.main[0].id : var.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(
    map("Name", "${var.project_name} cluster master"),
    var.custom_tags
  )
}

### cluster masters role
resource "aws_iam_role" "eks_master" {
  name               = "${var.project_slug}-master-role"
  assume_role_policy = data.aws_iam_policy_document.eks_master.json
  tags               = var.custom_tags
}

data "aws_iam_policy_document" "eks_master" {
  statement {
    principals {
      identifiers = ["eks.amazonaws.com"]
      type        = "Service"
    }
    actions = ["sts:AssumeRole"]
  }
}

### managed polices for EKS. See https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html
resource "aws_iam_role_policy_attachment" "eks_service" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSServicePolicy"
  role       = aws_iam_role.eks_master.name
}
resource "aws_iam_role_policy_attachment" "eks_cluster" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.eks_master.name
}

### cloudwatch control plane logs
resource "aws_cloudwatch_log_group" "eks" {
  name              = "/aws/eks/${var.project_slug}/cluster"
  retention_in_days = 7
  tags              = var.custom_tags
}
