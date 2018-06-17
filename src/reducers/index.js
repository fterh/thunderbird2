// @flow

import { combineReducers } from 'redux';

import loader from './loader';
import location from './location';
import payload from './payload';
import render from './render';

export default combineReducers({
  loader,
  location,
  payload,
  render
});