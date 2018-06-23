// @flow

import geolib from 'geolib';

import type { $payloadState } from './../types/payload';
import type { $renderData } from './../types/render';

type $stationCoordinates = {
  latitude: number,
  longitude: number
};

type $distances = {
  [number]: string | number // i.e. <distance>: <value>
};

export default function(
  location: Position,
  payload: $payloadState,
  updateRender: (data: $renderData) => void
) {

  let userLocation = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  };

  // Helper function that returns station reading closest to user.
  function helper(
    payloadItem: { [string]: any },
    payloadName: string
  ): void | string | number {
    if (payloadName === 'temperature' || payloadName === 'humidity') {
      let distances: $distances = {};

      // Convert payloadItem.items[0].readings into an object for O(1) lookup
      let payloadItemReadings = {};
      payloadItem.items[0].readings.forEach((reading) => {
        payloadItemReadings[reading.station_id] = reading.value;
      });

      payloadItem.metadata.stations.forEach((station) => {
        let stationID: string = station.id;
        let stationCoordinates: $stationCoordinates = station.location;

        let distance = geolib.getDistance(userLocation, stationCoordinates);
        let value = payloadItemReadings[stationID];

        distances[distance] = value;
      });

      let distancesKeys = Object.keys(distances);
      distancesKeys = distancesKeys.map((item) => Number(item));
      let closestDistance = Math.min(...distancesKeys);

      return distances[closestDistance]
    } 
    
    if (payloadName === 'nowcast') {
      let distances: $distances = {};

      // Convert payloadItem.items[0].forecasts into an object for O(1) lookup
      let payloadItemReadings = {};
      payloadItem.items[0].forecasts.forEach((forecast) => {
        payloadItemReadings[forecast.area] = forecast.forecast;
      });

      payloadItem.area_metadata.forEach((station) => {
        let stationName: string = station.name;
        let stationCoordinates: $stationCoordinates = station.label_location;

        let distance = geolib.getDistance(userLocation, stationCoordinates);
        let value = payloadItemReadings[stationName];

        distances[distance] = value;
      });

      let distancesKeys = Object.keys(distances);
      distancesKeys = distancesKeys.map((item) => Number(item));
      let closestDistance = Math.min(...distancesKeys);

      return distances[closestDistance];
    }

    if (payloadName === 'uvIndex') {
      return payloadItem.items[0].index[0].value;
    }


  }

  // Temperature
  /*
  Due to API unreliability, helper() may return `undefined`, so we substitute
  that for a string '-'. 
  */
  
  let temperature = helper(payload.temperature, 'temperature');
  let humidity = helper(payload.humidity, 'humidity');
  let nowcast = helper(payload.nowcast, 'nowcast');
  let uvIndex = helper(payload.uvIndex, 'uvIndex');

  updateRender({
    name: 'temperature',
    value: temperature !== undefined ? temperature : '-'
  });

  // Humidity
  updateRender({
    name: 'humidity',
    value: humidity !== undefined ? humidity : '-'
  });
  
  // Nowcast
  updateRender({
    name: 'nowcast',
    value: nowcast !== undefined ? nowcast : '-'
  });
  
  // UV Index
  updateRender({
    name: 'uvIndex',
    value: uvIndex !== undefined ? uvIndex : '-'
  })

  return true;
};