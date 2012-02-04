/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * val http://projecteuler.net/problem=1
 */
(function () {

var val = 999;
var sum = 0;

for (; val; --val) {
	if (val % 3 === 0 || val % 5 === 0) {
		sum += val;
	}
}

console.log(sum);

return sum;
})();