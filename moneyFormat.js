function moneyFormat(float) {
  // round the number
  roundStr = float.toFixed(2).toString();

  periodIdx = roundStr.indexOf('.') - 1;

  const decimalStr = roundStr.substring(periodIdx + 1);

  let finalStr = '';
  let count = 1;
  while (periodIdx >= 0) {
  	let char = roundStr.charAt(periodIdx);
  	if (count % 3 === 1) finalStr = `${char} ${finalStr}`;
  	else finalStr = `${char}${finalStr}`;
  	periodIdx--;
  	count++;
  }

  return `${finalStr.trim()}${decimalStr}`;
}

console.log(moneyFormat(2310000.159897));
console.log(moneyFormat(12345678.895));