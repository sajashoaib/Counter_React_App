import React, { Component } from 'react';
import Container from '../../component/Container';
import './style.css'
class CounterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    handleIncrement = () => {
        const { value } = this.state;
        const { onIncrement } = this.props;
        this.setState({ value: value + 1 });
        if (onIncrement) {
            onIncrement(1);
        }
    };

    handleDecrement = () => {
        const { value } = this.state;
        const { onDecrement } = this.props;
        this.setState({ value: value - 1 });
        if (onDecrement) {
            onDecrement(-1);
        }
    };

    render() {
        const { value } = this.state;

        return (
            <div>
              
                  <span>{value}</span>
                <button style={{ background: 'rgb(237, 69, 190)', color: 'white' }} onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement} style={{background: 'rgb(69, 206, 237)', color: 'white'  }}>-</button>
               
            </div>
        );
    }
}
export default CounterPage;