import {combineReducers} from 'redux'
import table from './table'
import compare from './compare'
import persent from './persent'

export default combineReducers({
  table,
  compare,
  persent
});
