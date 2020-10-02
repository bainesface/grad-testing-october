# Business case

We've made great progress so far! We've now created a working application that consumes our Pets API and can POST to our fake `/subscribe` end point. However, we're currently using a fake API to emulate the subscribe functionality of our application.

The business now want you to create a real service that will enable a true subscription to an email mailing list, so to do this we are going to build a Lambda function in AWS. We'll be doing TDD every step of the way of course!

There are services that allow you to validate the existence of an email address but you have to pay for them. Instead, we will use AWS's Simple Email Service (SES) to attempt to send an email. SES requires you to verify emails used in its service before actually sending mail to them, so we're bending a real world scenario here a little, but this should allow us to demonstrate both successful and unsuccessful results from adding an email address - it's just that we'll be checking whether we're _allowed_ to send to these emails, rather than the more likely use case of whether these emails _exist_.

In this stage, we are going to setup and build a Lambda to handle our real backend request, and we will also connect the front end we have built so far to work with it. We recommend that you start with the backend and then once you confirm this works using Postman or Insomnia, move on to the frontend to see the whole feature working end to end.

## Acceptance criteria

### Back End

- Our Lambda function should receive an email on the body of the request. We know that API Gateway will not parse the body before sending it on to our lambda, so we should expect to receive it in JSON format.
- Whilst developing it would be useful if we received a message telling us if we didn't attach a body to our post request, rather than a generic 'Internal Server Error'
- If we receive an email on this body, we should attempt to send an email.
- If it is successful, the Lambda should return a 200 status code and a success message for the Front End to interpret.
- If verification fails, we should handle the `MessageRejected` error and send back an appropriate status code and message for the Front End to interpret.
- All errors, handled or otherwise, should be viewable in the CloudWatch logs

### Front End

> Note that the UI is all set up as per the previous stage, which should work fine - but you may want to adjust to tests and content to match this criteria. You _will_ need to update the service to use your external API Gateway endpoint for `/subscribe` - but as you've gone through the work of abstracting the service layer, this should be very simple!

- If we are not permitted to send an email to a user's email address, we want to display an appropriate error message on the screen to inform the user that the email address they have entered is not valid
- We should use our existing tested error component to display this error to the user
- If the address is permitted, we should inform the user to check their emails for their results.

## Hints

This piece of work is going to be quite involved, especially for the first slice here - it should get easier when we come to add the subscribe functionality itself, because we'll have our Lambda setup at that point.

We will need to setup a Lambda, and also a connection to the Lambda with API Gateway. API Gateway will create the endpoint we can send the request to.

There is some initial setup involved here, so we have created a couple of files to help you get started with setting up the required AWS services - make sure you follow the setup instructions carefully.

We recommend starting with the backend/lambda first, and then coming back to the frontend to wire it all together.
