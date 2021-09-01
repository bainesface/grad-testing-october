// const aws = require('aws-sdk');
// const ses = new aws.SESV2({ region: 'eu-west-2' });

exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
  };
  console.log(process.env.VERIFIED_SOURCE_EMAIL);
  // these are required for the API Gateway to permit CORS requests - don't remove them! Include them in any returned response objects, e.g.
  return {
    statusCode: 201,
    headers,
    body: JSON.stringify({ message: 'Email was successfully sent' }),
  };
};

/*
Don't remove any of the code above! For lambdas to work, the handler must be attached to the exports object as shown here. We've also imported the necessary sdk here, which is globally available in Lambda functions, so we don't need to worry about including it in our zipped code - this reference will be fine.

The documentation for the SESV2 module is available here: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SESV2.html. You will want to use the `.sendEmail()` method, which can be promisified if called as `.sendEmail().promise()` - in this case, ignore the second `callback` argument mentioned in the docs.
*/
