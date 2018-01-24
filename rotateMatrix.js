function rotateImage(arr) {
	// let rotatedMatrix = [];
	// let rotatedMatrix = Array.from({
 //    length: arr.length
 //  }, () => new Array(n).fill(0));
	// console.log(rotatedMatrix);
	arr = arr.map(row => row.reverse());

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			let temp = arr[i][j];
			arr[i][j] = arr[j][i];
			arr[j][i] = temp;
		}
	}
	return arr;
}

x = [
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
  ];

  console.log(rotateImage(x));