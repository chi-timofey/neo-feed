import { combineReducers } from 'redux';
import neo from 'containers/NeoFeed/reducers';

export default function createReducer() {
  return combineReducers({
    neo,
  });
}
