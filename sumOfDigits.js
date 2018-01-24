function sumOfDigits(n) {
	return n.toString().split('').reduce((sum, val) => sum + parseInt(val), 0);
}

console.log(sumOfDigits(546));