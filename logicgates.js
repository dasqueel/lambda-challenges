function NAND(x, y) {
	// You can use whatever JS operators that you would like: &&, ||, !
	if (x === 1 && y === 1) return 0;
  return 1;
}

function NOT(n) {
	// Do not use !
  if (n === 0) return 1;
  if (n === 1) return 0;
}

function AND(x, y) {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
  if (NOT(x) === 1) return 0;
  if (NOT(y) === 1) return 0;
  return 1;
}

function OR(x, y) {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  if (NOT(x) === 0) return 1;
  if (NOT(y) === 0) return 1;
  return 0;
}

function XOR(x, y) {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  if (NOT(x) === y) return 1;
  return 0;
}
