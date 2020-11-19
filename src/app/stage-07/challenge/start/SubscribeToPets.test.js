import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import 'dotenv';

import { SubscribeToPets } from './SubscribeToPets';

nock.disableNetConnect();

const { REACT_APP_API_BASE_URL } = process.env;

const ENDPOINT = '/subscribe';

const VALID_EMAIL = 'johndoe@google.com';
const SUCCESS_MESSAGE = `Subscription successful for ${VALID_EMAIL}`;
const ERROR_MESSAGE =
  'Sorry, we are unable to register your subscription at this time.';
const SUBMISSION_PENDING_MESSAGE = 'Submitting…';
const SUBSCRIBE_BUTTON_TEXT = 'Subscribe';
const EMAIL_INPUT_LABEL_TEXT = 'Email:';

// ## Acceptance criteria

// - Display error and success messages with the Alert component from our component library
// - Error messages should use the "error" variant
// - Success messages should use the "success" variant

// ## Hints

// - success variant renders with the `alert--success` className
// - error variant renders with the `alert--error` className

test('disables submit button until email is correct', async () => {
  render(<SubscribeToPets />);

  const submitButton = screen.queryByText(SUBSCRIBE_BUTTON_TEXT);
  expect(submitButton).toBeDisabled();

  const emailInputElement = screen.queryByLabelText(EMAIL_INPUT_LABEL_TEXT);
  const invalidEmails = ['', 'jondoe', 'jondoe@', 'johndoe@google'];

  for (let i = 0; i < emailInputElement.length; i++) {
    await userEvent.type(emailInputElement, invalidEmails[i]);
    expect(submitButton).toBeDisabled();
    userEvent.clear();
  }

  await userEvent.type(emailInputElement, VALID_EMAIL);
  expect(submitButton).not.toBeDisabled();
});

test('renders the loading state followed by the success alert when subscription is successful', async () => {
  const SUCCESS_MESSAGE = `Subscription successful for ${VALID_EMAIL}`;
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post('/subscribe', { email: VALID_EMAIL })
    .reply(200);

  render(<SubscribeToPets />);

  const submitButton = screen.queryByText(SUBSCRIBE_BUTTON_TEXT);
  const alert = screen.queryByText(SUCCESS_MESSAGE);
  expect(alert).not.toBeInTheDocument();

  await userEvent.type(
    screen.queryByLabelText(EMAIL_INPUT_LABEL_TEXT),
    VALID_EMAIL
  );

  userEvent.click(submitButton);
  expect(submitButton).toHaveTextContent('Submitting…');
  expect(alert).not.toBeInTheDocument();

  const successAlert = await screen.findByText(SUCCESS_MESSAGE);
  expect(successAlert).toHaveClass(`alert alert--success`);
  expect(successAlert).not.toHaveClass(`alert alert--info`);
  expect(successAlert).not.toHaveClass(`alert alert--error`);
  expect(submitButton).not.toBeInTheDocument();
});

test('submits correct request body', async () => {
  const data = { email: VALID_EMAIL };
  let requestBody = '';

  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post(ENDPOINT)
    .reply(200, (_, body) => (requestBody = body));

  render(<SubscribeToPets />);

  await userEvent.type(
    screen.queryByLabelText(EMAIL_INPUT_LABEL_TEXT),
    VALID_EMAIL
  );

  userEvent.click(screen.queryByText(SUBSCRIBE_BUTTON_TEXT));

  await screen.findByText(SUCCESS_MESSAGE);
  expect(requestBody).toEqual(data);
});

test('render error alert when subscription fails', async () => {
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post(ENDPOINT)
    .reply(500);

  render(<SubscribeToPets />);
  const submitButton = screen.queryByText(SUBSCRIBE_BUTTON_TEXT);

  await userEvent.type(
    screen.queryByLabelText(EMAIL_INPUT_LABEL_TEXT),
    VALID_EMAIL
  );

  userEvent.click(submitButton);

  const errorAlert = await screen.findByText(ERROR_MESSAGE);
  expect(errorAlert).toHaveClass(`alert alert--error`);
  expect(screen.queryByText(SUCCESS_MESSAGE)).not.toBeInTheDocument();
  expect(screen.queryByText(SUBSCRIBE_BUTTON_TEXT)).not.toBeInTheDocument();
  expect(
    screen.queryByText(SUBMISSION_PENDING_MESSAGE)
  ).not.toBeInTheDocument();
});

// test('Display error and success messages with the Alert component from our component library')
