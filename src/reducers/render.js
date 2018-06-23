// @flow

import type { $Action } from './../types';
import type { $renderState } from './../types/render';

import { UPDATE_RENDER } from './../actions/render';

const initialState: $renderState = {};

export default function(
  state: $renderState = initialState,
  action: $Action
): $renderState {
  if (action.type !== UPDATE_RENDER) {
    return state;
  }

  let res = Object.assign({}, state);
  res[action.name] = action.value;
  return res;
};