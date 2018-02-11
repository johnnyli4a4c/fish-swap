import React, { Component } from 'react';
import TransactionForm from '../Components/TransactionForm.js'

class Transaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: "",
      price: "",
      fish: "",
      quantity: "",
      buyer: "",
      buyerNumber: ""
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

  handleBuyerNameChanges = (val) => {
    this.setState({
      buyer: val
    })
  };

  handleBuyerNumberChanges = (val) => {
    this.setState({
      buyerNumber: val
    })
  };

  handleOnSend = (val) => {
    let date = this.state.date
    let price = this.state.price
    let fish = this.state.fish
    let quantity = this.state.quantity
    let buyerName = this.state.buyer
    let buyerNumber = this.state.buyerNumber
    
    if (!date) {
     console.log("date empty") 
    }

    if (!price) {
      console.log("price empty") 
    }

    if (!fish) {
      console.log("fish empty") 
    }

    if (!quantity) {
      console.log("quantity empty") 
    }

    if (buyerName) {
      
    }

    if (buyerNumber) {

    }
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

export default Transaction;