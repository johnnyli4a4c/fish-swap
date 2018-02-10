import React, { Component } from 'react';
import { connect } from 'react-redux'
import CountryDropDownMenu from '../Components/CountryDropDownMenu.js';
import PriceTable from '../Components/PriceTable.js'; 

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
          <CountryDropDownMenu countries={this.props.countries}/>
          <PriceTable prices={this.props.prices}/>
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
