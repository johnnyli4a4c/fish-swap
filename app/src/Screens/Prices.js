import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPrices, fetchCountries, fetchFishes } from '../Actions';
import PriceTable from '../Components/PriceTable.js';

class Prices extends Component {
  componentWillMount(){
    this.props.fetchPrices();
    this.props.fetchCountries();
    this.props.fetchFishes();
  }

  render() {
    const { prices, countries, fishes } = this.props;
    return (
      <div className="Prices">
          <PriceTable prices={prices} countries={countries} fishes={fishes}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prices: state.prices,
    countries: state.countries,
    fishes: state.fishes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPrices: () => {
      dispatch(fetchPrices())
    },
    fetchCountries: () => {
      dispatch(fetchCountries())
    },
    fetchFishes: () => {
      dispatch(fetchFishes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
