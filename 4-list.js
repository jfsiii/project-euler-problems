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
    var products = rangeProducts(min, max);
    var palindromes = products.filter(isPalindrome);
    var largest = Math.max.apply(Math, palindromes);

    console.log(largest);

    function rangeProducts(min, max) {
        var products = [], i1, i2;
        for (i1 = min; i1 <= max; ++i1) {
            for (i2 = min; i2 <= max; ++i2) {
                products.push(i1 * i2);
            }
        }
        return products;
    }

    function isPalindrome(num) {
        var forwards = num.toString();
        var backwards = forwards.split('').reverse().join('');

        return forwards === backwards;
    }

})(3);