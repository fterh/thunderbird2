// @flow

import React, { Component } from 'react';
import DataItem from './../components/DataItem';
import StatusItem from './StatusItem';
import location from './../utils/location';
import weather from './../utils/weather';
import proximate from './../utils/proximate';

import type { State } from './../types/index';
import type { $loaderState } from './../types/loader';
import type { $locationState } from './../types/location';
import type { $payload, $payloadState } from './../types/payload';
import type { $renderData, $renderState } from './../types/render';

type Props = {
  loader: $loaderState,
  location: $locationState,
  payload: $payloadState,
  render: $renderState,
  state: State,
  updateLoaderLoaded: (boolean) => void,
  updateLoaderStatus: (?string) => void,
  updateLoaderError: (boolean) => void,
  updateLocation: (Position) => void,
  updatePayload: ($payload) => void,
  updateRender: ($renderData) => void
};

class DataWrapper extends Component<Props> {
  constructor(props: Props) {
    super(props);

    let locationPromise = location().then((position) => {
      console.log('location() completed');
      this.props.updateLocation(position);
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
      throw e;
    });

    /* Promise.all() so proximate() is only called after location() and weather()
    are resolved */
    Promise.all([locationPromise, weatherPromise])
      .then(() => {
        console.log('locationPromise and weatherPromise fulfilled');
        if (!this.props.location) {
          throw new Error('Location in application state is falsey');
        }
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
          onClick={ () => console.log(this.props.state) }
          style={{
            display: 'block',
            margin: 'auto'
          }}
          type="button"
          value="console.log(state)"
        /> 
        : null;
    
    if (this.props.loader.loaded) {
      return (
        <div>
          <div id="data-wrapper">
            <DataItem id="current-location" className="subdata-2 bordered">
              <i className="fas fa-map-marker-alt"></i>&nbsp;
              { this.props.render.currentLocation }
            </DataItem>
            <DataItem id="temperature">
              { this.props.render.temperature }
            </DataItem>
            <DataItem id="nowcast" className="subdata-1 highlight">
              { this.props.render.nowcast }
            </DataItem>
            <DataItem id="humidity" className="subdata-2">
              <span className="underline">Humidity:</span>&nbsp;
              <span className="highlight">{ this.props.render.humidity }%</span>
            </DataItem>
            <DataItem id="uv-index" className="subdata-2">
              <span className="underline">UV Index:</span>&nbsp;
              <span className="highlight">{ this.props.render.uvIndex }</span>
            </DataItem>
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