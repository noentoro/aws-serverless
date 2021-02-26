```
npm install -g serverless
serverless config credentials --provider aws --profile knightybird --key accessid --secret secretkey
```

Email Service
```
mkdir email && cd email
serverless create --template aws-nodejs --path email-api

(configure serverless.yml)...
sls deploy
```
