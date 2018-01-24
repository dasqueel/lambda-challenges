// how do you create a queue from using two stacks?
// since queues and stacks have opposite exiting,
// its like inversing or flipping the order of a queue or a stack to get the others order
// so we will while loop by removing one stack order to another, thus getting a queue order.
class Stack {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.unshift(val);
  }

  pop() {
    return this.storage.shift();
  }

  get size() {
    return this.storage.length;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    // invert or flip order only if stack2 is empty
    if (this.stack2.size === 0) {
      // invert the order of stack1 by popping off each value and pushing it into stack2
      while (this.stack1.size > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    // return psuedo ques first
    return this.stack2.pop();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
const val1 = queue.dequeue();
queue.enqueue(3);

const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log(val1, val2, val3);