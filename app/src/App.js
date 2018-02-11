import React, { Component } from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';
import MainTemplate from './Components/MainTemplate.js';
import Login from './Screens/Login.js';
import Prices from './Screens/Prices.js';
import TransactionHistory from './Screens/TransactionHistory';
import ToDo from './Screens/ToDo.js';
import Reboot from 'material-ui/Reboot';
import './App.css';

class App extends Component {
  render() {
    const { pathname } = this.props.location;
    const mainScreenStyles = {
      margin: 0,
      textAlign: 'left'
    };
    const mainDrawerStyles = {
      position: 'relative'
    };

    return (
      <div className="App">
        <Reboot />
        <MainTemplate
          title="Fishr Price"
          style={mainDrawerStyles}
        >
          <section style={mainScreenStyles}>
            {
              pathname === '/' &&
                <Redirect to="/login" />
            }
            <Route path="/login" component={Login} />
            <Route path="/prices" component={Prices}/>
            <Route path="/add" component={ToDo} />
            <Route path="/history" component={TransactionHistory} />
          </section>
        </MainTemplate>
      </div>
    );
  }
}

export default withRouter(App);
