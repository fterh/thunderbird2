import React, { Component } from 'react';
import DataItemContainer from './../containers/DataItemContainer';
import StatusItem from './StatusItem';
import location from './../utils/location';

class DataWrapper extends Component {
  constructor(props) {
    super(props);

    this.props.updateLoaderStatus('Getting your location');
    location().then((position) => {
      this.props.updateLocation(position);
      this.props.updateLoaderStatus('Located');
    }).catch((e) => {
      this.props.updateLoaderStatus('Unable to get your location');
      this.props.updateLoaderError(true);
    });

    // Make API requests
    // Receive API responses
    // Match location to most proximate data
    // Render data
  }

  render() {
    if (this.props.loader.loaded) {
      return (
        <div id="data-wrapper">
          <div className="left">
            <h2 id="temperature">28</h2>
            {/* <DataItemContainer id="temperature" /> */}
          </div>
          <div className="right">
            <h3 id="nowcast" className="subdata-1">
              Sunny
            </h3>
            {/* <DataItemContainer id="nowcast" className="subdata-1 highlight" /> */}
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
      let logStore = process.env.NODE_ENV === 'development'
        ? <input
          type="button"
          onClick={ () => console.log(this.props.store) }
          value="console.log(store)"
        /> 
        : undefined;

      return (
        <div id="loader">
          <span id="loader-loading">Loading:</span>
          <StatusItem
            id="loader-status"
            className={ this.props.loader.error ? 'error' : 'highlight' }
          >
            { this.props.loader.status }
          </StatusItem>

          { logStore }
        </div>
      );
    }
  }
}

export default DataWrapper;