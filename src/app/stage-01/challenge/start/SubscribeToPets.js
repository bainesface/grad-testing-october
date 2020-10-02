import React from 'react';
import { Button } from 'component-library'; // you'll want to consume relevant components from the component library.

// use this package to test for valid emails.
// import isEmail from 'validator/lib/isEmail';

class SubscriptionForm extends React.Component {
  // you'll want to store whether or not the email is valid in state
  // state = {}

  // you'll want a function to handle input changes which updates the state
  // handleChange = e => {};

  render() {
    return (
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <Button disabled type="submit">
          Subscribe
        </Button>
      </form>
    );
  }
}

export const SubscribeToPets = () => (
  <div className="container container--sm">
    <h2>Subscribe to new pets</h2>
    <SubscriptionForm />
  </div>
);
