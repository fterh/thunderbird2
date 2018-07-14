// @flow

import React, { Component } from 'react';

import Main from './components/Main';
import Footer from './components/Footer';

import './wf.css';
// import 'normalize.css';
import './App.css';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div id="root" className="div-block">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
