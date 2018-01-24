// function sumAndProduct(sum, product) {
//   for (let i = 0; i <= sum / 2; i++) {
//     if (i * (sum - i) === product) return [i, (sum - i)];
//   }
//   return null;
// }

function sumAndProduct(sum, product) {
	if (product === 0) return [0, sum];
  let i = Math.floor(product / 2);
  while (i > 0) {
    if (product % i === 0) {
      if ((i + product / i) === sum ) return [i, product / i].sort();
    }
    i--;
  }
  return null;
}

console.log(typeof sumAndProduct(6, 9));
console.log(typeof []);