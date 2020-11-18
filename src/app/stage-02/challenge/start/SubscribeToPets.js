import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Button } from 'component-library';

class SubscriptionForm extends React.Component {
  state = {
    email: '',
    hasBeenClicked: false,
    // you'll want some state to track if the submission is pending
  };

  // you'll want to handle the form submission to update state, you'll also want to prevent the browser default submission with `e.preventDefault()`.
  // handleSubmit = e => {}

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ email: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ hasBeenClicked: true });
  };

  render() {
    const { email, hasBeenClicked } = this.state;
    const isEmailValid = isEmail(email);
    return (
      // you'll want to add an `onSubmit` handler to handle form submissions
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" onChange={this.handleChange} value={email} />
        </label>
        {/* you'll want to conditionally render the text based on the submission pending state "Subscribe" or "Submitting…" */}
        <Button disabled={!isEmailValid} type="submit">
          {hasBeenClicked ? 'Submitting' : 'Subscribe'}
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
