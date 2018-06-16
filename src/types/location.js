// @flow

export type $locationAction = {
  type: 'UPDATE_LOCATION',
  position: Position
};

export type $locationActions = $locationAction;
 
export type $locationState = ?Position;