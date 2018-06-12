import { combineReducers } from "redux";
import {
  UPDATE_TEMPERATURE,
  UPDATE_NOWCAST,
  UPDATE_HUMIDITY,
  UPDATE_UVINDEX
} from './../actions';
import {
  UPDATE_LOADER_LOADED,
  UPDATE_LOADER_STATUS,
  UPDATE_LOADER_ERROR
} from './../actions/loader';
import { UPDATE_LOCATION } from './../actions/location';

const temperature = (state, action) => {
  return action.type === UPDATE_TEMPERATURE ? action.temperature : '-';
};

const nowcast = (state, action) => {
  return action.type === UPDATE_NOWCAST ? action.nowcast : '-';
};

const humidity = (state, action) => {
  return action.type === UPDATE_HUMIDITY ? action.humidity : '-';
};

const uvIndex = (state, action) => {
  return action.type === UPDATE_UVINDEX ? action.uvIndex : '-';
};

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
        status: 'Initializing...',
        error: false
      };
  }
};

const location = (state, action) => {
  return action.type === UPDATE_LOCATION ? action.position : null;
};

export default combineReducers({
  temperature,
  nowcast,
  humidity,
  uvIndex,
  loader,
  location
});