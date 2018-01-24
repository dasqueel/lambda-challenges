function balancedBrackets(str) {
	const arr = str.split('');
	let stack = [];
	const open = ['(','{','['];
	const close = [')','}',']'];
	const correspond = {'}' : '{' , ')' : '(' , ']' : '['};

	for (let i = 0; i < arr.length; i++) {
		if (open.includes(arr[i])) {
			stack.push(arr[i]);
		}
		if (close.includes(arr[i])) {
			// console.log(stack, arr[i]);
			if (stack.length === 0) return false;
			if (stack.pop() !== correspond[arr[i]]) return false;
		}
	}
	if (stack.length > 0) return false;
	return true;
}

console.log(balancedBrackets('[](){}'));
console.log(balancedBrackets(')('));