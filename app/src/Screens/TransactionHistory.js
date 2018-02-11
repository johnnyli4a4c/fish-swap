import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransactionTable from '../Components/TransactionTable';

class TransactionHistory extends Component {
  render() {
    const { transactions } = this.props;

    return (
      <div className="TransactionHistory">
        <header className="TransactionHistory-header">
        </header>
        <TransactionTable transactions={transactions}/>
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
