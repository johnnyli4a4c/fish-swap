import React, { Component } from 'react';
import { connect } from 'react-redux'
import PriceTable from '../Components/PriceTable.js'; 

class Prices extends Component {
  render() {
    const { prices } = this.props;

    return (
      <div className="Prices">
        <header className="Prices-header">
        </header>
          <PriceTable prices={prices}
          />
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
