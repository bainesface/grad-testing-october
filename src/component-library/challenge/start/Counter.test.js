import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from '.';

test('displays the initial image and counter started at zero, allowing for the counter to be incremented using a button, changing the image upon reaching a certain criteria and disabling the button', () => {
  render(<Counter />);

  const src = 'https://i.imgur.com/g3LfxdB.jpg';
  screen.getByRole('button', { name: 'Pet me!' });
  const catImg = screen.getByRole('img', { alt: 'Grumpy Cat' });
  expect(catImg).toHaveAttribute('src', src);

  const numStrokes = screen.getByTitle('num-of-strokes');
  expect(numStrokes).toHaveTextContent('0');

  const button = screen.getByRole('button', { name: 'Pet me!' });
  userEvent.click(button);
  expect(numStrokes).toHaveTextContent('1');

  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);

  expect(numStrokes).toHaveTextContent('5');
  screen.getByAltText('happy cat');

  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(numStrokes).toHaveTextContent('5');
});
