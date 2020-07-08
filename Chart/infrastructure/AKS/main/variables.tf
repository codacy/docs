# variables.tf - user settings. For terraform settings see config.tf

### project
variable "project_name" {
  description = "Base project name, used to tag resources"
  type = string
  default = "Codacy"
}

variable "project_slug" {
  description = "Base project slug, used to name resources"
  type = string
  default = "codacy"
}

### auth
variable "azuread_password_validity" {
  description = "Cluster service principal password validity (in hours)"
  type = string
  default = "17520h" // 24 * 365 * 2
}

### kubernetes
variable "k8s_version" {
  description = "Kubernetes version to use in the cluster"
  type = string
  default = "1.14"
}

variable "k8s_worker_type" {
  description = "Instance type used for Kubernetes worker nodes"
  type = string
  ## NOTE: you probably need larger machines (like those in the commented line below), but
  #        for that you need to enable Pay-As-You-Go and ask Azure Support to raise your
  #        to raise your account limits.
  #
  #default = "Standard_F4s_v2"

  default = "Standard_B2s"
}

variable "k8s_worker_disk_size" {
  description = "Size (in GB) of the disk used for kubernetes worker nodes"
  type = number
  default = 100
}
variable "k8s_worker_desired" {
  description = "Desired number of kubernetes worker nodes"
  type = number
  default = 4
}
