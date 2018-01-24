function routeBetweenNodes(node1, node2) {
	let visited = {};
	let queue = [node1];

	const traverse = (node) => {
		if (visited[node.value]) return;
		else {
			visited[node.value] = true;
			queue = queue.concat([...node.edges])
		}
	}

	while (queue.length > 0) {
		if (visited[node2.value] === true) return true;
		traverse(queue.shift())
	}
	return false;
}

const graph = {
  a: {
    value: 'a',
    edges: []
  },
  b: {
    value: 'b',
    edges: []
  },
  c: {
    value: 'c',
    edges: []  },
  d: {
    value: 'd',
    edges: []
  },
  e: {
    value: 'e',
    edges: []
  },
};

graph.a.edges.push(graph.b, graph.d, graph.e);
graph.b.edges.push(graph.a, graph.e);
graph.d.edges.push(graph.e);
graph.e.edges.push(graph.c, graph.a);
// breadthFirstSearch(graph)
// console.log(graph.a.edges)
console.log(routeBetweenNodes(graph.a, graph.c)); // true
console.log(routeBetweenNodes(graph.c, graph.a)); // false