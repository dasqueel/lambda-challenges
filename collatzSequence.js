function collatzSequence(n) {
  let data = [n];
  const getData = (x) => {
    if (x % 2 === 0 ) {
      x /= 2;
      data.push(x);
      return getData(x);
    }
    if (x !== 1) {
      x = x * 3 + 1;
      data.push(x);
      getData(x);
    }
  }
  getData(n);
  return data;
}

/*

function collatzSequence(n) {
  let m = n;
  const arr = [m];
  while (m !== 1) {
    m = m % 2 === 0 ? m / 2 : m * 3 + 1;
    arr.push(m);
  }
  return arr;
}

*/

/*

let arr = [];
for (let i = n; i;  i = i % 2 === 0 ? i / 2 : i * 3 + 1) {
  arr.push(i);
  if (i === 1) return arr;
}

*/


console.log(collatzSequence(23));