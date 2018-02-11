import { combineReducers } from 'redux';
import prices from './prices';
import transactions from './transactions';
import countries from './countries';
import fishes from './fishes';


const fishSwapApp = combineReducers({
  transactions,
  prices,
  countries,
  fishes
})

export default fishSwapApp