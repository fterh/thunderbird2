// @flow

export type $payload = {
  name: string,
  data: {}
}

// Action types
export const UPDATE_PAYLOAD = 'UPDATE_PAYLOAD';

// Action creators
export function updatePayload(payload: $payload) {
  return {
    type: UPDATE_PAYLOAD,
    name: payload.name,
    data: payload.data
  };
};