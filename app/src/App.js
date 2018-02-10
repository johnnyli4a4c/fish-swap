import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login.js'
import Prices from './Screens/Prices.js'

const mock_price_data = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <Login />
        </section>
        <section>
          <Prices prices={mock_price_data} />
        </section>
      </div>
    );
  }
}

export default App;
