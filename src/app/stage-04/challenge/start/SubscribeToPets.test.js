import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import 'dotenv';

import { SubscribeToPets } from './SubscribeToPets';

nock.disableNetConnect();

const { REACT_APP_API_BASE_URL } = process.env;

const VALID_EMAIL = 'johndoe@google.com';
const SUBSCRIBE_BUTTON_TEXT = 'Subscribe';
const EMAIL_INPUT_LABEL_TEXT = 'Email:';

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

  await userEvent.type(emailInputElement, 'johndoe@google.com');
  expect(submitButton).not.toBeDisabled();
});

test('renders the loading state followed by the success message when subscription is successful', async () => {
  const SUCCESS_MESSAGE = `Subscription successful for ${VALID_EMAIL}`;
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post('/subscribe')
    .reply(200);

  render(<SubscribeToPets />);

  const submitButton = screen.queryByText(SUBSCRIBE_BUTTON_TEXT);

  expect(screen.queryByText(SUCCESS_MESSAGE)).not.toBeInTheDocument();

  await userEvent.type(
    screen.queryByLabelText(EMAIL_INPUT_LABEL_TEXT),
    VALID_EMAIL
  );

  userEvent.click(submitButton);
  expect(submitButton).toHaveTextContent('Submitting…');
  expect(screen.queryByText(SUCCESS_MESSAGE)).not.toBeInTheDocument();

  await screen.findByText(SUCCESS_MESSAGE);
  expect(submitButton).not.toBeInTheDocument();
});
