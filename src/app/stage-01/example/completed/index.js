import React from 'react';
import { sentenceCase } from 'change-case';

const validateEntry = (entry) => /(\w+\W*\s){3,}\w/.test(entry);

export class App extends React.Component {
  state = {
    inputLogEntry: '',
    formattedLogEntry: '',
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ inputLogEntry: value });
  };

  handleClick = () => {
    this.setState({
      formattedLogEntry: sentenceCase(this.state.inputLogEntry),
    });
  };

  render() {
    const { inputLogEntry, formattedLogEntry } = this.state;
    const isValid = validateEntry(inputLogEntry);
    return (
      <div className="container">
        <label htmlFor="log-entry">
          Log entry (Please enter more than 3 words)
        </label>
        <input
          id="log-entry"
          type="text"
          onChange={this.handleChange}
          value={inputLogEntry}
        />
        <p>{formattedLogEntry}</p>
        <button disabled={!isValid} onClick={this.handleClick}>
          Convert!
        </button>
      </div>
    );
  }
}
