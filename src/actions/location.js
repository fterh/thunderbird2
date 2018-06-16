// @flow

// Action types
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export type $locationAction = {
  type: 'UPDATE_LOCATION',
  position: Position
};

// Action creators
export function updateLocation(position: Position): $locationAction {
  return {
    type: UPDATE_LOCATION,
    position: position
  };
};