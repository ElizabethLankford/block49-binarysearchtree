// 1. Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. Invoke the inorder function to check the output [4,2,5,1,3].
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let current = null;
function inOrder(current) {
  if (current == null) {
    return;
  }

  let stack = [];
  let result = [];

  while (current !== null || stack.length) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.data);
    current = current.right;
  }
  return result;
}

current = new Node(1);
current.left = new Node(2);
current.right = new Node(3);
current.left.left = new Node(4);
current.left.right = new Node(5);

console.log("Question 1:", inOrder(current));

// 2. Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. This function checks two binary trees and tells if they are the same or not. Test your function by making two binary trees and comparing them. For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise.

function isSameTree(tree1, tree2) {
  if (tree1 == null && tree2 == null) {
    return true;
  } else if (tree1 != null && tree2 == null) {
    return false;
  } else if (tree1 == null && tree2 != null) {
    return false;
  } else {
    if (
      tree1.data == tree2.data &&
      isSameTree(tree1.left, tree2.left) &&
      isSameTree(tree1.right, tree2.right)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
let firstTree = new Node(1);
let secondTree = new Node(1);
firstTree.left = new Node(2);
firstTree.right = new Node(3);
firstTree.left.left = new Node(4);
firstTree.left.right = new Node(5);

secondTree.left = new Node(2);
secondTree.right = new Node(3);
secondTree.left.left = new Node(4);
secondTree.left.right = new Node(5);
if (isSameTree(firstTree, secondTree)) {
  console.log("Question 2: Same Tree");
} else {
  console.log("Question 2: Not Same Tree");
}

// 3. Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. For complete trees, it uses the formula 2^h - 1. Verify the function using a given root tree. For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.

function countNodes(tree) {
  if (tree === null) {
    return 0;
  }
  let leftNodes = countNodes(tree.left);
  let rightNodes = countNodes(tree.right);

  return leftNodes + rightNodes + 1;
}

let root = new Node(10);
root.left = new Node(11);
root.right = new Node(12);
root.left.left = new Node(13);
root.left.right = new Node(14);
root.right.left = new Node(15);
root.right.right = new Node(16);

console.log("Question 3:", countNodes(root));

// 4. Find the leftmost value in the last row of a binary tree with distinct node values. Use the TreeNode class, which defines a node's structure. Implement the 'searchBottomLeftValue(root)' function, taking the root of the binary tree as input. This function should return the value of the leftmost node in the last row of the tree. Test your function by using a binary tree with nodes [2,1,3,4,5,6] as input. The 'searchBottomLeftValue(root)' function should then return an output of 6.
class NodeWithDepth {
  constructor(node, depth) {
    this.node = node;
    this.depth = depth;
  }
}

function searchBottomLeftValue(root) {
  if (root == null) {
    return;
  }
  let stack = [];
  let answer = null;
  stack.push(new NodeWithDepth(root, 0));
  while (stack.length !== 0) {
    let current = stack.shift();
    let node = current.node;
    let depth = current.depth;

    if (!node.left && !node.right) {
      if (!answer || depth > answer.depth) {
        answer = node;
      }
    }

    if (node.left != null) {
      stack.push(new NodeWithDepth(node.left, depth + 1));
    }
    if (node.right != null) {
      stack.push(new NodeWithDepth(node.right, depth + 1));
    }
  }
  return answer.data;
}

let treeRoot = new Node(2);
treeRoot.left = new Node(1);
treeRoot.right = new Node(3);
treeRoot.left.left = new Node(4);
treeRoot.right.left = new Node(5);
treeRoot.right.left.left = new Node(6);

console.log("Question 4:",searchBottomLeftValue(treeRoot));
