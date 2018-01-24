// function primeList(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i ++) {
//  if (i === 1 || i === 2) {
//    arr.push(i);
//  }
//  else if (i % 2 !==0 && i % 3 !== 0 && i % 5 !== 0 && i % 5 !== 5) arr.push(i);
//   }
//   return arr;
// }

// console.log(primeList(1,20))

function primeList(start, end) {
    // Eratosthenes algorithm to find all primes under n
    var array = []; // an array of booleans describing if the indexed value is a prime
    upperLimit = Math.sqrt(end);
    primesArray = [];

    // Make an array from 2 to (n - 1)
    for (var i = start; i < end; i++) {
      array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        for (var j = i * i; j < end; j += i) {
          array[j] = false;
        }
      }
    }

    // All array[i] set to true are primes
    for (var i = start; i < end; i++) {
      if(array[i]) {
        primesArray.push(i);
      }
    }

    return primesArray;
};

console.log(primeList(1,20))
