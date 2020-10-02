import React from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export class App extends React.Component {
  state = { hasError: false };

  handleClick = async () => {
    try {
      await axiosInstance.post('/search-for-whales', { sonar: true });
    } catch {
      this.setState({ hasError: true });
    }
  };

  render() {
    return this.state.hasError ? (
      <div>Something went wrong with our sonar!</div>
    ) : (
      <button onClick={this.handleClick}>Search for whales!</button>
    );
  }
}
