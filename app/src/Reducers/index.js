import { combineReducers } from 'redux';
import prices from './prices';
import transactions from './transactions';
import countries from './countries';
import fishes from './fishes';
import buyers from './buyers';
import sellers from './sellers';


const fishSwapApp = combineReducers({
  transactions,
  prices,
  countries,
  fishes,
  buyers,
  sellers
})

export default fishSwapApp