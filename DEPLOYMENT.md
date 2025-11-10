# Deployment Guide for AWS EC2

## Pre-requisites
1. Ensure you have an AWS account and the necessary permissions to create and manage EC2 instances.
2. Install the AWS CLI on your local machine and configure it with your credentials.

## Steps to Deploy

### 1. Launch an EC2 Instance:
   - Go to the AWS Management Console.
   - Navigate to the EC2 dashboard.
   - Click on ‘Launch Instance’.
   - Choose an Amazon Machine Image (AMI), for example, Amazon Linux 2.
   - Select an instance type (e.g., t2.micro).
   - Configure instance details, add storage, and tags as needed.
   - Configure the security group to allow necessary ports (e.g., 22 for SSH, 80 for HTTP).
   - Review and launch the instance.

### 2. Connect to Your EC2 Instance:
   - Use SSH to connect to your instance with the command:
     ```bash
     ssh -i /path/to/your-key.pem ec2-user@your-public-ip
     ```

### 3. Set Up Your Environment:
   - Update the packages:
     ```bash
     sudo yum update -y
     ```
   - Install necessary software (e.g., Node.js, Python, etc.).

### 4. Deploy Your Application:
   - Clone your repository:
     ```bash
     git clone https://github.com/MahmoudShawkyyy/cloud-project.git
     ```
   - Navigate to your application directory:
     ```bash
     cd cloud-project
     ```
   - Follow any additional setup instructions specific to your application.

### 5. Configure a Web Server (if applicable):
   - Install and configure a web server like Nginx or Apache.

### 6. Test Your Application:
   - Access your application via the public IP address.

## Troubleshooting
- If you face permission issues, check your security group and IAM roles.
- Ensure your instance is running and has a public IP assigned.

## Conclusion
This guide provides the basic steps to deploy an application on AWS EC2. Depending on your application's complexity, additional steps may be required.