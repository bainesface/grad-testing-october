import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '.';

test('can display text passed as props', () => {
  render(<Button>Click me!</Button>);

  screen.getByRole('button', { name: 'Click me!' });
});

test('invokes an onClick function when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me!</Button>);

  expect(handleClick).not.toHaveBeenCalled();

  const button = screen.getByRole('button', { name: 'Click me!' });
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});

test('an onClick handler function is not able to be invoked when button is disabled', () => {
  const handleClick = jest.fn();
  render(
    <Button onClick={handleClick} disabled>
      Click me!
    </Button>
  );

  const button = screen.getByRole('button', { name: 'Click me!' });
  fireEvent.click(button);

  expect(handleClick).not.toHaveBeenCalled();
});
