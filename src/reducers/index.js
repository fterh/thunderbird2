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
      console.log('1', state, action);
      return Object.assign({}, state, {
        loaded: action.loaded
      });
      break;
    
    case UPDATE_LOADER_STATUS:
      console.log('2', state, action);
      return Object.assign({}, state, {
        status: action.status
      });
      break;
    
    case UPDATE_LOADER_ERROR:
      console.log('3', state, action);
      return Object.assign({}, state, {
        error: action.error
      });
      break;      
  
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