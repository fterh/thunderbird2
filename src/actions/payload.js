// @flow

import type { $payload, $payloadAction } from './../types/payload';

// Action types
export const UPDATE_PAYLOAD = 'UPDATE_PAYLOAD';

// Action creators
export function updatePayload(payload: $payload): $payloadAction {
  return {
    type: UPDATE_PAYLOAD,
    name: payload.name,
    data: payload.data
  };
};