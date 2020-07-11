# ssm_parameters.tf - this adds useful infrastructure info to the AWS Systems Manager parameter store

### network
resource "aws_ssm_parameter" "vpc_id" {
  count = var.create_network_stack ? 1 : 0

  name = "${var.ssm_prefix}/vpc/id"
  type = "String"
  value = aws_vpc.main[0].id

  tags = var.custom_tags
}

resource "aws_ssm_parameter" "vpc_cidr" {
  count = var.create_network_stack ? 1 : 0

  name = "${var.ssm_prefix}/vpc/cidr"
  type = "String"
  value = aws_vpc.main[0].cidr_block

  tags = var.custom_tags
}

resource "aws_ssm_parameter" "public_subnet1" {
  count = var.create_network_stack ? 1 : 0

  name = "${var.ssm_prefix}/vpc/public_subnet_1"
  type = "String"
  value = aws_subnet.public1[0].id

  tags = var.custom_tags
}

resource "aws_ssm_parameter" "public_subnet2" {
  count = var.create_network_stack ? 1 : 0

  name = "${var.ssm_prefix}/vpc/public_subnet_2"
  type = "String"
  value = aws_subnet.public2[0].id

  tags = var.custom_tags
}

resource "aws_ssm_parameter" "private_subnet1" {
  count = var.create_network_stack ? 1 : 0

  name = "${var.ssm_prefix}/vpc/private_subnet_1"
  type = "String"
  value = aws_subnet.private1[0].id

  tags = var.custom_tags
}

resource "aws_ssm_parameter" "private_subnet2" {
  count = var.create_network_stack ? 1 : 0

  name = "${var.ssm_prefix}/vpc/private_subnet_2"
  type = "String"
  value = aws_subnet.private2[0].id

  tags = var.custom_tags
}
