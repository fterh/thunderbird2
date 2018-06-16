// @flow

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
 
 export type $loaderState = {
  +loaded: boolean,
  +status: ?string,
  +error: boolean
};