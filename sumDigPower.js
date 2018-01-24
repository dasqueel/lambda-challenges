const powerCheck = num => {
	const sum = num.toString().split('').reduce((sum, val, i) => sum + parseInt(val)**(i + 1), 0);
	return sum === num ? true : false;
}

function sumDigPower(a, b) {
	const range = Array.apply(null, Array(b - a + 1)).map(function (_, i) {return i + a;});
	return range.filter(i => powerCheck(i) === true )
}

sumDigPower(100,154)
// console.log(powerCheck(136))
