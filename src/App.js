import React, { useState } from 'react';
import TotalPage from './pages/TotalPage';
import CounterPage from './pages/CounterPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  total: 0,
    };
  }
 handleIncrement = (amount) => {
    this.setState((prevState) => ({
      total: prevState.total + amount,
    }));
  };

  handleDecrement = (amount) => {
    this.setState((prevState) => ({
      total: prevState.total - amount,
    }));
  };

  render() {
    const counters = Array(4).fill(null);
    const { total } = this.state;

    return (
      <div>
        {counters.map((_, index) => (
          <CounterPage
            key={index}
           onIncrement={this.handleIncrement}
           onDecrement={this.handleDecrement}
          />
        ))}
               <TotalPage totalValue={total} />

      </div>
    );
  }
}


export default App;

