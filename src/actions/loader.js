// @flow

// Action types
export const UPDATE_LOADER_LOADED = 'UPDATE_LOADER_LOADED';
export const UPDATE_LOADER_STATUS = 'UPDATE_LOADER_STATUS';

// Action creators
export function updateLoaderLoaded(isLoaded: boolean) {
  return {
    type: UPDATE_LOADER_LOADED,
    isLoaded: isLoaded
  };
};
export function updateLoaderStatus(status: ?string) {
  return {
    type: UPDATE_LOADER_STATUS,
    status: status
  }
};