const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.base = null
  }

  root() {
    return this.base
  }

  add(data) {
    const newNode = new Node(data)
    if (!this.base) {
      this.base = newNode
      return
    }

    let currentNode = this.base
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  has(data, current = this.base) {
    if (current == null) return false
    if (data == current.data) return true
    if (data < current.data) return this.has(data, current.left)
    return this.has(data, current.right)
  }

  find(data, current = this.base) {
    if (current == null || data == current.data) return current
    if (data < current.data) return this.find(data, current.left)
    return this.find(data, current.right)
  }

  // remove(data, current = this.base) {
  //   if (current == null) return current
  //   if (data < current.data) {
  //     current.left = this.remove(data, current.left)
  //   } else if (data > current.data) {
  //     current.right = this.remove(data, current.right)
  //   } else if (current.left != null && current.right != null) {
  //     current.data = this.min(current.right).data
  //     current.right = this.remove(current.data, current.right)
  //   } else {//здесь вроде бы все ок
  //     if (current.left != null) {
  //       current.data = current.left.data
  //     } else if (current.right != null) {
  //       current.data = current.right.data
  //     } else current.data = null
  //   }
  //   return current
  // }

  remove(data) {
    this.base = removeBase(this.base, data)

    function removeBase(current, data) {
      if (current == null) return current

      if (data < current.data) {
        current.left = removeBase(current.left, data)
        return current
      } else if (data > current.data) {
        current.right = removeBase(current.right, data)
        return current
      } else {
        if (current.left == null && current.right == null) {
          return null
        }
        if (current.left == null) {
          current = current.right
          return current
        }
        if (current.right == null) {
          current = current.left
          return current
        }
        let minRight = current.right
        while (minRight.left) {
          minRight = minRight.left
        }
        current.data = minRight.data
        current.right = removeBase(current.right, minRight.data)

        return current
      }

    }
  }

  min(current = this.base) {
    if (current.left == null) return current.data
    return this.min(current.left)
  }

  max(current = this.base) {
    if (current.right == null) return current.data
    return this.max(current.right)
  }
}

module.exports = {
  BinarySearchTree
};