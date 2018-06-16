export type $payload = {
  name: string,
  data: {}
};

export type $payloadAction = {
  type: 'UPDATE_PAYLOAD',
  name: string,
  data: {}
};

export type $payloadActions = $payloadAction;

export type $payloadState = {};
/*
payloadState:
  key1: {},
  key2: {},
  key3: {}
*/