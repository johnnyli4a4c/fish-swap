import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from '../Components/LoginForm.js'
import { authenticateUser } from '../Actions';

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
    console.log(number.length)
    if (number.length < 2) {
      console.log("invalid number")
      return
    }
    if (password < 8) {
      console.log("password missing characters")
      return
    }
    let data = {"phoneNumber": number, "password": password}
    console.log(data)
    this.props.authenticateUser(data)
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

const mapStateToProps = state => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: (data) => {
      dispatch(authenticateUser(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
