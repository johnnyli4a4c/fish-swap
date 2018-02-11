import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class LogInTextFields extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          fieldVal: ""
        }
    }
    
    numberUpdate = (e) => {
        // console.log(e.target.value);
        this.props.handleNumberChange(e.currentTarget.value);
        this.setState({fieldVal: e.currentTarget.value});
    };

    passwordUpdate = (e) => {
        // console.log(e.target.value);
        this.props.handlePasswordChange(e.target.value);
        this.setState({fieldVal: e.target.value});
    };

    clickLogin = () => {
        console.log("logging in");
        this.props.handleOnSubmit()
    };

    render() {
        return (
        <div>
            <TextField
                id="phone-number"
                label="Phone Number"
                margin="normal"
                onChange={this.numberUpdate}
            /><br />
            <TextField 
                id="password"
                label="Password"
                type="password"
                variant="password"
                helperText="at least 8 characters"
                onChange={this.passwordUpdate}
                margin="normal"
            /><br />
            <Button
                id="login-btn"
                variant="raised"
                color="secondary"
                onClick={this.clickLogin}>
                Login
            </Button>
        </div>
        );
    }
}

export default LogInTextFields;