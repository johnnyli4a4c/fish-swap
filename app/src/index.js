import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import FishSwapApp from './Reducers';
import { addPrice, addTransaction } from './Actions'
import { createStore } from 'redux'
import './index.css';
import Theme from './Themes/Theme.js';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mock_price_data = [
  {
    fish: {
      id: 1,
      name: 'Salmon' 
    },
    min: '1',
    max: '3',
    average: '2',
    country: {
      id: 1,
      name: 'Canada'
    }
  },
  {
    fish: {
      id: 2,
      name: 'Tuna' 
    },
    min: '3',
    max: '5',
    average: '4',
    country: {
      id: 2,
      name: 'US'
    }
  },
];

const mock_transaction_data = [
  {
    date: '2018-01-01',
    seller: {
      id: 1,
      name: 'Randy',
      phoneNumber: '(xxx) xxx-xxxx'
    },
    buyer: {
      id: 2,
      name: 'Johnny',
      phoneNumber: '(xxx) xxx-xxxx'
    },
    fish: {
      id: 1,
      name: 'Salmon' 
    },
    price: 10.10,
    quantity: 5,
    country: {
      id: 1,
      name: 'Canada'
    }
  },
  {
    date: '2018-01-02',
    seller: {
      id: 2,
      name: 'Johnny',
      phoneNumber: '(xxx) xxx-xxxx'
    },
    buyer: {
      id: 1,
      name: 'Randy',
      phoneNumber: '(xxx) xxx-xxxx'
    },
    fish: {
      id: 2,
      name: 'Tuna' 
    },
    price: 11.10,
    quantity: 2,
    country: {
      id: 2,
      name: 'US'
    }
  }
];

let store = createStore(FishSwapApp)

mock_price_data.forEach(price => {
  store.dispatch(addPrice(price));
})

mock_transaction_data.forEach(transaction => {
  store.dispatch(addTransaction(transaction));
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={Theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
