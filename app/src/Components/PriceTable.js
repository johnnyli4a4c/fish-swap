import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import PriceTableHead from '../Components/PriceTableHead.js' 

class PriceTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: '',
      data: props.prices
    };

    console.log(props)
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  render() {
    const { data, order, orderBy } = this.state;
  
    return (
      <Paper>
        <div>
          <Table>
            <PriceTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {data.map(price => {
                return (
                  <TableRow hover key={price.fish.id}>
                    <TableCell>{price.fish.name}</TableCell>
                    <TableCell>{price.min}</TableCell>
                    <TableCell>{price.max}</TableCell>
                    <TableCell>{price.average}</TableCell>
                    <TableCell>{price.country.name}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default PriceTable;
