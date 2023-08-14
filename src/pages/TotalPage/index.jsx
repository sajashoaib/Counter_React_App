import React from 'react';
class TotalPage extends React.Component {
  render() {
    const { totalValue } = this.props;

    return (
      <div>
        <h2>Total: {totalValue}</h2>
      </div>
    );
  }
}
export default TotalPage;
