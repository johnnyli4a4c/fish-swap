import { combineReducers } from 'redux';
import prices from './prices';
<<<<<<< HEAD

const fishSwapApp = combineReducers({
  prices
=======
import transactions from './transactions';
import countries from './countries';
import fishes from './fishes';


const fishSwapApp = combineReducers({
  transactions,
  prices,
  countries,
  fishes
>>>>>>> ca6fd7fd394110c206439de2d16adce123969195
})

export default fishSwapApp