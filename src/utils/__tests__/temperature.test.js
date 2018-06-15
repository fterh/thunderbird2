import temperature, { URL } from './../weather/temperature';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

const mockResponse = { foo: 'bar' };

mock
  .onGet(URL)
  .replyOnce(200, mockResponse)
  .onGet(URL)
  .replyOnce(400)
  .onGet(URL)
  .timeout();

it('should resolve if data.status === 200', () => {
  expect.assertions(1);
  return temperature().then((res) => {
    expect(res.data).toEqual(mockResponse);
  });
});

it('should reject if data.status === 400', () => {
  expect.assertions(1);
  return temperature().catch((e) => {
    expect(e).toBeInstanceOf(Error);
  });
});

it('should reject if the request times out', () => {
  expect.assertions(1);
  return temperature().catch((e) => {
    expect(e).toBeInstanceOf(Error);
  });
});