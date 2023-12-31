terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.6.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "3.6.0"
    }
  }
  backend "s3" {
    bucket  = "francotel-demo-terraform-backend-us-east-1"
    key     = "react-s3-devsecops/terraform.tfstate"
    region  = "us-east-1"
    encrypt = "true"
  }

}