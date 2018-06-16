import type { Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux';

import type { $loaderActions, $loaderState } from './loader';
import type { $locationActions, $locationState } from './location';

export type State = {
  loader: $loaderState,
  location: $locationState
};

export type $Action = 
  | $loaderActions
  | $locationActions;

export type Store = ReduxStore<State, $Action>;