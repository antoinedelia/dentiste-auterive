terraform {
  backend "remote" {
    organization = "antoinedelia"
    workspaces {
      name = "dentiste-auterive"
    }
  }
}

provider "aws" {
  region = "eu-west-1"

  default_tags {
    tags = {
      Environment = "Production"
      Project     = "Dentiste Auterive"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  alias  = "us_east_1"

  default_tags {
    tags = {
      Environment = "Production"
      Project     = "Dentiste Auterive"
    }
  }
}