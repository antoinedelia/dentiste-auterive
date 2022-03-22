terraform {
  backend "remote" {
    organization = "antoinedelia"
    workspaces {
      name = "dentiste-auterive"
    }
  }
}