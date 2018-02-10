import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

export default class PriceTable extends Component {
  attributes = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: false,
    showCheckboxes: false,
    height: '300px',
  };

  constructor(props) {
    super(props);
    this.state = {
      filteredPrices: this.props.prices.filter(
        price => 
          (price.fish.id === this.props.state.selectedFish && 
          price.country.id === this.props.state.selectedCountry) || true
      )
    };
  }

  filterPrices = (() => {
    return this.props.prices.filter(
      price => 
        (this.props.state.selectedFish === 0 && 
          this.props.state.selectedCountry === 0) ||
        (this.props.state.selectedFish === 0 &&
          price.country.id === this.props.state.selectedCountry) ||
        (price.fish.id === this.props.state.selectedFish && 
          this.props.state.selectedCountry === 0) ||
        (price.fish.id === this.props.state.selectedFish && 
        price.country.id === this.props.state.selectedCountry)
    )})

  render() {
      return (
          <Table
            height={this.attributes.height}
            fixedHeader={this.attributes.fixedHeader}
            fixedFooter={this.attributes.fixedFooter}
            selectable={this.attributes.selectable}
            multiSelectable={this.attributes.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.attributes.showCheckboxes}
              adjustForCheckbox={this.attributes.showCheckboxes}
              enableSelectAll={this.attributes.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn tooltip="The Fish">Fish</TableHeaderColumn>
                <TableHeaderColumn tooltip="Min Price">Min</TableHeaderColumn>
                <TableHeaderColumn tooltip="Max Price">Max</TableHeaderColumn>
                <TableHeaderColumn tooltip="Average Price">Average</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Country">Country</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.attributes.showCheckboxes}
              deselectOnClickaway={this.attributes.deselectOnClickaway}
              showRowHover={this.attributes.showRowHover}
              stripedRows={this.attributes.stripedRows}
            >        

              {this.filterPrices().map( (price, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{price.fish.name}</TableRowColumn>
                  <TableRowColumn>{price.min}</TableRowColumn>
                  <TableRowColumn>{price.max}</TableRowColumn>
                  <TableRowColumn>{price.average}</TableRowColumn>
                  <TableRowColumn>{price.country.name}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
        </Table>
      );
    }
}
