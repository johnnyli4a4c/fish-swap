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

let store = createStore(FishSwapApp)

mock_price_data.forEach(price => {
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
