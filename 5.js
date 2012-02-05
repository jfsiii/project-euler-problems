/*
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 *
 * From http://projecteuler.net/problem=5
 */
(function (min, max) {

    var test = max;
    // nothing is divisible by 0
    // everything is divisible by 1
    if (min === 0 || min === 1) {
        min = 2;
    }
    var range = new Range(min, max);

    for (var i = 0, l = range.length, divisor; i < l;) {
        divisor = range[i];

        if (test % divisor === 0) {
            ++i;
        }
        else {
            i = 0;
            ++test;
        }
    }

    console.log(test);
    function Range(min, max) {
        var range = [];
        var i = min;
        for (; i <= max; ++i) {
            range.push(i);
        }

        return range;
    }

})(1, 20);