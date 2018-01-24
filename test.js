// x = 'a_b_c_d_e'
// y = 'a b c d e'
// z = 'a-b_c-d_e'

// console.log(z.split(/[_-]+/))
// let x = 2;
// var sum = [1, 2, 3].reduce(
//   function(total, num){
//   	console.log(total, num)
//   	return total + num
//   }
//   , 0);

// console.log(sum);

var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};

var greetCurried = function(greeting) {
  return (name) => {
    console.log(greeting + ", " + name);
  };
};

greetCurried("Hi there")("Howard"); //"Hi there, Howard"