#!/bin/bash
cp ./src/app/stage-11/backend/start/lambda/index.js ./index.js
zip send-verification-email-lambda.zip ./index.js

aws lambda update-function-code --function-name send-verification-email \
--zip-file fileb://send-verification-email-lambda.zip

rm send-verification-email-lambda.zip
rm index.js