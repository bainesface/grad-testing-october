import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SubscribeToPets } from './SubscribeToPets';

test('disables submit button until email is correct', async () => {
  render(<SubscribeToPets />);

  const submitButton = screen.queryByRole('button', { name: 'Subscribe' });
  expect(submitButton).toBeDisabled();

  const emailInputElement = screen.queryByLabelText('Email:');
  const invalidEmails = ['', 'jondoe', 'jondoe@', 'johndoe@google'];

  for (let i = 0; i < invalidEmails.length; i++) {
    await userEvent.type(emailInputElement, invalidEmails[i]);
    expect(submitButton).toBeDisabled();
    userEvent.clear(emailInputElement);
  }

  await userEvent.type(emailInputElement, 'johndoe@google.com');

  expect(submitButton).not.toBeDisabled();
});
