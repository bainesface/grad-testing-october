import 'dotenv';
import nock from 'nock';
import { fetchPets, subscribe } from './services';

const { REACT_APP_API_BASE_URL } = process.env;

nock.disableNetConnect();

test('fetchPets returns data', async () => {
  const expectedData = { id: 1, name: 'Ben' };
  const PETS_ENDPOINT = '/pets';

  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .get(PETS_ENDPOINT)
    .reply(200, expectedData);

  const result = await fetchPets();
  expect(result).toEqual(expectedData);
});

test('subscribe posts correct data', async () => {
  const SUBSCRIBE_ENDPOINT = '/subscribe';
  const email = 'janedoe@google.com';

  let requestBody = '';
  nock(REACT_APP_API_BASE_URL)
    .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
    .post(SUBSCRIBE_ENDPOINT)
    .reply(200, (_, body) => (requestBody = body));

  await subscribe(email);
  expect(requestBody).toEqual({ email });
});
