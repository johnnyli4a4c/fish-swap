import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LogInTextFields = () => (
    <div>
        <TextField
            floatingLabelText="Phone Number"
            type = "text"
        /><br />
        <TextField  
            className = "passwordTextField"
            floatingLabelText="Password"
            type = "password"
        /><br />
        <RaisedButton
            label = "Login"
            // onClick = {this.props.login}
        />
    </div>
);

export default LogInTextFields;