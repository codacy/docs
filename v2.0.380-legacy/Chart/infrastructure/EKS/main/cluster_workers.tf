# cluster_workers.tf - this creates the workers autoscaling groups and launch configs, make the security group setups,
#                      and  joins the worker nodes to the cluster.

resource "aws_autoscaling_group" "workers" {
  name = "${var.project_slug}-asg"
  launch_configuration = aws_launch_configuration.workers.id
  min_size= var.k8s_worker_min
  max_size= var.k8s_worker_max
  desired_capacity = var.k8s_worker_desired
  vpc_zone_identifier  = [
    aws_subnet.private1.id,
    aws_subnet.private2.id
  ]

  tag {
    key = "Name"
    value = "${var.project_slug}-worker"
    propagate_at_launch = true
  }
  tag {
    key = "kubernetes.io/cluster/${var.project_slug}-cluster"
    value = "owned"
    propagate_at_launch = true
  }
  tag {
    key = "k8s.io/cluster-autoscaler/enabled"
    value = "owned"
    propagate_at_launch = false
  }

  lifecycle {
    create_before_destroy = true
  }

}

resource "aws_launch_configuration" "workers" {
  image_id = data.aws_ssm_parameter.eks_worker_ami.value
  instance_type = var.k8s_worker_type
  iam_instance_profile = aws_iam_instance_profile.eks_worker.name
  name_prefix = var.project_slug

  user_data_base64 = base64encode(local.k8s_worker_userdata)

  security_groups = [
    aws_security_group.eks_worker.id
  ]

  root_block_device {
    volume_type = "gp2"
    volume_size = var.k8s_worker_disk_size
    delete_on_termination = true
  }

  lifecycle {
    create_before_destroy = true
  }

  depends_on = [
    aws_iam_instance_profile.eks_worker
  ]
}


### join nodes to the cluster
locals {
  k8s_worker_userdata = <<-END_USERDATA
  #!/bin/bash
  set -o xtrace
  sudo yum install -y https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/linux_amd64/amazon-ssm-agent.rpm
  sudo systemctl start amazon-ssm-agent
  sudo systemctl enable amazon-ssm-agent
  /etc/eks/bootstrap.sh --apiserver-endpoint '${aws_eks_cluster.main.endpoint}' --b64-cluster-ca '${aws_eks_cluster.main.certificate_authority.0.data}' '${var.project_slug}-cluster' ${var.k8s_worker_bootstrap_extra_flags}
  END_USERDATA
}


### worker nodes instance profile
resource "aws_iam_instance_profile" "eks_worker" {
  name = "${var.project_slug}-worker"
  role = aws_iam_role.eks_worker.name
}

resource "aws_iam_role" "eks_worker" {
  name = "${var.project_slug}-worker-role"
  assume_role_policy = data.aws_iam_policy_document.eks_worker.json
}

data "aws_iam_policy_document" "eks_worker" {
  statement {
    principals {
      identifiers = ["ec2.amazonaws.com"]
      type = "Service"
    }
    actions = ["sts:AssumeRole"]
  }
}

### managed policies for worker nodes. See: https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html
resource "aws_iam_role_policy_attachment" "eks_worker" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role = aws_iam_role.eks_worker.name
}
resource "aws_iam_role_policy_attachment" "eks_cni" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role = aws_iam_role.eks_worker.name
}
resource "aws_iam_role_policy_attachment" "ecr_read_only" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role = aws_iam_role.eks_worker.name
}
### managed policy for systems manager
resource "aws_iam_role_policy_attachment" "ssm" {
  count = var.enable_ssm ? 1 : 0
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
  role = aws_iam_role.eks_worker.name
}

### security groups setup
resource "aws_security_group" "eks_worker" {
  name = "${var.project_slug}-cluster-worker"
  description = "${var.project_name} worker SG"
  vpc_id = aws_vpc.main.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = map(
    "Name", "${var.project_slug}-worker-sg",
    "kubernetes.io/cluster/${var.project_slug}-cluster", "owned",
  )
}

resource "aws_security_group_rule" "allow_worker_worker" {
  description = "Allow worker-worker connections"
  security_group_id = aws_security_group.eks_worker.id
  source_security_group_id = aws_security_group.eks_worker.id
  type = "ingress"
  protocol = "-1"
  from_port = 0
  to_port = 65535
}
resource "aws_security_group_rule" "allow_master_worker" {
  description = "Allow worker connections from masters"
  security_group_id = aws_security_group.eks_worker.id
  source_security_group_id = aws_security_group.eks_master.id
  type = "ingress"
  protocol = "tcp"
  from_port = 1025
  to_port = 65535
}
resource "aws_security_group_rule" "allow_worker_master" {
  description = "Allow connections from worker nodes"
  security_group_id = aws_security_group.eks_master.id
  source_security_group_id = aws_security_group.eks_worker.id
  type = "ingress"
  protocol = "tcp"
  from_port = 443
  to_port = 443
}
