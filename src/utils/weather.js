// @flow
/*
This module fetches weather data through AJAX requests to API routes,
and returns promises which resolves/rejects depending on the outcome
of the requests.

Currently, it only fetches current air temperature.
*/

import axios from 'axios';

export const URL = 'https://api.data.gov.sg/v1/environment/air-temperature';

export default function(): Promise<{}> {
  return new Promise((resolve, reject) => {
    axios
      .get(URL)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};