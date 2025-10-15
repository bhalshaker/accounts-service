# Account Services

```sh
docker run -p 3000:3000 \
 -e NODE_ENV=dev \
 -e PORT=3000 \
 -e AWS_ACCESS_KEY_ID=[your access key id] \
 -e AWS_SECRET_ACCESS_KEY=[your secret access key] \
 -e DYNAMODB_ENDPOINT=https://dynamodb.us-east-1.amazonaws.com
 your-container-name
```