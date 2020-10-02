import React from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export class App extends React.Component {
  state = { hasPostedToEndpoint: false };

  handleClick = async () => {
    await axiosInstance.post('/launch-ship', { ship: 'pequod' });
    this.setState({ hasPostedToEndpoint: true });
  };

  render() {
    return this.state.hasPostedToEndpoint ? (
      <div>Ship launched!</div>
    ) : (
      <button onClick={this.handleClick}>Launch The Pequod</button>
    );
  }
}
