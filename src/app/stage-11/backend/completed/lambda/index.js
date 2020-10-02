const aws = require('aws-sdk');
const ses = new aws.SESV2({ region: 'eu-west-2' });

exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  let email;
  try {
    email = JSON.parse(event.body).email;
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message:
          'Please ensure you attach an email to the body of your request',
      }),
    };
  }

  const params = {
    Content: {
      Simple: {
        Body: {
          Text: {
            Data:
              'Our pets want to thank you ever so much for subscribing to them, or, as they would put it: "Miaow! Woof! Rabbit noise!"',
          },
        },
        Subject: {
          Data: 'Thanks for subscribing!',
        },
      },
    },
    Destination: {
      ToAddresses: [email],
    },
    FromEmailAddress: process.env.VERIFIED_SOURCE_EMAIL,
  };

  try {
    await ses.sendEmail(params).promise();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({ message: 'Email was successfully sent' }),
    };
  } catch (error) {
    console.log(error);
    if (error.code === 'MessageRejected') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message:
            'Apologies, we cannot send emails to this unverified address',
        }),
      };
    }
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: 'There was an error! Please check the CloudWatch logs!',
      }),
    };
  }
};
