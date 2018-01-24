/*

use a mathematical trickey
do math calcuations to number to essentially pop off last number
normal intuition might lead you to split the integer and run a reverse method

this approach apparently has O(log(n)) which is tasty

the idea is to divide n by 10 until you get to zero, (division only accepting quotient)
pop off the remainder (using modulo) and times the previous reverseNum holder by 10 and add the quotient

*/
function reverseNumber(n) {
  let revNum = 0;
  while (n > 0) {
    revNum = revNum*10 + n%10;
    n = Math.floor(n/10);
  }
  return revNum;
}

console.log(reverseNumber(4562));