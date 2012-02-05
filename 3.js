/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the num 600851475143 ?
 *
 * From http://projecteuler.net/problem=3
 */
(function (num) {

    function largestPrimeFactorOf(num) {
        var i = 2;

        for (; i <= num; i++) {
            if (num % i === 0) {
                num /= i--;
            }
        }

        return i;
    }

    var largest = largestPrimeFactorOf(num);
    console.log(largest);

})(600851475143);