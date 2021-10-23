import { combineReducers } from 'redux'
import {REDUCER_KEY, postFetcherReducer} from '../pages/modules/post-fetcher/redux/post-fetcher.reducer';

// COMBINED REDUCERS
const reducers = {
  [REDUCER_KEY]: postFetcherReducer,
}

export default combineReducers(reducers);