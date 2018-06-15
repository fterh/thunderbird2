/* @flow

This wrapper function imports and calls the individual functions for fetching 
specific weather data, wraps their promises using Promise.all, and returns it.
*/

import type $payload from './../types/payload';
import temperature from './weather/temperature';

export default function(): Promise<Array<$payload>> {
  return Promise.all([
    temperature()
  ]);
};