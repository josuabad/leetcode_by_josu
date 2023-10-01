/**
 * @param {number} n
 * @return {Function} counter
 */

let createCounter = function(n) {

  n -= 1;
  return function count() {
      n += 1
      return n;
  }
};

let counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12

/**
Could also be {
  console.log(counter());
  console.log(counter());
  console.log(counter());
}
*/
