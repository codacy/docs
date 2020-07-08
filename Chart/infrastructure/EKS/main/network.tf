# network.tf - this creates the base network infrastructure required for the EKS cluster.
#              Four subnets (two private and two public) are included in the main VPC,
#              split over two availability zones. A NAT gateway is placed in each public
#              subnet to allow egress internet access for instances located on private
#              subnets. This traffic is sent via the also provided internet gateway.


resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr

  tags = map(
    "Name", "${var.project_name}",
    "kubernetes.io/cluster/${var.project_slug}-cluster", "shared",
  )
}

### public route table
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = var.project_name
  }
}
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "${var.project_name} public route table"
  }
}
resource "aws_route" "public" {
  route_table_id = aws_route_table.public.id
  gateway_id = aws_internet_gateway.main.id
  destination_cidr_block = "0.0.0.0/0"
}

### public subnet 1
resource "aws_subnet" "public1" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.public_subnet1_cidr
  availability_zone = data.aws_availability_zones.AZs.names[0]

  map_public_ip_on_launch = true

  tags = map(
    "Name", "${var.project_name} public subnet 1",
    "kubernetes.io/cluster/${var.project_slug}-cluster", "shared",
  )
}
resource "aws_route_table_association" "public1"{
  route_table_id = aws_route_table.public.id
  subnet_id = aws_subnet.public1.id
}


### public subnet 2
resource "aws_subnet" "public2" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.public_subnet2_cidr
  availability_zone = data.aws_availability_zones.AZs.names[1]

  map_public_ip_on_launch = true

  tags = map(
    "Name", "${var.project_name} public subnet 2",
    "kubernetes.io/cluster/${var.project_slug}-cluster", "shared",
  )
}
resource "aws_route_table_association" "public2"{
  route_table_id = aws_route_table.public.id
  subnet_id = aws_subnet.public2.id
}

### private subnet 1
resource "aws_subnet" "private1" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.private_subnet1_cidr
  availability_zone = data.aws_availability_zones.AZs.names[0]

  tags = map(
    "Name", "${var.project_name} private subnet 1",
    "kubernetes.io/cluster/${var.project_slug}-cluster", "shared",
  )
}

### private subnet 1 route table
resource "aws_eip" "public1" {
  depends_on = [aws_internet_gateway.main]
  vpc = true
}
resource "aws_nat_gateway" "public1" {
  allocation_id = aws_eip.public1.id
  subnet_id = aws_subnet.public1.id
}
resource "aws_route_table" "private1" {
  vpc_id = aws_vpc.main.id
}
resource "aws_route" "private1" {
  route_table_id = aws_route_table.private1.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id = aws_nat_gateway.public1.id
}
resource "aws_route_table_association" "private1" {
  route_table_id = aws_route_table.private1.id
  subnet_id = aws_subnet.private1.id
}

### private subnet 2
resource "aws_subnet" "private2" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.private_subnet2_cidr
  availability_zone = data.aws_availability_zones.AZs.names[1]

  tags = map(
    "Name", "${var.project_name} private subnet 2",
    "kubernetes.io/cluster/${var.project_slug}-cluster", "shared",
  )
}

### private subnet 2 route table
resource "aws_eip" "public2" {
  depends_on = [aws_internet_gateway.main]
  vpc = true
}
resource "aws_nat_gateway" "public2" {
  allocation_id = aws_eip.public2.id
  subnet_id = aws_subnet.public2.id
}
resource "aws_route_table" "private2" {
  vpc_id = aws_vpc.main.id
}
resource "aws_route" "private2" {
  route_table_id = aws_route_table.private2.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id = aws_nat_gateway.public2.id
}
resource "aws_route_table_association" "private2" {
  route_table_id = aws_route_table.private2.id
  subnet_id = aws_subnet.private2.id
}

### vpc endpoints
data aws_iam_policy_document "allow_all" {
  statement {
    actions = ["*"]
    principals {
      identifiers = ["*"]
      type = "AWS"
    }
    resources = ["*"]
  }
}

resource "aws_vpc_endpoint" "s3" {
  count = var.create_vpc_endpoints ? 1 : 0
  service_name = "com.amazonaws.${data.aws_region.current.name}.s3"
  vpc_id = aws_vpc.main.id
  route_table_ids = [
    aws_route_table.private1.id,
    aws_route_table.private2.id
  ]
  policy = data.aws_iam_policy_document.allow_all.json
}

resource "aws_vpc_endpoint" "dynamodb" {
  count = var.create_vpc_endpoints ? 1 : 0
  service_name = "com.amazonaws.${data.aws_region.current.name}.dynamodb"
  vpc_id = aws_vpc.main.id
  route_table_ids = [
    aws_route_table.private1.id,
    aws_route_table.private2.id
  ]
  policy = data.aws_iam_policy_document.allow_all.json
}
