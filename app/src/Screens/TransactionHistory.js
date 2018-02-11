import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransactionTable from '../Components/TransactionTable';
import { fetchTransactions, fetchCountries, fetchFishes, fetchBuyers, fetchSellers } from '../Actions';

class TransactionHistory extends Component {
  componentWillMount(){
    this.props.fetchTransactions();
    this.props.fetchCountries();
    this.props.fetchFishes();
    this.props.fetchBuyers();
    this.props.fetchSellers();
  }

  render() {
    const { transactions, countries, fishes, buyers, sellers} = this.props;

    return (
      <div className="TransactionHistory">
        <header className="TransactionHistory-header">
        </header>
        <TransactionTable 
          transactions={transactions}
          countries={countries}
          fishes={fishes}
          buyers={buyers}
          sellers={sellers}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    countries: state.countries,
    fishes: state.fishes,
    buyers: state.buyers,
    sellers: state.sellers
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
    },
    fetchBuyers: () => {
      dispatch(fetchBuyers())
    },
    fetchSellers: () => {
      dispatch(fetchSellers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory);
