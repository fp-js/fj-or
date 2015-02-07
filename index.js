"use strict";

var curry2 = require("fj-curry").curry2;



var _or = function (x, y) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return x.apply(null, args) || y.apply(null, args);
  };
};


var or = curry2(_or);

module.exports = or;