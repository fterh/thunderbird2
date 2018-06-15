// @flow

// Action types
export const UPDATE_LOADER_LOADED = 'UPDATE_LOADER_LOADED';
export const UPDATE_LOADER_STATUS = 'UPDATE_LOADER_STATUS';
export const UPDATE_LOADER_ERROR = 'UPDATE_LOADER_ERROR';

export type $loaderLoadedAction = {
  type: 'UPDATE_LOADER_LOADED',
  loaded: boolean
};

export type $loaderStatusAction = {
  type: 'UPDATE_LOADER_STATUS',
  status: ?string
};
export type $loaderErrorAction = {
  type: 'UPDATE_LOADER_ERROR',
  error: boolean
};

export type $loaderActions =
 | $loaderLoadedAction
 | $loaderStatusAction
 | $loaderErrorAction;

// Action creators
export function updateLoaderLoaded(loaded: boolean): $loaderLoadedAction {
  return {
    type: UPDATE_LOADER_LOADED,
    loaded: loaded
  };
};
export function updateLoaderStatus(status: ?string): $loaderStatusAction {
  return {
    type: UPDATE_LOADER_STATUS,
    status: status
  }
};
export function updateLoaderError(error: boolean): $loaderErrorAction {
  return {
    type: UPDATE_LOADER_ERROR,
    error: error
  }
}