import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

let counter = 0;
function createData(fish, min, max, avg, country) {
  counter += 1;
  return { id: counter, fish, min, max, avg, country };
}

const headerData = [
  { id: 'fish', label: 'Fish' },
  { id: 'min', label: 'Min Price' },
  { id: 'max', label: 'Max Price' },
  { id: 'avg', label: 'Avg Price' },
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

class PriceTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: '',
      data: [
        createData('Salmon', 1, 3, 2, 'Canada'),
        createData('Sake', 2, 4, 3, 'US'),
      ],
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
                  <TableRow hover key={price.id}>
                    <TableCell>{price.fish}</TableCell>
                    <TableCell>{price.min}</TableCell>
                    <TableCell>{price.max}</TableCell>
                    <TableCell>{price.avg}</TableCell>
                    <TableCell>{price.country}</TableCell>
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
