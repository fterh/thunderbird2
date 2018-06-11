// @flow

// Action types
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

// Action creators
export function updateLocation(position: Position) {
  return {
    type: UPDATE_LOCATION,
    position: position
  };
};