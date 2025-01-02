# AWS Hosted Portfolio

Project inspired by the [cloud resume challenge](https://cloudresumechallenge.dev).
This is documentation on the steps I took to create an AWS hosted portfolio and why I took those steps.
Tech Stack:

- S3
- CloudFront
- Route53
- DynamoDB
- Lambda
- APIgateway
- GitHub Actions

1. Website Hosting
2. API
3. CICD

### Website Hosting

S3 housed the files that are my portfolio; it is defaultly configured and nothing in the properties needs to be changed.
A CloudFront distribution is used to allow users to the private S3 bucket. Said S3 bucket is used as the origin domain and
is only accessable through the gateway by setting the OAC to the bucket. It is defaulty configured except to redirect HTTP
viewers as HTTPS viewers for security, WAF is disabled since neither a lot or traffic nor attacks are expected, and the
default root object is "index.html" so that viewers are directed to view the html when entering the site. The bucket's
policy is then updated togrant the distribution sole access. An SSL certificate is created to allow the distribution
to be accessed through the root name. A record is created under the domain to redirect to the distribution. At this point
the site is accessable to the public.

### API

A DynamoDB table keeps the number of viewers the site has; it's configured defaultly. An item is created which stores
the amount of site visits. A lambda function is created; it's configuted defaultly with a runtime of Python 3.13
and is given permission to read and write to the DynamoDB table. It gets the item then increments it. An APIgateway
is created which invokes the lambda function and limits the amount of API calls; the HTTP API for the APIgateway
is called through the javascript.

### CI/CD

samee
