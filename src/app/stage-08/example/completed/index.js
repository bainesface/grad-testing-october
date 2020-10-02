import React from 'react';
import { fetchWhaleWatchingData } from '_fakeModules';

export class App extends React.Component {
  state = { data: null };

  componentDidMount = async () => {
    const data = await fetchWhaleWatchingData(5);
    this.setState({ data });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <h2>This weeks whale watching excursion success rates</h2>
        {data ? (
          data.map((percentage, index) => (
            <div className="bar" key={index}>
              <div className="bar__label">
                Ship {index + 1} ({percentage}%)
              </div>
              <div
                className="bar__item"
                style={{ width: `${percentage}%` }}
                data-testid="bar"
              />
            </div>
          ))
        ) : (
          <div>Loading data…</div>
        )}
      </div>
    );
  }
}
