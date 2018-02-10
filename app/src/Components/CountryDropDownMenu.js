import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
      width: 200,
    },
  };

export default class CountryDropDownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
      }
    
    handleChange = ((event, index, value) => (
        // TODO: Filter by country
        this.setState({value})
    ));

    render() {
        return (
          <div>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            {this.props.countries.map( (country, index) => (
              <MenuItem value={index} primaryText={country}/>
              ))}
            </DropDownMenu>
          </div>
        );
      }
}
