import { combineReducers } from "redux";
import {
  UPDATE_TEMPERATURE,
  UPDATE_NOWCAST,
  UPDATE_HUMIDITY,
  UPDATE_UVINDEX
} from './../actions';
import {
  UPDATE_LOADER_LOADED,
  UPDATE_LOADER_STATUS
} from './../actions/loader';

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
        isLoaded: action.isLoaded
      });
      break;
    
    case UPDATE_LOADER_STATUS:
      return Object.assign({}, state, {
        status: action.status
      });
      break;
  
    default:
      return {
        isLoaded: false,
        status: 'Starting the engines...'
      };
  }
};

export default combineReducers({
  temperature,
  nowcast,
  humidity,
  uvIndex,
  loader
});