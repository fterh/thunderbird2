import { combineReducers } from 'redux';

import {
  UPDATE_LOADER_LOADED,
  UPDATE_LOADER_STATUS,
  UPDATE_LOADER_ERROR
} from './../actions/loader';
import { UPDATE_LOCATION } from './../actions/location';
import { UPDATE_PAYLOAD } from './../actions/payload';

const loader = (state, action) => {
  switch (action.type) {
    case UPDATE_LOADER_LOADED:
      return Object.assign({}, state, {
        loaded: action.loaded
      });
    
    case UPDATE_LOADER_STATUS:
      return Object.assign({}, state, {
        status: action.status
      });
    
    case UPDATE_LOADER_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
  
    default:
      return {
        loaded: false,
        status: 'Loading',
        error: false
      };
  }
};

const location = (state, action) => {
  return action.type === UPDATE_LOCATION ? action.position : null;
};

export const payload = (state, action) => {
  if (action.type !== UPDATE_PAYLOAD) {
    return {};
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