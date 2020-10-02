import React from 'react';
import { render, screen } from '@testing-library/react';
import { fetchWhaleWatchingData } from '_fakeModules';

import { App } from '.';

jest.mock('_fakeModules');

test('render loading text', () => {
  render(<App />);
  expect(screen.queryByText('Loading data…')).toBeInTheDocument();
});

test('render bar chart from whale watching results', async () => {
  const result = [50, 25, 80];
  fetchWhaleWatchingData.mockReturnValue(result);
  render(<App />);

  await screen.findAllByText(/Ship/);
  result.forEach((value, index) => {
    expect(
      screen.getByText(`Ship ${index + 1} (${value}%)`)
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('bar')[index]).toHaveAttribute(
      'style',
      `width: ${value}%;`
    );
  });
});
