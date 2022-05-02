const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let list = new ListNode(value);
    console.log(list);

    if (this.head === null && this.tail === null) {
      this.head = list;
      this.tail = this.head;
      console.log(this);
      
    } else {
      this.tail.next = list;
      this.tail = this.tail.next;
      console.log(this);

    }
    return this;
  }

  dequeue() {
    if (this.head !== null) {
    let queueOut = this.head.value;
    this.head = this.head.next;
    console.log(queueOut);
    return queueOut;
    }
  }
}

module.exports = {
  Queue
};
