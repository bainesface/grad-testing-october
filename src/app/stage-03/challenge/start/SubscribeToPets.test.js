import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SubscribeToPets } from './SubscribeToPets';

const SUBSCRIBE_BUTTON_TEXT = 'Subscribe';
const EMAIL_INPUT_LABEL_TEXT = 'Email:';

test('disables submit button until email is correct', async () => {
  render(<SubscribeToPets />);

  const submitButton = screen.queryByRole('button', {
    name: SUBSCRIBE_BUTTON_TEXT,
  });
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

test('renders the loading state when the form is submitted', async () => {
  render(<SubscribeToPets />);
  const submitButton = screen.queryByRole('button', {
    name: SUBSCRIBE_BUTTON_TEXT,
  });

  await userEvent.type(
    screen.queryByLabelText(EMAIL_INPUT_LABEL_TEXT),
    'johndoe@google.com'
  );

  await userEvent.click(submitButton);
  expect(submitButton).toHaveTextContent('Submitting…');

  // Instead of creating an additional test we can update this test by testing rendering the loading state followed by the success message when subscription is successful.
});
