import React from 'react';
import { Button } from 'component-library'; // you'll want to consume relevant components from the component library.
import isEmail from 'validator/lib/isEmail';

class SubscriptionForm extends React.Component {
  state = {
    email: '',
    // isValid: false,
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
    // const isValidEmail = isEmail(this.state.email);
    // if (isValidEmail) {
    //   this.setState({ isValid: true });
    // } else {
    //   this.setState({ isValid: false });
    // }
  };

  render() {
    const { email } = this.state;
    const isValidEmail = isEmail(email);

    return (
      <form>
        <label>
          Email:
          <input
            htmlFor="submitButton"
            value={email}
            onChange={this.handleChange}
            type="email"
          />
        </label>
        <Button id="submitButton" disabled={!isValidEmail} type="submit">
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
