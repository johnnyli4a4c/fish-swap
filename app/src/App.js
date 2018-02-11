import React, { Component } from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';
import MainTemplate from './Components/MainTemplate.js';
import Login from './Screens/Login.js';
import Prices from './Screens/Prices.js';
import ToDo from './Screens/ToDo.js';
import Reboot from 'material-ui/Reboot';
import './App.css';

const mock_fish_data = [
  {
    id: 1,
    name: 'Salmon',
  },
  {
    id: 2,
    name: 'Sake',
  },
  {
    id: 3,
    name: 'Sea Urchin',
  },
]; 

const mock_countries_data = [
  {
    id: 0,
    name: 'None'
  },
  {
    id: 1,
    name: 'Canada'
  },
  {
    id: 2,
    name: 'US'
  },
  {
    id: 3,
    name: 'Japan'
  }
];

const mock_price_data = [
  {
    fish: {
      id: 1,
      name: 'Salmon' 
    },
    min: '$1',
    max: '$3',
    average: '$2',
    country: {
      id: 1,
      name: 'Canada'
    }
  },
  {
    fish: {
      id: 2,
      name: 'Sake' 
    },
    min: '$3',
    max: '$5',
    average: '$4',
    country: {
      id: 2,
      name: 'US'
    }
  },
];

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
            <Route path="/prices" 
              component={Prices}
              fish={this.mock_fish_data}
              prices={this.mock_price_data} 
              countries={this.mock_countries_data}/>
            <Route path="/add" component={ToDo} />
            <Route path="/history" component={ToDo} />
          </section>
        </MainTemplate>
      </div>
    );
  }
}

export default withRouter(App);
