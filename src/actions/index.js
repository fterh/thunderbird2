// @flow

// Action types
export const UPDATE_TEMPERATURE = 'UPDATE_TEMPERATURE';
export const UPDATE_NOWCAST = 'UPDATE_NOWCAST';
export const UPDATE_HUMIDITY = 'UPDATE_HUMIDITY';
export const UPDATE_UVINDEX = 'UPDATE_UVINDEX';

// Action creators
export function updateTemperature(temperature: number) {
  return {
    type: UPDATE_TEMPERATURE,
    temperature: temperature
  };
};
export function updateNowcast(nowcast: string) {
  return {
    type: UPDATE_NOWCAST,
    nowcast: nowcast
  };
};
export function updateHumidity(humidity: number) {
  return {
    type: UPDATE_HUMIDITY,
    humidity: humidity
  };
};
export function updateUvIndex(uvIndex: number) {
  return {
    type: UPDATE_UVINDEX,
    uvIndex: uvIndex
  };
};