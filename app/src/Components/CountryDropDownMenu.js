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
    
      handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
          <div>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Canada" />
              <MenuItem value={2} primaryText="US" />
            
            </DropDownMenu>
          </div>
        );
      }
}
