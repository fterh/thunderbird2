import React, { Component } from 'react';
import DataItem from './../components/DataItem';
import StatusItem from './StatusItem';
import location from './../utils/location';
import weather from './../utils/weather';
import proximate from './../utils/proximate';

class DataWrapper extends Component {
  constructor(props) {
    super(props);

    let locationPromise = location().then((position) => {
      console.log('location() completed');
      this.props.updateLocation(position);
      this.props.updateLoaderStatus('Located');
    }).catch((e) => {
      if (typeof e === 'string') {
        // If client doesn't support geolocation (see src/utils/location.js)
        console.error('Client does not support geolocation');
        this.props.updateLoaderStatus(e);
        this.props.updateLoaderError(true);
      } else {
        // If geolocation fails for some other reason
        console.error('Geolocation failed');
        this.props.updateLoaderStatus('Unable to get your location');
        this.props.updateLoaderError(true);
      }
    });

    let weatherPromise = weather().then((arrPromises) => {
      console.log('weather() completed');
      arrPromises.forEach((payload) => {
        this.props.updatePayload(payload);
      });
      console.log('weather() payload written to application state');;
    }).catch((e) => {
      console.error(`weather() promise rejected: ${e}`);
      this.props.updateLoaderStatus('Unable to fetch weather data, please try again');
      this.props.updateLoaderError(true);
    });

    /* Promise.all() so proximate() is only called after location() and weather()
    are resolved */
    Promise.all([locationPromise, weatherPromise])
      .then(() => {
        console.log('locationPromise and weatherPromise fulfilled');
        this.props.updateLoaderStatus('Finalizing');
        proximate(
          this.props.location,
          this.props.payload,
          this.props.updateRender
        );
        console.log('proximate() completed');
        this.props.updateLoaderLoaded(true);
      }).catch((e) => {
          // Better error handling
          console.error('Either locationPromise or weatherPromise failed');
          console.error(e);
      });


    // Match location to most proximate data
    // Render data
  }

  render() {
    let logState = process.env.NODE_ENV === 'development'
        ? <input
          type="button"
          onClick={ () => console.log(this.props.state) }
          value="console.log(state)"
        /> 
        : null;
    
    if (this.props.loader.loaded) {
      return (
        <div>
        <div id="data-wrapper">
          <div className="left">
            <DataItem id="temperature">
              { this.props.render.temperature }
            </DataItem>
            <DataItem id="nowcast" className="subdata-1 highlight">
              { this.props.render.nowcast }
            </DataItem>
          </div>
          <div className="right">
            <DataItem id="humidity" className="subdata-2">
              Humidity: { this.props.render.humidity }%
            </DataItem>
            <DataItem id="uv-index" className="subdata-2">
              UV Index: { this.props.render.uvIndex }
            </DataItem>
          </div>
        </div>
        { logState }
        </div>

      );
    } else {
      return (
        <div id="loader">
          <span id="loader-loading">Loading:</span>
          <StatusItem
            id="loader-status"
            className={ this.props.loader.error ? 'error' : 'highlight' }
          >
            { this.props.loader.status }
          </StatusItem>

          { logState }
        </div>
      );
    }
  }
}

export default DataWrapper;