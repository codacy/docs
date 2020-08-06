# variables.tf - user settings. For provider settings see config.tf

variable "project_tag" {
  description = "Project tag to add to s3 and dynamodb names"
  type = string
  default = "codacy"
}
