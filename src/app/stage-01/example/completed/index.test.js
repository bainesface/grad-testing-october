import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './';

test('button is disabled until a valid value is entered', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Convert!' });
  expect(button).toBeDisabled();

  const inputElement = screen.getByLabelText(/Log entry/);
  const invalidInputs = ['Hello', '1234', 'One fine day'];

  for (let i = 0; i < invalidInputs.length; i++) {
    await userEvent.type(inputElement, invalidInputs[i]);
    expect(button).toBeDisabled();
  }

  await userEvent.type(inputElement, 'gorgeous Cuba knows tornadoes');
  expect(button).not.toBeDisabled();
});

test('converts strings to sentence case', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Convert!' });
  const inputElement = screen.getByLabelText(/Log entry/);

  await userEvent.type(
    inputElement,
    'ALL THE YARD ARMS WERE TIPPED WITH A PALLID FIRE'
  );
  fireEvent.click(button);
  screen.getByText(/All the yard arms were tipped with a pallid fire/);
});
