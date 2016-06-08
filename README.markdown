# fj-or

[![Build Status](https://travis-ci.org/fp-js/fj-or.svg)](https://travis-ci.org/fp-js/fj-or) [![npm version](https://badge.fury.io/js/fj-or.svg)](http://badge.fury.io/js/fj-or)
> x || y

## Installation

`npm install fj-or --save`

## Usage

```js
var or = require('fj-or');

let T = () => true;
let F = () => false;

or(T, T)()); // => true
or(T)(T)()); // => true
or(T, F)()); // => true
or(F, T)()); // => true
or(F, F)()); // => false
or(F)(F)()); // => false
```


## API

### or

`or(p1, p2)`

***Parameters***

| Name          | Type        | Description                           |
| ------------- | ----------- | --------------------------            |
| p1            | function    | A function that returns true or false |
| p2            | function    | A function that returns true or false |

***Returns***

| Type        | Description                                                    |
| ----------- | --------------------------                                     |
| function    | Returns a function which returns true if p1 or p2 return true |
