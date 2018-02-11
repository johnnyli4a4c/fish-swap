import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

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
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: props.transactions
    };
  }
  render() {
    const { data } = this.state;
  
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
            {data.map(transaction => {
            return (
                <TableRow hover key={transaction.date}>
                <TableCell>{transaction.seller.name}</TableCell>
                <TableCell>{transaction.buyer.name}</TableCell>
                <TableCell>{transaction.fish.name}</TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>{transaction.quantity}</TableCell>
                <TableCell>{transaction.country.name}</TableCell>
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
