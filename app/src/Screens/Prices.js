import React, { Component } from 'react';
import { connect } from 'react-redux'
import FishFilter from '../Components/FishFilter.js'; 
import CountryDropDownMenu from '../Components/CountryDropDownMenu.js';
import PriceTable from '../Components/PriceTable.js'; 

class Prices extends Component {

  // state = {
  //   selectedFish: 0,
  //   selectedCountry: 0,
  // };

  // updateState = ((selectedFish, selectedCountry) => {
  //   this.setState({
  //     selectedFish: selectedFish,
  //     selectedCountry: selectedCountry
  //   })
  //   console.log(this.state);
  // });

  render() {
    const { prices } = this.props;

    return (
      <div className="Prices">
        <header className="Prices-header">
          <h1 className="Prices-title"></h1>
        </header>
          {/* <FishFilter 
            state={this.state} 
            updateState={this.updateState} 
            fish={this.props.fish}
          /> 
          <CountryDropDownMenu 
            state={this.state}
            updateState={this.updateState} 
            countries={this.props.countries}
          /> */}
          <PriceTable 
            prices={prices}
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
