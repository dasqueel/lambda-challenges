/*

const findBinaryPlace = (n) => {
	if (n === 1) return 0;
	let place = 0;
	while (n > 2 ** place) {
		place++;
	}
	return place - 1;
}

function toBinaryString(number) {

	// return findBinaryPlace(number);
	let binaryStr = '';
	let onesPlaces = [];
	let findPlaces = (n) => {
		while (n > 0) {
			const newPlace = findBinaryPlace(n);
			onesPlaces.push(newPlace);
			n -= 2 ** newPlace;
		}
		// return onesPlaces;
	}
	findPlaces(number);
	let start = onesPlaces[0];
	while (start >= 0) {
		if (onesPlaces.includes(start)) {
			binaryStr = `1${binaryStr}`;
		}
		else binaryStr = `0${binaryStr}`;
		start--;
	}
	return binaryStr;
}

*/

function toBinaryString(number) {
	let biStr = '';
	while (number > 0) {
		biStr = `${number % 2}${biStr}`;
		number = Math.floor(number / 2);
	}

	return biStr;
}



console.log(toBinaryString(8))