import React, { Component } from 'react';
import { connect } from 'react-redux'

class Prices extends Component {
  render() {
    const { prices } = this.props;

    return (
      <div className="Prices">
        <header className="Prices-header">
          <h1 className="Prices-title">Prices</h1>
        </header>
        <ul>
          Prices: {prices.map(price => {
            return <li key={price.fishId + "-" + price.countryId}>{JSON.stringify(price)}</li>
          })}
        </ul>
        <p className="Prices-intro">
          This will eventually be table.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prices: state.prices
  };
}

export default connect(mapStateToProps)(Prices);
