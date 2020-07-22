# ssm_parameters.tf - this adds useful infrastructure info to the AWS Systems Manager parameter store

### network
resource "aws_ssm_parameter" "vpc_id" {
  name = "${var.ssm_prefix}/vpc/id"
  type = "String"
  value = aws_vpc.main.id
}

resource "aws_ssm_parameter" "vpc_cidr" {
  name = "${var.ssm_prefix}/vpc/cidr"
  type = "String"
  value = aws_vpc.main.cidr_block
}

resource "aws_ssm_parameter" "public_subnet1" {
  name = "${var.ssm_prefix}/vpc/public_subnet_1"
  type = "String"
  value = aws_subnet.public1.id
}

resource "aws_ssm_parameter" "public_subnet2" {
  name = "${var.ssm_prefix}/vpc/public_subnet_2"
  type = "String"
  value = aws_subnet.public2.id
}

resource "aws_ssm_parameter" "private_subnet1" {
  name = "${var.ssm_prefix}/vpc/private_subnet_1"
  type = "String"
  value = aws_subnet.private1.id
}

resource "aws_ssm_parameter" "private_subnet2" {
  name = "${var.ssm_prefix}/vpc/private_subnet_2"
  type = "String"
  value = aws_subnet.private2.id
}
