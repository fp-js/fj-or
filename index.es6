import { curry2 } from 'fj-curry';


function _or(x, y) {
  return () => {
    return x() || y();
  };
}

let or  = curry2(_or);

export default or;
