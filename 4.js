/*
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * From http://projecteuler.net/problem=4
 */
 (function (digits) {
    var min = Math.pow(10, digits - 1);
    var max = Math.pow(10, digits) - 1;
    var largest = Number.NEGATIVE_INFINITY;
    var i1, i2, product, forwards, backwards;

    for (i1 = min; i1 <= max; ++i1) {
        for (i2 = min; i2 <= max; ++i2) {
            product = i1 * i2;
            forwards = product.toString();
            backwards = forwards.split('').reverse().join('');
            if (forwards == backwards) {
                largest = Math.max(largest, product);
            }
        }
    }

    console.log(largest);

})(3);