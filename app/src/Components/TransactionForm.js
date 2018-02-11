import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

class TransactionTextFields extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fieldVal: ""
        }
    }

    dateUpdate = (e) => {
        this.props.handleDateChanges(e.currentTarget.value);
        this.setState({fieldVal: e.currentTarget.value});
    };
    
    priceUpdate = (e) => {
        this.props.handlePriceChanges(e.currentTarget.value);
        this.setState({fieldVal: e.currentTarget.value});
    };
    
    fishUpdate = (e) => {
        this.props.handleFishChanges(e.currentTarget.value);
        this.setState({fieldVal: e.currentTarget.value});
    };
    
    quantityUpdate = (e) => {
        this.props.handleQuantityChanges(e.currentTarget.value);
        this.setState({fieldVal: e.currentTarget.value});
    };
    
    buyerUpdate = (e) => {
        this.props.handleBuyerNameChanges(e.currentTarget.value);
        this.setState({fieldVal: e.currentTarget.value});
    };
    
    buyerNumberUpdate = (e) => {
        this.props.handleBuyerNumberChanges(e.currentTarget.value);
        this.setState({fieldVal: e.currentTarget.value});
    };
    
    clickSend = () => {
        console.log("submitting transaction");
        this.props.handleOnSend()
    };

    render() {
        return (
            <div>
                <FormControl>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue="MM-DD-YYYY"
                        onChange={this.dateUpdate}
                    /><br />
                    <InputLabel htmlFor="price">Price in CAD</InputLabel>
                    <Input
                        id="price"
                        helperText="Price in CAD"
                        type="number"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        onChange={this.priceUpdate}
                        />
                    <br />
                    <TextField
                        id="fish-type"
                        label="Fish"
                        type="text"
                        onChange={this.fishUpdate}
                    /><br />
                    <TextField 
                        id="quantity"
                        label="Quantity"
                        type="number"
                        onChange={this.quantityUpdate}
                    /><br />
                </FormControl>
                <FormControl>
                    <TextField 
                        id="buyer-name"
                        label="Buyer/Company Name"
                        type="text"
                        placeholder="optional"
                        onChange={this.buyerUpdate}
                    />
                    <br />
                    <TextField 
                        id="buyer-contact"
                        label="Buyer Phone Number"
                        type="number"
                        placeholder="optional"
                        onChange={this.buyerNumberUpdate}
                    />
                </FormControl>
                <Button
                        id="submit-btn"
                        variant="raised"
                        color="secondary"
                        onClick={this.clickSend}
                        >Send Transaction
                </Button>
            </div>
        )
    }
}


export default TransactionTextFields;