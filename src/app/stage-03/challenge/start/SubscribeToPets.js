import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Button } from 'component-library';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

class SubscriptionForm extends React.Component {
  state = {
    submitPending: false,
    email: '',
    isSuccessful: false,
    // you'll want to track the current value of the email input and if the submission has succeeded.
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitPending: true });

    // you'll want to trigger a post request and then update the state in order to notify users of a successful submission
    // For this exercise you can assume that all posts to `/subscribe` are successful and there's no need to pass in the data at this stage.
    await axiosInstance
      .post('/subscribe')
      .then(() => {
        this.setState({ submitPending: false, isSuccessful: true });
      })
      .catch(console.log);
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ email: value });
  };

  render() {
    const { submitPending, email, isSuccessful } = this.state;
    const isEmailValid = isEmail(email);

    // you'll want to render the success message instead of the form if the submission succeeded.

    return isSuccessful ? (
      <p>{`Subscription successful for ${email}`}</p>
    ) : (
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
