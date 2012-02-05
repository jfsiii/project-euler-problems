/*
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 *
 * From http://projecteuler.net/problem=10
 */
(function (max) {

    var primes = primeList(max);
    var sum = primes.reduce(function (previous, current) {
        return previous + current;
    });

    console.log(sum);

    // internal functions
    // from problem 7
    // `primeList` tweaked for max value not max length
    function primeList(max) {

        var list = [2, 3];

        // avoid testing multiples of 2 and 3 by starting at 5 and
        // incrementing, alternately, by 2 and 4:
        // 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37 ...
        var test = 5;

        // increment, alternately, by these values
        var increment = [2, 4];

        // `false` to start with the first value
        // `true` to start with the second value
        var alternate = false;

        while (test <= max) {
            if (isPrime(test)) {
                list.push(test);
            }

            // `+` casts `false` to `0` and `true` to `1`
            test += increment[+alternate];

            // toggle to the other value (true => false, false => true)
            alternate = !alternate;
        }

        return list;
    }

    function isPrime(number) {

        if (number > 3) {
            // divisible by 2
            if (number % 2 === 0) return false;

            // divisible by 3
            if (number % 3 === 0) return false;

            var limit = Math.sqrt(number) + 1;

            // avoid testing multiples of 2 and 3 by starting at 5 and
            // incrementing, alternately, by 2 and 4:
            // 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37 ...
            var test = 5;

            // increment, alternately, by these values
            var increment = [2, 4];

            // `false` to start with the first value
            // `true` to start with the second value
            var alternate = false;

            while (test < limit) {
                if ( (number % test) === 0) return false;

                // `+` casts `false` to `0` and `true` to `1`
                test += increment[+alternate];

                // toggle to the other value (true => false, false => true)
                alternate = !alternate;
            }
        }
        else if (number < 2) {
            return false;
        }

        return true;
    }
})(2e6);