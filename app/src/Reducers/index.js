import { combineReducers } from 'redux';
import prices from './prices';
import transactions from './transactions';
import countries from './countries';
import fishes from './fishes';
import login from './login';
import buyers from './buyers';
import sellers from './sellers';


const fishSwapApp = combineReducers({
  transactions,
  prices,
  countries,
  fishes,
  login,
  buyers,
  sellers
})

export default fishSwapApp