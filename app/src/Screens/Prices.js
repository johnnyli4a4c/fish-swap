import React, { Component } from 'react';
import { connect } from 'react-redux'

class Prices extends Component {
  state = {
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
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
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
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
            >              
            <TableRow key="0">
                <TableRowColumn>Salmon</TableRowColumn>
                <TableRowColumn>$1</TableRowColumn>
                <TableRowColumn>$3</TableRowColumn>
                <TableRowColumn>$2</TableRowColumn>
                <TableRowColumn>Canada</TableRowColumn>
              </TableRow>
          </TableBody>
          </Table>
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
