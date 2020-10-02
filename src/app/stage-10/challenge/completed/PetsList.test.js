import React from 'react';
import { render, screen } from '@testing-library/react';
import nock from 'nock';
import 'dotenv';

import { PetsList } from './PetsList';

const { REACT_APP_API_BASE_URL } = process.env;
const PETS_ENDPOINT = '/pets';

const LOADING_TEXT = 'Loading pets…';

nock.disableNetConnect();

test('renders loading state followed by the pets list', async () => {
  const name1 = 'mock name 1';
  const name2 = 'mock name 2';
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .get(PETS_ENDPOINT)
    .reply(200, [
      { id: 1, name: name1 },
      { id: 2, name: name2 },
    ]);

  render(<PetsList />);

  expect(screen.queryByText(LOADING_TEXT)).toBeInTheDocument();
  expect(screen.queryByText(name1)).not.toBeInTheDocument();
  expect(screen.queryByText(name2)).not.toBeInTheDocument();

  await screen.findByText(name1);
  await screen.findByText(name2);
  expect(screen.queryByText(LOADING_TEXT)).not.toBeInTheDocument();
});

test('render error message when API fails to return pets list', async () => {
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .get(PETS_ENDPOINT)
    .reply(500);

  render(<PetsList />);

  const errorMessage = await screen.findByText('Unable to fetch pets.');
  expect(errorMessage).toHaveClass('alert--error');
});

test('renders pet image', async () => {
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .get(PETS_ENDPOINT)
    .reply(200, [
      { id: 1, name: 'Milo', imageUrl: 'https://cdn.pets.io/test.jpg' },
    ]);

  render(<PetsList />);
  const image = await screen.findByAltText('Photograph of Milo');
  expect(image).toHaveAttribute('src', 'https://cdn.pets.io/test.jpg');
});
