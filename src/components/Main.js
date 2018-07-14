// @flow

import React from "react";
import DataWrapperContainer from './../containers/DataWrapperContainer';

const Main = () => {
  return (
    <main id="app" className="container-2 w-container">
      <h1 id="title" className="heading">
        What's the weather here?
      </h1>
        <DataWrapperContainer />
    </main>
  );
};

export default Main;
