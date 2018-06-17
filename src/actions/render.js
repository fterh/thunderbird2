// @flow

import type { $renderData, $renderAction } from './../types/render';

// Action types
export const UPDATE_RENDER = 'UPDATE_RENDER';

// Action creators
export function updateRender(data: $renderData): $renderAction {
  return {
    type: UPDATE_RENDER,
    name: data.name,
    value: data.value
  };
};