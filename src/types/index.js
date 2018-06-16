import type { Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux';

import type { $loaderActions, $loaderState } from './loader';

export type State = {
  loader: $loaderState
};

export type $Action = $loaderActions;

export type Store = ReduxStore<State, $Action>;