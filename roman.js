/*

just conitually subtract down until getting to 0

then figure out to use subtraction or just additino letters for values e.x. IV, not IIII, for 4

*/

function romanNumeralize(number) {
// there is no reverse order k,v in an object method
// so you have to create the k,v pairs in greatest to least order
// the pattern for handling the goofy rule of when to use subtraction
// is when you get one less of the prior numeral spot e.x. IV, not IIII, for 4
// and CD no CCCC for 400
	const numerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	}

  // the string we return and build the roman valuation for
	let romanStr = '';

	for (let k in numerals) {
		// console.log(k);
		// if the numeral value is less than the number looking for
		// add the roman numeral to romanStr and decrement its value
		// do this until reaching 0
		while (numerals[k] <= number) {
			number -= numerals[k];
			romanStr += k;
		}
	}
	return romanStr;
}


console.log(romanNumeralize(4));
console.log(romanNumeralize(745));
console.log(romanNumeralize(209));
console.log(romanNumeralize(1991));
console.log(romanNumeralize(999));