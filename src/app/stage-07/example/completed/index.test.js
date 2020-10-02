import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from '.';

test('render wheel pointing north by default', () => {
  render(<App />);
  const funButton = screen.queryByRole('button');

  expect(funButton).toHaveTextContent('Click to head north');
  expect(funButton).toHaveClass('wheel--north');
});

test('can toggle between wheel pointing north and south', () => {
  render(<App />);
  const funButton = screen.queryByRole('button');

  userEvent.click(funButton);
  expect(funButton).toHaveTextContent('Click to head south');
  expect(funButton).toHaveClass('wheel--south');

  userEvent.click(funButton);
  expect(funButton).toHaveTextContent('Click to head north');
  expect(funButton).toHaveClass('wheel--north');
});
