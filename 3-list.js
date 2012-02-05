/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the num 600851475143 ?
 *
 * From http://projecteuler.net/problem=3
 */
(function (num) {

    function primeFactorsOf(num) {
        var i = 2;
        var primeFactors = [];

        for (; i <= num; i++) {
            if (num % i === 0) {
                primeFactors.push(i);
                num /= i--;
            }
        }

        return primeFactors;
    }

    var primeFactors = primeFactorsOf(num);
    var largest = Math.max.apply(Math, primeFactors);
    console.log(largest);

})(600851475143);