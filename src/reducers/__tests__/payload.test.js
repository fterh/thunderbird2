// @flow

import { UPDATE_PAYLOAD } from './../../actions/payload';
import payload from './../payload';

const payloadData = {
  "metadata": {
    "stations": [
      {
        "id": "S109",
        "device_id": "S109",
        "name": "Ang Mo Kio Avenue 5",
        "location": {
          "latitude": 1.3764,
          "longitude": 103.8492
        }
      }, {
        "id": "S117",
        "device_id": "S117",
        "name": "Banyan Road",
        "location": {
          "latitude": 1.256,
          "longitude": 103.679
        }
      }
    ],
    "reading_type": "DBT 1M F",
    "reading_unit": "deg C"
  },
  "items": [
    {
      "timestamp": "2018-06-13T21:20:00+08:00",
      "readings": [
        {
          "station_id": "S109",
          "value": 26.9
        }, {
          "station_id": "S117",
          "value": 27.7
        }
      ]
    }
  ],
  "api_info": {
    "status": "healthy"
  }
};

it('should overwrite an existing payload entry', () => {
  let action = {
    type: UPDATE_PAYLOAD,
    name: 'temperature',
    data: payloadData
  };

  let initialState = {
    temperature: {
      foo1: 'bar1',
      foo2: {
        foo3: 'bar3',
        foo4: 'bar4'
      }
    }
  };

  let expectedState = {
    temperature: payloadData
  };

  expect(payload(initialState, action)).toEqual(expectedState);
});

it('should create a new payload entry', () => {
  let action = {
    type: UPDATE_PAYLOAD,
    name: 'temperature2',
    data: payloadData
  };

  let initialState = {
    temperature: {
      foo1: 'bar1',
      foo2: {
        foo3: 'bar3',
        foo4: 'bar4'
      }
    }
  };

  let expectedState = {
    temperature: initialState.temperature,
    temperature2: payloadData
  };

  expect(payload(initialState, action)).toEqual(expectedState);
});