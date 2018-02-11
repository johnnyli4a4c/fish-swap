import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

function submit() {
    console.log()
}

const TransactionTextFields = () => (
    <div>
        <DatePicker
            className = "date"
            hintText = "Pick a date"
            type = "text"
        /><br />
        <TextField  
            floatingLabelText="Sold To:"
            type = "text"
        /><br />
        <TextField  
            floatingLabelText="Password"
            type = "text"
        /><br />
        <TextField  
            floatingLabelText="Password"
            type = "text"
        /><br />
        <RaisedButton
            label = "Submit"
            onClick = {submit}
        />
    </div>
);


export default TransactionTextFields;