import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';

const headerData = [
    { id: 'seller', label: 'Seller' },
    { id: 'buyer', label: 'Buyer' },
    { id: 'fish', label: 'Fish' },
    { id: 'price', label: 'Price $' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'country', label: 'Country' },
    { id: 'date', label: 'Date' },
  ];

class TransactionTable extends React.Component {

  render() {
    const { transactions, countries, fishes } = this.props;
    
    return (
      <div>
        <Table>
        <TableHead>
            <TableRow>
            {headerData.map(header => {
                return (
                <TableCell key={header.id}>
                    {header.label}
                </TableCell>
                );
            }, this)}
            </TableRow>
        </TableHead>
        <TableBody>
            {transactions.map(transaction => {
            return (
                <TableRow hover key={
                  transaction.buyerId + "-" + 
                  transaction.sellerId + "-" + 
                  transactions.price + "-" + 
                  transaction.date }>
                <TableCell>{transaction.sellerId}</TableCell>
                <TableCell>{transaction.buyerId}</TableCell>
                <TableCell>
                  {
                    fishes.length !==0 &&
                    fishes.find(fish => {
                      return fish.id === transaction.fishId
                    }).name
                  }
                </TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>{transaction.quantity}</TableCell>
                <TableCell>
                  {
                    countries.length !==0 &&
                    countries.find(country => {
                      return country.id === transaction.countryId
                    }).name
                  }
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
        </Table>
      </div>
    );
  }
}

export default TransactionTable;
