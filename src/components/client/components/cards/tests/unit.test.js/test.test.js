
import configureMockStore from 'redux-mock-store';
import * as fxn from '../../ShowOnCards';


test('getTime function: if both the start time and last time is provided', () => {
  expect( fxn.getTime("2022-12-17 15:00:00","2022-12-17 16:00:00")).toBeDefined();
});

test('getTime function: if the start time is provided but last time is not', () => {
  expect( fxn.getTime("2022-12-17 15:00:00","")).toBeDefined();
});

test('getTime function: if both the start time and last time is not provided', () => {
  expect( fxn.getTime("","")).toBeDefined();
});

test('getTime function: if both the start time date is provided only and last time is not provided', () => {
  expect( fxn.getTime("2022-12-17","")).toBeDefined();
});