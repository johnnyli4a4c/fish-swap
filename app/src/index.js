import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Theme from './Themes/Theme.js';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={Theme}>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
