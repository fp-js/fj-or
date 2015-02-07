"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var or = _interopRequire(require("./"));




test("fj-or", function (t) {
  t.plan(8);

  var T = function () {
    return true;
  };
  var F = function () {
    return false;
  };
  var isF = function (x) {
    return x === false;
  };
  var isT = function (x) {
    return x === true;
  };

  t.ok(or(isF, isT)(true));
  t.notOk(or(isF, isF)(true));
  t.ok(or(T, T)());
  t.ok(or(T)(T)());
  t.ok(or(T, F)());
  t.ok(or(F, T)());
  t.notOk(or(F, F)());
  t.notOk(or(F, F)());
});