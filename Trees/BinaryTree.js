// importing the Node.js way
let Node = require("./Node.js");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // insert(data)
  insert(data) {
    // create a new node and initialize it with data
    const newNode = new Node(data);

    // case 1: inserting into empty tree, ie. initializing root of
    // our new tree
    if (this.root === null) {
      this.root = newNode;
    }

    // case 2: a root exists, so we must figure out where to put our
    // node
    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // going down left side of tree
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }

    // going down right side of tree
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    // root is re-initializd with root of modified tree
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    // going down left side of tree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // going down right side of tree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // found the desired node, time to delete
    else {
      // case 1: leaf node (no children)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // case 2: parent has 1 child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // case 3: parent has 2 children
      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // Helper functions
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (null != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left.data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}
