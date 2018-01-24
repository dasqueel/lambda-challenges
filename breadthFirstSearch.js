function breadthFirstSearch(tree, searchTerm) {
	let queue = Object.values(tree);

	while (queue.length > 0) {
		let val = queue.unshift();
		if (val === searchTerm) return true;
		if (typeof val === 'object') {
			queue.concat(Object.values(val));
		}
	}
	return false;
}

const tree = {
 x: 1,
 y: 1,
 z: {
	x: 1,
	y: 1,
	z: 1,
 	},
 a: 2,
};