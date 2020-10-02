import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Button } from 'component-library';

class SubscriptionForm extends React.Component {
  state = {
    submitPending: false,
    email: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitPending: true });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ email: value });
  };

  render() {
    const { submitPending, email } = this.state;
    const isEmailValid = isEmail(email);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input value={email} type="email" onChange={this.handleChange} />
        </label>
        <Button disabled={!isEmailValid} type="submit">
          {submitPending ? 'Submitting…' : 'Subscribe'}
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
