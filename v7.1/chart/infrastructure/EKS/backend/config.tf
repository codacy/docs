# config.tf - terraform and providers configuration

terraform {
  required_version = "~> 0.12"
}

provider "aws" {
  # Set your AWS configuration here. For more information see the terraform
  # provider information: https://www.terraform.io/docs/providers/aws/index.html
  # You might need to set AWS_SDK_LOAD_CONFIG=1 to use your aws credentials file
  region  = var.aws_region
  version = "~> 2.33"
}

provider "random" {
  version = "~> 2.2"
}
