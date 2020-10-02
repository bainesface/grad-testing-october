import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { App } from './';

test('when the "Set sail" button is clicked, it changes its text to "Sailing!"', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Set sail' });
  fireEvent.click(button);
  expect(button).toHaveTextContent('Sailing!');
});
