# Account Services

*Containerized Express.js with DynamoDB on AWS*

This project provides a complete example of using a **containerized Express.js application** to connect to **Amazon DynamoDB** on AWS.

It demonstrates a robust local development and deployment workflow by leveraging several key tools:

## Key Features and Technologies

| Feature | Technology Used | Description |
| :--- | :--- | :--- |
| **Containerization** | **Docker** | Used to build and run the Express.js application image. |
| **Local Testing** | **Docker Compose** (Implied) & **DynamoDB Local Image** | Allows for comprehensive testing by running both the application container and a local DynamoDB container together. |
| **Local Infrastructure Provisioning** | **Ansible** | Used to automatically create and configure the necessary DynamoDB table within the local DynamoDB instance. |
| **Cloud Infrastructure Provisioning** | **Terraform** | Used to define and provision the required DynamoDB infrastructure on **AWS** for cloud deployment, while still allowing the application to be developed and tested locally. |

---

## What This Project Includes

1.  **Application Containerization:** Defining the application environment using **Docker**.
2.  **Local Development Environment:** Setting up a local development environment using a **DynamoDB Docker image** to test connectivity without incurring AWS costs.
3.  **Local Configuration:** Using **Ansible** to programmatically create the DynamoDB table on the local instance.
4.  **AWS Infrastructure as Code (IaC):** Using **Terraform** to define the final, required DynamoDB table and related infrastructure on the AWS cloud.

---
```sh
docker run -p 3000:3000 \
 -e NODE_ENV=dev \
 -e PORT=3000 \
 -e AWS_ACCESS_KEY_ID=[your access key id] \
 -e AWS_SECRET_ACCESS_KEY=[your secret access key] \
 -e DYNAMODB_ENDPOINT=https://dynamodb.us-east-1.amazonaws.com
 your-container-name
```
