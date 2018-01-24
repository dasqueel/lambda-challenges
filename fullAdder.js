function NAND(x, y) {
  return (!x || !y);
}

// function XOR(x, y) {
// 	// return !(x === y);
// 	nand1 = NAND(x, y);
// 	nand2 = NAND(x, nand1);
// 	nand3 = NAND(nand1, y);
// 	return NAND(nand2, nand3);
// }

function AND(x, y) {
	return NAND(NAND(x, y), NAND(x, y));
}

function XOR(x, y) {
	return NAND(NAND(x, NAND(x, y)), NAND(NAND(x, y), y));
}

// console.log(XOR(0, 1))

// console.log(AND(1, 1));

function halfAdder(x, y) {
	const sum = XOR(x, y);
	const carry = AND(x, y);
	return [sum, carry];
}

// console.log(halfAdder(1, 1));

function fullAdder(a, b, cin) {
	const ha1 = halfAdder(a, b);
	const ha2 = halfAdder(ha1[0], cin);
	const cout = XOR(ha1[1], ha2[1])

	return [ha2[0], cout]
}

// console.log(fullAdder(0, 0, 0))

function fullAdder4(a,b) {
	const fa1 = fullAdder(a[3], b[3], 0);
	const fa2 = fullAdder(a[2], b[2], fa1[1]);
	const fa3 = fullAdder(a[1], b[1], fa2[1]);
	const fa4 = fullAdder(a[0], b[0], fa3[1]);

	return [fa4[1], fa4[0], fa3[0], fa2[0], fa1[0]];
}

console.log(fullAdder4([true,true,false,true], [true,true,true,true]))



