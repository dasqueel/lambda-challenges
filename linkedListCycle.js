// Preparation code:
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function hasCycle(head) {
// 	let visited = [];
// 	let node = head;
// 	while (node) {
// 		if (visited.includes(node.value)) {
// 			return true;
// 		}
// 		visited.push(node.value);
// 		node = node.next;
// 		// console.log(visited);
// 	}

// 	return false;
// }

function hasCycle(head) {
 if (head === null) return false;
 let fast = head.next;
 let slow = head;
 while (fast !== null && fast.next !== null) {
   if (fast === slow) {
     return true;
   }
   fast = fast.next.next;
   slow = slow.next;
 }
 return false;
}

const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');
console.log(hasCycle(nodeA)); // => false
nodeE.next = nodeB;
console.log(hasCycle(nodeA)); // => true