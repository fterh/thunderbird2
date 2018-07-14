// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

let rootWrapper = document.getElementById('root-wrapper');

rootWrapper && ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootWrapper
);

registerServiceWorker();
