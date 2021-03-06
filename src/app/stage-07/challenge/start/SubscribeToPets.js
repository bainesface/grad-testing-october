import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Button } from 'component-library';
import { Alert } from '../../../../component-library/challenge/start/Alert';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

class SubscriptionForm extends React.Component {
  state = {
    email: '',
    submitPending: false,
    submitSuccess: false,
    submitError: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitPending: true });
    const { email } = this.state;

    try {
      await axiosInstance.post('/subscribe', { email });

      this.setState({
        submitPending: false,
        submitSuccess: true,
      });
    } catch {
      this.setState({
        submitPending: false,
        submitError: true,
      });
    }
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ email: value });
  };

  render() {
    const { submitPending, submitSuccess, email, submitError } = this.state;
    const isEmailValid = isEmail(email);

    if (submitError) {
      return (
        <Alert type="error">
          Sorry, we are unable to register your subscription at this time.
        </Alert>
      );
    }

    if (submitSuccess) {
      return (
        <Alert type="success">{`Subscription successful for ${email}`}</Alert>
      );
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={this.handleChange} />
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
