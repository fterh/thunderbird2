// @flow

// Action types
export const UPDATE_LOADER_LOADED = 'UPDATE_LOADER_LOADED';
export const UPDATE_LOADER_STATUS = 'UPDATE_LOADER_STATUS';
export const UPDATE_LOADER_ERROR = 'UPDATE_LOADER_ERROR';

// Action creators
export function updateLoaderLoaded(loaded: boolean) {
  return {
    type: UPDATE_LOADER_LOADED,
    loaded: loaded
  };
};
export function updateLoaderStatus(status: ?string) {
  return {
    type: UPDATE_LOADER_STATUS,
    status: status
  }
};
export function updateLoaderError(error: boolean) {
  return {
    type: UPDATE_LOADER_ERROR,
    error: error
  }
}