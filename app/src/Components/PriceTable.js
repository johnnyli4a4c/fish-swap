import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

export default class PriceTable extends React.Component {

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
        return (
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
        );
      }
}