import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransactionTable from '../Components/TransactionTable';
import { fetchTransactions, fetchCountries, fetchFishes } from '../Actions';

class TransactionHistory extends Component {
  componentWillMount(){
    this.props.fetchTransactions();
    this.props.fetchCountries();
    this.props.fetchFishes();
  }

  render() {
    const { transactions, countries, fishes } = this.props;

    return (
      <div className="TransactionHistory">
        <header className="TransactionHistory-header">
        </header>
        <TransactionTable 
          transactions={transactions}
          countries={countries}
          fishes={fishes}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    countries: state.countries,
    fishes: state.fishes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => {
      dispatch(fetchTransactions())
    },
    fetchCountries: () => {
      dispatch(fetchCountries())
    },
    fetchFishes: () => {
      dispatch(fetchFishes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory);
