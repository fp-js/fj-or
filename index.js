"use strict";

var curry2 = require("fj-curry").curry2;



function _or(x, y) {
  return function () {
    return x() || y();
  };
}

var or = curry2(_or);

module.exports = or;