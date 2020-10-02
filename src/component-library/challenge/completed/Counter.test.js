import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from '.';

test('can increment the number of pets', () => {
  // This test can be deleted after the second one is written and passing
  render(<Counter />);
  const numberOfPets = screen.getByTitle('Number of pets');
  const button = screen.getByText('Click to pet the cat and make him happy');

  expect(numberOfPets).toHaveTextContent(0);

  userEvent.click(button);

  expect(numberOfPets).toHaveTextContent(1);
});

test('when the number reaches 5, the image changes and the button is disabled', () => {
  render(<Counter />);
  const unhappyCatAltText = 'Unhappy cat';
  const unhappyCatSrc = 'https://imgur.com/g3LfxdB.jpg';
  const happyCatAltText = 'Happy cat';
  const happyCatSrc = 'https://i.imgur.com/iA0brpK.jpg';

  const button = screen.getByText('Click to pet the cat and make him happy');
  const numberOfPets = screen.getByTitle('Number of pets');
  const catImage = screen.getByAltText(unhappyCatAltText);

  expect(catImage).toHaveAttribute('src', unhappyCatSrc);
  expect(numberOfPets).toHaveTextContent(0);
  expect(button).not.toBeDisabled();

  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);

  expect(catImage).toHaveAttribute('src', unhappyCatSrc);
  expect(numberOfPets).toHaveTextContent(4);
  userEvent.click(button);

  expect(catImage).toHaveAttribute('src', happyCatSrc);
  expect(catImage).toHaveAttribute('alt', happyCatAltText);
  expect(numberOfPets).toHaveTextContent(5);
  expect(button).toBeDisabled();
});
