// function getProduct(arr) {
// // 	const zeroCount = arr.reduce(function(n, val) {
// // 	    return arrLen + (val === 0);
// // 	}, 0);

// 	if (0 >= 2) return new Array(arr.length).fill(0);
//   const allProd = arr.reduce((prod, num) => { return prod * num; });
//   let prodsArr = arr.map(num => {
//   	if (num !== 0) allProd / num;
//   });
//   return prodsArr;
// }

function getProduct(arr) {
	let left = [];
	let right = [];
	let prod = [];

	const arrLen = arr.length;
	let i, j;

	/* Left most element of left array is always 1 */
	left[0] = 1;

	/* Rightmost most element of right array is always 1 */
	right[arrLen - 1] = 1;

	/* Construct the left array */
	for (i = 1; i < arrLen; i++)
		left[i] = arr[i - 1] * left[i - 1];
		// console.log(left);

	/* Construct the right array */
	for (j = arrLen - 2; j >= 0; j--)
		right[j] = arr[j + 1] * right[j + 1];
		// console.log(right);

	/* Construct the product array using
	left[] and right[] */
	for (i = 0; i < arrLen; i++)
		prod[i] = left[i] * right[i];

	return prod;

}

const x = [1, 9, 6, 5, 2];

console.log(getProduct(x));