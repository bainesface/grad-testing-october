import React from 'react';
import {
  render,
  screen,
  fireEvent,
  // waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('we can find a portion of text within the page', () => {
  render(
    <div>
      Call me Ishmael. Some years ago — never mind how long precisely — having
      little or no money in my purse, and nothing particular to interest me on
      shore, I thought I would sail about a little and see the watery part of
      the world.
    </div>
  );
  screen.getByText(/sail about a little/);
});

test('we can find a form field by its label', () => {
  render(
    <form>
      <label htmlFor="ship-name">Ship name</label>
      <input id="ship-name" type="text" />
      <label htmlFor="cargo">Cargo</label>
      <input id="cargo" type="text" />
    </form>
  );

  screen.getByLabelText('Ship name');
});

test('we can find a form field by its value', () => {
  render(
    <form>
      <label htmlFor="ship-name">Ship name</label>
      <input id="ship-name" type="text" />
      <label htmlFor="cargo">Cargo</label>
      <input id="cargo" type="text" />
    </form>
  );

  // Set the value for the field directly - we'll show how to do this in a more user-y way later
  const shipField = screen.getByLabelText('Ship name');
  shipField.value = 'The Pequod';

  screen.getByDisplayValue('The Pequod'); // our username field
});

test('we can interact with elements', () => {
  render(
    <>
      <h1>Pilot the ship!</h1>
      <button>Steer to port</button>
      <button>Steer to starboard</button>
      <button>Hoist the mainsail</button>
    </>
  );

  fireEvent.click(screen.getByText('Hoist the mainsail'));
});

test('we can fill out a form', async () => {
  render(
    <form>
      <label htmlFor="ship-name">Ship name</label>
      <input id="ship-name" type="text" />
      <label htmlFor="cargo">Cargo</label>
      <input id="cargo" type="text" />
    </form>
  );

  // Simulate user input into our form
  const shipField = screen.getByLabelText('Ship name');
  const cargoField = screen.getByLabelText('Cargo');
  await userEvent.type(shipField, 'The Pequod');
  await userEvent.type(cargoField, 'The costliest cargoes of the east');

  // Let's check it worked!
  screen.getByDisplayValue('The Pequod');
  screen.getByDisplayValue('The costliest cargoes of the east');
});

test('we can prove elements have accessibility hints', () => {
  render(
    <>
      <img alt="" src="/path/to/a/map.svg" aria-labelledby="map-description" />
      <p id="map-description">
        The map shows the the Cape of Good Hope, with Cape Town just visible in
        the northern segment. Shipping routes to the south are shown, going
        east, south and west
      </p>
    </>
  );

  screen.getByLabelText(/The map/);
});

test('we can listen for elements to appear', async () => {
  class WhiteWhale extends React.Component {
    state = { underwater: true };

    componentDidMount() {
      setTimeout(() => this.setState({ underwater: false }), 300);
    }

    render() {
      if (this.state.underwater) {
        return <p>Nobody here...</p>;
      } else {
        return <p>Avast! A great big white whale!</p>;
      }
    }
  }

  render(<WhiteWhale />);

  expect(screen.queryByText(/Avast!/)).not.toBeInTheDocument();

  // Wait for whale to appear
  // await waitFor(() => screen.getByText(/Avast!/));

  // findBy* queries are a nice shorthand for this
  await screen.findByText(/Avast!/);
});

test('we can also listen for elements to DISappear', async () => {
  class WhiteWhale extends React.Component {
    state = { underwater: false };

    constructor() {
      super();
      setTimeout(() => this.setState({ underwater: true }), 1000);
    }

    render() {
      if (this.state.underwater) {
        return <p>Nobody here...</p>;
      } else {
        return <p>Avast! A great big white whale!</p>;
      }
    }
  }

  render(<WhiteWhale />);

  screen.getByText(/Avast!/);
  // Wait for whale to disappear
  await waitForElementToBeRemoved(() => screen.getByText(/Avast!/));
});
