import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';

const headerData = [
    { id: 'fish', label: 'Fish' },
    { id: 'min', label: 'Min Price ($)' },
    { id: 'max', label: 'Max Price ($)' },
    { id: 'avg', label: 'Avg Price ($)' },
    { id: 'country', label: 'Country' },
  ];
  
class PriceTableHead extends React.Component {
  createSortHandler = property => event => {
      this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {headerData.map(header => {
            return (
              <TableCell
                key={header.id}
                sortDirection={orderBy === header.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={order}
                  onClick={this.createSortHandler(header.id)}
                  >
                  {header.label}
                </TableSortLabel>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default PriceTableHead;
