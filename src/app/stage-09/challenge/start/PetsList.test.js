import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import nock from 'nock';
import 'dotenv';

nock.disableNetConnect();
import { PetsList } from './PetsList';

// - Use the `/pets` endpoint with a GET request to fetch the pets
// - Render the pet title and the image
// - render a loading state while waiting for the pets to be returned from the service
// - render an error message using the `<Alert>` component from the component library if the service fails
// - render the image inside of the `<Image>` component from the component library

const { REACT_APP_API_BASE_URL } = process.env;

test('renders a loading state initially, makes a successful get request to /pets endpoint, rendering the title and image for each pet', async () => {
  const pets = [
    {
      id: 1,
      imageUrl: 'http://placekitten.com/320/180',
      name: 'lucky',
    },
    {
      id: 2,
      imageUrl: 'http://placedog.net/320/180',
      name: 'noisette',
    },
    {
      id: 3,
      imageUrl: 'http://placekitten.com/g/320/180',
      name: 'rusty',
    },
  ];

  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .get('/pets')
    .reply(200, { pets });

  render(<PetsList />);

  screen.getByText(/loading/i);
  await waitForElementToBeRemoved(screen.getByText(/loading/i));

  pets.forEach((pet) => {
    screen.getByText(`${pet.name}`);
    const image = screen.getByAltText(`${pet.name} the pet`);
    expect(image).toHaveAttribute('src', pet.imageUrl);
  });
});

test('renders the error alert when the request has been unsuccessful', async () => {
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .get('/pets')
    .reply(500);

  render(<PetsList />);

  screen.getByText(/loading/i);

  await screen.findByText(/error/i);

  // console.log(errorMessage);
});
