function expandedNums(num) {
	let returnStr = '';
	let numsPlace = 1;
	while (num > 0) {
		if (num % 10 !== 0) {
			returnStr = `+ ${(num % 10) * numsPlace} ${returnStr}`;
		}
		num = Math.floor(num / 10);
		numsPlace = numsPlace * 10;
	}
	return returnStr.replace('+ ', '').trim();
}

console.log(expandedNums(504480))