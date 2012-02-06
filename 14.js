/*
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n -> n/2 (n is even)
 * n -> 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *
 * 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 *
 * It can be seen that this sequence (starting at 13 and finishing at 1)
 * contains 10 terms. Although it has not been proved yet (Collatz Problem),
 * it is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 *
 * From http://projecteuler.net/problem=14
 */
(function (maxStart) {

    var chain;
    var maxLength = 0;
    var longest;
    while (maxStart) {
        chain = new CollatzChain(maxStart--);
        if (chain.length > maxLength) {
            maxLength = chain.length;
            longest = chain;
        }
    }

    console.log('longest chain is', maxLength, 'started by', longest[0]);
    function CollatzChain(n, chain) {
        if (! chain) {
            chain = [];
        }
        chain.push(n);

        // if `1`, stop
        if (n === 1) {
            return chain;
        }
        // if even, divide by 2
        else if (n % 2 === 0) {
            return CollatzChain(n / 2, chain);
        }
        // if odd, multiply by 3, then add 1
        else {
            return CollatzChain((n * 3) + 1, chain);
        }
    }

})(1e6);