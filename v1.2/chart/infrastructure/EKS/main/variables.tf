# variables.tf - user settings. For terraform settings see config.tf

### project
variable "project_name" {
  description = "Base project name, used to tag resources"
  type        = string
  default     = "Codacy"
}

variable "project_slug" {
  description = "Base project slug, used to name resources"
  type        = string
  default     = "codacy"
}

variable "custom_tags" {
  description = "Map of custom tags to apply to every resource"
  type        = map(string)
  default     = {}
}

### kubernetes
variable "k8s_version" {
  description = "Kubernetes version to use in the cluster"
  type        = string
  default     = "1.14"
}

variable "k8s_worker_type" {
  description = "Instance type used for kubernetes worker nodes"
  type        = string
  default     = "m5.2xlarge"
}

variable "k8s_worker_bootstrap_extra_flags" {
  description = "Additional flags to pass to the kubernetes worker node bootstrap script"
  type        = string
  default     = ""
}

variable "k8s_worker_disk_size" {
  description = "Size (in GB) of the disk used for kubernetes worker nodes"
  type        = number
  default     = 100
}

variable "k8s_worker_min" {
  description = "Minimimum number of kubernetes worker nodes"
  type        = number
  default     = 2
}

variable "k8s_worker_max" {
  description = "Maximum number of kubernetes worker nodes"
  type        = number
  default     = 8
}

variable "k8s_worker_desired" {
  description = "Desired number of kubernetes worker nodes"
  type        = number
  default     = 4
}

### network
variable "create_network_stack" {
  description = "If true then create the network stack (set to false to use preexisting VPC / networks)"
  type        = bool
  default     = true
}

### create everything
variable "vpc_cidr" {
  description = "CIDR of the VPC wich house the EKS cluster"
  type        = string
  default     = "10.8.0.0/16"
}

variable "private_subnet1_cidr" {
  description = "CIDR of private subnet 1 (this should be large)"
  type        = string
  default     = "10.8.0.0/18"
}

variable "private_subnet2_cidr" {
  description = "CIDR of private subnet 2 (this should be large)"
  type        = string
  default     = "10.8.64.0/18"
}

variable "public_subnet1_cidr" {
  description = "CIDR of public subnet 1"
  type        = string
  default     = "10.8.128.0/19"
}

variable "public_subnet2_cidr" {
  description = "CIDR of public subnet 2"
  type        = string
  default     = "10.8.160.0/19"
}

variable "create_vpc_endpoints" {
  description = "If true then vpc endpoints for DynamoDB and S3"
  # This allows direct access to these resources from the private subnet, thus reducing nat gateway trafic.
  type    = bool
  default = false
}

### use existing vpc and subnets (create_network_stack == false)
variable "vpc_id" {
  description = "ID of the vpc where to deploy (only used if create_network_stack == false)"
  type        = string
  default     = null
}

variable "subnet1_id" {
  description = "ID of subnet 1 (only used if create_network_stack == false)"
  type        = string
  default     = null
}

variable "subnet2_id" {
  description = "ID of subnet 2 (only used if create_network_stack == false)"
  type        = string
  default     = null
}

### general
variable "ssm_prefix" {
  description = "Prefix used for the SSM parameters"
  type        = string
  default     = "/codacy/enterprise"
}

variable "enable_ssm" {
  description = "If true then add systems manager policy to nodes (this allows remote access for authorized users)"
  type        = bool
  default     = false
}
