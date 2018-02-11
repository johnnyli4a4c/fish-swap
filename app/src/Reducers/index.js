import { combineReducers } from 'redux';
import prices from './prices';
import transactions from './transactions';

const fishSwapApp = combineReducers({
  prices,
  transactions
})

export default fishSwapApp