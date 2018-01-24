// loop through range
// if i is prime, do reduction check
// if so, increment number of ints that have that property

function range(start, end, step) {
  var _end = end || start;
  var _start = end ? start : 0;
  var _step = step || 1;
  return Array((_end - _start + 1) / _step).fill(0).map((v, i) => _start + (i * _step));
}

const isPrime = num => {
	for(let i = 2, s = Math.sqrt(num); i <= s; i++)
		if(num % i === 0) return false;
	return num !== 1;
}

const reductionTest = num => {
	// check if sum of digits squred equals 1
	let doesReduce = false;
	let tries = 0;
	const sumDigitSquares = n => {
		while (tries < 30) {
			let sum = n.toString().split('').reduce((sum, val) => sum + val**2, 0);
			if (sum === 1) {
				doesReduce = true;
			};
			tries++;
			sumDigitSquares(sum);
		}
	}
	sumDigitSquares(num);
	return doesReduce;
}

function primeReduction(a, b) {
	let count = 0;
	range(a, b).forEach(num => {
		if (isPrime(num)) {
			if (reductionTest(num)) count++;
		}
	})
	return count;
}

console.log(primeReduction(1, 25));





