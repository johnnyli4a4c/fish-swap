import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from 'material-ui/Table';
import PriceTableHead from '../Components/PriceTableHead.js' 
import FilterFishTextField from '../Components/FilterFishTextField.js' 

class PriceTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: '',
      filterBy: '',
    };
  }

  // handleRequestSort = (event, property) => {
  //   const orderBy = property;
  //   let order = 'desc';

  //   if (this.state.orderBy === property && this.state.order === 'desc') {
  //     order = 'asc';
  //   }

  //   const data =
  //     order === 'desc'
  //       ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
  //       : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

  //   this.setState({ data, order, orderBy });
  // };

  handleRequestFilter = (value) => {
    const filterBy = value;
    this.setState({ filterBy });
  }

  render() {
    const { order, orderBy, filterBy } = this.state;
    const { prices, countries, fishes } = this.props;

    return (
      <div>
        <FilterFishTextField onRequestFilter={this.handleRequestFilter}/>
        <Table>
          <PriceTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {prices.filter(function (price) {
              return filterBy === '' || price.fish.name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1;
            }).map(price => {
              return (
                <TableRow hover key={price.fishId}>
                  <TableCell>
                    {fishes.length !== 0 &&
                      fishes.find(fish => {
                        return fish.id === price.fishId
                      }).name
                    }
                  </TableCell>
                  <TableCell>{price.min}</TableCell>
                  <TableCell>{price.max}</TableCell>
                  <TableCell>{price.average}</TableCell>
                  <TableCell>
                    {countries.length !== 0 &&
                      countries.find(country => {
                        return country.id === price.countryId
                      }).name
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default PriceTable;
