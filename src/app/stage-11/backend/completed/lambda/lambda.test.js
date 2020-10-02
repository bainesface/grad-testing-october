const { handler } = require('.');
const { createMockEvent } = require('./test.helpers.js');

test('that a verified email returns a 201 status code and a success message', async () => {
  const event = createMockEvent({
    body: JSON.stringify({ email: process.env.VERIFIED_DESTINATION_EMAIL }),
  });
  const response = await handler(event);
  expect(response.statusCode).toEqual(201);
  const body = JSON.parse(response.body);
  expect(body.message).toEqual('Email was successfully sent');
});

test('that failing to attach a body to the request returns a 400 status code and an error message', async () => {
  const event = createMockEvent({});
  const response = await handler(event);
  expect(response.statusCode).toEqual(400);
  const body = JSON.parse(response.body);
  expect(body.message).toEqual(
    'Please ensure you attach an email to the body of your request'
  );
});

test('that an unverified email returns a 400 status code and an error message', async () => {
  const event = createMockEvent({
    body: JSON.stringify({ email: 'doubtthisisanemail@notreal.com' }),
  });
  const response = await handler(event);
  expect(response.statusCode).toEqual(400);
  const body = JSON.parse(response.body);
  expect(body.message).toEqual(
    'Apologies, we cannot send emails to this unverified address'
  );
});
