import React from 'react';
import { screen, render } from '@testing-library/react';

import { Alert } from './Alert';

const text = 'This is an alert!';

test('the component should render any children passed to it and is rendered depandant on which type the customer has chosen, defaulted to info', () => {
  const alertType = ['error', 'success'];
  const { rerender } = render(<Alert>{text}</Alert>);

  const alert = screen.getByText(text);
  expect(alert).not.toHaveClass(`alert alert--error`);
  expect(alert).not.toHaveClass(`alert alert--success`);
  expect(alert).toHaveClass(`alert alert--info`);

  for (let i = 0; i < alertType.length; i++) {
    rerender(<Alert type={alertType[i]}>{text}</Alert>);
    expect(alert).not.toHaveClass(`alert alert--info`);
    expect(alert).toHaveClass(`alert alert--${alertType[i]}`);
    //ideally we would test the not to have class for every other element in loop
  }
});

test('the colour bar is set at a default position on the left, but the customer can move it to the top', () => {
  const { rerender } = render(<Alert>{text}</Alert>);

  const alert = screen.getByText(text);
  expect(alert).toHaveClass(`alert alert--left-border`);
  expect(alert).toHaveClass(`alert alert--info`);
  expect(alert).not.toHaveClass(`alert alert--top-border`);

  rerender(<Alert position="top-border">{text}</Alert>);
  expect(alert).toHaveClass(`alert alert--top-border`);
  expect(alert).toHaveClass(`alert alert--info`);
  expect(alert).not.toHaveClass(`alert alert--error`);
  expect(alert).not.toHaveClass(`alert alert--success`);
});

test('Should have a configurable data-testid that has a default value of "alert-component', () => {
  const { rerender } = render(<Alert>{text}</Alert>);
  screen.getByTestId('alert-component');

  rerender(<Alert testId="hello!"></Alert>);
  screen.getByTestId('hello!');
});
