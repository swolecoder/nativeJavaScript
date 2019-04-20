'use strict';
var _ = require('lodash');

/*
Inpiration: 
_.reduce(
  [1, 2, 3],
  function(sum, n) {
    return sum + n;
  },
  0
);
*/

const reduceV1 = (list, cb, intial) => {
  let memo = intial;
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0];
    } else {
      memo = cb(list[i], memo);
    }
  }

  return memo;
};

function sumV1(n, sum) {
  return n + sum;
}

console.log(reduceV1([1, 2], sumV1));
