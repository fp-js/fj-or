import { curry2 } from 'fj-curry';


let _or = (x, y) =>
  (...args) =>
    x.apply(null,args) || y.apply(null,args);


let or  = curry2(_or);

export default or;
