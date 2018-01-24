function isArmstrongNumber(n) {
  const len = n.toString().length;
  let intNumArr = n.toString().split('').map(num => parseInt(num));
  let poweredSum = intNumArr.reduce((sum, value) => sum + value ** len, 0);
  if (n === poweredSum) return true;
  return false;
}

console.log(isArmstrongNumber(153));