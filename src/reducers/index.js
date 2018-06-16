// @flow

import { combineReducers } from 'redux';

import loader from './loader';
import location from './location';
import payload from './payload';

export default combineReducers({
  loader,
  location,
  payload
});