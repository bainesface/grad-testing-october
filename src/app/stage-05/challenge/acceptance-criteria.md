# Business case

If we have any issues with our subscriptions API we would like to ensure that the user is informed that their email subscription was not successful.

## Acceptance criteria

- Display a message "Sorry, we are unable to register your subscription at this time." to the user
- The form is no longer displayed to the user
- An error in this sense is a server response with a 500 response code
- You do not need to send a human readable error message from the API at this point in time

## Hints

- Nock allows you to respond with errors: https://github.com/nock/nock#replying-with-errors
