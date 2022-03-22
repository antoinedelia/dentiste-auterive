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
}
