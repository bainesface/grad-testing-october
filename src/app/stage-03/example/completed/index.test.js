import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import 'dotenv';

import { App } from '.';

nock.disableNetConnect();

const { REACT_APP_API_BASE_URL } = process.env;

test('when button is clicked and the endpoint is successfully hit the UI updates with success text', async () => {
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post('/passengers')
    .reply(200);

  render(<App />);
  const button = screen.queryByRole('button', {
    name: 'Submit passenger manifest',
  });
  userEvent.click(button);

  await screen.findByText(/Manifest accepted/);
  expect(button).not.toBeInTheDocument();
});
