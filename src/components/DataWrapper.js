import React, { Component } from 'react';

class DataWrapper extends Component {
  constructor(props) {
    super(props);
    // Get user location
    // Make API requests
    // Receive API responses
    // Match location to most proximate data
    // Render data
  }

  render() {
    return (
      <div id="data-wrapper">
        <div className="left">
          <h2 id="temperature">28</h2>
        </div>
        <div className="right">
          <h3 id="nowcast" className="subdata-1">
            Sunny
          </h3>
          <h3 id="humidity" className="subdata-2">
            Humidity: 65%
          </h3>
          <h3 id="uv-index" className="subdata-2">
            UV Index: 4
          </h3>
        </div>
      </div>
    );
  }
}

export default DataWrapper;