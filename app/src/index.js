import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import FishSwapApp from './Reducers';
import { addPrice } from './Actions'
import { createStore } from 'redux'
import './index.css';
import Theme from './Themes/Theme.js';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
