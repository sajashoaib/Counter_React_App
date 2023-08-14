import React, { Component } from 'react';
import Container from '../../component/Container';
import './style.css'
class CounterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleIncrement = () => {
        const { onIncrement } = this.props;
        this.setState(
          (prevState) => ({ count: prevState.count + 1 }),
          () => {
            onIncrement(1);
          }
        );
      };

      handleDecrement = () => {
        const { onDecrement } = this.props;
        this.setState(
          (prevState) => ({ count: prevState.count - 1 }),
          () => {
            onDecrement(1);
          }
        );
      };

    render() {
        const {count } = this.state;

        return (
            <div>
                <span>Value: {count}</span>
                <button style={{ background: 'rgb(237, 69, 190)', color: 'white' }} onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement} style={{ background: 'rgb(69, 206, 237)', color: 'white' }}>-</button>
            </div>
        );
    }
}
export default CounterPage;

