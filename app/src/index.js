import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux'
import FishSwapApp from './Reducers';
import { addPrice } from './Actions'
import { createStore } from 'redux'
=======
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import FishSwapApp from './Reducers';
import { addTransaction } from './Actions'
>>>>>>> ca6fd7fd394110c206439de2d16adce123969195
import './index.css';
import Theme from './Themes/Theme.js';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
const mock_data_price = [
  {
    fishId: 1,
    countryId: 1,
    minPrice: 1.00,
    maxPrice: 3.00,
    averagePrice: 2.34
  },
  {
    fishId: 1,
    countryId: 2,
    minPrice: 3.00,
    maxPrice: 6.00,
    averagePrice: 3.93
  },
  {
    fishId: 2,
    countryId: 1,
    minPrice: 2.28,
    maxPrice: 12.20,
    averagePrice: 8.09
  }
];

let store = createStore(FishSwapApp)

mock_data_price.forEach(price => {
  store.dispatch(addPrice(price));
=======
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

let store = createStore(FishSwapApp, applyMiddleware(thunkMiddleware))

mock_transaction_data.forEach(transaction => {
  store.dispatch(addTransaction(transaction));
>>>>>>> ca6fd7fd394110c206439de2d16adce123969195
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
