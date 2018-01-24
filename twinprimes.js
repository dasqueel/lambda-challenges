/*

do a primality test on target number

if target number is prime

check if target number +/- 2 is prime as well

if one is, return true

*/

// function isTwinPrime(n) {
//   function isPrime(x) {
//     for (let i = 0; i <= Math.sqrt(x); i++) {
//       if (x % i === 0) return false;
//     }
//     return x >= 2;
//   }
//   return (isPrime(n) && isPrime(n-2) || isPrime(n+2));
// }
// console.log(isTwinPrime(7));


function isTwinPrime(n) {
  function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return x >= 2;
  }
  return (isPrime(n) && (isPrime(n-2) || isPrime(n+2)));
}

for (let i = 0; i < 101; i++) {
    console.log(i, isTwinPrime(i));
}
// for (let i = 0; i < 101; i++) {
// 	console.log(i, isTwinPrime(i));
// }

// console.log(isTwinPrime(9));
// Array.from(new Array(100), (x,i) => {
// 	console.log(i, isTwinPrime(i));
// });


// console.log(isTwinPrime(9));