# state_and_lock.tf - setup s3 state storage and dynamodb lock table
#                     For more info see https://www.terraform.io/docs/backends/types/s3.html

resource "aws_s3_bucket" "state" {
  bucket = "${var.project_tag}-terraform-state-${random_string.rand.result}"
  acl = "private"

  ### To destroy uncomment this:
  #force_destroy = true
  ##############################

  ### To destroy comment this:
  versioning {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }
  ###########################

  tags = var.custom_tags
}

resource "aws_dynamodb_table" "lock" {
  name = "${var.project_tag}-terraform-lock"
  hash_key = "LockID"
  read_capacity = 20
  write_capacity = 20

  attribute {
    name = "LockID"
    type = "S"
  }

  ### To destroy comment this:
  lifecycle {
    prevent_destroy = true
  }
  ###########################

  tags = var.custom_tags
}

resource "random_string" "rand" {
  length = 22
  special = false
  upper = false
  number = false
}
