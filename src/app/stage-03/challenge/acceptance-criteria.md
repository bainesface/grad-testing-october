# Business case

We want to let users know that their email subscription has been successful.

## Acceptance criteria

- The form should render when the submission has not yet taken place.
- Success message should render instead of the form when the submission is successful. Success is defined here as 200 response code from the API
- Success message should read: "Subscription successful for {email}" email being the email address that has been submitted.
- Error states are not expected to be handled at this point in time

## Hints

- The email can be saved in state and used as part of the success message.
- At this stage we don't need to handle passing the email to the subscription endpoint, we're just handling successful responses.
