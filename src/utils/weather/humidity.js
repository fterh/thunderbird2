// @flow

import axios from 'axios';
import type { $payload } from './../../types/payload';

export const URL = 'https://api.data.gov.sg/v1/environment/relative-humidity';

export default function(): Promise<$payload> {
  return new Promise((resolve, reject) => {
    axios
      .get(URL)
      .then((res) => {
        let payload: $payload = { name: 'humidity', data: res.data };
        resolve(payload);
      })
      .catch((e) => {
        reject(e);
      });
  });
};