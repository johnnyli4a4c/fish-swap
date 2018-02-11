import React, { Component } from 'react';
import { connect } from 'react-redux'
import TransactionForm from '../Components/TransactionForm.js'
import { addNewTransaction } from '../Actions';

class Transaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: "",
      price: "",
      fish: "",
      quantity: "",
      country: "",
      buyer: ""
    }
  }

  handleDateChanges = (val) => {
    this.setState({
      date: val
    })
  };

  handlePriceChanges = (val) => {
    this.setState({
      price: val
    })
  };

  handleFishChanges = (val) => {
    this.setState({
      fish: val
    })
  };

  handleQuantityChanges = (val) => {
    console.log(val)
    this.setState({
      quantity: val
    })
  };
  
  handleCountryChanges = (val) => {
    this.setState({
      country: val
    })
  };

  handleBuyerNameChanges = (val) => {
    this.setState({
      buyer: val
    })
  };

  handleOnSend = (val) => {
    let date = this.state.date
    let price = this.state.price
    let fish = this.state.fish
    let quantity = this.state.quantity
    let country = this.state.country
    let buyerName = this.state.buyer

    var data = {}
    
    if (!date) {
     console.log("date empty") 
     return
    }

    data.push({
      key: "date",
      value: date
    })

    if (!price) {
      console.log("price empty") 
      return
    }

    data.push({
      key: "price",
      value: price
    })

    if (!fish) {
      console.log("fish empty") 
      return
    }

    data.push({
      key: "fishId",
      value: fish
    })

    if (!quantity) {
      console.log("quantity empty") 
      return
    }

    data.push({
      key: "quantity",
      value: quantity
    })

    if (!country) {
      console.log("country empty")
      data.push({
        key: "countryId",
        value: country
      })
    }
    
    if (buyerName) {
      console.log("buyer name")
      data.push({
        key: "buyerId",
        value: buyerName
      })
    }

    console.log(data)
    this.props.addNewTransaction(data)
  };

  render() {
    return (
      <div>
        <TransactionForm
            handlequantityChanges = {this.handleDateChanges}
            handlePriceChanges = {this.handlePriceChanges}
            handleFishChanges = {this.handleFishChanges}
            handleQuantityChanges = {this.handleQuantityChanges}
            handleBuyerNameChanges = {this.handleBuyerNameChanges}
            handleBuyerNumberChanges = {this.handleBuyerNumberChanges}
            handleOnSend = {this.handleOnSend}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    transaction: state.transaction
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTransaction: (data) => {
      dispatch(addNewTransaction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
