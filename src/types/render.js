// @flow

export type $renderData = {
  name: string,
  value: string | number
};

export type $renderAction = {
  type: 'UPDATE_RENDER',
  name: string,
  value: string | number
};

export type $renderActions = $renderAction;

export type $renderState = {
  [string]: string | number
};
/*
renderState:
  name1: string | number,
  name2: string | number,
  name3: string | number
*/