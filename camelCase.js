const upper = (string) => { return string.charAt(0).toUpperCase() + string.slice(1); }

function toCamelCase(str) {
	let returnStr = '';
	str.split(/[_-]+/).forEach((word, i) => {
		if (i === 0) returnStr += word;
		else returnStr += upper(word);
	})
	return returnStr;
}

console.log(toCamelCase("The_Stealth_Warrior"))