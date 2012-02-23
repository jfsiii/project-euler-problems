/*
 * A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,
 * a^2 + b^2 = c^2
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 * From http://projecteuler.net/problem=9
 */
(function (sum) {

	while (sum--) {
		console.log(sum, primitiveTriple(sum, 1));
	}

	function primitiveTriple(m, n) {
		console.log("\t%d %d", m, n);
		var a = (m * m) - (n * n);
		var b = 2 * m * n;
		var c = m * m + n * n;

		return [a, b, c];
	}

})(50);