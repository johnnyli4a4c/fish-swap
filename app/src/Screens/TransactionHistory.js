import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransactionTable from '../Components/TransactionTable';
// import PriceTable from '../Components/PriceTable.js'; 

class TransactionHistory extends Component {
  render() {
    const { transactions } = this.props;

    return (
      <div className="TransactionHistory">
        <header className="TransactionHistory-header">
            <h1 className="TransactionHistory-title">History</h1>
        </header>
        <TransactionTable transactions={transactions}/>
        {/* <ul>
            Transactions: {transactions.map(transaction => {
            return <li key={transaction.sellerId + "-" + transaction.date}>{JSON.stringify(transaction)}</li>
            })}
        </ul> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
}

export default connect(mapStateToProps)(TransactionHistory);
