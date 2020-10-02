import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Button } from 'component-library';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

class SubscriptionForm extends React.Component {
  state = {
    email: '',
    submitPending: false,
    submitSuccess: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitPending: true });
    const { email } = this.state;

    await axiosInstance.post('/subscribe', { email });

    this.setState({
      submitPending: false,
      submitSuccess: true,
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ email: value });
  };

  render() {
    const { submitPending, submitSuccess, email } = this.state;
    const isEmailValid = isEmail(email);

    if (submitSuccess) {
      return <p>Subscription successful for {email}</p>;
    }

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
