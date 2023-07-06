import React from 'react';
class TotalPage extends React.Component {
  render() {
    const { counters } = this.props;
    const total = counters.reduce((sum, counter) => sum + counter.value, 0);

    return (
      <div>
        <h2>Total: {total}</h2>
      </div>
    );
  }
}
export default TotalPage;