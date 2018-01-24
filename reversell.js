class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// change the pointer to point to previous node
function reverseList(node) {
  // edge case for acting on an empty or single node linked list
  if (node === null || node.next === null) return node;
  // save a reference of the previous node
  // while there is a node loop through it
  let previous;
  let current = node;
  while (current) {
    // reference holder to store later
    let tmpNext = current.next;
    // swith the link pointer to the previous
    current.next = previous;
    // now previous is the current, so when we move onto the next node
    previous = current;
    // now current will equal the tmp next holder value
    current = tmpNext;
  }
  // return the null tail node
  return previous;
}

