function chainedFunctions(arr){
  return (x) => {
  	arr.forEach((func) => {
			x = func(x);
  });
  	return x;
	}
}

function times2(x){ return 2 * x; }
function times9(x){ return 9 * x; }
function times11(x){ return 11 * x; }
function subtract3(x){ return x - 3; }
console.log(chainedFunctions([times11,subtract3])(10));

// return (x) => {
// 	arr.forEach((func) => {
// 		x = func(x);
// 	});
// 	return x;
// }