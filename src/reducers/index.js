// @flow

import { combineReducers } from 'redux';

import loader from './loader';
import location from './location';
import { UPDATE_PAYLOAD } from './../actions/payload';

export const payload = (state = {}, action) => {
  if (action.type !== UPDATE_PAYLOAD) {
    return state;
  }

  let res = Object.assign({}, state);
  res[action.name] = action.data;
  return res;
};

export default combineReducers({
  loader,
  location,
  payload
});