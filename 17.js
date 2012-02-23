/*
 * If the numbers 1 to 5 are written out in words: one, two, three, four,
 * five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains
 * 20 letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 *
 * From http://projecteuler.net/problem=17
 */
(function (max) {

    var words = [];
    var phrase;
    for (var num = 1; num <= max; ++num) {
        phrase = number2Words(num);
        words = words.concat(phrase.split(' '));
    }
    var total = words.reduce(function (previous, current) {
        return previous + current.length;
    }, 0);
    console.log(total);

    // internal functions
    function number2Words(number) {
        if (! number2Words.wordsMap) {
            number2Words.wordsMap = {
                1: 'one',
                2: 'two',
                3: 'three',
                4: 'four',
                5: 'five',
                6: 'six',
                7: 'seven',
                8: 'eight',
                9: 'nine',
                10: 'ten',
                11: 'eleven',
                12: 'twelve',
                13: 'thirteen',
                14: 'fourteen',
                15: 'fifteen',
                16: 'sixteen',
                17: 'seventeen',
                18: 'eighteen',
                19: 'nineteen',
                20: 'twenty',
                30: 'thirty',
                40: 'forty',
                50: 'fifty',
                60: 'sixty',
                70: 'seventy',
                80: 'eighty',
                90: 'ninety',
                100: 'hundred',
                1e3: 'thousand',
                1e6: 'million',
                1e9: 'billion',
                1e12: 'trillion',
                1e15: 'quadrillion'
            };
        }

        var map = number2Words.wordsMap;

        // 1234567890 -> '1234567890'
        var segments = number.toString()
            // '1234567890' -> '1,234,567,890'
            .replace(/\B(?=(\d{3})+$)/g, ",")
            // '1,234,567,890' -> ['1', '234', '567', '890']
            .split(',');

        var words = segments
            // ['1', '234', '567', '890'] -> ['890', '567', '234', '1']
            // reversed so we can use the index to determine the power of 10
            .reverse()
            // walk through reversed segments
            .map(function (segment, index, segments) {

                var segmentWords = [];

                // reverse the segment (`123` -> `321`) to ensure position
                // `0` is ones, `1` is tens and `2` is hundreds
                var segmentParts = segment.toString().split('').reverse();

                // ~~ (bitwise NOT NOT) is a faster `Math.floor`
                // The only drawback (legibility aside) is with numbers with
                // more than 9 digits. That's not an issue here.
                var ones = ~~segmentParts[0];
                var tens = ~~segmentParts[1];
                var hundreds = ~~segmentParts[2];

                // work through the positions in order
                if (hundreds) {
                    segmentWords.push(map[hundreds], map[100]);
                    // need 'and' for the British requirement
                    if (tens || ones) {
                        segmentWords.push('and');
                    }
                }

                // `eleven`, `twelve`, teens ...
                if (tens === 1) {
                    // `'' + tens + ones` -> `'10'` ... `'19'`
                    segmentWords.push(map['' + tens + ones]);
                }
                // `twenty`, `thirty`, etc
                else if (tens) {
                    segmentWords.push(map[tens*10]);
                }

                // `fourty two` is ok
                // `twelve two` or `ten two` is not
                if (tens !== 1 && ones) {
                    segmentWords.push(map[ones]);
                }

                // add `hundred`, `thousand`, `million`, etc
                if (index) {
                    segmentWords.push(map[Math.pow(10, index*3)]);
                }

                return segmentWords.join(' ');
            });


        var phrase = words
            // restore correct order
            .reverse()
            // create phrase
            .join(' ');

        return phrase;
    }

})(1000);