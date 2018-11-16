"use strict";

var _index = require("../index");

describe('Side Effects', () => {
  const EFFECT_NAME = 'times-two';

  const timesTwo = a => a * 2;

  it('Should run the function normally', () => {
    expect(timesTwo(4)).toEqual(8);
  });
  it('Should work without mocking', () => {
    const result = (0, _index.effect)(EFFECT_NAME, timesTwo);
    expect(result(4)).toEqual(8);
  });
  it('Should work with mocking', () => {
    const plusTwo = a => a + 2;

    (0, _index.mock)(EFFECT_NAME, plusTwo);
    const result = (0, _index.effect)(EFFECT_NAME, timesTwo);
    expect(result(4)).toEqual(6);
    (0, _index.reset)(EFFECT_NAME);
  });
  it('Should reset the mocks', () => {
    const result = (0, _index.effect)(EFFECT_NAME, timesTwo);
    expect(result(4)).toEqual(8);
  });
  it('Should reset all of the mocks', () => {
    (0, _index.mock)('first-effect', () => 2);
    const result = (0, _index.effect)('first-effect', () => 1);
    expect(result()).toEqual(2);
    (0, _index.resetAll)();
    const result2 = (0, _index.effect)('first-effect', () => 1);
    expect(result2()).toEqual(1);
  });
});