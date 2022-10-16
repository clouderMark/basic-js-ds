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
    this.base = null
  }

  getUnderlyingList() {
    return this.base
  }

  enqueue(value) {
    console.log(value)
    const newListNode = new ListNode(value)

    if (!this.base) {
      this.base = newListNode
      return
    }
    let currentNode = this.base
    while (currentNode) {
      if (!currentNode.next) {
        currentNode.next = newListNode
        return
      }
      currentNode = currentNode.next
    }
  }

  dequeue() {
    let root = this.base.value
    nextValue(this.base)
    function nextValue(i) {
      i.value = i.next.value
      if (!i.next.next) {
        i.next = null
        return
      }
      return nextValue(i.next)
    }
    return root
  }
}

module.exports = {
  Queue
};
