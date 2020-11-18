import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// you'll want to import `userEvent` in order to trigger the change event in the input.
// import userEvent from '@testing-library/user-event';

import { SubscribeToPets } from './SubscribeToPets';

// We want to ensure that we collect valid email addresses so that we can contact our subscribers.

//test for linked input to button

test('the button is disabled until a valid email is entered', async () => {
  // in here you'll want to assert that the submit button is disabled with some invalid emails and finally assert that it is no longer disabled when a valid email is typed in.
  // INVALID: '', 'jondoe', 'jondoe@', 'johndoe@google'
  // VALID: 'jondoe@google.com'
  render(<SubscribeToPets />);

  const button = screen.getByRole('button', { name: /subscribe/i });
  expect(button).toBeDisabled();

  const input = screen.getByLabelText(/email/i);

  const invalidEmails = [
    '',
    'hello',
    'hello.com',
    'hello@',
    'hello@nothcoders',
  ];

  for (let i = 0; i < invalidEmails.length; i++) {
    await userEvent.type(input, invalidEmails[i]);
    expect(button).toBeDisabled();
    //console.log(input.value);
    userEvent.clear(input);
  }

  const validEmail = 'hello@google.com';
  await userEvent.type(input, validEmail);
  expect(button).toBeEnabled();
});
