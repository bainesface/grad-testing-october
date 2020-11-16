import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from '.';

test('reuses the button and image components,  ', () => {
  render(<Counter />);

  const src = 'https://i.imgur.com/g3LfxdB.jpg';
  screen.getByRole('button', { name: 'Pet me!' });
  const catImg = screen.getByRole('img', { alt: 'Grumpy Cat' });
  expect(catImg).toHaveAttribute('src', src);
});

test('displays the number of pets given to a cat, beginning at 0', () => {
  render(<Counter />);

  const numStrokes = screen.getByTitle('strokes');
  expect(numStrokes).toHaveTextContent('0');
  const button = screen.getByRole('button', { name: 'Pet me!' });
  userEvent.click(button);
  expect(numStrokes).toHaveTextContent('1');
});

test('when the cat has been stroked 5 times the image swtiches from grumpy to happy cat, and disables the button', () => {
  render(<Counter />);

  const numStrokes = screen.getByTitle('strokes');
  expect(numStrokes).toHaveTextContent('0');
  screen.getByAltText('grumpy cat');
  const button = screen.getByRole('button', { name: 'Pet me!' });
  userEvent.click(button);
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
