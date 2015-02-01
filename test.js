"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var or = _interopRequire(require("./"));




test("fj-or", function (t) {
  t.plan(6);

  var T = function () {
    return true;
  };
  var F = function () {
    return false;
  };

  t.ok(or(T, T)());
  t.ok(or(T)(T)());
  t.ok(or(T, F)());
  t.ok(or(F, T)());
  t.notOk(or(F, F)());
  t.notOk(or(F, F)());
});