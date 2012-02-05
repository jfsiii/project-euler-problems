/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * From http://projecteuler.net/problem=1
 */
(function (limit) {

    var sum = 0;

    for (; limit; --limit) {
        if (limit % 3 === 0 || limit % 5 === 0) {
            sum += limit;
        }
    }

    console.log(sum);

    return sum;
})(999);