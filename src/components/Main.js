import React from "react";
import DataWrapper from './DataWrapper';

const Main = () => {
  return (
    <main id="app" className="container-2 w-container">
      <h1 id="title" className="heading">
        What's the weather here?
      </h1>
        <DataWrapper />
    </main>
  );
};

export default Main;
