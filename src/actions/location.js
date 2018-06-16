// @flow

import type { $locationAction } from './../types/location';

// Action types
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

// Action creators
export function updateLocation(position: Position): $locationAction {
  return {
    type: UPDATE_LOCATION,
    position: position
  };
};