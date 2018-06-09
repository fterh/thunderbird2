import { combineReducers } from "redux";
import {
  UPDATE_TEMPERATURE,
  UPDATE_NOWCAST,
  UPDATE_HUMIDITY,
  UPDATE_UVINDEX
} from './../actions';

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

export default combineReducers({
  temperature,
  nowcast,
  humidity,
  uvIndex
});