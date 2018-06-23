// @flow

import { UPDATE_RENDER } from './../../actions/render';
import render from './../render';

it('should overwrite an existing render key', () => {
  let action = {
    type: UPDATE_RENDER,
    name: 'foo',
    value: 'bar'
  };

  let initialState = {
    foo: 42
  };

  let expectedState = {
    foo: 'bar'
  };

  expect(render(initialState, action)).toEqual(expectedState);
});

it('should create a new entry key', () => {
  let action = {
    type: UPDATE_RENDER,
    name: 'foo',
    value: 'bar'
  };

  let initialState = {
    bar: 'foo'
  };

  let expectedState = {
    bar: 'foo',
    foo: 'bar'
  };

  expect(render(initialState, action)).toEqual(expectedState);
});