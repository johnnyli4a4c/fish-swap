import { combineReducers } from 'redux';
import prices from './prices';
import transactions from './transactions';
import countries from './countries';
import fishes from './fishes';
import login from './login';


const fishSwapApp = combineReducers({
  transactions,
  prices,
  countries,
  fishes,
  login
})

export default fishSwapApp