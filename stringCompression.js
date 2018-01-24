function stringCompression(str) {
	let tally = str.split('').reduce((tally, char) => {
		tally[char] = (tally[char] || 0) + 1;
		return tally;
	}, {})

	let compressStr = '';
	for (let [key, value] of Object.entries(tally)) {
		compressStr = `${compressStr}${key}${value}`
	}

	return str.length <= compressStr.length ? str : compressStr
}

console.log(stringCompression('abcaaabbddddcd'));