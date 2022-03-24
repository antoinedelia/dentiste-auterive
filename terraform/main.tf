terraform {
  backend "remote" {
    organization = "antoinedelia"
    workspaces {
      name = "dentiste-auterive"
    }
  }
}

provider "aws" {
  region = var.region

  default_tags {
    tags = {
      Environment = "Production"
      Project     = "Dentiste Auterive"
    }
  }
}
