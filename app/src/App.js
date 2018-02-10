import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainMenu from './Components/MainMenu.js';
import Login from './Screens/Login.js';
import Prices from './Screens/Prices.js';

const mock_price_data = [];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Fishr Price</h1>
          </header>
          <MainMenu />
          <section>
            <Login />
          </section>
          <section>
            <Prices prices={mock_price_data} />
          </section>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
