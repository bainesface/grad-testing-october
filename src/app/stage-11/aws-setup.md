# Setup instructions

This stage of the course will make use of some AWS resources. If you haven't got one already, you'll need an AWS account. You'll need to provide credit card details, but we will only be using free tier resources so don't worry about being charged. But make sure your resources are deleted when you are done - have a look at the end for details.

To sign up, follow the instructions from [this page](https://aws.amazon.com/free/?trk=ps_a134p000003yBgZAAU&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_UK&sc_publisher=google&sc_category=core&sc_country=UK&sc_geo=EMEA&sc_outcome=Acquisition&sc_detail=%2Baws%20%2Baccount&sc_content=Account_bmm&sc_matchtype=b&sc_segment=438150024670&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|AWS|Core|UK|EN|Text&s_kwcid=AL!4422!3!438150024670!b!!g!!%2Baws%20%2Baccount&ef_id=EAIaIQobChMI9KSjw4aG6gIVA-3tCh3DywcAEAAYASAAEgITYfD_BwE:G:s&s_kwcid=AL!4422!3!438150024670!b!!g!!%2Baws%20%2Baccount&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc).

AWS has different **regions** in which you can create services. You'll need to make sure that you are consistent in the one you use. You can select the region in the top right of the console - all the links here will direct you to the London region (`eu-west-2`; generally it's good to provision resources close to your users!), but be careful if you go to anything manually.

Here are some [details on installing the AWS cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html). We will use this later on to put our function into the cloud.

## Verifying email addresses

We're using AWS SES to handle sending emails to the address that has been typed in. It's not the cleanest fit for our situation, because we can't actually send any emails to addresses that we haven't already verified on our system - which generally isn't any good for a subscribe endpoint! But this is good enough for simulating the sort of situations you may come across - a generic successful and unsuccessful attempt.

Follow these instructions to verify any emails you want to be successful - you will of course need access to these accounts. You'll need at least one email as the 'source' - you'll also need a 'destination' email, but this can be the same one.

