function equalSides(arr) {
	let leftSum = arr[0];
	let rightSum = arr.slice(2, arr.length).reduce(function(total, current) { return total + current; }, 0);

	for (let i = 1; i < arr.length; i++) {
		let fulcrumVal = arr[i];

		if (leftSum === rightSum) return i;

		// update left and right sums with fulcrum val
		leftSum += fulcrumVal;
		rightSum -= arr[i + 1];
	}
	return -1;
}



console.log(equalSides([1,2,3,4,5,6]))
console.log(equalSides([1, 2, 3, 4, 3, 2, 1]))