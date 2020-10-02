import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import 'dotenv';

import { App } from '.';

nock.disableNetConnect();

const { REACT_APP_API_BASE_URL } = process.env;

test('render error message instead of button when search endpoint returns an error', async () => {
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post('/search-for-whales')
    .reply(500);

  render(<App />);
  const button = screen.queryByText('Search for whales!');

  userEvent.click(button);

  await screen.findByText('Something went wrong with our sonar!');
  expect(button).not.toBeInTheDocument();
});
