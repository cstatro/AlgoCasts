// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(datum) {
    const newNode = new Node(datum);
    this.children = [...this.children, newNode];
  }
  remove(datum) {
    this.children = this.children
      .map(n => (n.data === datum ? null : n))
      .filter(n => !!n);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let processArr = [this.root];
    while (processArr.length > 0) {
      fn(processArr[0]);
      processArr = [...processArr, ...processArr[0].children];
      processArr.shift();
    }
  }
  traverseDF(fn) {
    let processArr = [this.root];
    while (processArr.length > 0) {
      const first = processArr.shift();
      fn(first);
      processArr = [...first.children, ...processArr];
    }
  }
}

module.exports = { Tree, Node };
