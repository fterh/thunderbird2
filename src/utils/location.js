// @flow

export default function(): Promise<Position> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Your browser doesn\'t support geolocation');
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};