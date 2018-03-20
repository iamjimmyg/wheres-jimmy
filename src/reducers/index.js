import { combineReducers } from 'redux'
import headerData from './headerData'

const rootReducer = combineReducers({
  headerData: headerData,
});

export default rootReducer;
