import React from 'react';

export class App extends React.Component {
  state = { text: 'Set sail' };

  render() {
    return (
      <button onClick={() => this.setState({ text: 'Sailing!' })}>
        {this.state.text}
      </button>
    );
  }
}
