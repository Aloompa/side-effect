"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetAll = exports.reset = exports.mock = exports.effect = void 0;

require("core-js/modules/web.dom.iterable");

const mocks = {};

const effect = (name, fn) => mocks[name] || fn;

exports.effect = effect;

const mock = (name, fn) => {
  mocks[name] = fn;
};

exports.mock = mock;

const reset = name => {
  delete mocks[name];
};

exports.reset = reset;

const resetAll = () => {
  Object.keys(mocks).forEach(reset);
};

exports.resetAll = resetAll;