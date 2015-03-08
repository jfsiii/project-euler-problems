/*
 * From http://projecteuler.net/problem=16
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 2^1000?
 */
(function (num) {

  // BLOCKER: 2^1000 is represented as `1.0715086071862673e+301`
  var sum = num
    // cast to a string
    .toString()
    // so we can split into an aray of digits
    .split('')
    // then add them up via `reduce`
    .reduce(function (previous, current, a, x) {
      console.log(x);
      previous = ~~previous;
      current = ~~current;
      return previous + current;
    });

  console.log(sum);
})(Math.pow(2, 1000));
