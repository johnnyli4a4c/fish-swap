import React, { Component } from 'react';
import LoginForm from '../Components/LoginForm.js'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: "",
      password: ""
    }
  }

  handleNumberChange = (val) => {
    this.setState({
      phoneNumber: val
    })
  };
  
  handlePasswordChange = (val) => {
    this.setState({
      password: val
    })
  };

  handleOnSubmit = () => {
    let number = this.state.phoneNumber
    let password = this.state.password

    if (number !== 10) {
      console.log("invalid number")
    }
    if (password < 8) {
      console.log("password missing characters")
    }
  }
  
  render() {
    return (
      <div>
        <LoginForm
          handleNumberChange = {this.handleNumberChange}
          handlePasswordChange = {this.handlePasswordChange}
          handleOnSubmit = {this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default Login;
