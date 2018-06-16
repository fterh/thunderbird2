import type { Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux';

import type { $loaderActions, $loaderState } from './loader';
import type { $locationActions, $locationState } from './location';
import type { $payloadActions, $payloadState } from './payload';

export type State = {
  loader: $loaderState,
  location: $locationState,
  payload: $payloadState
};

export type $Action = 
  | $loaderActions
  | $locationActions
  | $payloadActions;

export type Store = ReduxStore<State, $Action>;