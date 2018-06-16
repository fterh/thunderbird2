// @flow

import type { $Action } from './../types';
import type { $locationState } from './../types/location';

import { UPDATE_LOCATION } from './../actions/location';

const initialState: $locationState = null;

export default function(
  state: $locationState = initialState,
  action: $Action
): $locationState {
  return action.type === UPDATE_LOCATION ? action.position : state;
};