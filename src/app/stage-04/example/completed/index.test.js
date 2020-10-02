import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import 'dotenv';

import { App } from '.';

nock.disableNetConnect();

const { REACT_APP_API_BASE_URL } = process.env;

test('when the launch button is clicked the launch endpoint is called with the correct body and a success message is displayed', async () => {
  let requestBody = '';

  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post('/launch-ship')
    .reply(200, (_, body) => (requestBody = body));

  render(<App />);

  userEvent.click(screen.queryByText('Launch The Pequod'));
  await screen.findByText('Ship launched!');
  expect(requestBody).toEqual({ ship: 'pequod' });
});
