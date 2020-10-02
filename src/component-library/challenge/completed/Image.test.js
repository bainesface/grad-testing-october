import React from 'react';
import { render, screen } from '@testing-library/react';

import { Image } from '.';

test('image source can be set', () => {
  const src = 'http://myimage.com/x';
  const altText = 'Alt text';

  render(<Image alt={altText} src={src} />);

  expect(screen.getByAltText(altText)).toHaveAttribute('src', src);
});
