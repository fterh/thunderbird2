// @flow

import { combineReducers } from 'redux';

import loader from './loader';
import { UPDATE_LOCATION } from './../actions/location';
import { UPDATE_PAYLOAD } from './../actions/payload';

const location = (state = null, action) => {
  return action.type === UPDATE_LOCATION ? action.position : state;
};

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