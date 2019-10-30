// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    return previous;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    this.head = this.head.next;
  }
  removeLast() {
    let current = this.head;
    let previous = null;
    if (current && !current.next) {
      this.head = null;
    } else {
      while (current) {
        if (current.next) {
          previous = current;
          current = current.next;
        } else {
          current = null;
          previous.next = null;
        }
      }
    }
  }

  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(num) {
    let index = 0;
    let current = this.head;
    while (index < num && current) {
      current = current.next;
      index++;
    }
    return current;
  }
  removeAt(num) {
    const size = this.size();
    if (size > 1 && num < size - 1 && num != 0) {
      const before = this.getAt(num - 1);
      before.next = this.getAt(num + 1);
    } else if (num === size - 1) {
      this.removeLast();
    } else if (num === 0 && size != 0) {
      this.removeFirst();
    } else if (num > size - 1) {
      return;
    }
  }

  insertAt(data, num) {
    const size = this.size();
    if (num === 0) {
      this.insertFirst(data);
    } else if (num >= size - 1) {
      this.insertLast(data);
    } else if (num < size - 1) {
      const current = this.getAt(num);
      const before = this.getAt(num - 1);
      const newNode = new Node(data, current);
      before.next = newNode;
    }
  }
  forEach(callback) {
    let current = this.head;
    while (current) {
      const next = current.next;
      current = callback(current);
      current = next;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
