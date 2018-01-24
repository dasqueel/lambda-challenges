const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

const factorial = (num) => {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// function telephoneWords(str) {
//   let words = [];
//   let digits = str.split('').map(dig => parseInt(dig));
//   let zeroOnesCounter = digits.reduce((count, digit) => {
//     if (digit === 0 || digit === 1) {
//       return count + 1;
//     }
//     return count + 0;
//   }, 0)

//   // const perms = factorial(4 - zeroOnesCounter);
//   // console.log(perms);
//   // console.log(zeroOnesCounter);

// }

function telephoneWords(str) {
  const words = [];
  function createWord(word, index) {
    if(word.length === str.length) {
      words.push(word);
      return;
    }
    // console.log(index, word)
    const numLetters = phoneDigitsToLetters[str[index]];
    for (let i = 0; i < numLetters.length; i++) {
      // console.log(numLetters)
      createWord(word + numLetters[i], index + 1);
    }
  }
  createWord('', 0);
  return words;
}


telephoneWords('2347')