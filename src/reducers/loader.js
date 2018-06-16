// @flow

import type { $Action } from './../types';
import type { $loaderState } from './../types/loader';

import {
  UPDATE_LOADER_LOADED,
  UPDATE_LOADER_STATUS,
  UPDATE_LOADER_ERROR
} from './../actions/loader';

const initialState: $loaderState = {
  loaded: false,
  status: 'Loading',
  error: false
};

export default function(
  state: $loaderState = initialState,
  action: $Action
): $loaderState {
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
      return state;
  }
};