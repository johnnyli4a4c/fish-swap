import React, { Component } from 'react';
// import LoginForm from '../Components/LoginForm.js'

class Login extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: false
  //   };

    // this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this)
  // }

  // handleIsLoggedIn = (value) => {
  //   this.setState({
  //     isLoggedIn: value
  //   })
  // };

  render() {
    return (
      <div>
        <LoginForm
          // login = {this.handleIsLoggedIn}
        />
      </div>
    );
  }
}

export default Login;
