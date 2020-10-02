import React from 'react';
import { Wheel } from '_fakeModules';

const nextStateMapping = {
  n: 'north',
  s: 'south',
};

export class App extends React.Component {
  state = { compassHeading: 'n' };

  handleClick = () => {
    this.setState({
      compassHeading: this.state.compassHeading === 'n' ? 's' : 'n',
    });
  };

  render() {
    const { compassHeading } = this.state;
    return (
      <Wheel heading={compassHeading} onClick={this.handleClick}>
        Click to head {nextStateMapping[compassHeading]}
      </Wheel>
    );
  }
}
