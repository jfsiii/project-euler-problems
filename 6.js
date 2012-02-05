/*
 * The sum of the squares of the first ten natural numbers is,
 *   1^2 + 2^2 + ... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *   (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten
 * natural numbers and the square of the sum is 3025 - 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 *
 * From http://projecteuler.net/problem=6
 */
(function (max) {

    var range = new Range(1, max);
    var sumOfSquares = range.map(square).reduce(sum);
    var squareOfSums = Math.pow(range.reduce(sum), 2);

    console.log(squareOfSums - sumOfSquares);

    // internal functions
    function square(num) {
        return num * num;
    }

    function sum(previous, current) {
        return previous + current;
    }

    function Range(min, max) {
        var range = [];
        var i = min;
        for (; i <= max; ++i) {
            range.push(i);
        }

        return range;
    }

})(100);