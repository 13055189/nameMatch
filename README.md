# NameMatcher Lambda Function

## Project Overview
This project aims to match a human name in a list of human names using an AWS Lambda function.

## Setup Instructions

### Manual Deployment
1. Zip your source code.
2. Upload the zip file to the AWS Lambda function.
3. Save the changes.

### AWS CDK Deployment
1. Install AWS CDK: `npm install -g aws-cdk`.
2. Initialize a CDK project: `cdk init app --language typescript`.
3. Define your Lambda function in `lib/name-matcher-cdk-stack.ts`.
4. Deploy the stack: `cdk bootstrap` and `cdk deploy`.

## Usage Instructions
Use the provided API endpoint to test the function. Examples:
- Browser: `https://your-api-id.execute-api.region.amazonaws.com/prod?name=吴华文`
- curl: `curl "https://your-api-id.execute-api.region.amazonaws.com/prod?name=吴华文"`

## API Specification
- **Endpoint**: `https://your-api-id.execute-api.region.amazonaws.com/prod`
- **Method**: `GET`
- **Query Parameter**: `name`

## Known Issues
- Ensure the input names are normalized correctly.
- The function currently does not handle special characters in names.
