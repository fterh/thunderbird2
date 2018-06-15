// @flow

import type $payload from './../types/payload';

// Action types
export const UPDATE_PAYLOAD = 'UPDATE_PAYLOAD';

export type $payloadAction = {
  type: 'UPDATE_PAYLOAD',
  name: string,
  data: {}
};

// Action creators
export function updatePayload(payload: $payload): $payloadAction {
  return {
    type: UPDATE_PAYLOAD,
    name: payload.name,
    data: payload.data
  };
};