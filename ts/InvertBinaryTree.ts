// Given the root of a binary tree, invert the tree, and return its root.

// Recursivity.

// Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

function invertTree(root: TreeNode | null): TreeNode | null {
    // Is there a node?
    if (root === null) {
        return null;
    }

    // We do the swap
    let temp = root?.left;
    root.left = root?.right;
    root.right = temp;

    // Call for the rest of the children
    invertTree(root.left);
    invertTree(root.right);

    // Return the inverted root
    return root;
};

let root = new TreeNode(2, new TreeNode(6, new TreeNode(7), new TreeNode(9)), new TreeNode(4, new TreeNode(5), new TreeNode(1)));
console.log(root);
console.log(invertTree(root));