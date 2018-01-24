function rand7(){
  return Math.floor((Math.random() * 7) + 1);
}

function rand5() {
	let num = rand7();
	if (num === 6 || num === 7) return rand5()
	else return num;
}

console.log(rand5());