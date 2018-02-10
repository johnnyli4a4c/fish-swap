import React, { Component } from 'react';

class Prices extends Component {
  render() {
    const prices = this.props.prices;
    
    return (
      <div className="Prices">
        <header className="Prices-header">
          <h1 className="Prices-title">Prices</h1>
        </header>
        <p>
          Prices: {prices}
        </p>
        <p className="Prices-intro">
          This will eventually be table.
        </p>
      </div>
    );
  }
}

export default Prices;
