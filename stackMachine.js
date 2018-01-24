// if found a + or *, pop off two elements on stack and perform math
// push the result onto the stack
// function stackMachine(str) {
// 	let strstack = str.split('').map();
// 	// console.log(strstack);
// 	// let stack = [strstack.shift()];
// 	let stack = [];
// 	console.log(stack);

// 	while(strstack.length > 0) {
// 		// stack.push(strstack.shift());
// 		let char = strstack.shift();
// 		if (char === '*') {
// 			// do math
// 			const int1 = stack.pop();
// 			const int2 = stack.pop();

// 			stack.push(int1 * int2);
// 		}
// 		if (char === '+') {
// 			// do math
// 			const int1 = stack.pop();
// 			const int2 = stack.pop();

// 			stack.push(int1 + int2);
// 		} else stack.push(char);

// 	}
// 	console.log(stack);
// }

function stackMachine(str) {
	let err = false;
	let stack = [];
	const ops = {
	  '*': (x, y) => +x * +y,
	  '+': (x, y) => (+x) + (+y),
	};
	for (let i = 0; i < str.length; i++) {
	  if (err) i = str.length;
	  if (!ops[str[i]]) stack.push(str[i]);
	  else {
	    if (stack.length < 2) err = true;
	    stack.push(ops[str[i]](stack.pop(), stack.pop()));
	  }
	}
	return err ? -1: stack[stack.length - 1];
}

console.log(stackMachine("13+62*7+*"));