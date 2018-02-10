import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class CountryDropDownMenu extends Component {

  handleOnChange = ((event, index, value) =>{
    this.setState({value})
    this.props.updateState(
      this.props.state.selectedFish,
      value
  )});

  render() {
    return (
      <DropDownMenu value={this.props.state.selectedCountry} onChange={this.handleOnChange}>
      {this.props.countries.map((country, index) => 
        <MenuItem 
          key={index} 
          value={index} 
          primaryText={country.name}
        />
      )}
      </DropDownMenu>
    );
  }
}
