/* @flow

This wrapper function imports and calls the individual functions for fetching 
specific weather data, wraps their promises using Promise.all, and returns it.
*/

import type $payload from './../types/payload';
import temperature from './weather/temperature';
import uvIndex from './weather/uvIndex';
import humidity from './weather/humidity';

export default function(): Promise<Array<$payload>> {
  return Promise.all([
    temperature(),
    uvIndex(),
    humidity()
  ]);
};