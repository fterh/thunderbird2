import React, { Component } from 'react';

import Main from './components/Main';
import Footer from './components/Footer';

import './wf.css';
// import 'normalize.css';
import './App.css';

class App extends Component {
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
