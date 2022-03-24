# Dentiste Auterive

Repository hosting the website for the father.

A GitHub Action is used to build and deploy the website to AWS.

Need to manually create ACM, update the DNS and finally link the certificate to the associated domain in CloudFront.

We should update the NS records on Oxyd to point to Route53. After that, we can handle the DNS inside AWS, and potentially automate with Terraform the creation of the certificate and its association to the cloudfront distribution.