1. Sign into AWS and navigate to the [SES dashboard](https://eu-west-2.console.aws.amazon.com/ses).

2. Select "Email addresses" under "Identity Management" in the sidebar.

3. Click the "Verify a New Email Address" button - enter an email you wish to use.

4. You should be informed that a verification email has been sent, and the list should be updated with your email and a "pending verification" status.

5. Sign in to the email you provided. You should have received an email, but give it a few minutes if you haven't.

6. Click the link in the email to verify your address.

7. Refresh the SES list and you should see the emails have been verified.

8. Repeat steps 3-7 for any additional emails you wish to verify.

## Setting up your AWS services

1. Sign into AWS, and navigate to the [CloudFormation dashboard](https://eu-west-2.console.aws.amazon.com/cloudformation)

[**CloudFormation**](https://aws.amazon.com/cloudformation/) is a service provided by AWS which can be used to provision resources by describing them in a YAML file. As we're only really interested in using AWS as an example cloud provider, this will save us lots of navigating around their complex online console.

2. Check which _region_ you are in from the top right - switch to London (`eu-west-2`) if you need to.

3. Click "Create stack" to begin provisioning the resources you need.

_Stack_ is the name given to the collection of different resources you provision via CloudFormation.

4. Ensure "Template is ready" is selected, and in the next panel, select "Upload a template file".

5. Select the `stack.yml` file in the same folder as this document. Click "next".

Understanding the actual content of this stack deeply is a bit beyond the scope of this course, but in short we are making sure we have:

- A **Lambda function** - a function on the cloud that 'does stuff' - in our case eventually, to receive an email address, then trigger actually sending an email to it.
- An **API Gateway** - a way we can trigger the function by hitting an HTTP endpoint.
- A **Cloudwatch log group** where we could look at the logs from our Lambda function in case we need to do any debugging.
- A permissions structure to allow these different services to talk to each other.

6. Provide the information needed to create your resources:

You'll need:

- a name for your stack: `verification-email-endpoint`
- a parameter for `apiGatewayStageName` which can be `test`.
- a `lambdaName` or name for your lambda function - you can use `send-verification-email` unless you are feeling more inventive. You will have to change the `update.sh` script if you give it a different name. It's restricted to being between 3 and 63 characters long.

[**API Gateway**](https://aws.amazon.com/api-gateway/) is the AWS service that will allow us to trigger our [**AWS Lambda**](https://aws.amazon.com/lambda/features/) cloud function by hitting an HTTP endpoint.

Parameters are used in stacks to make them reusable, much as providing parameters in arguments makes them reusable!

7. Click "next", leaving all default options.

8. Scroll to the bottom of the review page, and tick the checkbox labelled "I acknowledge that AWS CloudFormation might create IAM resources."

One of the resources we are creating uses AWS's [IAM](https://aws.amazon.com/iam/) service to give permissions for our other services to talk to each other. Because managing permissions is inherently risky, AWS will ask for your acknowledgement before creating them with CloudFormation.

9. Click "Create stack".

10. Wait for the stack to provision.

You can periodically click the refresh icon in the "Events" panel. You will see the different resources that are described in the YAML file be created. Eventually you should see a `CREATE_COMPLETE` event logged for the stack itself (the "Logical ID" `verification-email-endpoint` or whatever you named the stack).

10. Click "Services" in the top bar, and find the "API Gateway" service. Select it. You should see a list with just one item labelled `my-api`. Select it by clicking on the name.

11. Next to the "Resources" label in the sidebar, click the "Actions" button, and select "Deploy API" from the dropdown.

12. Select "[New Stage]" under "Deployment stage", give it the name "test" and click "Deploy".

13. Verify the deployment has worked by hitting it with a POST request:

`curl https://YOUR_GATEWAY_ID_HERE.execute-api.eu-west-2.amazonaws.com/test/subscribe -X POST -H "Content-Type: application/json"`

Your URL should also be displayed under "Invoke URL" at the top of the page - otherwise you can find the Gateway ID in the same list of APIs you saw earlier.

## Enabling CORS on your API

The above instructions will allow you to make requests to your API from your terminal, but to mak requests from the browser, you will need to enable [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). When you're ready to start hitting your Lambda function from the app, follow these steps first.

1. Sign into AWS and navigate to [API Gateway](https://eu-west-2.console.aws.amazon.com/apigateway/main/apis).

2. From the list of APIs, select `my-api` by clicking on its name.

3. Your CloudFormation template should have created a `/subscribe` **resource** with a `POST` **method** attached to it. Click on `/subscribe`.

4. Click on the "Actions" button and select "Enable CORS".

5. Leave the options as they are and click the button that says "Enable CORS and replace existing CORS headers".

6. You'll be presented with a list of actions to review. Click the confirmation button.

A couple of things to note:

- This will create an `OPTIONS` method to go alongside your `POST`. This is necessary to enable _pre-flight requests_ to your endpoint, which is part of CORS. These are required because there are elements of the request we will be making which are known as 'non-simple' - primarily that we will be using a `"Content-Type": "application/json"` header when we make the request.

- A couple of the actions will fail and display red crosses. Don't worry about this - it's because we are using a _lambda proxy integration_ to connect to our Lambda function directly, and so the API Gateway isn't responsible for setting headers on our requests. That's why you need to ensure you have the headers set up on the Lambda function code itself.

7. You need to re-deploy the API to take advantage of these changes. Click the "Actions" button again and select "Deploy API".

8. Select `test` from the deployment stages, and confirm. Your API should be ready to use again in a couple of seconds!

9. If you haven't already, replace the `REACT_APP_API_GATEWAY_URL` value in your `.env` file with `https://YOUR_GATEWAY_ID_HERE.execute-api.eu-west-2.amazonaws.com/test/`.

Note the `test` stage at the end of the url. API Gateway allows you to redeploy the same API to a different stage meaning you can test without interfering with a production API.

## Adding an environment variable to your Lambda function

It would be sensible to get the email address that you are using as a source from the environment - both to lessen the risk of exposing it to the public in your committed code, and also to make it configurable from the outside - no need to update the codebase just because you wanted to switch the sender's email address. These steps will take you through adding your verified email to the Lambda's environment variables.

1. Sign into AWS and navigate to [AWS Lambda](https://eu-west-2.console.aws.amazon.com/lambda/home).

2. You should see your function listed under the name you gave it. Click the name.

3. You should be on the Configuration tab. Scroll down past your code until you get to the "Environment variables" panel. Select "Manage environment variables".

4. Add your environment variable details.

Make sure they key matches what you take from `process.env` in your code, and the value is one of your SES verified email addresses.

5. Click "Save"!

## Updating your Lambda code

To update the Lambda function with the code in `/src/index.js`, run:

`AWS_REGION=eu-west-2 yarn run lambda:update`

This zips up the code in `/stage-11/backend/start/lambda`, then uses the AWS cli to post it to AWS to update the Lambda function code.

## Checking deployed Lambda logs

Hopefully your TDD will mean that your lambda will just work! But if it isn't, then you might want to add logs to your code - follow these instructions to see them:

1. It's a bit easier to find the relevant logs if you go via the Lambda function, so sign into AWS and navigate to [AWS Lambda](https://eu-west-2.console.aws.amazon.com/lambda/home).

2. You should see your function listed under the name you gave it. Click the name.

3. Select the "Monitoring" tab near the top.

4. To the top right, click the button to "View logs in CloudWatch"

5. Look for the panel titled "Log Streams". You almost certainly want to click the one at the top to get the latest logs.

You may see multiple streams - you will have a new stream for every version of the Lambda function you've created, so if you've been updating your code and logging in each one, there will be a stream for each of these.

6. Examine the logs to your heart's content. You may need to refresh if you are re-triggering the Lambda whilst already on the page. `console.log` messages will be prefaced by the date, a log ID, and the word `INFO`.

## Removing resources when you are done

We aren't using any resources that charge for their existence, but it's still a good idea to clean up your resources when you are done, to prevent any interference with other projects you might engage with in the future, or incur costs from accidentally using these resources beyond the free tier. Using **CloudFormation** makes this very simple - follow these instructions to clear up the infrastructure. It won't 'unverify' the email addresses, but these can never incur any costs.

1. Sign into AWS and navigate to the **CloudFormation** service.

2. You should see the stack you've already created (perhaps named `send-verification-email`, unless you _were_ feeling more inventive). Select the checkbox.

3. Click "Delete" above, and give confirmation.

4. Watch with joy as you think how difficult it would have been to find all of the different bits and remove them manually.

You can refresh for updates much as you did when you created the stack and you'll know it's done when you receive a `DELETE_COMPLETE` notification with logical ID of the stack name you provided when you created it.
