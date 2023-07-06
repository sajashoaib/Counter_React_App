import React, { useState } from 'react';
import TotalPage from './pages/TotalPage';
import CounterPage from './pages/CounterPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counters: [{ value: 0 }, { value: 0 }, { value: 0 }]

    };
  }

  handleCounterChange = (index, value) => {
    const { counters } = this.state;
    const updatedCounters = [...counters];
    updatedCounters[index] = { value: value };
    this.setState({ counters: updatedCounters });
  }

  render() {
    const { counters } = this.state;

    return (
      <div>
        {counters.map((value, index) => (
          <CounterPage
            key={index}
            onIncrement={(amount) => this.handleCounterChange(index, amount)}
            onDecrement={(amount) => this.handleCounterChange(index, amount)}
          />
        ))}
        <TotalPage counters={counters} />
      </div>
    );
  }
}


export default App;