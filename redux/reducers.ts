import { combineReducers } from 'redux'
import {REDUCER_KEY, cartReducer} from '../modules/cart/redux/cart.reducer';

// COMBINED REDUCERS
const reducers = {
  [REDUCER_KEY]: cartReducer,
}

export default combineReducers(reducers);