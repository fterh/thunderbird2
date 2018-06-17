// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux';

import type { $loaderActions, $loaderState } from './loader';
import type { $locationActions, $locationState } from './location';
import type { $payloadActions, $payloadState } from './payload';
import type { $renderActions, $renderState } from './render';

export type State = {
  loader: $loaderState,
  location: $locationState,
  payload: $payloadState,
  render: $renderState
};

export type $Action = 
  | $loaderActions
  | $locationActions
  | $payloadActions
  | $renderActions;

export type Store = ReduxStore<State, $Action>;

export type Dispatch = ReduxDispatch<$Action>;