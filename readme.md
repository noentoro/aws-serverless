```
npm install -g serverless
serverless config credentials --provider aws --profile knightybird --key accessid --secret secretkey
npm install -g @aws-amplify/cli
amplify init
amplify add api
    > GraphQL
    > Amazon Cognito User Pool
amplify push
```

#### Email Service
```
mkdir email && cd email
serverless create --template aws-nodejs --path email-api

(configure serverless.yml)...
cd email-api
sls deploy

# add verified user to
# AWS Simple Email Service (SES)
use https://hoppscotch.io/ to test POST
{ "to": "", "from": "", "subject": "my test email", "text": "this is an email sent through my api" }
```
