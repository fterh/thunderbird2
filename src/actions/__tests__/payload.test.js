// @flow

import type { $payload } from './../payload';
import { UPDATE_PAYLOAD, updatePayload } from './../payload';

it('should generate the `payload` action correctly', () => {
  let payloadData = {
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
  let payload: $payload = {
    name: 'temperature',
    data: payloadData
  };

  let receivedAction = updatePayload(payload);
  let expectedAction = {
    type: UPDATE_PAYLOAD,
    name: 'temperature',
    data: payloadData
  };
  expect(receivedAction).toEqual(expectedAction);
});