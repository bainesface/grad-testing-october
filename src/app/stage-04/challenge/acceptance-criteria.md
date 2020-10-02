# Business case

We want to make sure that the email addresses are captured by sending them to our subscription API

## Acceptance criteria

- When the user submits the form, the email address they have entered should be passed to the API
- You do not need to handle error states from the subscription API at this point in time

## Hints

- Nock allows you to match against the request body: https://github.com/nock/nock#specifying-request-body
- You may find that you can update an existing test here instead of adding a new test specifically for this purpose
