import React from 'react';

import { render } from '@testing-library/react';
// you'll want to import `userEvent` in order to trigger the change event in the input.
// import userEvent from '@testing-library/user-event';

import { SubscribeToPets } from './SubscribeToPets';

// add tests here
test('', () => {
  // in here you'll want to assert that the submit button is disabled with some invalid emails and finally assert that it is no longer disabled when a valid email is typed in.
  // INVALID: '', 'jondoe', 'jondoe@', 'johndoe@google'
  // VALID: 'jondoe@google.com'
  render(<SubscribeToPets />);
});
