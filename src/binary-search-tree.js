const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
    console.log(this.root);
  }
  root() {
    return this.root;
  }

  add(data) {
    if (!node) {
      this.root = new Node(data);
      return this.root;
    }

    if (node.value === value) {
      return node;
    }

    if (node.value > value) {
      node.left = new Node(data);
      return node.left;
    }

    if (node.value < value) {
      node.right = new Node(data);
      return node.right;
    }
    return node;
  }

  has(data) {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (node.value > value) {
      node.left = new Node(data);
      return node.left;
    }

    if (node.value < value) {
      node.right = new Node(data);
      return node.right;
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    if (!node) {
      return null;
    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};