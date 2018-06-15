import weather from './../weather';

// Mock imported modules to return dummy Promises
jest.mock('./../weather/temperature', () => {
  return jest.fn(() => {
    return new Promise((res, rej) => {
      res('temperature');
    });
  });
});

it('should return a Promise', () => {
  expect(typeof(weather().then)).toBe('function');
});

it('the Promise should resolve into an array', () => {
  expect.assertions(1);
  return weather().then((arrPromises) => {
    expect(Array.isArray(arrPromises)).toBe(true);
  });
})