/*
 * Starting in the top left corner of a 2 x 2 grid, there are 6 routes (without backtracking) to the bottom right corner.
 *
 * How many routes are there through a 20 x 20 grid?
 *
 * From http://projecteuler.net/problem=15
 */
(function (m, n) {

    var sum = m + n;
    var sum_2 = sum / 2;
    var factorial_sum_2 = factorial(sum_2);
    var routes = factorial(sum) / (factorial_sum_2 * factorial_sum_2);

    console.log(routes, 'routes in a', m, 'x', n, 'grid');
    return routes;

    // internal functions
    function Range(min, max) {
        var range = [];
        var i = min;
        for (; i <= max; ++i) {
            range.push(i);
        }

        return range;
    }

    function factorial(n) {
        return (Range(1, n)).reduce(multiply);
    }

    function multiply(a, b) {
        return a * b;
    }

})(20, 20);