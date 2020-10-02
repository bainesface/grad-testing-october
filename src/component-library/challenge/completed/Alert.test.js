import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Alert } from '.';

test('renders children', () => {
  const text = 'I am some text';
  render(<Alert>{text}</Alert>);
  screen.getByText(text);
});

test('renders with default testid that can be overridden', () => {
  const { rerender } = render(<Alert>Message</Alert>);
  expect(screen.getByTestId('alert-component')).toHaveTextContent('Message');

  rerender(<Alert testId="updated-testid">New Message</Alert>);
  expect(screen.getByTestId('updated-testid')).toHaveTextContent('New Message');
});

test('can move the highlighted line to the top', () => {
  const { rerender } = render(<Alert>Message</Alert>);

  const renderedComponent = screen.getByText('Message');

  expect(renderedComponent).not.toHaveClass('alert--top-border');

  rerender(<Alert topLine>Message</Alert>);

  expect(renderedComponent).toHaveClass('alert--top-border');
});

test('renders info variant by default', () => {
  render(<Alert>Message</Alert>);
  const component = screen.getByText('Message');

  expect(component).not.toHaveClass('alert--error');
  expect(component).not.toHaveClass('alert--success');

  expect(component).toHaveClass('alert--info');
});

test('can render success variant', () => {
  render(<Alert variant="success">Message</Alert>);
  const component = screen.getByText('Message');

  expect(component).not.toHaveClass('alert--info');
  expect(component).not.toHaveClass('alert--error');

  expect(component).toHaveClass('alert--success');
});

test('can render error variant', () => {
  render(<Alert variant="error">Message</Alert>);
  const component = screen.getByText('Message');

  expect(component).not.toHaveClass('alert--info');
  expect(component).not.toHaveClass('alert--success');

  expect(component).toHaveClass('alert--error');
});
