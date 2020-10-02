import React from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export class App extends React.Component {
  state = { hasPostedToEndpoint: false };

  handleClick = async () => {
    await axiosInstance.post('/passengers');
    this.setState({ hasPostedToEndpoint: true });
  };

  render() {
    return this.state.hasPostedToEndpoint ? (
      <div>Manifest accepted. Ready for launch!</div>
    ) : (
      <button onClick={this.handleClick}>Submit passenger manifest</button>
    );
  }
}
