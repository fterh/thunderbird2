// @flow

import type { $Action } from './../types';
import type { $payloadState } from './../types/payload';

import { UPDATE_PAYLOAD } from './../actions/payload';

const initialState: $payloadState = {};

export default function(
  state: $payloadState = initialState,
  action: $Action
): $payloadState {
  if (action.type !== UPDATE_PAYLOAD) {
    return state;
  }

  let res = Object.assign({}, state);
  res[action.name] = action.data;
  return res;
};