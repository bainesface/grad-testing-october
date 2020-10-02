import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

test('allows custom text', () => {
  render(<Button>Click me!</Button>);
  expect(screen.queryByText('Click me!')).toBeInTheDocument();
});

test('calls onClick handler (if provided) when clicked', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Click me!</Button>);
  const button = screen.queryByText('Click me!');

  expect(onClick).not.toHaveBeenCalled();

  userEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

test('does not call the onClick handler when set to disabled', () => {
  const onClick = jest.fn();
  render(
    <Button onClick={onClick} disabled>
      Click me!
    </Button>
  );
  const button = screen.queryByText('Click me!');

  userEvent.click(button);
  expect(onClick).not.toHaveBeenCalled();
});
