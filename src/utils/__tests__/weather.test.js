import weather from './../weather';

// Mock imported modules to return dummy Promises
jest.mock('./../weather/temperature', () => {
  return jest.fn(() => {
    return new Promise((res, rej) => {
      res('temperature');
    });
  });
});

jest.mock('./../weather/uvIndex', () => {
  return jest.fn(() => {
    return new Promise((res, rej) => {
      res('uvIndex');
    });
  });
});

jest.mock('./../weather/humidity', () => {
  return jest.fn(() => {
    return new Promise((res, rej) => {
      res('humidity');
    });
  });
});

it('should return a Promise', () => {
  expect(typeof(weather().then)).toBe('function');
});

it('the Promise should resolve into an array', () => {
  expect.assertions(2);
  return weather().then((arrPromises) => {
    expect(Array.isArray(arrPromises)).toBe(true);
    expect(arrPromises.length).toBe(3);
  });
})