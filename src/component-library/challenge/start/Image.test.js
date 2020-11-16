import React from 'react';
import { render, screen } from '@testing-library/react';

import { Image } from '.';

test('alt text and src can be set for the image', () => {
  const src = 'black cat';
  const alt = 'Cute black cat';
  render(<Image src={src} alt={alt} />);

  screen.getByRole('img', { alt: 'Cute black cat' });
  expect(screen.getByAltText(alt)).toHaveAttribute('src', src);
});
