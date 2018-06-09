import React, { Component } from 'react';
import DataItemContainer from './../containers/DataItemContainer';

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
    if (this.props.loader.isLoaded) {
      return (
        <div id="data-wrapper">
          <div className="left">
            <h2 id="temperature">28</h2>
            {/* <DataItemContainer id="temperature" /> */}
          </div>
          <div className="right">
            <h3 id="nowcast" className="subdata-1">
            <DataItemContainer id="nowcast" className="subdata-1" />
              Sunny
            </h3>
            {/* <DataItemContainer id="nowcast" className="subdata-1" /> */}
            <h3 id="humidity" className="subdata-2">
              Humidity: 65%
            </h3>
            {/* <DataItemContainer id="humidity" className="subdata-2" /> */}
            <h3 id="uv-index" className="subdata-2">
              UV Index: 4
            </h3>
            {/* <DataItemContainer id="uv-index" className="subdata-2" /> */}
          </div>
        </div>
      );
    } else {
      return (
        <div id="loader">
          <span id="loader-loading">Loading:</span>
          <span id="loader-status">
            { this.props.loader.status }
          </span>
        </div>
      );
    }
  }
}

export default DataWrapper;